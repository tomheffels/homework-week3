import * as React from 'react'
import {connect} from 'react-redux'
// import ModelDetails from './ModelDetails';

export default class ModelDetailsContainer extends React.Component {
    // render() {
    //     return (
    //     <div>
    //         <ModelDetails /*model={this.props.something? }*/ />
    //     </div>
    // }
};

const mapStateToProps = (state, obj) => {
    return obj = {
      name: this.selectedModel,
      manufacturer: state[obj].manufacturer,
      year: state[obj].year,
      origin: state[obj].origin
    }
}

connect(mapStateToProps)(ModelDetailsContainer)