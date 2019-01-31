import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchGlucose } from '../actions/glucoseActions'
import GlucoseChart from '../components/GlucoseChart'

class GlucoseChartContainer extends Component {
    componentDidMount() {
        this.props.dispatch(fetchGlucose())
    }

    render() {
        if (this.props.data.length < 8) {
            return(
                <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            );
        } else {
            return(
                <GlucoseChart data = { this.props.data } />
            );
        }
    }
};

const mapStateToProps = (state) => {
    return {
        data: state.glucose.data
    }
}

export default connect(mapStateToProps)(GlucoseChartContainer)