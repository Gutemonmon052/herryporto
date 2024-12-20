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
            <img src="/assets/images/heropic-2.jpg" srcSet="/assets/images/heropic-2-300x450.jpg, /assets/images/heropic-2-721×1082.jpg, /assets/images/heropic-2-920x1380.jpg, /assets/images/heropic-2-1080x1620.jpg, /assets/images/heropic-2-1260x1820.jpg, /assets/images/heropic-2-1420x2130.jpg, /assets/images/heropic-2-1560x2340.jpg, /assets/images/heropic-2-1560x2340.jpg, /assets/images/heropic-2-1690x2535.jpg, /assets/images/heropic-2-1810x2715.jpg, /assets/images/heropic-2-1920x2880.jpg, /assets/images/heropic-2-1990x2985.jpg, /assets/images/heropic-2-2048x3072.jpg" sizes="(max-width: 300px) 100vw, (max-width: 720px) 50vw, (max-width: 1080px) 33vw, 25vw" alt="hero-jumbotron" />          </div>
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
