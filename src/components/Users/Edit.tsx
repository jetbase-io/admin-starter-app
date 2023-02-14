import React, { FC } from "react";
import { DateTimeInput, Edit, required, SimpleForm, TextInput } from "react-admin";

export const EditComponent: FC = () => (
  <Edit>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput source="username" validate={required()} />
    </SimpleForm>
  </Edit>
);
