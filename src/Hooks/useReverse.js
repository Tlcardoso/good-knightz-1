import { useEffect, useState } from 'react'
import useWindowSize from './useWindowSize';


const useReverse = (initial, speed, limit) => {

    const [scroll, setScroll] = useState(0);

    const size = useWindowSize();
    const [scale, setScale] = useState(1)

    const [pos, setPos] = useState(scroll)



    const handleNavigation = (e) => {
        const window = e.currentTarget;
        setScroll(window.scrollY);
     };

    useEffect(() => {
        // Control ScrollY moving
        setScroll(window.scrollY);
        window.addEventListener("scroll", (e) => handleNavigation(e));
      }, [scroll])
    
    if(scale > limit){
        return setScale(limit)
    }
    

    if(scroll < pos){
      setPos(scroll)
      setScale(size.width / (initial - pos * speed))
    } 
    
      if(scroll > pos) {
        setPos(scroll)
        setScale(size.width / (initial - pos * speed))
      }

    return scale
}

export default useReverse