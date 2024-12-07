import { TJobWithFlags } from "../../models/job.type";
import { TFilterData } from "../container-jobs/filter.type";

export const CardJob = (props: {
  job: TJobWithFlags;
  handleSetFilter: (event: TFilterData) => void;
}) => {
  return (
    <>
      <div className="border border-gray-600 p-2 m-2 rounded-md flex ">
        <div className="img-container">
          <img src={props.job.logo} alt={props.job.company} className="p-2" />
        </div>
        <div className="info-container">
          <h5 className="font-bold text-emerald-600">{props.job.company}</h5>
          <h3 className="text-3xl font-bold ">{props.job.role}</h3>
          <p>
            <span className="pr-2 text-gray-600">{props.job.postedAt}</span>
            <span className="px-2 text-gray-600">{props.job.contract}</span>
            <span className="pl-2 text-gray-600">{props.job.location}</span>
          </p>
        </div>
        <div className="tools-container flex justify-end grow gap-3">
          {props.job.flags.map((flag) => (
            <BtnFilter
              key={flag.value}
              filter={flag}
              handleSetFilter={() => props.handleSetFilter(flag)}
            ></BtnFilter>
          ))}
        </div>
      </div>
    </>
  );
};

const BtnFilter = (props: {
  filter: TFilterData;
  handleSetFilter: () => void;
}) => {
  return (
    <button onClick={props.handleSetFilter} className="flex items-center">
      <span className="font-bold rounded bg-emerald-100 px-2 py-1 text-emerald-700">
        {props.filter.value}
      </span>
    </button>
  );
};
