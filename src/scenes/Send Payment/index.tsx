
import Navbar from '@/scenes/navbar';
import Footer from '@/scenes/Footer';
import img5 from "@/assets/img5.png";
import img3 from "@/assets/img3.png";
import img6 from "@/assets/img6.png";
import piggyvest_logo from "@/assets/piggyvest logo.png";



export default function SendPayment() {

  return (
    <div>
        <div><Navbar
        ></Navbar></div>
        <div className={`w-full pt-28`}>
        <div className={`mx-auto md:ml-[52px] ml-6 mb-8`}>
        <div className = {`w-full md:flex items-center mx-auto `}>
            <div className = {`basis-6/12`}>
                <div className = {`text-5xl font-bold text-Emjay-5 md:text-xl64`}>
                    <p className={``}><span className={`text-Emjay-11`}>Send Money </span> To Anyone Anywhere Around The World</p>
                </div>   
                    <div>    
                        <div className = {` text-base font-normal py-5 w-full md:text-lg5`}>
                            <p>Send and receive money from anywhere in</p>
                            <p>the world in minutes.</p>
                        </div>
                        <div className = {`text-base font-medium py-7`}>
                            <button className="rounded-md bg-Emjay-5 md:px-10 py-3 px-7 text-white">Create a free account</button>
                        </div>
                    </div>
            </div>
            <div className = {`basis-6/12 md:-mt-10`}>
                <img src={img6} alt="" />
            </div>
            </div>
        </div>

        
        <div className={`mx-auto w-11/12 mb-7`}>
            <div className={`flex-row m-0 p-0 text-3xl font-semibold pb-6 `}>
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
            <div className={`md:-mr-14 md:ml-14 mx-auto   ml-5`}>
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
}