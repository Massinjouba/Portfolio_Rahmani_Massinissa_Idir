import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

const app = express();
const PORT = 5000; 

// Utilisez fileURLToPath pour obtenir __dirname dans un module ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const FEEDBACK_FILE = path.join(__dirname, '../src/utils/feedback.json');

// Utilisez CORS middleware
app.use(cors());

app.use(bodyParser.json());

app.post('/saveFeedback', (req, res) => {
  const feedbackData = req.body;
  console.log('Received feedback:', feedbackData);

  fs.readFile(FEEDBACK_FILE, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return res.status(500).json({ error: 'Error reading file' });
    }

    let feedbackArray = [];
    if (data) {
      feedbackArray = JSON.parse(data);
    }
    feedbackArray.push(feedbackData);

    fs.writeFile(FEEDBACK_FILE, JSON.stringify(feedbackArray, null, 2), (err) => {
      if (err) {
        console.error('Error writing file:', err);
        return res.status(500).json({ error: 'Error writing file' });
      }
      console.log('Feedback saved successfully');
      res.status(200).json({ message: 'Feedback saved successfully' });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
