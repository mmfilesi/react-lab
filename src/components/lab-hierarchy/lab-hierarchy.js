import React from 'react';
import ChildComponent from './child-component';

class LabHierarchy extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      parentFoo: 'Uka Lele',
      showContent: false,
      myList: ['unicornios', 'bacalaos', 'osos']
    }
    this.setFooInParent = this.setFooInParent.bind(this);
    this.setFooInChild = this.setFooInChild.bind(this);
  }

  /* Ciclo de vida
    http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
  */
  componentDidMount() {
    console.log('componentDidMount, insertado en el DOM');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log('cuando se actualiza', prevProps, prevState, snapshot);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount, desmontao!!');
  }

  setFooInParent() {
    this.setState({parentFoo: 'Cambiao!!!'});
  }

  setFooInChild() {
    this.setState({parentFoo: 'Cambiao desde el hijo!!!'});
  }

  onShowContent(value) {
    this.setState({showContent: value});
  }

  subTembplateHeader() {
    return (<h5>Conceptos básicos</h5>);
  }

  subTembplateConditional() {
    return (
      <section>
      {/* Usando la arrow no se pierde el bindeo del this */}
      <button onClick={(e) => this.onShowContent(true)}>Mostrar</button>
      <button onClick={(e) => this.onShowContent(false)}>Ocultar</button>
      {this.state.showContent ? (
        <div>
          Se ve el contenido
        </div>) :
        (<div>
          Ahora no se ve
        </div>
        )
      }
    </section>
    );
  }
  
  render() {
    return (
      <div>
        { this.subTembplateHeader() }
        <section>
          <ChildComponent foo={this.state.parentFoo} onSetFooInChild={this.setFooInChild}/>
          <p>
            <button onClick={this.setFooInParent}>
              Cambiar el valor de foo (padre)
            </button>
          </p>
        </section>
        {/* Renderizados condicionales */}
        { this.subTembplateConditional() }
      
        {/* Renderizados iterativos */}
        <section>
          <ul>
          { 
            this.state.myList.map((item, index) => {
              return <li key={index}>{item}</li>
            })
          }
          </ul>
        </section>
      </div>
    );
  }
}

export default LabHierarchy;
