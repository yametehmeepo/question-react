import React , { Component } from 'react'
import QuestionItem from './questionitem.js'

export default class QuestionContent extends Component {
	render(){
		var questionlist = this.props.questionlist;
		var newquestionlist = questionlist.map((item,index) => {
			return (
				<QuestionItem 
					title={item.title} 
					des= {item.des}
					vote={item.vote}
					key={index}
					/>
			)
		});
		return (
			<div className="questioncontent">
				{newquestionlist}
			</div>
		)
	}
}