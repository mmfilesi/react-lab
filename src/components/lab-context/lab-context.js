import React from 'react';
import SlideA from './slide-a';
import SlideB from './slide-b';

import { initialState, AplicationContext } from './application-context';

class LabContext extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myFruits: initialState.fruits
    }
  }

  setFruits = () => {
    this.setState({
      myFruits: initialState.anotherFruits
    });
  }
  
  render() {
    return (
      <div>
        <h5>Lab Context</h5>
        <AplicationContext.Provider value={ this.state.myFruits }>    
            <button onClick={this.setFruits}>set fruits</button>
            <SlideB></SlideB>
            <SlideA></SlideA>
        </AplicationContext.Provider>
      </div>
    );
  }
}

export default LabContext;
