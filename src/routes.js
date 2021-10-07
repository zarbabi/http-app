import NewCommentPage from "./Pages/NewCommentPage";
import HomePage from "./Pages/HomePage";
import NotFound from "./Pages/NotFound";
import FullComment from "./components/FullComment/FullComment";

const routes = [
  { path: "/new-comment", component: NewCommentPage },
  { path: "/comment/:id", component: FullComment },
  { path: "/", component: HomePage, exact: true },
  { component: NotFound },
];
export default routes;
