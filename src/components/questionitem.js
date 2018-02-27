import React , { Component } from 'react'

export default class QuestionItem extends Component {
	render(){
		return (
			<div className="media">
				<div className="media-left">
					<button className="btn btn-default">
						<span className="glyphicon glyphicon-chevron-up"></span>
						<span className="count">{this.props.vote}</span>
					</button>
						<button className="btn btn-default">
						<span className="glyphicon glyphicon-chevron-down"></span>
					</button>
				</div>
				<div className="media-body">
					<h2 className="mediatit">{this.props.title}</h2>
					<p className="mediatext">{this.props.des}</p>
				</div>
			</div>
		)
	}
}