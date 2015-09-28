//clase que crea la lista de tareas
'use strict';

var TodoList = React.createClass({
    displayName: 'TodoList',

    render: function render() {
        var createItem = function createItem(itemText, index) {
            return React.createElement(
                'li',
                { key: index + itemText },
                itemText
            );
        };
        return React.createElement(
            'ul',
            null,
            this.props.items.map(createItem)
        );
    }
});

//clase que crea el formulario y lo muestra junto con la lista de tareas
var FormApp = React.createClass({
    displayName: 'FormApp',

    getInitialState: function getInitialState() {
        return {
            text: '',
            items: []
        };
    },
    onChange: function onChange(e) {
        this.setState({ text: e.target.value });
    },
    handleSubmit: function handleSubmit(e) {
        e.preventDefault();
        var nextItems = this.state.items.concat([this.state.text]);
        var nextText = '';
        this.setState({ items: nextItems, text: nextText });
    },
    render: function render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h3',
                null,
                'React Todo List'
            ),
            React.createElement(TodoList, { items: this.state.items }),
            React.createElement(
                'form',
                { onSubmit: this.handleSubmit },
                React.createElement('input', { type: 'text', onChange: this.onChange, value: this.state.text }),
                React.createElement(
                    'button',
                    { type: 'submit' },
                    'Add'
                )
            )
        );
    }
});

React.render(React.createElement(FormApp, null), document.getElementById("content"));