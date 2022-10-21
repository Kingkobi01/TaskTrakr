import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { useState } from "react"

function App() {
  const [showForm, setShowForm] = useState(false)

 
  return (
    <div className="App">
      <Header showForm={ showForm} setShowForm={setShowForm} />
      <Main showForm={showForm} />
      <Footer />
    </div>
  );
}

export default App;
