import express from "express";
import db from "./config/db.js"
import indexRouter from "./routes/index.route.js";

const app = express();

app.set("port", process.env.PORT || 3000);

// Middleware
app.use(express.json());

//Rutas
app.use("/", indexRouter);
app.use("*", (req, res) => {
    res.send("404 - not found");
  });

// Inicia el servidor
app.listen(app.get("port"), () => {
    console.log("server runing");
});


//COnecta la database
db.connect().then(() => {
    console.log("Connected to database");
}).catch((error) => {
    console.log("Error: ", error)
})