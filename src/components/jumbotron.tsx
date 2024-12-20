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
            <img
              src="/assets/images/heropic-2.jpg"
              srcSet="/assets/images/heropic-2-300x450.jpg 300w, /assets/images/heropic-2-721×1082.jpg 721w, /assets/images/heropic-2-920x1380.jpg 920w, /assets/images/heropic-2-1080x1620.jpg 1080w, /assets/images/heropic-2-1260x1820.jpg 1260w, /assets/images/heropic-2-1420x2130.jpg 1420w, /assets/images/heropic-2-1560x2340.jpg 1560w, /assets/images/heropic-2-1560x2340.jpg 2340w, /assets/images/heropic-2-1690x2535.jpg 1690w, /assets/images/heropic-2-1810x2715.jpg 1810w, /assets/images/heropic-2-1920x2880.jpg 2880w, /assets/images/heropic-2-1990x2985.jpg 1990w, /assets/images/heropic-2-2048x3072.jpg 2048w"
              sizes="100vw"
              alt="hero-jumbotron"
            />{" "}
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
        <div></div>
      </div>
    </div>
  );
}
