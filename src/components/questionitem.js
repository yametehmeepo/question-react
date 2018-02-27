import React , { Component } from 'react'

export default class QuestionItem extends Component {
	constructor(props){
		super(props);
		this.itemchangevote = this.itemchangevote.bind(this);
	}
	itemchangevote(flag,index){
		var questionlist = this.props.questionlist;
		var newvote = questionlist.vote;
		if(flag>0){
			newvote += 1;
			console.log(newvote);
			this.props.changeVote(index,newvote);
		}else{
			newvote -= 1;
			console.log(newvote);
			this.props.changeVote(index,newvote);
		}
	}
	render(){
		var questionlist = this.props.questionlist;
		return (
			<div className="media">
				<div className="media-left">
					<button className="btn btn-default" onClick={this.itemchangevote.bind(this,1,questionlist.id)}>
						<span className="glyphicon glyphicon-chevron-up"></span>
						<span className="count">{questionlist.vote}</span>
					</button>
					<button className="btn btn-default" onClick={this.itemchangevote.bind(this,-1,questionlist.id)}>
						<span className="glyphicon glyphicon-chevron-down"></span>
					</button>
				</div>
				<div className="media-body">
					<h2 className="mediatit">{questionlist.title}</h2>
					<p className="mediatext">{questionlist.des}</p>
				</div>
			</div>
		)
	}
}