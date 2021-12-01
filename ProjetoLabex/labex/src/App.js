import react from "react";
import AdminHomePage from ".AdminHomePage/pages/AdminHomePage/AdminHomePage";
import ApplicationFormPage from ".ApplicationFormPage/pages/ApplicationFormPage/ApplicationFormPage";
import CreateTripPage from ".CreateTripPage/pages/CreateTripPage/CreateTripPage";
import HomePage from ".HomePage/pages/HomePages/HomePage";
import ListTripsPage from ".ListTripsPage/pages/ListTripPage/ListTripsPage"
import LoginPages from "./pages/LoginPage/LoginPage";
import TripDetailsPage from ".TripDetailsPage/pages/TripDetailsPage/TripDetailsPage";

const App = () => {
  return (
    <div>
      <h1>oi</h1>
      <AdminHomePage/>
      <ApplicationFormPage/>
      <CreateTripPage/>
      <HomePage/>
      <ListTripsPage/>
      <LoginPages/>
      <TripDetailsPage/>
    </div>
  )
}

export default App;
