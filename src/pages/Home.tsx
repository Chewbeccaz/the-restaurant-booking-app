import bgImage from "../img/examplebg.jpg";
import servingImg from "../img/serving.jpg";
import "../styles/home.css";

export const Home = () => {
  return (
    <>
      <div className="header-container">
        <img src={bgImage} className="bg-img" alt="example-background"></img>
        <div className="text-container">
          <h1>Hollywood Harvest</h1>
          <h3>Lights, camera, flavor!</h3>
        </div>
      </div>
      <section className="about-us">
        <div className="about-us-text">
          <h2>Upptäck vårt unika koncept av filmisk gastronomi.</h2>
          <div className="border"></div>
          <button>Meny</button>
        </div>
        <div className="about-us-img">
          <img src={servingImg} alt="moviescreen-dino"></img>
        </div>
      </section>
    </>
  );
};
