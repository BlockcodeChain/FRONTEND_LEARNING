import image from "../assests/rimage.png"
import {Element} from "react-scroll"
import { motion } from "framer-motion";
const Home = () => {
  return (
   <Element name="home">
    <section className="min-h-screen flex pt-20 items-center text-white ">
        {/* left  */}
        <div className="w-[60%] -10 h-150  ">
             
        </div>
        {/* right */}
           <div className="w-[40%] h-150 flex  ">
          <motion.img
    src={image}
    alt="Developer"
    className="w-full object-contain rounded-full "
    animate={{
      y: [0, -20, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
/>
        </div>

    </section>

   </Element>
  )
}

export default Home