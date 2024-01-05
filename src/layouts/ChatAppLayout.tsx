import React from "react";
import Box from "@mui/material/Box";
import MultipleColsWithCustomWidths from "./subLayouts/MultipleColsWithCustomWidths";
import VerticalCollapsibleSidebarOnHover from "../components/Navigation/VerticalNav/MuiDefaultNavbars";
import HorizontalAppBar from "../components/Navigation/HorizontalNav/HorizontalHeader";

const ChatAppLayout = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          border: "1px solid yellow",
          boxSizing: "border-box",
        }}
      >
        <Box><HorizontalAppBar /></Box>
      </Box>
      <MultipleColsWithCustomWidths>
        <Box
          sx={{
            maxWidth: "15%",
            border: "1px solid yellow",
            boxSizing: "border-box",
          }}
        >
          <VerticalCollapsibleSidebarOnHover />
        </Box>
        <Box
          sx={{
            width: "50%",
            border: "1px solid green",
            boxSizing: "border-box",
          }}
        >
          Hi-col-2
        </Box>
        <Box
          sx={{
            width: "50%",
            border: "1px solid green",
            boxSizing: "border-box",
          }}
        >
          Hi-col-3
        </Box>
      </MultipleColsWithCustomWidths>
      <Box
        sx={{
          width: "100%",
          border: "1px solid yellow",
          boxSizing: "border-box",
          height: "9vh",
          lineHeight: "9vh",
        }}
      >
        Hi
      </Box>
    </>
  );
};

export default ChatAppLayout;
