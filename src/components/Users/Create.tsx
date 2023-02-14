import React, { FC } from "react";
import { Create, required, SelectInput, SimpleForm, TextInput } from "react-admin";

const choices = [
  { id: "User", name: "User" },
  { id: "Admin", name: "Admin" },
];

export const CreateComponent: FC = () => (
  <Create>
    <SimpleForm>
      <TextInput source="username" validate={required()} />
      <TextInput source="email" validate={required()} />
      <TextInput source="password" validate={required()} />
      <SelectInput source="roles" choices={choices} validate={required()} />
    </SimpleForm>
  </Create>
);
