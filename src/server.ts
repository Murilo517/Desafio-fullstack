import app from "./app";
import { AppDataSource } from "./data-source";

AppDataSource.initialize().then(() => {
  console.log("database conectado");

  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`server online porta ${PORT}`);
  });
}).catch((error)=> console.log(error))
