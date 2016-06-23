'use strict'

import React from "react"

let Word= React.createClass({
    render: function () {
        return (<h1>{this.props.location.query.word}</h1>)
    }
})

export default Word
