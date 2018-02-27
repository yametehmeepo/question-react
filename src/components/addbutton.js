import React from 'react'

export default class AddButton extends React.Component {
	render(){
		return (
			<button className="btn btn-success" onClick={this.props.showtoggle}>添加问题</button>
		)
	}
}