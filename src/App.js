import React from 'react';
import './App.css';
import store from './store';
import ADD_MODEL from './actions/ADD_MODEL';
import {connect} from 'react-redux'
// import ModelDetailsContainer from './components/ModelDetailsContainer';

const data = {
  "Ivel Z3": {
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  "Bally Astrocade": {
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  "Sord M200 Smart Home Computer": {
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  "Commodore 64": {
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
}

const models = Object.keys(data)


export class App extends React.Component {
  state = {
    selectedModel: '',
    storedModels: []
  }
  
  updateSelection = (event) => {
    const selection = event.target.value
    selection && this.setState({
      selectedModel: selection,
      storedModels: [...this.state.storedModels, selection]
    })
  }

  handleSubmit = (event) => {
    const model = this.state.selectedModel
    const action = {
      type: ADD_MODEL,
      payload: {
        manufacturer: data[model].manufacturer,
        year: data[model].year,
        origin: data[model].origin
      }
    } 
    store.dispatch(action)
  }
  
  render() {
    return (
      <div className="App">
        {/*<ModelDetailsContainer /> */}
        <select value={this.value} onChange={this.updateSelection}>
          <option value="">pick a model</option>
          {models.map(model => <option value={model}>{`${model} (${data[model].year})`}</option>)}
        </select>
        <button type="submit" value="submit" onClick={this.handleSubmit}>Add</button>
      </div>
    );
  }
}

const mapStateToProps = (state, obj) => {
  return obj = {
    name: this.selectedModel,
    manufacturer: state[obj].manufacturer,
    year: state[obj].year,
    origin: state[obj].origin
  }
}

export default connect(mapStateToProps)(App)