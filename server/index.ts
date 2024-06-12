import express, {Express, Request, Response} from 'express'

const port = 8000
const app: Express = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Hello from server");
});

app.get('/hi', (req: Request, res: Response) => {
    res.send("hiiii")
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})