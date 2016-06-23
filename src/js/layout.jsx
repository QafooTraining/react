'use strict'

import React from "react"
import LinkedStateMixin from "react-addons-linked-state-mixin"

import { Link } from 'react-router'

import _ from "underscore"

let Layout = React.createClass({
    mixins: [LinkedStateMixin],

    getInitialState: function () {
        return {
            filter: this.props.location.query.q,
            words: [],
        }
    },
    
    componentWillMount: function () {
        this.reload()
    },

    componentDidUpdate: function (prevProps, prevState) {
        if (prevState.filter !== this.state.filter) {
            this.props.history.push({
                pathname: '/',
                search: '?q=' + this.state.filter,
            })
        }

        if (prevProps.location.query.q !== this.props.location.query.q) {
            this.reload()
        }
    },
    
    reload: function () {
        jQuery.get(
            '/api/' + (this.props.location.query.q ? '?q=' + this.props.location.query.q : ''),
            (function (words) {
                this.setState({
                    words: words,
                })
            }).bind(this)
        )
    },
    
    render: function () {
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

                <this.props.route.subcomponent {...this.props} />
            </div>
        </div>)
    }
})

export default Layout
