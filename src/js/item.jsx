'use strict'

import React from "react"

let Item= React.createClass({
    propTypes: {
        priority: React.PropTypes.string,
        text: React.PropTypes.string,
        resolved: React.PropTypes.bool,
        resolveFunction: React.PropTypes.func,
    },

    render: function () {
        let iconMap = {
            low: {
                icon: "angle-double-down",
                class: "info",
            },
            medium: {
                icon: "circle-o",
                class: "warning",
            },
            high: {
                icon: "angle-double-up",
                class: "danger",
            },
        }

        return (<li className={this.props.resolved ? "text-muted" : ""}>
            <span className={"fa fa-" + iconMap[this.props.priority].icon + " text-" + iconMap[this.props.priority].class} /> {this.props.text}
            {!this.props.resolved ?
            <button className="btn btn-xs btn-danger pull-right" onClick={this.props.resolveFunction}>
                <span className="fa fa-times" />
            </button>
            : null}
        </li>)
    }
})

export default Item
