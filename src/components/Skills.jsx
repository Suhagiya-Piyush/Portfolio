import React from 'react';
import express from '../assets/express.png';
import mongodb from '../assets/mongodb.jpg';
import nodejs from '../assets/nodeJS.png';
import reactjs from '../assets/reactjs.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import tailwind from '../assets/tailwid.jpg';
import boostrap from '../assets/boostrap.png';
import mysql from '../assets/mysql.png';

const Portfolio = () => {
    const cardItems = [
        {
            id : 1,
            logo : html,
            name : 'HTML5',
            link : 'https://www.geeksforgeeks.org/html-tutorial/'
        },
        {
            id : 2,
            logo : css,
            name : 'CSS3',
            link : 'https://web.dev/learn/css'
        },
        {
            id : 3,
            logo : tailwind,
            name : 'Tailwind',
            link : 'https://tailwindcss.com/'
        },
        {
            id : 4,
            logo : boostrap,
            name : 'Boostrap',
            link : 'https://getbootstrap.com/'
        },
        {
            id : 5,
            logo : reactjs,
            name : 'ReactJS',
            link : 'https://react.dev/'
        },
        {
            id : 6,
            logo : mongodb,
            name : 'MongoDB',
            link : 'https://www.mongodb.com/'
        },
        {
            id : 7,
            logo : mysql,
            name : 'MySQL',
            link : 'https://www.mysql.com/'
        },
        {
            id : 8,
            logo : nodejs,
            name : 'NodeJS',
            link : 'https://nodejs.org/en'
        },
        {
            id : 9,
            logo : express,
            name : 'Express',
            link : 'https://expressjs.com/'
        },  
    ]
  return (
    <>
      <div name='Skill' className='max-w-screen-2xl container mx-auto px-4 md:px-10 my-10'>
        <h1 className="text-3xl font-bold mb-5">Skills</h1>
        <span className='underline font-semibold'>My Skills</span>
        <div className='grid grid-cols-1 md:grid-cols-3 my-4 gap-6 mx-auto md:ps-4'>
            {cardItems.map(({id, logo, name, link}) => (
                <div key={id} className='md:w-[360px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-2 cursor-pointer hover:scale-105 hover:bg-[#F5EFFF] duration-200 card'>
                    <img src={logo} className='h-[130px] w-[130px] p-1 rounded-full border-[2px] mx-auto object-cover hover:border-green-500 duration-300' alt="" />
                    <div className='px-2 mt-2'>
                        <h2 className='font-bold text-lg mb-2'>{name}</h2>
                        <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, neque?</p>
                    </div>
                    <div className='px-2 py-4 space-x-3 justify-around'>
                        <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-1 rounded text-sm duration-500'><a href={link} target="_blank" rel="noopener noreferrer">View More</a></button>
                    </div>
                </div>
            )
            )}
        </div>
      </div>
    </>
  )
}

export default Portfolio
