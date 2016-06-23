'use strict'

import React from "react"
import ReactDOM from "react-dom"

import _ from "underscore"

import Item from "./item.jsx"

let TodoList = React.createClass({
    getInitialState: function () {
        return {
            items: [],
        }
    },

    appendTodoItem: function (event) {
        event.preventDefault()
        event.stopPropagation()

        let item = {
            text: jQuery('#inputItem').val(),
            priority: jQuery('#inputPriority').val(),
        }
        let items = this.state.items
        items.push(item)

        this.setState({
            items: items
        })

        jQuery('#inputItem').val(null)
        jQuery('#inputPriority').val('medium')
    },
    

    render: function () {
        return (<div>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">TODO List</a>
                    </div>
                </div>
            </nav>

            <div className="container">
                <div className="well">
                    <div className="row">
                        <form onSubmit={this.appendTodoItem}>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Item</label>
                                    <input type="text" className="form-control" id="inputItem" placeholder="I should…" />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label>Priority</label>
                                    <select defaultValue="medium" className="form-control" id="inputPriority" size="1">
                                        <option value="high">High</option>
                                        <option value="medium">Medium</option>
                                        <option value="low">Low</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group">
                                    <button type="submit" className="btn btn-default">Append</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <ul className="list-unstyled">
                            {_.map(this.state.items, (function (item, key) {
                                return (<Item key={key} priority={item.priority} text={item.text} id={key} />)
                            }).bind(this))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>)
    }
})

ReactDOM.render(
    <TodoList />,
    document.getElementById('content')
);
