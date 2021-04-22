import ClientProfile from "./components/ClientProfile";
import Dashboard from "./components/Dashboard";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Menu from "./components/layout/Menu";
import UserForm from "./components/Users/UserForm";
import UserHome from "./components/Users/UserHome";
//import Users from "./components/Users";
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';


function App() {
  return (



    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <Menu />
        {/* <Users /> */}
        {/* <ClientProfile /> */}
        {/* <UserForm /> */}
        {/* <UserHome /> */}

        <Switch>
          <Route exact path="/">
            <UserHome />
          </Route>
          <Route exact path="/Users">
            <UserHome />
          </Route>
          <Route exact path="/AddUser">
            <UserForm />
          </Route>
        </Switch>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
