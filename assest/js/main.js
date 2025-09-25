  const searchInput = document.getElementById("searchInput");

  function searchTable() {
    const searchTerm = searchInput.value.toLowerCase();

    const tableRows = document.querySelectorAll("table tr");

    tableRows.forEach((row, index) => {
      // Skip header row
      if (index === 0) return;

      const rowText = row.innerText.toLowerCase();

      if (rowText.includes(searchTerm)) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  }

  function clearSearch() {
    searchInput.value = "";
    const tableRows = document.querySelectorAll("table tr");
    tableRows.forEach(row => {
      row.style.display = "";
    });
  }

  searchInput.addEventListener("keyup", searchTable);
