import React, { FC } from "react";
import { DateTimeInput, Edit, required, SimpleForm, TextInput } from "react-admin";

export const EditComponent: FC = () => (
  <Edit>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput source="title" validate={required()} />
      <TextInput multiline source="description" validate={required()} />
      <DateTimeInput label="Publication date" source="published_at" />
    </SimpleForm>
  </Edit>
);
