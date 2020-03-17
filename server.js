const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

const apiRoutes = require("./routing/apiRoutes")
app.use("/api", apiRoutes)

const htmlRoutes = require("./routing/htmlRoutes")
app.use("/", htmlRoutes)

app.listen(PORT, function() {
    console.log(`listening on http://localhost:${PORT}`);
});