import React from "react";
import Index from "./pages/Index";
import Enterprise from "./pages/Enterprise";
import Teams from "./pages/Teams";
import Individuals from "./pages/Individuals";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./Layout/RootLayout";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route index element={<Index />} />
      <Route path="/enterprise" element={<Enterprise />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/individuals" element={<Individuals />} />
    </Route>
  )
);

const App = () => {
  return (
    <div>
      <RouterProvider router={Router} />
    </div>
  );
};

export default App;
