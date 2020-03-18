import React from 'react'
import { image } from "faker"

const CommentDetails = props => {
    return (
        <div className="comment" >
            <a href="/" className="avatar">
                <img alt="avatar" src={image.avatar()} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
                <div className="metadata">
                    <span className="date">Today at 6:00PM</span>
                </div>
                <div className="text">Nice post!</div>
            </div>
        </div>
    )
}

export default CommentDetails
