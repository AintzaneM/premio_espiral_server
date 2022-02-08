import express from "express";
import config from "./config";
import morgan from "morgan"
import cors from "cors";
import premioRoutes from "./routes/premios.routes"

const app = express()

app.set("port", config.PORT);

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(premioRoutes)

export default app