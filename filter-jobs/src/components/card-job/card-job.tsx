import { TJob } from "../../models/job.type";

export const CardJob = (props: { job: TJob }) => {
  return (
    <>
      <div className="border border-gray-600 p-2 m-2 rounded-md">
        <img src={props.job.logo} alt={props.job.company} />
        <h5>{props.job.company}</h5>
        <h3>{props.job.role}</h3>
        <p>
          <span>{props.job.postedAt}</span>
          <span>{props.job.contract}</span>
          <span>{props.job.location}</span>
        </p>
      </div>
    </>
  );
};
