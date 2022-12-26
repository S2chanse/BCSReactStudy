import React, { Component } from 'react';

type Props = { children: JSX.Element };

type State = { hasError: boolean; errorMsg: string };

class ErrorBoundary extends Component<Props, State> {
  state = { hasError: false, errorMsg: '' };
  static getDrivedStateFromError(error: Error): State {
    return { hasError: true, errorMsg: error.message };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    //여기서는 에러 로깅, 서버로의 전송 등의 작업을 수행
    console.log('에러 발생! ');
    console.log(`에러명 : ${error.name}`);
    console.log(`에러메시지 : ${error.message} `);
    console.log(`컴포넌트 스택 : ${errorInfo.componentStack}`);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>에러발생</h2>
          <hr />
          <p>에러 메시지 : {this.state.errorMsg}</p>
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
