import React from "react";
import { Box, CircularProgress } from "@material-ui/core";

export interface LoaderProps {
  children?: React.ReactNode;
  size?: string | number;
}

export const Loader: React.FC = ({ children, size = 100 }: LoaderProps) => {
  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box position="relative" display="inline-flex">
        <CircularProgress color="secondary" size={size} thickness={1} />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};
