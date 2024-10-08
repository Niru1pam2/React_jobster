import { Link } from "react-router-dom";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";

function Landing() {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla est
            sint id quia, veniam magnam debitis mollitia exercitationem ut,
            ullam doloribus in rerum. Sint, iusto nemo possimus ipsum provident
            velit.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="joblogo" className="img main-img" />
      </div>
    </Wrapper>
  );
}

export default Landing;
