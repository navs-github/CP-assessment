
function PlanCard(props) {
    return (
        <div className={"flex flex-col flex-grow-0 px-[34px] py-[52px] w-full xl:w-1/3 text-lg bg-white shadow-md " + props.layout}>
            {props.children}
        </div>
    )
}

export default PlanCard