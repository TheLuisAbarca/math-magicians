import CalculatorRender from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Quote';

const routes = [
  {
    routeName: 'Home',
    routePath: '/',
    routeComponent: <Home />,
  },
  {
    routeName: 'Calculator',
    routePath: '/calculator',
    routeComponent: <CalculatorRender />,
  },
  {
    routeName: 'Quote',
    routePath: '/quote',
    routeComponent: <Quote />,
  },
];

export default routes;
