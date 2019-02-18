import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/Home/Home';
import Services from '../components/Services/Services'
import PageNotFound from '../components/PageNotFound/PageNotFound';
import Contact from '../components/Contact/Contact';

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/services" component={Services} exact />
                <Route path="/contact" component={Contact} exact />
                <Route component={PageNotFound} exact />
            </Switch>
        </BrowserRouter>
    );
}
