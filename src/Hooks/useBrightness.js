import { useEffect, useState } from 'react'

const useBrightness = () => {
  const [scroll, setScroll] = useState(0);
  const [clarity, setClarity] = useState(1)

  const handleNavigation = (e) => {
    const window = e.currentTarget;
    setScroll(window.scrollY);
  };

  useEffect(() => {
    // Control ScrollY moving
    setScroll(window.scrollY);
    window.addEventListener("scroll", (e) => handleNavigation(e));

    //control Brightness with scroll move
    if(scroll === 0 ) return setClarity(1)

    if(scroll >= 1300) return setClarity(0)

    setClarity(1 - (scroll/1300))
  }, [scroll])

  return clarity
}

export default useBrightness