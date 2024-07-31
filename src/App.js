import { useRoutes } from "react-router-dom";
import routes from "./routes";

function App() {
  const routers = useRoutes(routes);
  return routers;
}
export default App;
