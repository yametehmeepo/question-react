import React , { Component } from 'react'
import QuestionItem from './questionitem.js'

export default class QuestionContent extends Component {
	constructor(props){
		super(props);
		this.rearange = this.rearange.bind(this);
	}
	rearange(index,newvote){
		var questionlist = this.props.questionlist;
		questionlist[index].vote = newvote;
		this.props.changeVote(questionlist);
	}
	render(){
		var questionlist = this.props.questionlist;
		var newquestionlist = questionlist.map((item,index) => {
			item.id = index;
			return (
				<QuestionItem questionlist={item} changeVote={this.rearange} key={index} />
			)
		});
		return (
			<div className="questioncontent">
				{newquestionlist}
			</div>
		)
	}
}