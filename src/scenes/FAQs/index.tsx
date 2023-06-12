import faqimg from "@/assets/faqimage.png";
import Navbar from '../navbar';
import Footer from '../Footer';



const FAQ = () => {
  return (
    <div className={`w-full`}>
      <Navbar/>
      <div className={`pt-28 pb-10 w-full`}>
        <div className={`mx-auto w-11/12`}>
          <div className={`pb-6`}>
            <img src={faqimg} alt="" />
          </div>

          <div className='font-semibold text-Emjay-3'>
            <div className={`flex  justify-between items-center py-4`}>
              <h2 className={`md:text-xlg text-base`}>How can I open an account with Spgsl?</h2>
              <span className='rounded-full bg-Emjay-11 text-white px-9 md:text-lg3 text-base py-2 md:px-14'>Answer</span>
            </div>
            <div className={`flex  justify-between items-center py-4`}>
              <h2 className={`md:text-xlg text-base`}>How many currencies can i transact in?</h2>
              <span className='rounded-full bg-Emjay-11 text-white px-9 md:text-lg3 text-base py-2 md:px-14'>Answer</span>
            </div>
            <div className={`flex  justify-between items-center py-4`}>
              <h2 className={`md:text-xlg text-base`}>Is Spgsl for businesses and individuals?</h2>
              <span className='rounded-full bg-Emjay-11 text-white px-9 md:text-lg3 text-base py-2 md:px-14'>Answer</span>
            </div>
            <div className={`flex  justify-between items-center py-4`}>
              <h2 className={`md:text-xlg text-base`}>How can i open an account with Spgsl?</h2>
              <span className='rounded-full bg-Emjay-11 text-white px-9 md:text-lg3 text-base py-2 md:px-14'>Answer</span>
            </div>
            <div className={`flex  justify-between items-center py-4`}>
              <h2 className={`md:text-xlg text-base`}>How many currencies can I transact in?</h2>
              <span className='rounded-full bg-Emjay-11 text-white px-9 md:text-lg3 text-base py-2 md:px-14'>Answer</span>
            </div>
            <div className={`flex  justify-between items-center py-4`}>
              <h2 className={`md:text-xlg text-base`}>Is Spgsl for businesses and individuals?</h2>
              <span className='rounded-full bg-Emjay-11 text-white px-9 md:text-lg3 text-base py-2 md:px-14'>Answer</span>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default FAQ