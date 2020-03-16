// import react and react-dom
import React from 'react'
import ReactDOM from 'react-dom'

// create component
const App = () => {
    return <div>
        hello world
    </div>
}



// render in screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
