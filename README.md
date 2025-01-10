# Collins Kimotho Portfolio

This is a personal portfolio website for showcasing my skills and projects. The website is built using React, TailwindCSS, and Vite for the client-side, and Express.js for the server-side.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)


## Features

- Responsive design
- Interactive components
- Project showcase
- Contact form
- Smooth scrolling
- Blog posts fetched from Medium

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/collins-kimotho/kimcollins-portfolio.git

2. Navigate to the project directory:
    ```sh
    cd kimcollins-portfolio

3. Install the dependencies for both client and server.
    ```sh
    cd client
    npm install
    cd ../server
    npm install

## Usage
1. Start the development server for the client:
    ```sh
    cd server
    npm run dev

3. Open the browser to navigate to `http://localhost:5173`

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TailwindCSS**: A utility-first CSS framework for rapid UI development.
- **Vite**: A build tool that provides a faster and leaner development experience for modern web projects.
- **PropTypes**: Runtime type checking for React props.
- **Lenis**: Smooth scrolling library.
- **PostCSS**: A tool for transforming CSS with JavaScript plugins.
- **ESLint**: A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
- **Autoprefixer**: A PostCSS plugin to parse CSS and add vendor prefixes to CSS rules.
- **Express**: A minimal and flexible Node.js web application framework.
- **RSS Parser**: A library to parse RSS feeds.
- **dotenv**: A module to load environment variables from a `.env` file.

## Project Structure

```
.gitignore
client/
  eslint.config.js
  index.html
  package.json
  postcss.config.js
  public/
    images/
  README.md
  src/
    App.css
    App.jsx
    components/
      About.jsx
      Bfooter.jsx
      Blog.jsx
      Button.jsx
      Contact.jsx
      Footer.jsx
      Header.jsx
      Hero.jsx
      Navbar.jsx
      ProjectCard.jsx
      Skill.jsx
      SkillCard.jsx
      Work.jsx
    index.css
    main.jsx
  tailwind.config.js
  vercel.json
  vite.config.js
server/
  .env
  package.json
  server.js
```

## API Endpoints

### Get Blog Posts

- **URL**: `/api/posts`
- **Method**: `GET`
- **Description**: Fetches blog posts from Medium.
- **Response**:
  ```json
  [
    {
      "creator": "Author Name",
      "title": "Post Title",
      "link": "https://medium.com/@collinskimotho/post-link",
      "pubDate": "Publication Date",
      "content": "Post Content",
      "category": ["Category1", "Category2"]
    },
    ...
  ]
  ```

 Something new

## License

This project is licensed under the ISC License.


