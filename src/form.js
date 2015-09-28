//clase que crea la lista de tareas
var TodoList = React.createClass({
    render: function()
    {
        var createItem = function(itemText, index)
        {
            return <li key={index + itemText}>{itemText}</li>;
        };
        return <ul>{this.props.items.map(createItem)}</ul>;
    }
});
 
//clase que crea el formulario y lo muestra junto con la lista de tareas
var FormApp = React.createClass({
    getInitialState: function()
    {
        return {
            text: '',
            items: []
        };
    },
    onChange: function(e)
    {
        this.setState({text: e.target.value});
        console.log(this.state.items);
    },
    handleSubmit: function(e)
    {
        e.preventDefault();
        var nextItems = this.state.items.concat([this.state.text]);
        var nextText = '';
        this.setState({items: nextItems, text: nextText});
    },
    render: function()
    {
        return (
            <div>
                <h3>React Todo List</h3>
                <TodoList items={this.state.items} />
                <form onSubmit={this.handleSubmit}>
                  <input type="text" onChange={this.onChange} value={this.state.text} />
                  <button type="submit">Add</button>
                </form>
            </div>
        );
    }
});
 
React.render(<FormApp />, document.getElementById("content"));