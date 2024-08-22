import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import { getUserFromLocalStorage } from "../../utils/LocalStorage";
import { logoutUser } from "../user/userSlice";
import { createJobThunk, deleteJobThunk, editJobThunk } from "./jobThunk";

const initialState = {
  isLoading: false,
  position: "",
  company: "",
  jobLocation: "",
  jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
  jobType: "full-time",
  statusOptions: ["interview", "declined", "pending"],
  status: "pending",
  isEditing: false,
  editJobId: "",
};

export const deleteJob = createAsyncThunk("job/deleteJob", deleteJobThunk);

export const createJob = createAsyncThunk("job/createJob", createJobThunk);

export const editJob = createAsyncThunk("job/editJob", editJobThunk);

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    clearValues: () => {
      return {
        ...initialState,
        jobLocation: getUserFromLocalStorage()?.location || "",
      };
    },
    setEditJob: (state, { payload }) => {
      return { ...state, isEditing: true, ...payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createJob.pending, (state) => {
        state.Loading = true;
      })
      .addCase(createJob.fulfilled, (state) => {
        state.Loading = false;
        toast.success("Job created");
      })
      .addCase(createJob.rejected, (state, { payload }) => {
        state.Loading = false;
        toast.error(payload);
      })
      .addCase(deleteJob.fulfilled, (state, { payload }) => {
        toast.success(payload);
      })
      .addCase(deleteJob.rejected, (state, { payload }) => {
        toast.error(payload);
      })
      .addCase(editJob.pending, (state) => {
        state.Loading = true;
      })
      .addCase(editJob.fulfilled, (state) => {
        state.Loading = false;
        toast.success("Job Modified...");
      })
      .addCase(editJob.rejected, (state, { payload }) => {
        state.Loading = false;
        toast.error(payload);
      });
  },
});

export const { handleChange, clearValues, setEditJob } = jobSlice.actions;
export default jobSlice.reducer;
