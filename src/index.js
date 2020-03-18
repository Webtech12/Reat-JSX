import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetails from './CommentDetails'

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetails author="sam"/>
            <CommentDetails author="alex"/>
            <CommentDetails author="jones"/>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))
