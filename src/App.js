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
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms-of-use" component={TermsOfUse} />
        <Route path="/contact" component={Contact} />
        <Route
          path="/ios"
          render={() => {
            const url = 'https://itunes.apple.com/us/app/nofilter-photo-spots/id1445583976';
            window.location.href = url;
            return <a href={url}>Redirecting to App Store...</a>;
          }}
        />
        <Route
          path="/android"
          render={() => {
            const url = 'https://play.google.com/store/apps/details?id=app.no_filter.nofilter';
            window.location.href = url;
            return <a href={url}>Redirecting to Google Play...</a>;
          }}
        />
        <Route exact path="/" component={Home} />
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
