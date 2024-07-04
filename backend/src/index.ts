import expres, {Request, Response} from "express";
import cors from "cors";
import "dotenv/config";

const app = expres();

app.use(expres.json());
app.use(cors());

app.get("/", (req: Request, res: Response)=>{
    res.json({msg: "heeelloo"});
});


app.listen(3300, ()=>{
    console.log("Server started at 3300");
});