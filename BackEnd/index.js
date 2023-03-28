const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require('mongoose');

const port = process.env.PORT || 8080

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/demo');
    console.log("db connected")
}

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
});

const User = mongoose.model('User', userSchema);

const server = express()
server.use(cors());
server.use(bodyParser.json());

server.post("/demo", async (req, res) => {
    let user = new User()
    user.username = req.body.username;
    user.email = req.body.email;
    user.password = req.body.password;

    const doc = await user.save();
    console.log(doc)
    res.json(req.body)
})

server.get("/user", async (req, res) => {
    const docs = await User.find({})
    res.json(docs)
})

server.listen(port, () => {
    console.log("i am node js server")
})