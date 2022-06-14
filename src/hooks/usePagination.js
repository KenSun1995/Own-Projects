export const DOTS = "...";

function usePagination({ currentPage, totalCount, pageSize }) {
  /*
    (Ken Sun Done)

    DESC: In this function, we will control return array value which stands for pages status.
          If no blog, there will be '1' page
          We can calculate last page number according to totalCount and pageSize
          There are different situations like below, we can return different array according to currentPage and lastPage
              * [1] / [1 2] / [1 2 3]
              * [1 2 3 ... 7]
              * [1 ... 5 6 7]
              * [1 ... 3 4 5 ... 7]
  */
  if (totalCount <= 0) return [1];
  const lastPage = Math.ceil(totalCount / pageSize);
  let res = [];
  if (lastPage <= 3) {
    for (let i = 1; i <= lastPage; i++) {
      res.push(i);
    }
    return res;                                                                           // [1] / [1 2] / [1 2 3]
  } else {
    if (currentPage <= 2) {
      return [1, 2, 3, DOTS, lastPage];                                                   // [1 2 3 ... 7]
    } else if (currentPage >= lastPage - 1) {
      return [1, DOTS, lastPage - 2, lastPage - 1, lastPage];                             // [1 ... 5 6 7]
    } else {
      return [1, DOTS, currentPage - 1, currentPage, currentPage + 1, DOTS, lastPage];    // [1 ... 3 4 5 ... 7]
    }
  }
}

export default usePagination;
