import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";

/**
 * dont worry to much about this. just to start the application
 */
const container = document.getElementById("root");
if (container) {
    const root = createRoot(container);
    root.render(<App />);
} else {
    console.error("unable to find root");
}
