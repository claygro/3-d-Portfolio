import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
    </Link>
  </div>
);
const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi I am <span className="font-semibold">Research Dhamala</span>👋
      <br />A webdeveloper from Nepal.
    </h1>
  ),
  2: <InfoBox text="About me " link="/about" btnText=" more" />,
  3: <InfoBox text="My projects" link="/projects" btnText=" projects" />,
  4: (
    <InfoBox
      text="Any company here to hire me as a front-end webdeveloper?"
      link="/contact"
      btnText="Let's talks"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
