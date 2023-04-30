import React, { Component, useRef } from 'react';
import PageLayout from './Components/PageLayout';
import WelcomeScreenRoute from './routes/WelcomeScreenRoute';


class Experimental extends Component {

    render() {
        return (
            <PageLayout>
                <WelcomeScreenRoute/>
            </PageLayout>
        );
    }
}

export default Experimental;
