import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

(function main() {
  if (process.env.NODE_ENV === "development") {
    const el = document.querySelector("#_marketing-dev-root");
    el && mount(el);
  }
})();

export function mount(el) {
  ReactDOM.render(<App />, el);
}
