export const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

export const handleItemsPerPageChange = (event) => {
    const newItemsPerPage = event.target.value;
    setItemsPerPage(newItemsPerPage);

    const newTotalPages = Math.ceil(pokeData.length / newItemsPerPage);
    const newCurrentPage = Math.min(currentPage, newTotalPages);
    setCurrentPage(newCurrentPage);
  };