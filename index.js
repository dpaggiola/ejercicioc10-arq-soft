const express = require("express");
require('dotenv').config();

const app = express();
const matchesRoutes = require("./routes/matchesRoutes");

const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/matches", matchesRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});