import PropTypes from "prop-types";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { PaginationBox } from "./Pagination.styled";

export const Pagin = ({ currentPage, totalPages, setCurrentPage }) => {
  return (
    <PaginationBox>
      <Stack spacing={2}>
        <Pagination
          shape="rounded"
          siblingCount={1}
          count={totalPages}
          page={currentPage}
          onChange={(_, newPage) => setCurrentPage(newPage)}
        />
      </Stack>
    </PaginationBox>
  );
};

Pagin.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default Pagin;
