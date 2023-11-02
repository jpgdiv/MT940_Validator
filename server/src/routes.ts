import { Express } from "express";
import multer from "multer";
import csvRecordProcessor from "./Processes/csvRecordProcessor";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

function routes(app: Express) {
  app.post("/api/validator", upload.single("file"), async (req, res) => {
    const { file } = req;
    try {
      if (file === undefined) {
        throw new Error("no file in request");
      }
      if (file.mimetype !== "text/csv") {
        throw new Error("Only csv files can be proccesed");
      }
      const result = await csvRecordProcessor(file);
      res.status(200).send(result);
    } catch (e) {
      res.status(500).send(`processing failed: ${e}`);
    }
  });
}

export default routes;
