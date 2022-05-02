import { useEffect, useState } from 'react'

const useMoveItems = (initial, limit) => {
  const [scroll, setScroll] = useState(0);
  const [range, setRange] = useState(initial)
  const [pos, setPos] = useState(scroll)

  const handleNavigation = (e) => {
    const window = e.currentTarget;
    setScroll(window.scrollY);
  };

  useEffect(() => {
    // Control ScrollY moving
    window.addEventListener("scroll", (e) => handleNavigation(e));
  }, [scroll])
    
  if (range > limit) return setRange(limit)

  if(range < -1) return setRange(initial)

  if(scroll > pos){
    setPos(scroll)
    setRange((range + pos / 100) * 0.7)
  } 
    
  if(scroll < pos) {
    setPos(scroll)
    setRange(pos / 100)
  }

  return range
}

export default useMoveItems