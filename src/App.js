import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/Navigation';
import HomePageComponent from './components/Home';
import AboutComponent from './components/About';
import ServicesComponent from './components/Services';
import ContactsComponent from './components/Contacts';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1 className="site-heading text-center text-white d-none d-lg-block">
          <span className="site-heading">Martha's Coffee Shop</span>
        </h1>
        <NavigationBar/>
        <Switch>
          <Route exact path="/" component={HomePageComponent} />
          <Route path="/home" component={HomePageComponent} />
          <Route path="/about" component={AboutComponent} />
          <Route path="/services" component={ServicesComponent} />
          <Route path="/contacts" component={ContactsComponent} />
        </Switch>
        <footer className="footer text-faded text-center py-5">
          <div className="container">
            <p className="m-0 small">Copyright &copy; kyalo.co.ke 2020</p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
