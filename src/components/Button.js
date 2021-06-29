function Button(props) {
    return (
        <div className="">
            <button className={"px-5 py-2.5 inline-block focus:outline-none  text-white rounded-full text-[18px] font-bold whitespace-nowrap " + (props.color ? props.color : 'bg-[#BAD036]')}>{props.text}</button>
        </div>

    )
}

export default Button;