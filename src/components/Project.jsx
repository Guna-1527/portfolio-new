import React from 'react'
import Header from './Header'

const Project = () => {
    const work = [
        {
            id: 1,
            link: "https://netflix-chi-topaz.vercel.app/",
            title: "Netflix Project",
            src: "https://ouch-cdn2.icons8.com/4LpZRCrDSfeou6-QgTwEc_AzhePrzMTyOkcRyiOT96U/rs:fit:456:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvOTU4/LzczMWQxZGE3LTA1/ZGItNGY5MS05ZTdi/LWNmODQyMWRjYjJj/MS5wbmc.png"
        }, {
            id: 2,
            link: "https://sly-eight.vercel.app/",
            title: "Sly - Crypto API Project",
            src: "https://static.vecteezy.com/system/resources/previews/009/394/570/original/3d-illustration-colorful-hand-and-bitcoin-png.png"
        }
    ]
  return (
    <div id='project' className='w-[110rem] h-screen m-auto relative'>
        <Header title={"My Work"}/>
        <div className='text-lime-100 pt-[200px] flex gap-10 '>
            {
                work.map((w, i) => (
                    <div className='projectContainer w-[250px] bg-black rounded-xl mt-10'>
                        <a href={w.link} target="_blank" rel="noopener noreferrer">
                            <div className='p-2'>
                                <img src={w.src} className='w-full h-full object-contain' alt="" />
                                <p className="text-center mt-2 font-semibold text-bg-light pb-2">{w.title}</p>
                            </div>
                        </a>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Project