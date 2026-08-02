import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_request, response) => {
  return response.status(200).json({
    status: "ok",
    message: "GymFlow API está funcionando",
  });
});

export default app;