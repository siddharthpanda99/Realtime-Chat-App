import React from "react";
import { Box } from "@mui/material";

const MultipleColsWithCustomWidths = ({ children }) => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "row", margin:0, width: '100vw', boxSizing: 'border-box', height: '93vh' }}
    >
      {children}
    </Box>
  );
};

export default MultipleColsWithCustomWidths;
