const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Backend API is running successfully");
});

app.get("/users", (req, res) => {
    res.json([
        { id: 1, name: "Bhanu" },
        { id: 2, name: "DevOps User" }
    ]);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
