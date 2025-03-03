import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const CustomPagination = styled(Pagination)({
  "& .MuiPaginationItem-root": {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#000",
  },
  "& .MuiPaginationItem-root.Mui-selected": {
    backgroundColor: "#8C42F9",
    color: "#fff",
    borderRadius: "15%",
    width: "40px",
    height: "40px",
  },
});

export const PaginationComponent = ({
  page,
  setPage,
  totalCount,
  pageSize,
}) => {
  return (
    <Stack className="pagination">
      <CustomPagination
        count={Math.ceil(totalCount / pageSize)}
        page={page}
        onChange={(event, value) => setPage(value)} 
        shape="rounded"
      />
    </Stack>
  );
};
