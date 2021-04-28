import "./styles.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Нүүр</Link> |<Link to="/user">Хэрэглэгч</Link> |
        <Link to="/about">Бидний тухай</Link>
        <Route path="/about">
          | <Link to="/error">Алдаа</Link>
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/user" component={User} />
        <Route path="/error" render={() => <h1>Уучлаарай</h1>} />
        <Route path="/about">
          <About />
        </Route>
      </div>
    </BrowserRouter>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function User() {
  return <h2>User</h2>;
}

function About() {
  return <h2>About us</h2>;
}
