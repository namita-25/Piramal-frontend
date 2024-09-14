import { BottomNavigation } from '@mui/material';
import Register from './Views/User/Register';
import ScolarshipListing from './Views/User/ScolarshipListing';
import Navbar from './Components/Navbar';
import BottomNav from './Components/Bottombar';

function App() {
  return (
    <>
    <Navbar/>
    <ScolarshipListing/>
    <BottomNav/>
    </>
    
  );
}

export default App;
