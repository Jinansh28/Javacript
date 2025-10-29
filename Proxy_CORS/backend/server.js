import express from 'express';
const app = express();

// app.get('/',(req,res)=>{
//     res.send('Server is ready');
// });

app.get('/api/jokes',(req,res)=>{
    const jokes = [
  {
    setup: "Why don't scientists trust atoms?",
    punchline: "Because they make up everything!"
  },
  {
    setup: "Why did the scarecrow win an award?",
    punchline: "Because he was outstanding in his field!"
  },
  {
    setup: "What do you call fake spaghetti?",
    punchline: "An impasta!"
  },
  {
    setup: "Why don’t skeletons fight each other?",
    punchline: "They don’t have the guts."
  },
  {
    setup: "What did the ocean say to the beach?",
    punchline: "Nothing, it just waved."
  },
  {
    setup: "How does a penguin build its house?",
    punchline: "Igloos it together."
  },
  {
    setup: "Why did the math book look sad?",
    punchline: "Because it had too many problems."
  },
  {
    setup: "What do you call cheese that isn't yours?",
    punchline: "Nacho cheese!"
  },
  {
    setup: "Why did the golfer bring two pairs of pants?",
    punchline: "In case he got a hole in one!"
  },
  {
    setup: "What do you call a bear with no teeth?",
    punchline: "A gummy bear!"
  }
];

    res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Serve at http://localhost:${port}`);
})