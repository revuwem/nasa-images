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
  return (
    <div className="bg-black min-h-screen py-12 px-2 md:px-12">
      <main className="grid grid-cols-5 gap-x-6 md:grid-cols-6">
        <RouterProvider router={router} />
      </main>
    </div>
  );
}

export default App;
