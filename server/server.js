const express = require('express');
const cors = require('cors');
const Parser = require('rss-parser');

const app = express();
app.use(cors());
app.use(express.json());

const parser = new Parser();

const port = 3000;

app.get('/api/posts', async (req, res) => {
    try {
        const feed = await parser.parseURL('https://medium.com/feed/@collinskimotho');
        const articles = feed.items.map(item => ({
            creator: item.creator,
            title: item.title,
            link: item.link, 
            pubDate: item.pubDate,
            content: item['content:encoded'],
            category: item.categories
        }));
        res.json(articles);
    } catch (error) {
        console.error('Error fetching feed:', error);
        res.status(500).json({ error: 'Failed to fetch feed' });
    }
}) 

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});