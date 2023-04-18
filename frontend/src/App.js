import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import ListingsDetails from './components/ListingsDetails';
import OneDetail from "./components/OneDetails";
import AddDetail from "./components/AddDetails";
import BookTicket from "./components/BookTicket";
import Successful from './components/Successful';
import TicketDetails from './components/TicketDetails';
import CheckTicket from "./components/CheckTicket";
import Signup from "./components/Signup";
import Login from "./components/Login";
import UserDetails from './components/UserDetails';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/details" element={<ListingsDetails />} />
        <Route path="/details/:id" element={<OneDetail />} />
        <Route path="/addDetails" element={<AddDetail />} />
        <Route path="/bookTicket/:id" element={<BookTicket />} />
        <Route path="/successful/:pnr" element={<Successful />} />
        <Route path="/ticketDetails/:pnr" element={<TicketDetails />} />
        <Route path="/checkTicket" element={<CheckTicket />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userDetails" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
