'use strict'

import React from "react"
import LinkedStateMixin from "react-addons-linked-state-mixin"

import { Link } from 'react-router'

import _ from "underscore"

let WordList = React.createClass({
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
        return (<ul>
            {_.map(this.state.words, function (word) {
                return <li key={word}>
                    <Link to="/word" query={{word: word}}>{word}</Link>
                </li>
            })}
        </ul>)
    }
})

export default WordList
