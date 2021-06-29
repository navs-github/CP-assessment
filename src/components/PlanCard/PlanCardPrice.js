import React from 'react'

function PlanCardPrice(props) {
    return (
        <div className="mt-5 flex flex-col space-y-0.5 items-center">
            <p className="">{props.from}</p>
            <h2 className="text-[34px] font-bold">{props.price}</h2>
            <p className="">{props.period}</p>
        </div>
    )
}

export default PlanCardPrice
