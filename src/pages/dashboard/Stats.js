import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showStats } from "../../features/alljobs/allJobsSlice";
import { ChartsContainer, StatsContainer } from "../../components";

function Stats() {
  const { isLoading, monthlyApplications } = useSelector(
    (store) => store.allJobs
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showStats());
  }, []);
  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  );
}

export default Stats;
