import react from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AdminHomePage from "../pages/AdminHomePage/AdminHomePage";
import ApplicationFormPage from "../pages/ApplicationFormPage/ApplicationFormPage";
import CreateTripPage from "../pages/CreateTripPage/CreateTripPage";
import HomePage from "../pages/HomePage/HomePage";
import ListTripsPage from "../pages/ListTripsPage/ListTripsPage";
import  LoginPage from "../pages/LoginPage/LoginPage";
import TripDetailsPage from "../pages/TripDetailsPage/TripDetailsPage";

const Router = () => {
  return (
 <BrowserRouter>
    <Switch>
      <Route exact path="/administrador">
         <AdminHomePage/>
      </Route>
      <Route exact path="/candidatar">
        <ApplicationFormPage/>
      </Route>
      <Route exact path="/formulario">
        <CreateTripPage/>
      </Route>
      <Route exact path="/">
         <HomePage/>
      </Route>
      <Route exact path="/viagens">
        <ListTripsPage/> 
      </Route>
      <Route exact path="/login">
        <LoginPage/> 
      </Route>
      <Route exact path="/detalhes">
        <TripDetailsPage/>
      </Route>
      <Route>
        <div>Erro</div>
      </Route>
    </Switch>
 </BrowserRouter>
  );
}

export default Router;