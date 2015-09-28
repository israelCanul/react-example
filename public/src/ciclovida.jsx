var Item = React.createClass({
componentDidMount:function(){
	console.log("entro a componentDidMount ="+this.state.text);
},
componentWillMount:function(e){
	
	this.state.text="inicio";
	console.log("Entro a componentWillMount() ="+this.state.text );
},
getInitialState:function(){
	console.log("entro a getInitialState");
	 return {
            text: '',
            };
},
displayName:"mi app",
render:function(){
	return(
			<p>
				mi iten
			</p>
		);
}
});
React.render(<Item />, document.getElementById("content"))