
function DoctorAlt(props) {
    return (
        <div className="flex flex-col items-center">

            <div className="w-full flex flex-row items-center justify-between">


                <img src={props.avatar} className="self-center w-[150px] h-[150px]" alt="" />



            </div>
            <div className="h-36">
                <h2 className="mt-7 text-center text-xl">{props.name}</h2>
                <h2 className="mt-0.5 text-center text-xl">{props.titles}</h2>
            </div>
            <img src={props.logo} className="w-[190px]" alt="" />
        </div>
    )
}

export default DoctorAlt