import {
  Routes, NavLink, Route, BrowserRouter as MainRouter,
} from 'react-router-dom';
import routes from './routes';
import './App.css';

const URL = process.env.PUBLIC_URL;

const TopBar = () => (
  <header className="appTopBar">
    <h1 className="appTopTitle">Math Magicians</h1>
    <nav className="navbar">
      <ul className="navbarLinks">
        {routes.map(({ routeName, routePath }) => (
          <li key={routePath}>
            <NavLink to={routePath}>{routeName}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);
// eslint-disable-next-line react/prefer-stateless-function
const App = () => (
  <MainRouter basename={URL}>
    <>
      <TopBar />
      <div className="appContent">
        <Routes>
          {routes.map(({ routePath, routeComponent }) => (
            <Route key={routePath} path={routePath} element={routeComponent} />
          ))}
        </Routes>
      </div>
    </>
  </MainRouter>
);

export default App;
