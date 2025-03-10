import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();  // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 5000;

// Middleware setup
app.use(bodyParser.json());
app.use(cookieParser());

// MongoDB connection using MONGO_URI from .env
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log("MongoDB connection error:", err));

app.get('/', (req, res) => {
    res.send('Backend server is running!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


   pwd  hLN8IbA4VJuSuDL5

   user name rajputankit08524