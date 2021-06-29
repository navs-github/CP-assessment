import React from 'react'

function PlanCardListContainer(props) {
    return (
        <ul className="mt-[30px] flex flex-col space-y-[15px] leading-[22px]">
            {props.children}
        </ul>

    )
}

export default PlanCardListContainer
