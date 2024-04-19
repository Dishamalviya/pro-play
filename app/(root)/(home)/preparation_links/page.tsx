
import React from 'react';

const YouTubePage: React.FC = () => {
    
  const youtubeLinks = [
    { title:'⚽️- click me and prepare for Data Structures and Algorithms♠️', url: 'https://youtube.com/playlist?list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz&si=ZGICDeFnH3_1QIzB' },
    
    { title:'⚽️- click me and prepare for Object-Oriented programming♠️', url: 'https://youtu.be/u99wAoBjDvQ?si=6BwLm1wHOC2VZqUP' },
    
    { title:'⚽️- click me and prepare for Data Base Management System♠️', url: 'https://youtu.be/kBdlM6hNDAE?si=MJiuSOEIeM8GOANe' },
  
    { title:'⚽️- click me and prepare for the Group Discussion fresh Topics♠️', url: 'https://youtu.be/ypj5z1Lq6a4?si=HurgPWgMfywLDBUA' },
 
    { title:'⚽️- click me and prepare for Non-Technical HR Questions♠️', url: 'https://youtu.be/CwUBnhDVKTg?si=RBHNFAmzFwBcuNus' },
  ];


  return (
    <div>
      <h1 className='text-white glassmorphism py-2  text-center font-extrabold text-3xl'>Resources for interview preparations🔗</h1>
      <p>
        .
        .
      </p>
      <p>
        .
        .
      </p>
   
      <ul>
        {youtubeLinks.map((link, index) => (
          <li key={index}>
            <a className='text-4xl text-blue-300'href={link.url} target="_blank" rel="noopener noreferrer">
              {link.title}
            </a>
            <br />
            <br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};


export default YouTubePage;