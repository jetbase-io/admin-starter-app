import "./App.css";

import React from "react";
import { Admin, Resource } from "react-admin";

import authProvider from "./auth/auth-provider";
import Dashboard from "./components/Dashboard";
import posts from "./components/Posts";
import users from "./components/Users";
import { dataProvider } from "./dataProvider";

function App() {
  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider} dashboard={Dashboard}>
      <Resource name="users" {...users} />
      <Resource name="posts" {...posts} />
    </Admin>
  );
}

export default App;
