import {useState} from 'react';

 const Throttling = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [isScrolling,setIsScrolling] = useState(true)
  const [count,setCount] = useState(0)

  const handleScroll = event => {
    setScrollTop(event.currentTarget.scrollTop);
    if(isScrolling) {
        setCount((prev)=>prev+1)
        setIsScrolling(false)
        setTimeout(()=>{
            setIsScrolling(true)
        },2000)
    } 
  };

  return (
    <div>
      <h2>Scroll Top: {scrollTop}</h2>
      <h1>{count}</h1>
      <div
        style={{
          border: '3px solid black',
          width: '400px',
          height: '100px',
          overflow: 'scroll',
        }}
        onScroll={handleScroll}
      >
        {[...Array(20)].map((_, index) => (
          <p key={index}>Content {index}</p>
        ))}
      </div>
    </div>
  );
}

export default Throttling
