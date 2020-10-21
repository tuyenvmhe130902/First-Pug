const express = require("express");
const app = express();
const port = 3001;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const UseRouter = require("./routers/user.router");
const AuthRouter = require("./routers/auth.router");
const AuthMiddleware= require("./middleware/auth.middleware");

app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", function (req, res) {
  res.render("index", {
    name: "HE130902",
  });
});

app.use(express.static("public"));

app.use("/users",AuthMiddleware.requireAuth, UseRouter);
app.use("/auth", AuthRouter);

app.listen(port, function () {
  console.log(`Server listening on port ${port}`);
});
