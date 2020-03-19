import React from 'react'
import ReactDOM from 'react-dom'
import { image } from "faker"
import CommentDetails from './CommentDetails'
import ApprovalCard from './ApprovalCard'
import Placeholder from './Placeholder'

const App = () => {
    return (

        <div>
            <Placeholder>
                <div className="ui icon header">
                    <i className="pdf file outline icon"></i>
                No documents are listed for this customer.
                </div>
                <div className="ui primary button">Add Document</div>
            </Placeholder>

            <Placeholder>
                <h4 className="ui header">INFO</h4>
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
            </Placeholder>



            {/* <Message header="header txt" para="pp"></Message> */}
        </div>

        // <div className="ui container comments">

        //     <ApprovalCard>
        //         <CommentDetails
        //             author="sam"
        //             timeAgo="Today at 5:30PM"
        //             desc="text 1"
        //             avatar={image.avatar()} />
        //     </ApprovalCard>

        //     <ApprovalCard>
        //         <CommentDetails
        //             author="alex"
        //             timeAgo="Today at 2:30AM"
        //             desc="text 2"
        //             avatar={image.avatar()} />
        //     </ApprovalCard>

        //     <ApprovalCard>
        //         <CommentDetails
        //             author="jones"
        //             timeAgo="Today at 07:30PM"
        //             desc="text 3"
        //             avatar={image.avatar()} />
        //     </ApprovalCard>

        // </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))
