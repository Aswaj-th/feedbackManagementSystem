import express, {Express, Request, Response} from 'express'
import cors from 'cors';
import rateLimit from 'express-rate-limit';

const port = 8000
const app: Express = express();

let feedbacks = [
    {
        name: 'name1',
        feedback: 'f1'
    }
]

const limiter = rateLimit({
    windowMs: 10*1000,
    max: 1,
    message: 'Too many requests within a small timeframe!!! Try submitting after a few seconds'
})

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors<Request>());

app.get("/", (req: Request, res: Response) => {
    res.send("Hello from server");
});

app.get("/api/feedbacks", (req: Request, res: Response) => {
    res.send(feedbacks);
})

app.use('/api/feedbacks', limiter);

app.post('/api/feedbacks', (req: Request, res: Response) => {
    console.log(req.body);
    if(req.body.name && req.body.feedback) {
        feedbacks.push(req.body);
    }
    res.status(200).json(feedbacks);
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})