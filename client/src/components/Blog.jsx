import React from 'react'
import Navbar from './Navbar'
import { useEffect, useState } from 'react'
import Bfooter from './Bfooter'


const Blog = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetch(`${apiURL}/api/posts`)
      .then(response => response.json())
      .then(data => {
        setPosts(data)
        setLoading(false)
      })
      .catch(error => {
        console.log('Error fetching posts: ', error);
        setLoading(false)
      })
  },[])

    if (loading){
      return (
        <div className="">
          Loading posts...
        </div>
      )
    }
   
    


  return (
    <div className="section">
      <div className="container">
        <div className='flex items-center justify-between mb-8'>
          <figure className=''>
            <img src="./images/logo.svg" alt=""/>
          </figure>
          <h2 className='headline-2'>
            Kim's Blog
          </h2>
        </div>

        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {
              posts.map(({ creator, title, link, pubDate, content, category }, index) => {
                // Extract the thumbnail URL from the content
                const thumbnailMatch = content.match(/<img[^>]+src="([^">]+)"/);
                const thumbnailUrl = thumbnailMatch ? thumbnailMatch[1] : './images/medium.jpg';

                const formattedDate = new Date(pubDate).toLocaleDateString();
                return (
                  <div 
                    className=""
                    key={index}
                  >
                    <div>
                      <figure className='img-box aspect-video rounded-lg'>
                        <img
                          className='img-cover'
                          src={thumbnailUrl} 
                          alt="Thumbnail" 
                          onError={(e) => { e.target.onError = null; e.target.src = './images/medium.jpg'}}
                        />
                      </figure>
                    </div>
                    <p className='h-8 text-sm text-zinc-600 mt-4'
                    >
                      {formattedDate}
                    </p>
                    <h3 className='title-1 mb-3'>
                      {title}
                    </h3>
                  
                    <p className='mb-4 text-2xl text-zinc-400'>
                      by {creator}

                    </p>
                    <p className="mb-8 text-zinc-500">
                      Tags: {" "}
                      {category && category.length > 0 ? category.join(", ") : "No Tags available"}
                    </p>
                                    
                    <button className='btn btn-primary mb-4 items-center'>
                      <a
                       href={link}
                       target='_blank'
                      >
                        Read More
                      </a>
                      <span className='material-symbols-rounded'>
                        chevron_right
                      </span>
                    </button>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
      <Bfooter/>
    </div>
  )
}

export default Blog