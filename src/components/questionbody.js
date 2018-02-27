import React,{Component} from 'react'
import QuestionForm from './questionform.js'
import QuestionContent from './questioncontent.js'

export default class QuestionBody extends Component {
	render(){
		return (
			<div className="questionbody">
				<div className="container">
					<QuestionForm />
					<QuestionContent questionlist={this.props.questionlist} />
				</div>
			</div>
		)
	}
}