import React from "react";
import ReactPaginate from "react-paginate";
import style from "./pagination.module.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Pagination = ({ pageCount, changePage }) => {
  return (
    <div className={style.pagination_wrap}>
      <ReactPaginate
        previousLabel={<IoIosArrowBack />}
        nextLabel={<IoIosArrowForward />}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={style.paginationBttns}
        previousLinkClassName={style.previousBttn}
        nextLinkClassName={style.nextBttn}
        disabledClassName={style.paginationDisabled}
        activeClassName={style.paginationActive}
      />
    </div>
  );
};

export default Pagination;
