import Header from "./layout/Header.jsx";
import MainPage from "./pages/MainPage.jsx";
import OrderConfirmation from "./pages/OrderConfirmation.jsx";
import OrderForm from "./pages/OrderForm.jsx";
import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/orderForm">
          <OrderForm />
        </Route>
        <Route path="/orderConfirmation/:id/:createdAt/:selectedDough/:selectedSize/:additionalMaterial/:pizzaCount/:totalPrice">
          <OrderConfirmation />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
