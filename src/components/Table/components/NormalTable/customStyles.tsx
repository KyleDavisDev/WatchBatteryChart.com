const customStyles = {
  table: {
    style: {
      borderRadius: "10px"
    }
  },
  subHeader: {
    style: {
      backgroundColor: "inherit"
    }
  },
  header: {
    style: {
      display: "none"
    }
  },
  headRow: {
    style: {
      backgroundColor: "#36304a",
      borderRadius: "10px 10px 0 0"
    }
  },
  headCells: {
    style: {
      fontSize: "18px",
      color: "#efefef",
      paddingTop: "5px",
      paddingBottom: "5px"
    },
    activeSortStyle: {
      color: "#efefef",
      fontWeight: "bold"
    },
    inactiveSortStyle: {
      "&:focus": {
        color: "#efefef",
        fontWeight: "bold"
      },
      "&:hover": {
        color: "#efefef",
        fontWeight: "bold"
      }
    }
  },
  rows: {
    highlightOnHoverStyle: {
      backgroundColor: "#cdcdcd"
    }
  },
  cells: {
    style: {
      fontSize: "15px",
      color: "#333"
    }
  }
};

export default customStyles;
