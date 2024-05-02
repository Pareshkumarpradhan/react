import express from 'express';

const app = express();



// app.get('/', (req, res) => {
//       res.send('Server is ready');
// });

// get a list of 5 jokes

app.get('/api/jokes', (req, res)=> {
     const jokes = [
            {
                id: 1,
                title: 'What do you call a very small valentine?',
                content: 'What do you call a very small valentine? A valen-tiny!',
            },
            {
                id: 2,
                title: 'What did the dog say when he rubbed his tail on the sandpaper?',
                content: 'What did the dog say when he rubbed his tail on the sandpaper? Ruff, Ruff!',
            },
            {
                id: 3,
                title: 'Why don\'t sharks like to eat clowns?',
                content: 'Why don\'t sharks like to eat clowns? Because they taste funny!',
            },
            {
                id: 4,
                title: 'What did the fireman say when the church caught on fire?',
                content: 'What did the fireman say when the church caught on fire? "Holy smoke!"',
            },
            {
                id: 5,
                title: 'What is a vampire\'s favorite fruit?',
                content: 'What is a vampire\'s favorite fruit? A blood orange!',
            },
        ];

        res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});