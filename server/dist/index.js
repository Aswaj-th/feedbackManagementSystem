"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const port = 8000;
const app = (0, express_1.default)();
let feedbacks = [
    {
        name: 'name1',
        feedback: 'f1'
    }
];
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    res.send("Hello from server");
});
app.get('/hi', (req, res) => {
    res.send("hiiii");
});
app.get("/api/requests", (req, res) => {
    res.send(feedbacks);
});
app.post('/api/feedbacks', (req, res) => {
    console.log(req.body);
    if (req.body.name && req.body.feedback) {
        feedbacks.push(req.body);
    }
    res.status(200).json(feedbacks);
});
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
