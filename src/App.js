import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import Form from './components/form';


class App extends React.Component {
  state= {
    foods: foods,
    displayForm: false,
  }



  handleAdd = (newFood) => {
    newFood.quantity = 0
    this.setState({
      foods : [...this.state.foods, newFood],
      displayForm: !this.state.displayForm
    })

  }

  render() {
    return (
<div className="App">
      <button onClick= {() => this.setState({displayForm: !this.state.displayForm})}>Add food</button>
      {this.state.displayForm && <Form handleAdd={this.handleAdd} />}
      {this.state.foods.map(food => (
        <FoodBox foods={food} />
       ) )}
</div>
    );
  }
}

export default App;
