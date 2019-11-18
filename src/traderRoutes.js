import Home from "./components/app-trader/Home";
import ErrorPage from "./components/app-trader/Error";
import Portfolio from "./components/app-trader/portfolio/Portfolio";
import Stocks from "./components/app-trader/stocks/Stocks";

export const traderRoutes = [
  {
    path: '/',
    component: Home,
    name: 'home'
  },
  {
    path: '/portfolio',
    component: Portfolio,
    name: 'port'
  },
  {
    path: '/stocks',
    component: Stocks,
    name: 'stocks'
  },
  {
    path: '/notfound',
    component: ErrorPage,
    name: 'error'
  },
  {
    path: '/stock',
    redirect: { name: 'stocks' },
  },
  {
    path: '/port',
    redirect: { name: 'port' },
  },
  {
    path: '*',
    redirect: { name: 'error' },
  },
]