import 'dotenv/config';
import express from 'express';

const port = process.env.PORT || 5001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => console.log(`🚀 API is running on port 👉 ${port}`));
