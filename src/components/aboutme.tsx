import "../css/aboutme.css";

export function AboutMe() {
  return (
    <div>
      <div className="aboutme" id="about">
        <div className="aboutme-content">
          <div className="aboutme-desc" id="me">
            <div className="aboutme-title">
              <div className="aboutme-image">
                <div className="aboutme-cover"></div>
                <img src="/assets/images/heropic-1.svg" alt="hero-jumbotron" />
              </div>
              <h2>ME</h2>
            </div>
            <p>
              Hello, I&apos;m Herry Daniel Prasetia Liukae, a dedicated coding
              instructor with a passion for empowering others through
              technology. I specialize in website development, particularly
              Front-End technologies, and have hands-on experience in building
              enterprise management systems (ERP) using Odoo. Additionally, I
              explore creative coding in Roblox Studio with the LUA programming
              language.
            </p>
          </div>
        </div>
        <div className="aboutme-content">
          <div className="aboutme-desc">
            <p>
              <b>Core Skills</b>
            </p>
            <ul>
              <li>
                <b>Front-End Development</b>: Proficient in HTML, CSS,
                JavaScript, and other web technologies to create responsive and
                engaging user interfaces.
              </li>
              <li>
                <b>Back-End Development</b>: Skilled in PHP and SQL for building
                scalable and efficient server-side solutions.
              </li>
              <li>
                <b>ERP Implementation</b>: Experienced in customizing and
                deploying Odoo ERP for enterprise-level management systems.
              </li>
              <li>
                <b>Creative Programming</b>: Adept at scripting and game
                development using LUA in Roblox Studio.
              </li>
            </ul>
          </div>
          <div className="aboutme-desc">
            <p>
              <b>Key Values</b>
            </p>
            <p>
              I believe in delivering results with a strong emphasis on
              timeliness, attention to detail, and clear communication. My work
              philosophy revolves around continuous learning and creating
              meaningful solutions that enhance user experience and operational
              efficiency
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
