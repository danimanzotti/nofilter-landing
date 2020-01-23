import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import PrivacyPolicy from 'pages/PrivacyPolicy';
import TermsOfUse from 'pages/TermsOfUse';
import Contact from 'pages/Contact';
import Header from 'components/Header';
import Footer from 'components/Footer';
import './styles/reseter.css';
import './styles/app.css';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route path="/privacy-policy" component={PrivacyPolicy} />,
        <Route path="/terms-of-use" component={TermsOfUse} />,
        <Route path="/contact" component={Contact} />,
        <Route exact path="/" component={Home} />,
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
