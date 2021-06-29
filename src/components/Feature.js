function Feature(props) {
    return (
        <div className="flex flex-col items-center">
            {props.logo}
            <h2 className="mt-4 font-bold text-lg text-center">{props.heading}</h2>
            <p className="mt-1 text-center">{props.body}</p>
        </div>
    )

}

export default Feature;