import React from 'react';

export default class Clock extends React.Component {
    // constructor : 컴포넌트가 초기화될 때 다른 어떤 메소드보다 먼저 호출되며, state 와 다른 초기 값들을 세팅한다.
    constructor(props) {
        // constructor() 메소드는 props 라고도 불리며, super(props) 를 가장 먼저 호출해야 한다. 
        // super(props) 는 부모의 constructor 메소드를 초기화하고, 
        // 부모로부터 상속받은 메소드들을 컴포넌트로 하여금 사용할 수 있도록 해준다.
        super(props);
        this.state = { date: new Date()};
    }

    // componentDidMount : 컴포넌트 출력물이 DOM에 렌더링 된 후에 실행됩니다
    componentDidMount() {
        console.log("마운트");
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    // componentWillUnmount : 컴포넌트가 DOM에서 제거될 때 호출되는 메소드이다.
    componentWillUnmount() {
        console.log("언마운트");
        clearInterval(this.timerID);
    }
  
    // Clock 컴포넌트가 매초 작동하도록
    tick() {
        this.setState({
            date: new Date()
        });
    }
  
    /* 
        State를 올바르게 사용하기
  
        1. State 값을 직접 수정하지 마세요.
            * 이 코드는 컴포넌트가 변경된 것을 알지 못하기 때문에 변경되더라도 리렌더링하지 않습니다.
            this.state.comment = 'Hello';
  
        2. State 업데이트는 비동기적일 수도 있습니다.
            setState({ count: this.state.count + 1 });
            setState({ count: this.state.count + 1 });
            setState({ count: this.state.count + 1 });

            * 위 동작의 기대값은 3이지만 실제로는 1이 결과로 나옵니다.

            setState((state, props) => ({ count: state.count + 1 }));
            setState((state, props) => ({ count: state.count + 1 }));
            setState((state, props) => ({ count: state.count + 1 }));

            * 위 동작은 실행 큐에 적재되어 차례차례 실행되어 3이라는 결과가 나옵니다.

        3. State 업데이트는 병합됩니다.
            state가 다양한 독립적인 변수를 포함하고 있다면,
            별도의 setState() 호출로 이러한 변수를 독립적으로 업데이트할 수 있습니다.
  
            * state의 변수가 posts와 comments로 여러개 입니다.
            constructor(props) {
                super(props);
                this.state = {
                    posts: [],
                    comments: []
                };
            }
  
            componentDidMount() {
                fetchPosts().then(response => {
                    * 별도 setState() 호출로 독립적으로 업데이트 할 수 있습니다.
                    this.setState({
                        posts: response.posts
                    });
                });
  
                fetchComments().then(response => {
                    * 별도 setState() 호출로 독립적으로 업데이트 할 수 있습니다.
                    this.setState({
                        comments: response.comments
                    });
                });
            }
  
    */
  
    render() {
        console.log("렌더링");
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}