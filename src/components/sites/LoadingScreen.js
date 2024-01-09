import logo from "../../images/Logo.png";
import logoBig from "../../images/LogoBig.png";

function LoadingScreen() {
  return (
    <div className=" max-w-max max-h-screen z-20  ">
      {/* Logo for screens smaller than 800px */}
      <div className=" max-w-md absolute-center flex columns-1 flex-col justify-center align-middle">
        <img src={logo} className="md:hidden  " />
        <span class="loader  absolute-center mt-28"></span>
      </div>

      <div className="absolute-center max-w-lg ">
        <img src={logoBig} className="hidden md:block " />
      </div>
      {/* Logo for screens 800px and wider */}
    </div>
  );
}

export default LoadingScreen;
