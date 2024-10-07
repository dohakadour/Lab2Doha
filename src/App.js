// Importing Bootstrap CSS for stylingimport 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// Importing necessary components from 'react-router-dom' for routing in the app
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Importing custom CSS for additional styling
import './App.css';
// Importing components that will be displayed in different routes
import Content from './Components/header';
import Footer from './Components/footer';
import NavigationBar from './Components/NavigationBar';
import Read from './Components/read';

// Main App component where routing and layout is defined
function App() {
  return (
    <Router>
            {/* The NavigationBar will be displayed on all routes */}
    <div>
      <NavigationBar></NavigationBar>
            {/* Define different routes for the application */}
      <Routes>
        {/* The 'Home' route will render the Content component */}
        <Route path="/Home" element={<Content />} />
        <Route path="/read" element={<Read />} />
        <Route path="/create" element={<Footer />} />
    </Routes>
    </div>
    </Router>
  );
}

export default App;

