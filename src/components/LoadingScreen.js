import logo from "../images/Logo.png";
import logoBig from "../images/LogoBig.png";

function LoadingScreen() {
  return (
    <div className="bg-dark-blue max-w-max max-h-screen">
      {/* Logo for screens smaller than 800px */}
      <div className=" max-w-md absolute-center">
        <img src={logo} className="md:hidden" />
      </div>

      <div className="absolute-center max-w-lg">
        <img src={logoBig} className="hidden md:block" />
      </div>
      {/* Logo for screens 800px and wider */}
    </div>
  );
}

export default LoadingScreen;
