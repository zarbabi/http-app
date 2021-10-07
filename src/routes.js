import HomePage from "./Pages/HomePage";
import NotFound from "./Pages/NotFound";
import FullComment from "./Pages/FullComment/FullComment";
import NewComment from "./Pages/NewComment/NewComment";

const routes = [
  { path: "/new-comment", component: NewComment },
  { path: "/comment/:id", component: FullComment },
  { path: "/", component: HomePage, exact: true },
  { component: NotFound },
];
export default routes;
