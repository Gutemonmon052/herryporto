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
            <img src="/assets/images/heropic-2.webp" srcSet="/assets/images/heropic-2-300x450.webp, /assets/images/heropic-2-721×1082.webp, /assets/images/heropic-2-920x1380.webp, /assets/images/heropic-2-1080x1620.webp, /assets/images/heropic-2-1260x1820.webp, /assets/images/heropic-2-1420x2130.webp, /assets/images/heropic-2-1560x2340.webp, /assets/images/heropic-2-1560x2340.webp, /assets/images/heropic-2-1690x2535.webp, /assets/images/heropic-2-1810x2715.webp, /assets/images/heropic-2-1920x2880.webp, /assets/images/heropic-2-1990x2985.webp, /assets/images/heropic-2-2048x3072.webp" alt="hero-jumbotron" />
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
