import React, { FC } from "react";
import { DateField, ImageField, RichTextField, Show, SimpleShowLayout, TextField } from "react-admin";

export const ShowComponent: FC = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="username" />
      <TextField source="email" />
      <DateField label="Created at" source="created_at" />
      <DateField label="Updated at" source="updated_at" />
      <TextField source="customerStripeId" />
      <TextField source="subscriptionId" />
      <TextField source="roles" />
      <ImageField source="avatar" />
    </SimpleShowLayout>
  </Show>
);
