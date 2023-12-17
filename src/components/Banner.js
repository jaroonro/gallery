import { useState, useEffect } from "react";
function Banner(props){
    const {banners,setSearchText} = props;
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
          // Update the current index to the next banner
          setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
        }, 5000); // Set the interval to 5000 milliseconds (5 seconds)
    
        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
      }, [banners.length]);
    
    return(
        <div className='banner'>
            <img src={banners[currentIndex].src} alt={banners[currentIndex].title} onClick={()=>{setSearchText(banners[currentIndex].title)}}/>
        </div>
    )
}
export default Banner;