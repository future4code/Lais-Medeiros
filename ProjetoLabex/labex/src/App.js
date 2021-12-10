import react from "react";
import AdminHomePage from "./pages/AdminHomePage/AdminHomePage"
import ApplicationFormPage from "./pages/ApplicationFormPage/ApplicationFormPage"
import CreateTripPage from "./pages/CreateTripPage/CreateTripPage"
import HomePage from "./pages/HomePage/HomePage"
import ListTripsPage from "./pages/ListTripsPage/ListTripsPage"
import LoginPage from "./pages/LoginPage/LoginPage"
import TripDetailsPage from "./pages/TripDetailsPage/TripDetailsPage"



const App = () => {
  return (
    <div>
      <hi> tudo certo</hi>
        <AdminHomePage/>
        <ApplicationFormPage/>
        <CreateTripPage/>
        <HomePage/>
        <ListTripsPage/>
        <LoginPage/>
        <TripDetailsPage/>

    </div>
  );
}

export default App;
