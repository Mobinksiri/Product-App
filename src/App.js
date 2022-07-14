import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Customers from "./components/Pages/Customers";
import Pricing from "./components/Pages/Pricing";
import Resources from "./components/Pages/Resources";
import Navigation from "./components/Reusable/Navigation/Navigation";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
   return (
      <>
         <Provider store={store}>
            <BrowserRouter>
               <Navigation />
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/customers" element={<Customers />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="/resources" element={<Resources />} />
               </Routes>
            </BrowserRouter>
         </Provider>
      </>
   );
}

export default App;
