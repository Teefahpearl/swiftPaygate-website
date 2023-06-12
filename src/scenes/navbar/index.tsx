import { useState, useEffect } from "react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Link } from "react-router-dom";



const Navbar = () => {
    const flexBetween = "flex items-center justify-evenly";
    const textdeco = "transition duration-500 hover:text-Emjay-6 ";
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const [ isTopOfPage, setIsTopOfPage ] = useState<boolean>(true);
    const navbg = isTopOfPage ? "" : "bg-Emjay-4 drop-shadow";

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY === 0) {
            setIsTopOfPage(true);
          }
          if (window.scrollY !== 0) setIsTopOfPage(false);
        }
        window.addEventListener("scroll", handleScroll);
        return() => window.removeEventListener("scroll", handleScroll);
      }, []);

  return <nav>
        <div className={`${flexBetween} ${navbg} fixed top-0 z-30 w-full py-6 `}>
            <div className={`${flexBetween} mx-auto w-11/12`}>
                <div className={`${flexBetween} w-full gap-40`}>
                    <img src={Logo} alt="logo" width={118}/>

                    {isAboveMediumScreens ? (
                    <div className={`${flexBetween}`} >
                        <div className={`${flexBetween} gap-10 text-base font-semibold`}>
                            <Link 
                            to="/">
                                <p className={` ${textdeco} `}>Home</p>
                            </Link>

                            <Link
                                to="/SendpaymentPage"
                            >
                                <p className={` ${textdeco} `}>Send Payment</p>
                            </Link>
                            <Link
                                to="/Collectpayment"
                            >
                            <p className={` ${textdeco} `}>Collect Payment</p>
                            </Link>
                            <Link
                                to="/FAQpage"
                            >
                            <p className={` ${textdeco} `}>FAQs</p>
                            </Link>
                            <Link
                                to="/About_Us page">
                                <p className={` ${textdeco} `}>About Us</p>
                            </Link>
                        <div className={`${flexBetween} gap-10`}>
                            <p className={`text-Emjay-5`}>Log in</p>
                            <button className="rounded-md bg-Emjay-5 px-10 py-2 text-white">Create account</button>
                        </div>
                        </div>

                    </div>
                    ) : (
                        <button
                            className="rounded-full bg-Emjay-5 p-2"
                            onClick={() => setIsMenuToggled(!isMenuToggled)}
                        >
                            <Bars3Icon className="h-6 w-6 text-white" />
                        </button>
                    )}
                </div>
            </div>
        </div>

        {/* MOBILE MENU MODAL */}
        {!isAboveMediumScreens && isMenuToggled && (
            <div className="fixed right-0 bottom z-40 h-full w-[300px] bg-Emjay-11 drop-shadow-xl">
                {/* { CLOSE ICON} */}
                <div className="flex justify-end p-12">
                    <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                        <XMarkIcon className=" h-6 w-6 text-white" />
                    </button>
                </div>
                <div >
                    {/* MENU ITEMS */}
                    <div className="ml-[33%] flex flex-col gap-8 text-base">
                    <Link 
                            to="/">
                            Home
                            </Link>

                            <Link
                                to="/SendpaymentPage"
                            >
                            Send Payment
                            </Link>
                            <Link
                                to="/Collectpayment"
                            >
                            Collect Payment
                            </Link>
                            <Link
                                to="/FAQpage"
                            >
                            FAQs
                            </Link>
                            <Link
                            to="/About_Us page">
                                About Us
                            </Link>
                            <p className={`text-Emjay-5`}>Log in</p>
                            <button className="rounded-md bg-Emjay-5 px-10 py-2 text-white">Create account</button>
                        </div>
                </div>
            </div>
        )}
    </nav>
}
export default Navbar