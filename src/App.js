import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
 } from 'react-router-dom'
import './App.css';
import HeaderMenu from './components/HeaderMenu';
import Home from './pages/Home';
import Register from './pages/Register';
import Footer from './components/Footer';
import Users from './pages/Users';

function App() {

  return (
    <BrowserRouter>
      <HeaderMenu></HeaderMenu>

      <section className="main">
        <Switch>
            <Route path="/register">
              <Register />
            </Route>


            <Route path="/users">
              <Users />
            </Route>

            <Route path="/">
              <Home />
            </Route>
        </Switch>
      </section>

      <Footer></Footer>

    </BrowserRouter>
  );
}

export default App;
