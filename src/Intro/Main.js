import './Main.css';
import first from './image/1.png'
import title from './image/2.png'
import front from './image/3.png'
import last from './image/4.png'
import base from './image/b69ec631-71fc-40ea-a804-0e3b1799f8f2-istock-939202028.jpg'
import contentImgMorning from './image/Screenshot002-1920x1080-c73ea06cc196477f079f01965f2d6830.jpg'
import contentImgAfternoon from './image/view-from-cascade-yerevan-armenia-cs-3000-af233802a806.jpg'
import contentImgEvening from './image/evening.jpg'
import contentImgNight from './image/nightYerevan.jpg'
import { motion } from "framer-motion"
import Menu from '../Content/Content';
import { useLayoutEffect, useState } from 'react';


function Main() {

  window.addEventListener('scroll', (e) => {
    document.body.style.cssText = `--scrollTop: ${window.scrollY}px`
  })
  const date = new Date();
  const [background, setBackground] = useState(null);
  
  useLayoutEffect(()=>{
    if(date.getHours()>=6 && date.getHours()<12){
      setBackground(contentImgMorning)
    }
    if(date.getHours()>=12 && date.getHours()<16){
      setBackground(contentImgAfternoon)
     }
    if(date.getHours()>=16 && date.getHours()<19){
      setBackground(contentImgEvening)
    }
    if(date.getHours()>=19 && date.getHours()+6<31){
      setBackground(contentImgNight)
    }
  },[])
 
  return (
      <div className="Main">
    <header className='main-header' >
      <div className='layers' >
        <div className='layer-header' >
          <div className='layer-title' >
          {/* <motion.h1
            className='yerevanTitle'
            initial={{y: 0}}
            animate={{y:20}}
            transition={{duration: 1,repeat:Infinity,ease: 'easeInOut',repeatType: 'mirror'}}
          >Yerevan</motion.h1>  */}
          </div>
      </div>
          <div className='layer layer_base' style={{ backgroundImage: `url(${base})`}} > </div>
          <div className='layer layer_front' style={{ backgroundImage: `url(${front})`}} ></div>
          <div className='layer layer_title' style={{ backgroundImage: `url(${title})`}} ></div>
          <div className='layer layer_last'  style={{ backgroundImage: `url(${last})`}} ></div>
          <div className='layer layer_first' style={{ backgroundImage: `url(${first})`}} ></div>
      </div>
    </header>
      <article className='main-article'  style={{backgroundImage: `url(${background})`}} >
        <Menu/>
      </article>
    </div>
  );
}

export default Main;
