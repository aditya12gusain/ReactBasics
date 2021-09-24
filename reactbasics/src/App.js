import { Route } from "react-router-dom";
import ContactPage from "./Components/ContactPage";
import HomePage from "./Components/HomePage";
import Navigation from "./Components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Route path="/" exact component={HomePage} />
      <Route path="/contact" exact component={ContactPage} />
    </>
  );
}
export default App;
