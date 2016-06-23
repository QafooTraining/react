'use strict'

import React from "react"
import ReactDOM from "react-dom"

import { Router, Route } from 'react-router'
import createHistory from 'history/lib/createBrowserHistory'
import useQueries from 'history/lib/useQueries'
import useBasename from 'history/lib/useBasename'

import Word from "./word.jsx"
import WordList from "./wordList.jsx"

let history = useBasename(useQueries(createHistory))({
    basename: '/',
})

ReactDOM.render(
    <Router history={history}>
        <Route path="/" component={WordList} />
        <Route path="/word" component={Word} />
    </Router>,
    document.getElementById('content')
)
