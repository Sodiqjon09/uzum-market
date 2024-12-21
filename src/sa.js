import React from "react";
import { Link, Element } from "react-scroll";

function App() {
  return (
    <div>
      <nav
        style={{
          position: "fixed",
          top: 0,
          background: "#fff",
          padding: "10px",
        }}
      >
        <Link
          to="section1"
          smooth={true}
          duration={800}
          style={{ margin: "0 10px" }}
        >
          Go to Section 1
        </Link>
        <Link
          to="section2"
          smooth={true}
          duration={800}
          style={{ margin: "0 10px" }}
        >
          Go to Section 2
        </Link>
        <Link
          to="section3"
          smooth={true}
          duration={500}
          style={{ margin: "0 10px" }}
        >
          Go to Section 3
        </Link>
      </nav>

      <Element
        name="section1"
        style={{ height: "100vh", background: "lightcoral" }}
      >
        <h1>Section 1</h1>
      </Element>
      <Element
        name="section2"
        style={{ height: "100vh", background: "lightblue" }}
      >
        <h1>Section 2</h1>
      </Element>
      <Element
        name="section3"
        style={{ height: "100vh", background: "lightgreen" }}
      >
        <h1>Section 3</h1>
      </Element>
    </div>
  );
}

export default App;
