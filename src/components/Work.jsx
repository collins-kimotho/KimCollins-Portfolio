import React from 'react'
import ProjectCard from './ProjectCard';

const works = [
  {
    imgSrc: '/images/newsapp.png',
    title: 'DailyTimes: News App',
    tags: ['API', 'Web-design', 'Development'],
    projectLink: 'https://github.com/collins-kimotho/DailyTimes'
  },
  {
    imgSrc: '/images/financeApp.png',
    title: 'Financial Advising Landing Page',
    tags: ['Web-design', 'React', 'Javascript'],
    projectLink: 'https://github.com/collins-kimotho/Finance-App'
  },
  {
    imgSrc: '/images/scraping.webp',
    title: 'Web Scraping Projects',
    tags: ['Python', 'API', 'Web-scraping', 'Selenium'],
    projectLink: 'https://github.com/collins-kimotho/Scrapping-Data'
  },
  {
    imgSrc: '/images/finsight.png',
    title: 'Budgeting app landing page',
    tags: ['Web-design', 'Development', 'React'],
    projectLink: 'https://collins-kimotho.github.io/FinSight/'
  },
  {
    imgSrc: '/images/portfolio.png',
    title: 'Personal portfolio',
    tags: ['React', 'Tailwind'],
    projectLink: 'https://github.com/collins-kimotho/KimCollins-Portfolio.git'
  },
  {
    imgSrc: '/images/project-6.jpg',
    title: 'vCard Personal portfolio',
    tags: ['Web-design', 'Development'],
    projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
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