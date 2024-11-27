import { useState } from "react";
import { CardJob } from "../card-job/card-job";
import { TJob } from "../../models/job.type";
import { JOB_LIST_DATA } from "../../api/job-list";
import { TFilterData, TFilters } from "./filter.type";

export const ContainerJobs = () => {
  const [jobList, setJobList] = useState<Array<TJob>>(JOB_LIST_DATA);
  const [filters, setFilters] = useState<TFilters>({});

  const newFilters: TFilters = {
    tools: {
      react: true,
      express: true,
      tailwind: true,
    },
    role: {},
    level: {},
    languages: {
      css: true,
    },
  };

  return (
    <>
      <div>Filters: {JSON.stringify(filters)}</div>
      {jobList.map((item) => (
        <CardJob
          key={item.id}
          job={item}
          handleSetFilter={(filter: TFilterData) => {
            const newFilters = { ...filters };
            newFilters[filter.type] = {
              ...newFilters[filter.type],
              [filter.value]: !newFilters[filter.type]?.[filter.value],
            };
            setFilters(newFilters);
          }}
        ></CardJob>
      ))}
    </>
  );
};
