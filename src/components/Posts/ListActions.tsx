import React, { FC } from "react";
import { CreateButton, ExportButton, FilterButton, TopToolbar } from "react-admin";

export const ListActions: FC = () => (
  <TopToolbar>
    <FilterButton />
    <CreateButton />
    <ExportButton />
  </TopToolbar>
);
