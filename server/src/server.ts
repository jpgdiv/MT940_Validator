import cors from "cors";
import express from "express";
import routes from "./routes";
const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
};
app.use(cors(corsOptions));

routes(app);

// Start the server
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
