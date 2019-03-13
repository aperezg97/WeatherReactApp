import React, {Component} from "react";
import PropTypes from 'prop-types';
import ForecastItem from "./ForecastItem";

const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes'
]

const data = {
    temperature: 10,
    humidity: 10,
    weatherState: 'normal',
    wind: 'normal'
}

class ForecastExtended extends Component {

    constructor() {
        super();
        this.state = {forecastData: null}
    }

    componentDidMount() {

    }

    renderForecastItemDays() {
        return "Render items";
        // return days.map(day => (<ForecastItem weekDay={day} hour={10} data={data}/>));
    }

    renderProgress = () => {
        return <h3>Cargando pronostico extendido...</h3>
    }

    render() {
        const {city} = this.props;
        const {forecastData} = this.state;

        return (<div>
            <h2>Pronostico extendido para {city}</h2>
            {forecastData ?
                this.renderForecastItemDays() :
                this.renderProgress()
            }
        </div>);
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string
}

export default ForecastExtended;