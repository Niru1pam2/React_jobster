import React from "react";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Job";
import { useDispatch } from "react-redux";
import JobInfo from "./JobInfo";
import dayjs from "dayjs";
import { deleteJob } from "../features/job/jobSlice";

function Job({ _id: id, position, company, jobLocation, createdAt, status }) {
  const dispatch = useDispatch();

  const date = createdAt;
  const formattedDate = dayjs(date).format("MMM D, YYYY");

  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
          <JobInfo icon={<FaBriefcase />} text={position} />
          <JobInfo icon={<FaCalendarAlt />} text={formattedDate} />
          <div className={`status ${status}`}>{status}</div>
        </div>
        <footer>
          <div className="actions">
            <Link
              to="/add-job"
              className="btn edit-btn"
              onClick={() => console.log("edit job")}
            >
              Edit
            </Link>
            <button
              type="button"
              className="btn delete-btn"
              onClick={() => dispatch(deleteJob(id))}
            >
              Delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
}

export default Job;
