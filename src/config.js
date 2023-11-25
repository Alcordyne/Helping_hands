const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb+srv://HHProj:2023@helpinghands.ruhkd7h.mongodb.net/HelpingHands")

connect.then(() => {
    console.log("Database connected Sucessfully");
})
.catch(() => {
    console.log("Database cannot be connected");
});

const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const collection = new mongoose.model("users", LoginSchema);

module.exports = collection;
