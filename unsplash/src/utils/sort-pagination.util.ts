export const sortPagination = (
  list: Array<number>,
  currentPage: number,
  pageAmount = 5
) => {
  const distance = list.map((num) => Math.abs(num - currentPage));

  const numDistances = list.map((num, index) => ({
    num,
    distance: distance[index],
  }));

  numDistances.sort((a, b) => a.distance - b.distance);

  return numDistances
    .slice(0, pageAmount)
    .map((item) => item.num)
    .sort((a, b) => a - b);
};
