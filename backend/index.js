const express = require("express");
const multer = require("multer");
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");
const SummarizerManager = require("node-summarizer").SummarizerManager;
const natural = require("natural");
const Sentiment = require("sentiment");
const upload = multer({ dest: "uploads/" });

const app = express();
const sentiment = new Sentiment();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/upload", upload.single("file"), async (req, res) => {
  let content;
  if (req.file) {
    content = await fs.promises.readFile(req.file.path, "utf-8");
  } else if (req.body.text) {
    content = req.body.text;
  } else {
    return res.status(400).json({ error: "No file or text provided." });
  }
  const summarizer = new SummarizerManager(content, 3);
  const summary = summarizer.getSummaryByFrequency().summary;
  const tokenizer = new natural.WordTokenizer();
  const tokens = tokenizer.tokenize(content);
  const tfidf = new natural.TfIdf();
  tfidf.addDocument(tokens);
  const keywords = [];
  tfidf.listTerms(0).forEach((item) => {
    keywords.push(item.term);
  });
  const sentimentResult = sentiment.analyze(content);
  res.json({
    summary,
    keywords,
    sentiment: sentimentResult,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
