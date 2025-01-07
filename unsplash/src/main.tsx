import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.tsx";
import "./index.css";
import { CollectionPhotoContainer } from "./components/collection/collection-photos/collection-photos.container.tsx";
import { NavBar } from "./components/shared/navbar.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
    <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route
          path="/collections/:id"
          element={<CollectionPhotoContainer />}
        ></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
