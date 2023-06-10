import logo from './logo.svg';

import Welcome from './Components/Welcome';
import WelcomeC from './Components/WelcomeC'

import ProductsList from './Components/ProductsList';
function App() {
  const name = "react"
  const element = <h2> hello world</h2>
  return (
    
    <div className="App">
      <ProductsList/>

    </div>
  );
}

export default App;
