import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./providers/AuthProvider";
import Router from "./routes/Routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={Router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
