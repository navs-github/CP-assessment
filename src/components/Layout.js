import React from 'react'

function Layout(props) {
    return (
        <div className={"" + props.mobile + " " + props.laptop + " " + props.desktop}>
            {props.children}
        </div>
    )
}

export default Layout
