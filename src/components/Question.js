import React, { useState } from 'react'

function Question(props) {

    const [Toggle, setToggle] = useState(false)
    function handleExpand() {
        setToggle(!Toggle)
    }
    return (
        <div className="flex flex-col">
            <button onClick={handleExpand} className="cursor-pointer text-left focus:outline-none">

                <div className="mt-[30px] flex flex-row justify-between items-baseline">
                    <h2 className="text-2xl font-bold leading-[30px]">{props.question}</h2>
                    {!Toggle &&
                        <svg className="ml-4 self-center flex-shrink-0" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M13 8V0H8L8 8H0V13H8L8 21H13V13H21V8H13Z" fill="black" />
                        </svg>



                    }
                    {Toggle &&
                        <svg className="ml-4 self-center flex-shrink-0" width="21" height="5" viewBox="0 0 21 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="21" height="5" fill="black" />
                        </svg>
                    }
                </div>
                <div className={"mt-3.5 pr-8 text-lg leading-[28px] transition-all " + (Toggle ? 'block  ' : 'hidden ')}>
                    <p className="">{props.answer}</p>
                </div>
                <div className="mt-5 w-full h-0.5 bg-[#C4C4C4]"></div>
            </button>
        </div>
    )
}

export default Question
