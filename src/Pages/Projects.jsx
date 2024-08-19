import "./AboutandPorject.css";
const Projects = () => {
  return (
    <>
      <section>
        <div className="container-project">
          <div className="all-container">
            <h2 className="my-h1">
              Here are the some project which I have talked earlier.
            </h2>
            <br />
            <section className="forall">
              <h1>First one is Sushi theamed website</h1>
              <br />
              <button className="btn-link">
                <a href="https://claygro.github.io/sushi-theamed2/">
                  Sushi theamed.
                </a>
              </button>
              <br />
              <h1>
                Sushi theamed website is related to ecommerce site. Eventhough
                it is a website, it looks like a menu. I doesnot add backend in
                this website.
              </h1>
            </section>
            {/* for calculator */}
            <br />
            <section className="forall">
              <h1>Second one is Calculator</h1>
              <br />
              <button className="btn-link">
                <a href="https://claygro.github.io/calculator/">Calculator.</a>
              </button>
              <br />
              <h1>
                Claculator is first project of mine which I have made when I am
                learning Javascript.
              </h1>
            </section>
            {/* for usability hub */}
            <br />
            <section className="forall">
              <h1>Third one is Usability hub</h1>
              <br />
              <button className="btn-link">
                <a href="https://claygro.github.io/usability-hub/">
                  Usability Hub.
                </a>
              </button>
              <br />
              <h1>
                Claculator is first project of mine which I have made when I am
                learning Javascript.
              </h1>
            </section>
            {/* for digital clock */}
            <br />
            <section className="forall">
              <h1>Fourth one is Digital clock</h1>
              <br />
              <button className="btn-link">
                <a href="https://claygro.github.io/digital-clock/">
                  Digital clock
                </a>
              </button>
              <br />
              <h1>
                Digital clock is first project of mine which I have made when I
                am learning React js.
              </h1>
            </section>
            <h1>
              These are the some project which I have made. If u wanna see more
              then go to my github account
            </h1>
            {/* github account */}
            <br />
            <br />
            <div className="github-link">
              <button className="btn-link">
                <a href="https://github.com/claygro">Github.</a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
