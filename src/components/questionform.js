import React,{Component} from 'react'

export default class QuestionForm extends Component {
	render(){
		return (
			<div className="questionform">
				<form action="">
					<div className="form-group">
						<p className="title">问题</p>
						<input type="text" placeholder="您的问题的标题" className="form-control" id="title" />
						<textarea placeholder="问题的描述" className="form-control"></textarea>
						<div className="formbtn">
							<button type="button" className="btn btn-default">取消</button>
							<button type="button" className="btn btn-success">确认</button>
						</div>
					</div>
				</form>
			</div>
		)
	}
}