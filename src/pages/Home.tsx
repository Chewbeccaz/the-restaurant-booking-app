import bgImage from "../img/examplebg.jpg";

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
        <h2>Här kommer: Upptäck vårt unika koncept av filmisk gastronomi.</h2>
        <button>Meny</button>
        <p>och en bild.</p>
      </section>
    </>
  );
};
