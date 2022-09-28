import { Routes, Route } from "react-router-dom";
import Navigation from "./components/routs/navigation/navigation.component";
import Home from "./components/routs/home/home.omponent";
import SignIn from "./components/routs/sign-in/sign-in.component";

const Shop = () => {
  return <h1>I an the shop component</h1>;
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signin" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
