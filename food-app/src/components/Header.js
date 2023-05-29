import { Link } from "react-router-dom";

const Title = () => {
    return (
      <div className= "h-28 p-2">
        <img
          className= "h-28 p-2"
          alt="logo"
          src="http://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"
        ></img>
      </div>
    );
  };
const Header = () => {
    return (
      <div className= "flex justify-between bg-pink-50 shadow-lg">
        <Title />
        <div className="nav-items">
          <ul className="flex py-10">
          <li className="px-2">
           <Link to = '/'>
            Home
           </Link>
           </li>
           <li className="px-2">
           <Link to = '/about'>
           About
           </Link>
           </li>
            <li className="px-2">
              <Link to = '/Contact'>
                Contact
              </Link>
            </li>
            <li className="px-2">Cart</li>
            <li>
              <Link to = '/Instamart'>
                Instamart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  };

export default Header;