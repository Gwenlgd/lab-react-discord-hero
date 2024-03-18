// src/App.jsx
import Container from "./components/Container";

import logo from "./assets/discord-logo-white.png";
import menu from "./assets/menu-icon.png";
import background from "./assets/discord-background.png";
import "./App.css";

const Title = ({ title }) => <h1>{title.toUpperCase()}</h1>;
const Paragraph = ({ paragraph }) => <p>{paragraph}</p>;

function Nav() {
  return (
    <>
      <nav className="nav-discord">
        <img src={logo} alt="logo-discord" />
        <img src={menu} alt="menu-discord" />
      </nav>
    </>
  );
}

function App() {
  return (
    <>
      <Nav />
      <Container>
        <Title title="Imagine a place ..." />
        <Paragraph paragraph="... where you can belong to a school clyb, a gaming group, or a worldwilde art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often. " />
        <button className="button-mac">Download for Mac</button>
        <button className="button-browser">Open Discrod in your browser</button>
        <div className="img-background">
          <img src={background} alt="background-discord" />
        </div>
      </Container>
    </>
  );
}

export default App;

// return <img src={logo} alt="logo-discord" />;
// return <img src={background} alt="background-discord" />;
// return <img src={menu} alt="menu-discord" />;
