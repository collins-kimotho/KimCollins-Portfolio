const express = require('express');
const cors = require('cors');
const Parser = require('rss-parser');


const app = express();
app.use(cors({
    origin: 'https://kim-collins-portfolio.vercel.app/',
    methods: 'GET, POST, PUT, DELETE',
    credentials: true
}));
app.use(express.json());

require('dotenv').config()

const parser = new Parser();

const PORT = process.env.PORT || 5000;

app.get('/api/posts', async (req, res) => {
    try {
        const feed = await parser.parseURL('https://medium.com/feed/@collinskimotho');
        const articles = feed.items.map(item => ({
            creator: item.creator,
            title: item.title,
            link: item.link, 
            pubDate: item.pubDate,
            content: item['content:encoded'],
            category: item.categories || []
        }));
        res.json(articles);
    } catch (error) {
        console.error('Error fetching feed:', error);
        res.status(500).json({ error: 'Failed to fetch feed' });
    }
}) 


app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});