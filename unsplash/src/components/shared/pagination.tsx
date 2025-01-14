import { numberToArray } from "../../utils/number-to-array.util";
import { sortPagination } from "../../utils/sort-pagination.util";

type TPaginationProps = {
  page: number;
  perPage: number;
  totalPages: number;
  fnHandleChangePage: (num: number) => void;
  fnHandleChangePerPage?: (num: number) => void;
  itemsOption?: Array<number>;
};

export const Pagination = (
  props: TPaginationProps = {
    page: 1,
    perPage: 10,
  } as TPaginationProps
) => {
  const itemsOptionList = props.itemsOption ?? [5, 10, 25, 100];
  return (
    <>
      <div className="grid grid-cols-3">
        <div>
          page: {props.page} - {props.totalPages}
        </div>
        <div className="flex flex-wrap gap-1">
          {sortPagination(
            numberToArray(props.totalPages),
            props.page,
            props.perPage
          ).map((n) => (
            <button
              key={n}
              onClick={() => props.fnHandleChangePage(n)}
              className={`border rounded px-2 py-1 ${
                n === props.page ? "bg-slate-400" : ""
              }`}
            >
              {n}
            </button>
          ))}
        </div>
        <div>
          <select
            onChange={(e) =>
              props.fnHandleChangePerPage?.(Number(e.currentTarget.value))
            }
            defaultValue={props.page}
          >
            {itemsOptionList.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};
