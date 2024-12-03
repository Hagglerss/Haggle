import { BrowserRouter as Router } from "react-router-dom";
import { PageRoutes } from "./pages/PageRoutes";

function App() {
  return (
    <>
      <Router>
        <PageRoutes/>
      </Router>
    </>
  );
}

export default App;
