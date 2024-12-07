import { TFilterData } from "../components/container-jobs/filter.type";

export type TJob = {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: Array<string>;
  tools: Array<string>;
};

export type TJobWithFlags = TJob & { flags: Array<TFilterData> };
