import { useState } from "react";
import { JOB_LIST_DATA } from "../../api/job-list";
import { TJobWithFlags } from "../../models/job.type";
import { jobToFlags } from "../../utils/job-to-flags.util";
import { CardJob } from "../card-job/card-job";
import { TFilterData, TFilters } from "./filter.type";

export const ContainerJobs = () => {
  const [jobList, setJobList] = useState<Array<TJobWithFlags>>(
    JOB_LIST_DATA.map((job) => ({
      ...job,
      flags: jobToFlags(job),
    }))
  );
  const [filters, setFilters] = useState<TFilters>({});

  const filteredJobs = filterJobs(jobList, filters);
  return (
    <>
      <div>Filters: {JSON.stringify(filters)}</div>
      {filteredJobs.map((item) => (
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

const filterJobs = (
  list: Array<TJobWithFlags>,
  filters: TFilters
): Array<TJobWithFlags> => {
  const mapedFilters = filterOnlyWithActiveFlags(filters);
  const result = list.filter((job) => checkJobWithFilters(job, mapedFilters));
  return result;
};

const checkJobWithFilters = (
  job: TJobWithFlags,
  filters: [string, string[]][]
): boolean => {
  if (!filters.length) {
    return true;
  }

  return filters.every((tupleFilter) => {
    return (
      !tupleFilter[1].length ||
      tupleFilter[1].every((filterflag) => {
        const match = job.flags.find((Jobflag) => {
          return (
            Jobflag.type === tupleFilter[0] && Jobflag.value === filterflag
          );
        });

        return Boolean(match);
      })
    );
  });
};

const filterOnlyWithActiveFlags = (filters: TFilters) => {
  const result = Object.entries(filters).map((filterEntry) => [
    filterEntry[0],
    Object.entries(filterEntry[1])
      .filter((entry) => entry[1])
      .map((entry) => entry[0]),
  ]) as Array<[string, Array<string>]>;
  return result;
};
