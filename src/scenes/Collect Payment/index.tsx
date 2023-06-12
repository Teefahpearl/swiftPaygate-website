import Navbar from '@/scenes/navbar';
import Footer from "@/scenes/Footer";
import img5 from "@/assets/img8.png";
import img3 from "@/assets/img3.png";
import img6 from "@/assets/img7.png";
import piggyvest_logo from "@/assets/piggyvest logo.png";
import { Link } from 'react-router-dom';
Link


const CollectPayment = ()  => {

    
  return (
    <div className='w-full mx-auto'>
        <div><Navbar
        ></Navbar></div>
        <div className={`w-full pt-24`}>
        <div className={`mx-auto w-11/12 `}>
        <div className = {`w-full md:flex items-center mx-auto gap-9 `}>
            <div className = {``}>
                <div className = {`text-5xl font-bold text-Emjay-5 md:text-xl64`}>
                    <p className={``}>You’re limitless! <span className={`text-Emjay-11`}>Receive money</span> from anywhere in the world</p>
                </div>   
                    <div>    
                        <div className = {` text-base font-normal py-5 w-full md:text-lg5`}>
                            <p>Sign up today and start receiving money from</p>
                            <p>anywhere in the world with ease!</p>
                        </div>
                        <div className = {`text-base font-medium py-7`}>
                            <button className="rounded-md bg-Emjay-5 md:px-10 py-3 px-7 text-white">Create a free account</button>
                        </div>
                    </div>
            </div>
            <div className = {`md:mt-0 `}>
                <img src={img6} alt="" />
            </div>
            </div>
        </div>
        
        <div className={`mx-auto w-11/12 pt-10 pb-14`}>
            <div className={`flex-row m-0 p-0 text-3xl font-semibold pb-4 pt-6`}>
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

        <div className='w-full overflow-hidden'>
            <div className={`w-11/12 mx-auto`}>
                <img src={img5} alt="" />
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
    <div>
        <Footer/>
    </div>
    </div>
    );
};

export default CollectPayment;



        