import { TFilterData } from "../components/container-jobs/filter.type";
import { TJob } from "../models/job.type";

const mapFilter = (name: string, value: string) => {
    const item: TFilterData = { type: name, value: value };
    return item;
  };

export const jobToFlags = (job: TJob) => {
  const flags: Array<TFilterData> = [
    { type: "role", value: job.role },
    { type: "level", value: job.level },
    ...job.tools.map((tool) => mapFilter("tool", tool)),
    ...job.languages.map((lang) => mapFilter("language", lang)),
  ];
  return flags
};


