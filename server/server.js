const express = require('express');
const cors = require('cors');
const Parser = require('rss-parser');

const app = express();
app.use(cors());
app.use(express.json());

const parser = new Parser();

const port = 3000;

app.get('/', async (req, res) => {
    const feed = await parser.parseURL('https://medium.com/feed/@collinskimotho')
    articles = feed.items.map(item =>({
        creator: item.creator,
        title: item.title,
        link: item.link, 
        pubDate: item.pubDate,
        content: item['content:encoded']
    }))
    res.send('Feed processed')
}) 

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});