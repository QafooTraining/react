'use strict'

import React from "react"

let Item= React.createClass({
    propTypes: {
        priority: React.PropTypes.string,
        text: React.PropTypes.string,
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

        return (<li>
            <span className={"fa fa-" + iconMap[this.props.priority].icon + " text-" + iconMap[this.props.priority].class} /> {this.props.text}
        </li>)
    }
})

export default Item
