import React from 'react'

function Hook(props) {
    return (


        <div className="flex flex-col space-y-5 xl:space-y-0 xl:flex-row xl:space-x-10">
            {!props.invert &&
                <img src={props.img} className="self-center h-[224px] w-[224px]" alt="" srcSet="" />
            }
            <div className="flex flex-col">
                <h2 className="text-[42px]">{props.heading}</h2>
                <p className="leading-[34px]">{props.body} </p>
            </div>
            {props.invert &&
                <img src={props.img} className="h-[224px] w-[224px]" alt="" srcSet="" />
            }
        </div>
    )
}

export default Hook
