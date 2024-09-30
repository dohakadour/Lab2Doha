// Importing Bootstrap CSS for stylingimport 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// Importing necessary components from 'react-router-dom' for routing in the app
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Importing custom CSS for additional styling
import './App.css';
// Importing components that will be displayed in different routes
import Header from './Components/content'
import Content from './Components/header';
import Footer from './Components/footer';
import NavigationBar from './Components/NavigationBar';

function App() {
  return (
    <Router>
    <div>
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path="/Home" element={<Content />} />
        <Route path="/read" element={<Header />} />
        <Route path="/create" element={<Footer />} />
    </Routes>
    </div>
    </Router>
  );
}

export default App;

