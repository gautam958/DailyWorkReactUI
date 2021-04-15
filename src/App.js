import Dashboard from "./components/Dashboard";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Menu from "./components/layout/Menu";
import Users from "./components/Users";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Menu />
      <Users />
      <Footer />
    </div>
  );
}

export default App;
