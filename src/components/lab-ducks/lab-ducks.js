import React from 'react';
// importamos el decorador @connect de react-redux
import { connect } from 'react-redux';
import { addAnimal } from '../../store/ducks/animals';

class LabDucks extends React.Component {

  constructor(props) {
    super(props);
    this.addAnimal = this.addAnimal.bind(this);
  }

  addAnimal() {
    this.props.addAnimal('nutrias');
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.animals.map((animal, index) => {
            return <li key={index}>{animal}</li>
          })}
        </ul>
        <button onClick={this.addAnimal}>Add</button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  addAnimal
};

function mapStateToProps(state) {
  return {
    animals: state.reducerAnimal.animals
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LabDucks);