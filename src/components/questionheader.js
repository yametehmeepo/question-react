import React from 'react'
import AddButton from './addbutton'

export default class QuestionHeader extends React.Component {
	render(){
		return (
			<div className="questionheader">
				<div className="container">
					<h1>React 问答</h1>
					<AddButton />
				</div>
			</div>
		)
	}
}