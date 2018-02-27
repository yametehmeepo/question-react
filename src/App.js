import React, { Component } from 'react';
import QuestionHeader from './components/questionheader'
import QuestionBody from './components/questionbody'
import './App.less';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      questionlist: [
        {
          title: '热爱编程是一种怎样的体验?',
          des: '别人对玩游戏感兴趣，我对写代码、看技术文章感兴趣；把泡github、stackoverflow、v2ex、reddit、csdn当做是兴趣爱好；遇到重复的工作，总想着能不能通过程序实现自动化；喝酒的时候把写代码当下酒菜，边喝边想边敲；不给工资我也会来加班；做梦都在写代码。',
          vote: 10,
        },
        {
          title: '产品经理与程序员矛盾的本质是什么?',
          des: '理性探讨，请勿撕逼。产品经理的主要工作职责是产品设计。接受来自其他部门的需求，经过设计后交付研发。但这里有好些职责不清楚的地方。',
          vote: 22,
        }
      ]
    }
  }
  componentWillMount(){
    var questionlist = this.state.questionlist.sort((a,b) => {
      return (b.vote - a.vote);
    });
    console.log(questionlist);
  }
  render() {
    var questionlist = this.state.questionlist.sort((a,b) => {
      return (b.vote - a.vote);
    });
    return (
      <div className="App">
        <QuestionHeader questionlist={questionlist} />
        <QuestionBody questionlist={questionlist} />
      </div>
    );
  }
}

export default App;
