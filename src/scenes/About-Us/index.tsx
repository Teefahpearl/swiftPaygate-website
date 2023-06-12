import Aboutimg from "@/assets/aboutimg.png";
import Navbar from "@/scenes/navbar";
import Footer from "@/scenes/Footer";
import { motion } from "framer-motion";


const aboutus = () => {
    const childVariant = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
      };

  return (
    <div className={`w-full`}>
        <div>
            <Navbar />
        </div>
        <div className={`w-11/12 pt-24 mx-auto flex-wrap pb-8`}>
            <div className={`text-Emjay-5 font-black text-6xl text-center py-2`}>
                About Us
            </div>
        
            <motion.div
                className='w-full font-medium md:text-lg4 text-sm'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }} 
            >
                <p className={`py-3`}>
                    Spgsl is a product that allows you to receive money from anywhere around the world with ease. Say 
                    goodbye to traditional money transfer methods that are slow, expensive, and unreliable. Our platform 
                    offers a fast, secure, and convenient way to receive payments from abroad, whether you're running a 
                    business or receiving funds from friends or family overseas.
                </p>

                <p className={`py-3`}>
                    With our user-friendly interface, you can set up your account and start receiving payments in just a few 
                    clicks. We support multiple currencies and offer competitive exchange rates, so you can receive 
                    payments in your local currency without worrying about conversion fees.
                </p>

                <p className={`py-3`}>
                    Our advanced security features ensure that your transactions are processed securely, protecting you 
                    from fraud and ensuring that your money arrives safely. Plus, our customer support team is always 
                    available to assist you with any questions or concerns.
                </p>

                <p className={`py-3`}>
                    Don't let distance and borders stand in the way of receiving the money you need. Sign up for our fintech 
                    product today and start receiving payments from anywhere around the world with ease.
                </p>
            </ motion.div>
            <motion.div 
                variants={childVariant}
                className={`w-10/12 flex justify-center flex-wrap text-center font-semibold mx-auto gap-9`}
            >
                <div>
                    <img src={Aboutimg} alt="" className='w-[208px]'/>
                    <p>John Smart</p>
                    <p className={`text-Emjay-9`}>CEO</p>
                </div>
                <div>
                    <img src={Aboutimg} alt="" className='w-[208px]' />
                    <p>John Smart</p>
                    <p className={`text-Emjay-9`}>CTO</p>
                </div>
                <div>
                    <img src={Aboutimg} alt="" className='w-[208px]' />
                    <p>John Smart</p>
                    <p className={`text-Emjay-9`}>COO</p>
                </div>
            </motion.div>

        </div>
        <Footer />
    </div>
    
  )
}

export default aboutus