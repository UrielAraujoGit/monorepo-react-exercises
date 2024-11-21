import { useState } from "react";
import { CardJob } from "../card-job/card-job";
import { TJob } from "../../models/job.type";
import { JOB_LIST_DATA } from "../../api/job-list";
import { TFilters } from "./filter.type";

export const ContainerJobs = () => {
  const [jobList, setJobList] = useState<Array<TJob>>(JOB_LIST_DATA);
  const [filters, setFilters] = useState<TFilters>({});

  return (
    <>
      <div>Filters: ...</div>
      {jobList.map((item) => (
        <CardJob key={item.id} job={item}></CardJob>
      ))}
    </>
  );
};
