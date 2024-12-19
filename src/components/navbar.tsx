import "../css/navbar.css";

export function Navbar() {
  return (
    <div className="navbar bg-transparent">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
              */
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a href="/#home">Home</a>
            </li>
            <li>
              <a href="/#about">About</a>
              <ul className="p-2">
                <li>
                  <a href="/#me">Me</a>
                </li>
                <li>
                  <a href="/#skills">Skills</a>
                </li>
                <li>
                  <a href="/#projects">Projects</a>
                </li>
                <li>
                  <a href="/#experiences">Experiences</a>
                </li>
                <li>
                  <a href="/#testimonials">Testimonials</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/#contact">Contact</a>
            </li>
          </ul>
        </div>
        <a>
          <img
            src="/assets/HLLogo.svg"
            alt="hero-logo"
            className="h-[80px] w-[80px] p-0 m-0"
          ></img>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/#home">Home</a>
          </li>
          <li>
            <details>
              <summary>About</summary>
              <ul className="p-2">
                <li>
                  <a href="/#about">Me</a>
                </li>
                <li>
                  <a href="/#skills">Skills</a>
                </li>
                <li>
                  <a href="/#projects">Projects</a>
                </li>
                <li>
                  <a href="/#experiences">Experiences</a>
                </li>
                <li>
                  <a href="/#testimonials">Testimonial</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a href="/#contact">Contacts</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a href="/#contact" className="btn btn-primary">
          Contact Me
        </a>
      </div>
    </div>
  );
}
