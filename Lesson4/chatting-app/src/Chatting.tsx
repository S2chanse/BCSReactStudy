import React, { ChangeEvent, Component, KeyboardEvent } from 'react';

type Props = {};

type State = {
  msg: string;
  msgList: string[];
};

class Chatting extends Component<Props, State> {
  chatRef = React.createRef<HTMLDivElement>();
  state = {
    msg: '',
    msgList: [],
  };

  getSnapshotBeforeUpdate(PreProps: {}, preState: State): number {
    const chat = this.chatRef.current;
    if (preState.msgList !== this.state.msgList && chat !== null) {
      return chat.offsetHeight;
    }
    return 0;
  }
  /**
   * snapshot의 인자는 getSnapshotBeforeUpdate에서 return된 값이다.
   *
   */
  componentDidUpdate(PreProps: {}, preState: State, snapshot: number): void {
    const chat = this.chatRef.current;
    if (snapshot > 0 && chat !== null) {
      chat.scrollTop = chat.scrollHeight - snapshot;
    }
  }

  setMsg = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ ...this.state, msg: e.target.value });
  };
  msgKeyup = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      this.setState({
        msg: '',
        msgList: [...this.state.msgList, this.state.msg],
      });
    }
  };
  render() {
    return (
      <div>
        채팅목록 : <br />
        <div
          ref={this.chatRef}
          style={{
            width: 400,
            height: 120,
            overflow: 'auto',
            border: 'solid 1px black',
          }}
        >
          {this.state.msgList.map((item, index) => {
            return <h2 key={index}>{item}</h2>;
          })}
        </div>
        입력 메시지 :{' '}
        <input
          type='text'
          value={this.state.msg}
          onChange={this.setMsg}
          onKeyUp={this.msgKeyup}
        />
      </div>
    );
  }
}
export default Chatting;
