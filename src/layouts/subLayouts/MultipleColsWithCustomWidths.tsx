import React from "react";
import { Box } from "@mui/material";

const MultipleColsWithCustomWidths = ({ children }) => {
  return (
    <Box
      sx={{ border: "1px solid blue", display: "flex", flexDirection: "row", margin:0, width: '100vw', boxSizing: 'border-box', height: '80vh' }}
    >
      {children}
    </Box>
  );
};

export default MultipleColsWithCustomWidths;
