import React from 'react';
import { AplicationContext } from './application-context';


class SlideB extends React.Component {

  render() {
    let props = this.props;
    let myContext = this.context;
    console.log(props, myContext)
    return (
      <div>
        <h5>Contexto con clases</h5>
        <ul>
          {myContext.map((fruit, index) => {
            return <li key={index}>{fruit}</li>
          })}
        </ul>
      </div>
    );
  }
}

SlideB.contextType = AplicationContext;

export default SlideB;
