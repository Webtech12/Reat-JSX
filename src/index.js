import React from 'react'
import ReactDOM from 'react-dom'
import { image } from "faker"
import CommentDetails from './CommentDetails'
import ApprovalCard from './ApprovalCard'
// import Placeholder from './Placeholder'

const App = () => {
    return (

        <div className="ui container comments">

            <ApprovalCard>
                <CommentDetails
                    author="sam"
                    timeAgo="Today at 5:30PM"
                    desc="text 1"
                    avatar={image.avatar()} />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetails
                    author="alex"
                    timeAgo="Today at 2:30AM"
                    desc="text 2"
                    avatar={image.avatar()} />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetails
                    author="jones"
                    timeAgo="Today at 07:30PM"
                    desc="text 3"
                    avatar={image.avatar()} />
            </ApprovalCard>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))
