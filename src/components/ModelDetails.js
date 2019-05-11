import * as React from 'react'
import PropTypes from 'prop-types'

export default class ModelDetails extends React.Component {
    static propTypes = {
        name: PropTypes.string,
        manufacturer: PropTypes.string,
        year: PropTypes.number,
        origin: PropTypes.string
    }
    
    render() {
        return (
            <ul>
                <li>Name: {this.props.name} </li>
                <li>Manufacturer: {this.props.manufacturer}</li>
                <li>Year: {this.props.year}</li>
                <li>Origin: {this.props.origin}</li>
            </ul>
        )
    }
}