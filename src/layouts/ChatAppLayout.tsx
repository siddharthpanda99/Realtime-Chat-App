import React from "react";
import Box from "@mui/material/Box";
import MultipleColsWithCustomWidths from "./subLayouts/MultipleColsWithCustomWidths";
import VerticalCollapsibleSidebarOnHover from "../components/Navigation/VerticalNav/MuiDefaultNavbars";
import HorizontalAppBar from "../components/Navigation/HorizontalNav/HorizontalHeader";
import PublicRouter from "../routes/PublicRoutes";

const ChatAppLayout = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          // border: "1px solid yellow",
          boxSizing: "border-box",
        }}
      >
        <HorizontalAppBar />
      </Box>
      {false ? (<MultipleColsWithCustomWidths>
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
            width: "100%",
            border: "1px solid green",
            boxSizing: "border-box",
          }}
        >
          <PublicRouter />
        </Box>
      </MultipleColsWithCustomWidths>): <PublicRouter />}
    </>
  );
};

export default ChatAppLayout;
