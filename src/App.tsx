import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Link from "./components/Link/Link";

function App() {
  return (
    <div>
      <Header>
        <Link href="/">Validation</Link>
      </Header>
      <Outlet />
    </div>
  );
}

export default App;
