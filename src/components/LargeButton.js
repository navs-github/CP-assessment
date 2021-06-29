import React from 'react'

function LargeButton(props) {
    return (

        <button className={"px-14 py-[18px] inline-block focus:outline-none  text-white rounded-full text-2xl font-bold whitespace-nowrap " + (props.color ? props.color : 'bg-[#BAD036]')}>{props.text}</button>

    )
}

export default LargeButton
