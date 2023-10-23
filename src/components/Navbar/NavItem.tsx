import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";

interface NavItem {
  path: string;
  Icon: React.ElementType;
  text: string;
  current: boolean;
}

export default function NavItem({ path, Icon, text, current }: NavItem) {
  return (
    <Link to={path}>
      <Box
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
        sx={{
          backgroundColor: `${current ? "red" : "green"}`,
          "&:hover": {
            backgroundColor: "purple",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <div>
          <Icon />
        </div>
        <div>{text}</div>
      </Box>
    </Link>
  );
}
