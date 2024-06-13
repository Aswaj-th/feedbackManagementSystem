import express, {Express, Request, Response} from 'express'
import cors from 'cors';

const port = 8000
const app: Express = express();

let feedbacks = [
    {
        name: 'name1',
        feedback: 'f1'
    }
]

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors<Request>());

app.get("/", (req: Request, res: Response) => {
    res.send("Hello from server");
});

app.get('/hi', (req: Request, res: Response) => {
    res.send("hiiii")
})

app.get("/api/requests", (req: Request, res: Response) => {
    res.send(feedbacks);
})

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