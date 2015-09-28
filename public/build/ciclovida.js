"use strict";

var Item = React.createClass({
	componentDidMount: function componentDidMount() {
		console.log("entro a componentDidMount =" + this.state.text);
	},
	componentWillMount: function componentWillMount(e) {

		this.state.text = "inicio";
		console.log("Entro a componentWillMount() =" + this.state.text);
	},
	getInitialState: function getInitialState() {
		console.log("entro a getInitialState");
		return {
			text: ''
		};
	},
	displayName: "mi app",
	render: function render() {
		return React.createElement(
			"p",
			null,
			"mi iten"
		);
	}
});
React.render(React.createElement(Item, null), document.getElementById("content"));