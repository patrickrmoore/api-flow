import React, { ReactNode } from "react";
import { Grid, Flex } from "theme-ui";

export interface AppShellProps {
  children?: ReactNode;
}

export const AppShell = ({ children }: AppShellProps) => {
  return (
    <Grid
      sx={{
        gap: 0,
        gridTemplateRows: "60px minmax(auto, 1fr)",
        gridTemplateAreas: '"header" "body"',
        height: "100vh",
        width: "100vw",
      }}
    >
      <Flex sx={{ gridArea: "header", bg: "primary", p: 2 }}>
        <Flex as="h1">Flowchart Test</Flex>
      </Flex>
      <Flex sx={{ gridArea: "body", bg: "neutral", p: 2 }}>{children}</Flex>
    </Grid>
  );
};
