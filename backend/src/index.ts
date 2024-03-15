import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors({
  origin: '*'
}))

const port = 8000;

app.get('/health', (req, res) => {
  res.status(200).send('Server is running');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
