//* ================= CLASS COMPONENTS AND STATE ====================
//* React'da Class-Component'ler ES6 class yapisina dayanmaktadir.
//* Cok fazla boilerplate kod icermektedir.
//* Ancak Class-Component'ler React'da state'leri barindiran ilk component yapisidir.
//* State, aslinda bir component hakkinda bilgi tutan bir React nesnesidir.
//* Bir componentin state'i zaman icerisinde degisebilir.
//* State her degistiginde React bu componenti yeninden render eder.
//* Bir state'e baslangıc degeri constructor metodu icersinde this.state ile atanabilir
//* constructor'in disinda state, setState() metodu ile degistilebilir.
//* ====================================================================

import React, { Component } from "react";
// export default class Counter extends React.Component (bu şekilde yazılırsa yukardaki süslü içinde yazana gerek kalmaz)

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    // bind metodu. aşağıdaki fonksiyonlar arrow fonksiyon olmadan yapılırsa bind metodu kullanılmalı
    // this.increase = this.increase.bind(this);
  }

  increase = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrease = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div className="container text-center mt-4">
        <h2 className="text-danger">Class Components</h2>
        <h1 className="display-4">Count: {this.state.count}</h1>
        <div className="container d-flex justify-content-center gap-3">
          <button onClick={this.increase} className="btn btn-success">
            Increase
          </button>
          <button
            onClick={() => this.setState({ count: 0 })}
            className="btn btn-danger"
          >
            Reset
          </button>
          <button onClick={this.decrease} className="btn btn-warning">
            Decrease
          </button>
        </div>
      </div>
    );
  }
}
