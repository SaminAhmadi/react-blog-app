import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Article from "./pages/article/Article";
import AddArticle from "./pages/addArticle/AddArticle";
import EditArticle from "./pages/editArticle/EditArticle";
import Articles from "./pages/articles/Articles";
import Courses from "./pages/courses/Courses";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/article/:articleId",
    element: <Article />,
  },
  {
    path: "/add-article",
    element: <AddArticle />,
  },
  {
    path: "/edit-article/:articleId",
    element: <EditArticle />,
  },
  {
    path: "/articles",
    element: <Articles />,
  },
  {
    path: "/courses",
    element: <Courses />,
  },
];
export default routes;
