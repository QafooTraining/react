'use strict'

import React from "react"
import ReactDOM from "react-dom"
import LinkedStateMixin from "react-addons-linked-state-mixin"

import _ from "underscore"

let TodoList = React.createClass({
    mixins: [LinkedStateMixin],

    getInitialState: function () {
        return {
            filter: null,
            words: [],
        }
    },
    
    componentWillMount: function () {
        this.reload()
    },

    componentDidUpdate: function (prevProps, prevState) {
        if (prevState.filter !== this.state.filter) {
            this.reload()
        }
    },
    
    reload: function () {
        jQuery.get(
            '/api/' + (this.state.filter ? '?q=' + this.state.filter : ''),
            (function (words) {
                this.setState({
                    words: words,
                })
            }).bind(this)
        )
    },
    
    render: function () {
        console.log(this.state.filter)

        return (<div>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Word list</a>
                    </div>
                </div>
            </nav>

            <div className="container">
                <div className="well">
                    <div className="row">
                        <form>
                            <div className="col-md-offset-3 col-md-6">
                                <div className="form-group">
                                    <label>Item</label>
                                    <input type="text" className="form-control" valueLink={this.linkState('filter')} />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <ul>
                        {_.map(this.state.words, function (word) {
                            return <li key={word}>{word}</li>
                        })}
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
