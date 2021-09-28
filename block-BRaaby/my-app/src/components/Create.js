import React, { Component } from 'react';

export class Create extends Component {
  constructor(props) {
    super();
    this.state = {
      data: null,
      titile: 'My Name is',
      value: '',
      img: '',
    };
  }

  componentDidMount() {
    fetch(`https://randomuser.me/api/`)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          data: data.results[0],
          title: 'My Name is',
          value:
            data.results[0].name.title +
            data.results[0].name.first +
            data.results[0].name.last,

          img: data.results[0].picture.medium,
        })
      );
  }

  componentWillUnmount() {
    this.setState((preState) => ({
      data: null,
      value: preState.value,
      title: preState.title,
      img: preState.img,
    }));
  }
  render() {
    console.log(
      fetch('https://randomuser.me/api/')
        .then((data) => data.json())
        .then((data) => console.log(data.results[0]))
    );
    return (
      <div className="container">
        <div className="black"></div>
        <div className="bg-gray-800 white relative flex justify-center items-center">
          <div className="cart bg-white p-8 absolute -top-16">
            <div white="white">
              <div className="font-0  flex justify-center items-center">
                <img src={this.state.img} alt="" />
              </div>
            </div>
            <div>
              <h6 className="text-center">{this.state.title}</h6>
              <h3 className="text-center text-2xl mb-4	">
                {this.state.value || 'Ravindra Singh'}
              </h3>
              <div className="flex justify-between items-center flex-wrap">
                <p
                  className="btn"
                  onClick={() => {
                    return this.setState({
                      title: 'My Email is',
                      value: this.state.data.email,
                    });
                  }}
                >
                  Email
                </p>
                <p
                  className="btn"
                  onClick={() => {
                    return this.setState({
                      title: 'My age is',
                      value: this.state.data.registered.age,
                    });
                  }}
                >
                  age
                </p>
                <p
                  className="btn"
                  onClick={() => {
                    return this.setState({
                      title: 'My Mobail number is',
                      value: this.state.data.phone,
                    });
                  }}
                >
                  myPhoneNumber
                </p>
                <p
                  className="btn"
                  onClick={() => {
                    return this.setState({
                      title: 'My Password is',
                      value: this.state.data.login.password,
                    });
                  }}
                >
                  password
                </p>
              </div>
              <button
                onClick={() => {
                  this.componentWillUnmount();
                  this.componentDidMount();
                }}
              >
                {this.state.data ? 'Random' : 'loding...'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
