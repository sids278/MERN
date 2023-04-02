const express = require("express");
const app = express();

const mongoose = require("mongoose");
const authRoute = require("./Routes/auth");
const userRoute = require("./Routes/user");
const postRoute = require("./Routes/post");
const categoryRoute = require("./Routes/categories");
const multer = require("multer");
const path = require("path");


app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));
//mongodb+srv://udays2002:nodyceaser24@sidcluster.i2gmbiv.mongodb.net/sidsbase?retryWrites=true&w=majority
mongoose
  .connect('mongodb+srv://mONGOuser:4dYrsw3wTBOX5ahH@cluster0.ll5hozd.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify:true
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.listen("3000", () => {
  console.log("Backend is running.");
});