import { Box, Pagination, PaginationItem } from "@mui/material";

const CustomPagination = (props) => {
  const { totalPages, page, pageHandler } = props;

  return (
    <Box
      sx={{ width: "100%", display: "flex", justifyContent: "center", p: 4 }}
    >
      <Pagination
        hidePrevButton
        hideNextButton
        count={Math.ceil(totalPages / 20)}
        defaultPage={1}
        page={page}
        onChange={pageHandler}
        size="large"
        shape="rounded"
        sx={{
          "& .MuiPaginationItem-root": {
            backgroundColor: "rgba(75, 70, 92, 0.08)",
            "&:hover": {
              backgroundColor: "black",
              color: "white",
            },
            "&.Mui-selected": {
              backgroundColor: "black",
              color: "white",
            },
            "&.MuiPaginationItem-root.Mui-selected:hover": {
              backgroundColor: "black",
            },
          },
        }}
        renderItem={(item) => <PaginationItem {...item} />}
      />
    </Box>
  );
};

export default CustomPagination;
