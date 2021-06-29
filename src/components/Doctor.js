import { ButtonBack, ButtonNext, Dot } from 'pure-react-carousel';

function Doctor(props) {
    return (
        <div className="flex flex-col items-center">

            <div className="w-full flex flex-row items-center justify-between px-4">
                <ButtonBack>
                    <svg width="19" height="34" viewBox="0 0 19 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.2424 2.47532L16.3017 0.534668L1.94078 14.8956L1.94066 14.8955L0 16.8362L16.3015 33.1377L18.2422 31.197L3.88144 16.8363L18.2424 2.47532Z" fill="#C4C4C4" />
                    </svg>

                </ButtonBack>

                <img src={props.avatar} className="self-center w-[150px] h-[150px]" alt="" />
                <ButtonNext>
                    <svg className="block xl:hidden" width="19" height="34" viewBox="0 0 19 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.757603 31.594L2.69826 33.5347L17.0592 19.1737L17.0593 19.1738L19 17.2332L2.69849 0.931658L0.75783 2.87231L15.1186 17.2331L0.757603 31.594Z" fill="#C4C4C4" />
                    </svg>
                </ButtonNext>


            </div>
            <div className="h-36">
                <h2 className="mt-7 text-center text-xl">{props.name}</h2>
                <h2 className="mt-0.5 text-center text-xl">{props.titles}</h2>
            </div>
            <img src={props.logo} className="w-[190px]" alt="" />

        </div>
    )
}

export default Doctor