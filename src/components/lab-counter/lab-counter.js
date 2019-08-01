import React from 'react';
// importamos el decorador @connect de react-redux
import { connect } from 'react-redux';
import store from '../../store/store';

import { addCount, substractCount } from '../../store/actions/actionsCount';

class LabCounter extends React.Component {

  constructor(props) {
    super(props);
    console.log(store.getState())
    this.addCount = this.addCount.bind(this);
    this.substractCount = this.substractCount.bind(this);
  }

  addCount() {
    this.props.addCount(1);
  }

  substractCount() {
    this.props.substractCount(1);
  }
  
  render() {
    return (
      <div>
        <p>
          Count: {this.props.total}
        </p>
        <button onClick={this.addCount}>Add</button>
        <button onClick={this.substractCount}>Substract</button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  addCount,
  substractCount
};

function mapStateToProps(state) {
  return {
    total: state.countReducer.total
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LabCounter);