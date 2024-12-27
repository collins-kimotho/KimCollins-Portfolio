import React from 'react'

const Hero = () => {
  return (
    <section
        id='home'
        className='pt-28 lg:pt-36'
    >
        <div
            className=' lg:grid lg:grid-cols-2 items-center lg:gap-10'
        >
            <div>

                <div>
                    <figure>
                        <img src="/images/avatar-1.jpg"
                            alt="Collins Kimotho portrait"
                            width={40} 
                            height={40}
                            className='img-cover'
                        
                        />
                    </figure>
                    <div className="">
                        <span>
                            <span></span>
                        </span>
                        Available for work

                    </div>
                </div>
                <h2>
                    Building Scalable Modern Websites for the Future
                </h2>

                <div className="">
                    ButtonPrimary

                    ButtonOutline
                </div>
            </div>
            <div className="">
                <figure className="">
                    <img 
                        src="/images/hero-banner.png" 
                        width={665}
                        height={800}
                        alt="Collins Kimotho" 
                        className='w-full'
                    />
                </figure>
            </div>

        </div>

    </section>
  )
}

export default Hero