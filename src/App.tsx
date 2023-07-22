import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Search, Collection } from "@/pages";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Search />,
  },
  {
    path: "/collection/:id",
    element: <Collection />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
