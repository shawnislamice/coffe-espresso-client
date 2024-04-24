import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AddCoffe from "../components/AddCoffe";
import UpdateCoffe from "../components/UpdateCoffe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
  },
  {
    path: "/addcoffe",
    element: <AddCoffe></AddCoffe>,
  },
  {
    path: "/updatecoffe",
    element: <UpdateCoffe></UpdateCoffe>,
  },
]);
export default router;
