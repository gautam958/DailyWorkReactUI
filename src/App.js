import Dashboard from "./components/Dashboard";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Menu from "./components/layout/Menu";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Menu />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
