import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";

//redux
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { signOut } from "../../redux/reducers/auth/auth.action";

//component
import SignUp from "../Auth/SignUp";
import Sigin from "../Auth/Sigin";

function MobileNav({Sigin,SignUp}) {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  //const [user, setUser] = useState({});
  
  const reduxState = useSelector((globalState) =>globalState.user.user.user);
  console.log(reduxState);

  const dispatch = useDispatch();
  return (
    <div className="flex w-full items-center justify-between lg:hidden">
      <div className="w-28">
        <img
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt=""
          className="w-full h-full"
        />
      </div>
      <div className="flex items-center gap-3 relative">
        <button className="bg-zomato-400 text-white py-2 px-3 rounded-full">
          Use App
        </button>
        {reduxState?.fullName ? (
          <>
            <div
              onClick={() => setIsDropDownOpen((prev) => !prev)}
              className="border p-2 border-gray-300 text-zomato-400 w-20 h-20 rounded-full"
            >
              <img
                src="https://image.shutterstock.com/image-illustration/3d-business-people-awatar-businessman-260nw-1342734257.jpg"
                alt=""
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div>
              {reduxState.fullName}
            </div>
            {isDropDownOpen && (
              <div className="absolute shadow-lg py-3 -bottom-20 -right-4 w-full bg-white z-20 flex-col gap-2 p-10 ">
                <button onClick={()=>dispatch(signOut())}>Sign Out</button>
              </div>
            )}
          </>
        ) : (
          <div>
            <span
              onClick={() => setIsDropDownOpen((prev) => !prev)}
              className="border p-2 border-gray-300 text-zomato-400 rounded-full"
            >
              <FaUserAlt className="w-full h-full" />
            </span>

            {isDropDownOpen && (
              <div className="absolute shadow-lg py-3 -bottom-20 -right-4 w-full bg-white z-20 flex-col gap-2 ">
                <div>
                  <button onClick={Sigin}>Sign In</button>
                </div>
                <div>
                  <button onClick={SignUp}>Sign up</button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function LargeNav({Sigin,SignUp}) {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  //const [user, setUser] = useState({});
  const reduxState = useSelector((globalState) =>globalState.user.user.user);
  const dispatch = useDispatch();
  return (
    <>
         
      <div className="hidden lg:inline container px-20 mx-auto">
        <div className="gap-4 w-full items-center justify-around flex">
          <div className="w-20">
            <img
              src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
              alt=""
            />
          </div>
          
          <div className="w-3/4 bg-white shadow-md p-3 flex items-center gap-3 border border-gray-200 rounded ">
            <div className="flex items-center gap-2 border-r-2 border-gray-300 pr-2">
              <span className="text-zomato-400">
                <HiLocationMarker />
              </span>
              <input
                type="text"
                placeholder="Colompo 12"
                className="w-full focus:outline-none"
              />
              <IoMdArrowDropdown />
            </div>
            <div className="flex w-full items-center gap-2">
              <RiSearch2Line />
              <input
                type="search"
                placeholder="Search for restaurant, cuisine or a dish"
                className="w-full focus:outline-none"
              />
            </div>
          </div>
          {reduxState?.fullName ? (
            <div className="relative w-20">
              <div
                onClick={() => setIsDropDownOpen((prev) => !prev)}
                className="border border-gray-300 text-zomato-400 w-full h-20 rounded-full"
              >
                <img
                  src="https://cdn1.vectorstock.com/i/1000x1000/36/15/businessman-character-avatar-isolated-vector-12613615.jpg"
                  alt=""
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="text-center border">
              {reduxState.fullName}
            </div>
              {isDropDownOpen && (
                <div className="absolute shadow-lg py-3 -bottom-20 -right-4 w-full bg-white z-20 flex flex-col gap-2">
                  <button onClick={()=>dispatch(signOut())}>Sign Out</button>
                </div>
              )}
            </div>
          ) : (
            <div className=" flex gap-4">
              <button className="border border-red-300 p-1 rounded-full text-red-500 text-xl hover:bg-red-300 w-40 shadow-md"
              onClick={Sigin}
              
              >
                Login
              </button>
              <button className="border border-red-300 p-1 rounded-full text-red-500 text-xl hover:bg-red-300 w-40 shadow-md"
              onClick={SignUp}
              >
                Signup
              </button>
            </div>
          )}
        </div>
      </div>
      
    </>
  );
}

function Navbar() {
const[openSignIn, setOpenSignIn]= useState(false);
const [openSignUp,setOpenSignUp]=useState(false);

const openSignInModal = () => setOpenSignIn(true);
const openSignUpModal = ()=>setOpenSignUp(true);


  return (
    
    <>
    <Sigin isOpen={openSignIn} setIsOpen={setOpenSignIn}/>
    <SignUp isOpen={openSignUp} setIsOpen={setOpenSignUp}/>
      <nav className="p-4 flex bg-white shadow-md lg:shadow-none w-full items-center">
        <MobileNav Sigin={openSignInModal} SignUp={openSignUpModal} />
        <LargeNav Sigin={openSignInModal} SignUp={openSignUpModal} />
      </nav>
    </>
  );
}

export default Navbar;
