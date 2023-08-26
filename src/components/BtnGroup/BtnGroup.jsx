import PropTypes from "prop-types";

import { InputLabel, TextField, Select, MenuItem } from "@mui/material";
import { Container } from "./BtnGroup.styled";

export const BtnGroup = ({
  searchTerm,
  setSearchTerm,
  selectedType,
  handleTypeChange,
  itemsPerPage,
  handleItemsPerPageChange,
}) => {
  return (
    <>
      <Container>
        <InputLabel id="page">Per Page</InputLabel>
        <Select
          labelId="page"
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
          label="Items per page"
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </Select>

        <InputLabel id="type">Type</InputLabel>
        <Select
          labelId="type"
          value={selectedType}
          label="Type"
          onChange={handleTypeChange}
        >
          <MenuItem value="">-All-</MenuItem>
          <MenuItem value="normal">Normal</MenuItem>
          <MenuItem value="fire">Fire</MenuItem>
          <MenuItem value="water">Water</MenuItem>
          <MenuItem value="grass">Grass</MenuItem>
          <MenuItem value="flying">Flying</MenuItem>
          <MenuItem value="fighting">Fighting</MenuItem>
          <MenuItem value="poison">Poison</MenuItem>
          <MenuItem value="electric">Electric</MenuItem>
          <MenuItem value="ground">Ground</MenuItem>
          <MenuItem value="rock">Rock</MenuItem>
          <MenuItem value="psychic">Psychic</MenuItem>
          <MenuItem value="ice">Ice</MenuItem>
          <MenuItem value="bug">Bug</MenuItem>
          <MenuItem value="ghost">Ghost</MenuItem>
          <MenuItem value="steel">Steel</MenuItem>
          <MenuItem value="dragon">Dragon</MenuItem>
          <MenuItem value="ark">Dark</MenuItem>
          <MenuItem value="fairy">Fairy</MenuItem>
        </Select>

        <TextField
          id="outlined-basic"
          label="Search Pokemon"
          variant="outlined"
          type="text"
          placeholder="Search Pokemon"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Container>
    </>
  );
};

BtnGroup.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  selectedType: PropTypes.string.isRequired,
  handleTypeChange: PropTypes.func.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  handleItemsPerPageChange: PropTypes.func.isRequired,
};
