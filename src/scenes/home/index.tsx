import HomeText from "@/assets/HomeText.png";
import Hometext2 from "@/assets/Hometext2.png";
import img1 from "@/assets/img1.png";
import img2 from "@/assets/img2.png";
import img3 from "@/assets/img3.png";
import img4 from "@/assets/img4.png";
import Hometext3 from "@/assets/Hometext3.png";
import piggyvest_logo from "@/assets/piggyvest logo.png";
import { motion } from "framer-motion";



const Home = () => {
    const flexBetween = "flex justify-between"
  return (
    <div className={`w-full pt-28`}>
        <motion.div className = {`w-11/12 md:flex mx-auto overflow-hidden items-center justify-center`}>
            <div className = "z-10  md:basis-3/5">
                <motion.div
                     className="md:-mt-20"
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true, amount: 0.5 }}
                     transition={{ duration: 0.5 }}
                     variants={{
                       hidden: { opacity: 0, x: -50 },
                       visible: { opacity: 1, x: 0 },
                     }}
                > 
                    <div className="relative">
                        <div className="before:absolute before:-left-20 before:z-[-1]">
                            <img alt="home-page-text" src={HomeText} />
                         </div>
                    </div>
                    <p className = {` text-xl font-normal mt-9`}>
                        Send and receive money from anywhere in
                        the world in minutes.
                    </p>
                </motion.div>

                    <motion.div
                        className="mt-8 mb-5 flex items-center text-base font-normal"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                          hidden: { opacity: 0, x: -50 },
                          visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <button className="rounded-md bg-Emjay-5 px-10 py-3 text-white">Create a free account</button>
                    </motion.div>
                </div> 
                <div 
                    className="flex basis-3/5 justify-center md:z-10
                    md:ml-40 md:mt-16 md:justify-items-end"
                >
                    <img src={img1} alt="" />
                </div>
        </motion.div>


        <div className={`mx-auto w-11/12 pb-7`}>
            <div className="flex-row m-0 p-0 text-3xl font-semibold pb-6 md:-mt-20">
                <p >Our Partners</p>
            </div>
            <div className={`grid grid-cols-5 gap-7 overflow-hidden md:gap-11`}>
                <img src={piggyvest_logo} alt="" />
                <img src={piggyvest_logo} alt="" />
                <img src={piggyvest_logo} alt="" />
                <img src={piggyvest_logo} alt="" />
                <img src={piggyvest_logo} alt="" />

            </div>
        </div>

        <div className='bg-Emjay-13 py-6' >
            <div className={` mx-auto w-4/6 font-semibold md:text-4xl text-Emjay-11`}>
                Say goodbye to the <span className='text-Emjay-5 '>hassles</span>  of international money 
                transfers and start sending money with ease today.
            </div>
        </div>
        <div className={`${flexBetween} p-0 m-0 gap-0 mt-6`}>
            <div className={`${flexBetween}`}>
                <img src={img2} alt="" className='w-full md:mt-24 ml-16 justify-center ' />
            </div>
            <div className={`m-0 p-0`}>
                <img src={Hometext2} alt=""  className='w-full -mt-12 '/>
            </div>
        </div>

        <div className={`${flexBetween} w-11/12 py-6 mx-auto gap-12`}>
            <div className={`mt-36 `}>
                <img src={Hometext3} alt="" />
            </div>
            <div className={``}>
                <img src={img4} alt="" />
            </div>
        </div>

        <div className={`w-11/12 py-6 mx-auto md:flex  `}>
            <div className={`md:w-[750px] md:mt-5`}>
                <div className = {` md:text-base3 font-semibold text-xlg`}>
                    <p >
                        Fast and easy to use
                    </p>
                    <p className={`text-Emjay-5`}>
                        Check out our Demo
                    </p>
                </div>
                <div className = {`text-base font-medium py-6`}>
                <button className="rounded-md bg-Emjay-5 md:px-10 py-3 px-7 text-white">Watch Demo</button>
                </div>
            </div>
            <div className={`w-full`}>
                <img src={img3} alt="" className={`w-full`} />
            </div>
        </div>
    </div>
  )
}

export default Home