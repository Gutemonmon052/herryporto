import "../css/jumbotron.css";


export function Jumbotron() {


  return (
    <div>
      <div className="jumbotron" id="home">
        <div className="jumbotron-intro">
          <div className="jumbotron-iden-title">
            <h1>
              HERRY
              <br />
              LIUKAE
            </h1>
          </div>
          <div className="jumbotron-image">
            <div className="cover"></div>
            <img src="/assets/images/heropic-2.jpg" alt="hero-jumbotron" />
          </div>
          <div className="jumbotron-identity">
            <div className="jumbotron-iden-desc">
              <div className="jumbotron-iden-desc-1">
                <div className="jumbotron-iden-prof">
                  <p>Coding Teacher</p>
                </div>
                <div className="desc-1">
                  <span>
                    Creating responsive web applications that are both visually
                    appealing and user-friendly and teaching students the basics
                    of coding concepts
                  </span>
                  <a href="#contact">
                    <div className="btn btn-primary w-fit p-4">Contact Me</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
}
