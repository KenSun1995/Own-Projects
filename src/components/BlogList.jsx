import BlogPost from "./BlogPost";
import Pagination from "./Pagination";
import React, { useEffect, useState } from "react";
import blogs from "../data/blogs.json";

const PAGE_SIZES = [15, 25, 50, 100];

function BlogList() {
  /**
   * config states (Ken Sun)
   */
  const [pageSize, setPageSize] = useState(15);
  const [page, setPage] = useState(1);
  const [curData, setCurData] = useState(blogs.posts.slice(0, 15));

  /**
   * hook to track page & pageSize change (Ken Sun)
   */
  useEffect(() => {
    setCurData(blogs.posts.slice((page - 1) * pageSize, page * pageSize));
  }, [page, pageSize])

  useEffect(() => {
    setPage(1);
  }, [pageSize])

  const updateRowsPerPage = (value) => {
    setPageSize(value - 0);
  };
  const updatePage = (page) => {
    setPage(page);
  };

  return (
    <div>
      <Pagination
        currentPage={page}
        totalCount={blogs.posts.length}
        pageSize={pageSize}
        pageSizeOptions={PAGE_SIZES}
        onPageChange={updatePage}
        onPageSizeOptionChange={updateRowsPerPage}
      />
      <ul
        // Do not remove the aria-label below, it is used for Hatchways automation.
        aria-label="blog list"
      >
        {curData.map((blog) => (
          <BlogPost
            key={blog.id}
            author={blog.author}
            title={blog.title}
            excerpt={blog.excerpt}
            featureImage={blog.image}
          />
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
