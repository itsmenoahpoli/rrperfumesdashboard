import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// React-router-dom
import { BrowserRouter } from "react-router-dom";

// React-query
import { QueryClient, QueryClientProvider } from "react-query";

// Styles
import "styles/app.scss";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>
);

reportWebVitals();
