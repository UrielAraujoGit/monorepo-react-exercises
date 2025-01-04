export const numberToArray = (num: number) => {
  const num_list: Array<number> = [];
  for (let index = 1; index <= num; index++) {
    num_list.push(index);
  }
  return num_list;
};
