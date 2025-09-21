
// import React from 'react';
// import "./css/newscard.css";

// const Newscard = (props) => {
//   return (
//     <div className='cards'>
//       <div className="cont">
//         <img src={props.image} alt="ERROR" />
//       </div>
//       <div className="overlay">
//         <h2>{props.title}</h2>
//         <p>🕒 {props.date}</p>
//         <button onClick={() => window.open(props.url, '_blank')}>
//           READ MORE
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Newscard;

import React, { useState, useEffect } from 'react';
import "./css/newscard.css";

const Newscard = (props) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerPoint = 300; // adjust as needed
      if (scrollY > triggerPoint) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`cards ${scrolled ? 'scrolled-bg' : ''}`}>
      <div className="cont">
        <img src={props.image} alt="ERROR" />
      </div>
      <div className="overlay">
        <h2>{props.title}</h2>
        <p>🕒 {props.date}</p>
        <button onClick={() => window.open(props.url, '_blank')}>
          READ MORE
        </button>
      </div>
    </div>
  );
};

export default Newscard;
