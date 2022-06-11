import { Link } from "react-router-dom";
import "../styles/Pagination.css";
import { Pagination } from "react-bootstrap";

function PaginationF({ quantityXPage, handlePagination, currentPage, pages }) {
  let pageNumbers = [];
  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }
  

  return (
    <Pagination >
      {pageNumbers.length !== 0 && (
        <>
          <Pagination.Item 
          
            onClick={() => {
              if (currentPage > 1) return handlePagination(currentPage - 1);
            }}
          >
            {"<< "}
          </Pagination.Item>

          {pageNumbers?.map((pageNumber) => {
            return (
              <Pagination.Item
              
                onClick={() => {
                  return handlePagination(pageNumber);
                }}
              >
                {pageNumber}
              </Pagination.Item>
            );
          })}

          <Pagination.Item
          
            onClick={() => {
              if (currentPage < pageNumbers.length)
                return handlePagination(currentPage + 1);
            }}
          >
            {">>"}
          </Pagination.Item>
        </>
      )}
    </Pagination>
  );
}

export default PaginationF;

export const objIndexPagination = (pageNumber, quantityXPage) => {
  const lastItemIndex = pageNumber * quantityXPage;
  const firstItemIndex = lastItemIndex - quantityXPage;
  return { lastItemIndex, firstItemIndex };
};



