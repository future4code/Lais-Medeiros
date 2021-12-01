import react from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AdminHomePage from "..AdminHomePage/pages/AdminHomePage/AdminHomePage";
import ApplicationFormPage from "..ApplicationFormPage/pages/ApplicationFormPage/ApplicationFormPage";
import CreateTripPage from "..CreateTripPage/pages/CreateTripPage/CreateTripPage";
import HomePage from "..HomePage/pages/HomePages/HomePage";
import ListTripsPage from "..ListTripsPage/pages/ListTripPage/ListTripsPage"
import LoginPages from "../pages/LoginPage/LoginPage";
import TripDetailsPage from "..TripDetailsPage/pages/TripDetailsPage/TripDetailsPage";

const Router = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="Inicio">
                    <AdminHomePage/>
                </Route>
                <Route exact path="Meio">
                    <ApplicationFormPage/>
                </Route>
                <Route exact path="Creat">
                    <CreateTripPage/>
                </Route>
                <Route>
                    <HomePage exact path="/"/>
                </Route>
                <Route exact path="Lista">
                    <ListTripsPage/>
                </Route>
                <Route exact path="Login">
                    <LoginPages/>
                </Route>
                <Route exact path="Detalhes">
                <TripDetailsPage/>
                </Route>
                <Route>
                    <div>Erro</div>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router