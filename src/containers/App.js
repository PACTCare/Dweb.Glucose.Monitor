import React from 'react';
import '../styles/main.css'
import '../styles/elements.css'
import '../styles/spinner.css'
import GlucoseChartContainer from './GlucoseChartContainer';
import Header from '../components/Header'
import Description from '../components/Description'

const App = () => {
    return (
        <div className="background">
            <Header />
            <GlucoseChartContainer />
            <Description />
        </div>);
};

export default App