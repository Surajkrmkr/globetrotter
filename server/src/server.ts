import { config } from "dotenv";
import "reflect-metadata";
import application from "./config/application";
import { connectDB } from "./config/db/connection";

config();
const app = application;

connectDB();

let port: any = process.env.PORT || 3000;

app.listen(port, async () => {
  try {
    if (!port) throw new Error("port is undefined");
    console.log(`Server is running on http://localhost:${port}`);
  } catch (error) {
    console.log(error);
    process.exit();
  }
});
