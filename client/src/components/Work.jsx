import React from 'react'
import ProjectCard from './ProjectCard';

const works = [
  {
    imgSrc: '/images/newsapp.jpg',
    title: 'DailyTimes: News App',
    tags: ['API', 'Web-design', 'Development'],
    projectLink: 'https://github.com/collins-kimotho/DailyTimes'
  },
  {
    imgSrc: '/images/financeApp.jpg',
    title: 'Financial Advising Landing Page',
    tags: ['Web-design', 'React', 'Javascript'],
    projectLink: 'https://github.com/collins-kimotho/Finance-App'
  },
  {
    imgSrc: '/images/scrapping.jpg',
    title: 'Web Scraping Projects',
    tags: ['Python', 'API', 'Web-scraping', 'Selenium'],
    projectLink: 'https://github.com/collins-kimotho/Scrapping-Data'
  },
  {
    imgSrc: '/images/finsight.jpg',
    title: 'Budgeting app landing page',
    tags: ['Web-design', 'Development', 'React'],
    projectLink: 'https://collins-kimotho.github.io/FinSight/'
  },
  {
    imgSrc: '/images/portfolio.jpg',
    title: 'Personal portfolio',
    tags: ['React', 'Tailwind'],
    projectLink: 'https://github.com/collins-kimotho/KimCollins-Portfolio.git'
  },
  {
    imgSrc: '/images/hbnb.jpg',
    title: 'AirBnb Clone',
    tags: ['Web-design', 'Development', 'Flask', 'Python'],
    projectLink: 'https://github.com/markdennis1287/AirBnB_clone_v3.git'
  },
];

const Work = () => {
  return (
    <section id='work' className="section">
      <div className="container">
        <h2 className="headline-2 mb-8">
          My Portfolio Highlights
        </h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {
            works.map(({ imgSrc, title, tags, projectLink }, key) => (
              <ProjectCard
                key={key}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                projectLink={projectLink}
              
              
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Work