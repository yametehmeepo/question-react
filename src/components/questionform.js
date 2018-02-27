import React,{Component} from 'react'

function trim(str){
	return str.replace(/(^\s*)|(\s*$)/g,'');
}

export default class QuestionForm extends Component {
	constructor(props){
		super(props);
		this.resetform = this.resetform.bind(this);
		this.submitform = this.submitform.bind(this);
	}
	resetform(){
		this.form.reset();
	}
	submitform(e){
		e.preventDefault();
		var questionlist = this.props.questionlist;
		var item ={
			title: this.input.value,
			des: this.textarea.value,
			vote: 0,
		};
		if(trim(item.title) === "" || trim(item.des) === ""){
			alert("请输入完整的标题和问题描述");
		}else{
			questionlist.push(item);
			this.props.changeVote(questionlist);
			this.resetform();
		}
	}
	render(){
		return (
			<div className="questionform">
				<form action="" ref={form => this.form=form}>
					<div className="form-group">
						<p className="title">问题</p>
						<input type="text" placeholder="您的问题的标题" className="form-control" id="title" ref={input => this.input = input} />
						<textarea placeholder="问题的描述" className="form-control" ref={textarea => this.textarea = textarea}></textarea>
						<div className="formbtn">
							<button type="button" className="btn btn-default" onClick={this.resetform}>取消</button>
							<button type="submit" className="btn btn-success" onClick={this.submitform}>确认</button>
						</div>
					</div>
				</form>
			</div>
		)
	}
}