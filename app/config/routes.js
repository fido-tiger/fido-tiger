// Inclue the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");

// Include the Route component for displaying individual routes
var Route = router.Route;

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
var Router = router.Router;

// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
var hashHistory = Router.hashHistory;

// Include the IndexRoute (catch-all route)
var IndexRoute = Router.IndexRoute;

// expressRouter.get('*', function(req, res) {
   
// });

// Reference the high-level components
import Main from "../components/Main";
import Nav from "../components/global/Nav";
import Footer from "../components/global/Footer";


module.exports = (

  // The high level component is the Router component
  <Router history={hashHistory}>

    <Route path="/" component={Main}>
      <Route path="Nav" component={Nav}>
      
      </Route>
      <IndexRoute component={Main} />
    </Route>

  </Router>
);
