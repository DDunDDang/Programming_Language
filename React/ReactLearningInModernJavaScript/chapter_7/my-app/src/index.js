import { render } from "react-dom";
import { App } from "./App";
import { AdminFlagProvider } from "./components/providers/AdminFlagProvider";

render(
  <AdminFlagProvider>
    <App />
  </AdminFlagProvider>, 
  document.getElementById("root")
);