import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';

type Props = {};

type State = {
  formatString: string;
  clockVisible: boolean;
};

class App extends Component<Props, State> {
  state = {
    formatString: 'HH:mm:ss',
    clockVisible: false,
  };

  changeFormat = (format: string) => {
    this.setState({ formatString: format });
  };
  render() {
    return (
      <div className='boxStyle'>
        <h2>간단한 시계</h2>
        <button
          onClick={() =>
            this.setState({ clockVisible: !this.state.clockVisible })
          }
        >
          시계 토글하기
        </button>
        <hr />
        {this.state.clockVisible ? (
          <Clock formatString={this.state.formatString} />
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default App;
