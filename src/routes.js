import NewCommentPage from "./Pages/NewCommentPage";
import HomePage from "./Pages/HomePage";
import NotFound from "./Pages/NotFound";

const routes = [
  { path: "/", component: HomePage, exact: true },
  { path: "/new-comment", component: NewCommentPage },
  { component: NotFound },
];
export default routes;
