import { Typography } from "@mui/material";
import "./App.css";
import Header from "./components/Header/Header";
import Link from "./components/Link/Link";

function App() {
  return (
    <div>
      <Header>
        <Link href="/">Validation</Link>
      </Header>
      <Typography variant="h4">Record Validator</Typography>
    </div>
  );
}

export default App;
