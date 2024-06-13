"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const port = 8000;
const app = (0, express_1.default)();
let feedbacks = [
    {
        name: 'name1',
        feedback: 'f1'
    }
];
const limiter = (0, express_rate_limit_1.default)({
    windowMs: 10 * 1000,
    max: 1,
    message: 'Too many requests within a small timeframe!!! Try submitting after a few seconds'
});
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    res.send("Hello from server");
});
app.get("/api/feedbacks", (req, res) => {
    res.send(feedbacks);
});
app.use('/api/feedbacks', limiter);
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
