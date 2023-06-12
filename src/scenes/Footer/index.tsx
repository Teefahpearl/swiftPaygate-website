import footerimg from "@/assets/footerimg.png";
import Logo from "@/assets/Logo.png"



const Footer = () => {
  return (
    <div className={` w-11/12`}>
        <div className={`mx-auto w-4/6`}>
            <img src={footerimg} alt="" />
        </div>
        <div className={`flex flex-wrap pt-10 justify-start ml-12  gap-11`}>
            <div className='basis-1/4 w-40 '>
                <img src={Logo} alt="" className='w-36'/>
            </div>
            <div className=' text-Emjay-3'>
                <h4 className='font-medium text-lg2  h-10'>Product</h4>
                <p className='font-normal text-base2 h-8'>Lorem ipsum dolor s</p>
                <p className='font-normal text-base2 h-8'>Lorem ipsum dolor</p>
                <p className='font-normal text-base2 h-8'>Lorem ipsum dolor sit amet</p>
                <p className='font-normal text-base2 h-8'>Lorem ipsum dolor sit</p>
                <p className='font-normal text-base2 h-8'>Lorem ipsum dolor sit</p>
                <p className='font-normal text-base2 h-8'>Lorem ipsum</p>
            </div>
            <div className=' text-Emjay-3'>
                <h4 className='font-medium text-lg2  h-10'>Support</h4>
                <p className='font-normal text-base2  h-8'>Lorem ipsum dolor s</p>
                <p className='font-normal text-base2 h-8'>Lorem ipsum</p>
                <p className='font-normal text-base2 h-8'>Lorem ipsum dolor sit amet</p>
                <p className='font-normal text-base2 h-8'>Lorem ipsum dolor sit</p>
                <p className='font-normal text-base2 h-8'>Lorem ipsum dolor sit</p>
            </div>
            <div className='  text-Emjay-3'>
                <h4 className='font-medium text-lg2 h-10'>Contact</h4>  
                <p className='font-normal text-base2 h-8'>Lorem ipsum dolor s</p>
                <p className='font-normal text-base2 h-8'>Lorem ipsum</p>
                <p className='font-normal text-base2 h-8'>Lorem ipsum dolor s</p>
                <p className='font-normal text-base2 h-8'>Lorem ipsum</p>          
            </div>
            <div className={` text-Emjay-3 -mr-9`}>
                <h4 className='font-medium text-lg2 h-10'>Documentation</h4>
                <p className='font-normal text-base2 h-8'>Lorem ipsum dolor s</p>
                <p className='font-normal text-base2 h-8'>Lorem ipsum</p>
                <p className='font-normal text-base2 h-8'>Lorem ipsum dolor sit</p>
                <p className='font-normal text-base2 h-8'>Lorem ipsum</p>            
            </div>
        </div>
    </div>
  )
}

export default Footer