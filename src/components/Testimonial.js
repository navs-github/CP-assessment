import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

import Button from './Button'

function Testimonial(props) {
    return (
        <div className="">
            <div className="hidden xl:flex flex-row justify-center items-center space-x-4">
                <div className="">
                    <ButtonBack className="z-20">
                        <svg width="17" height="31" viewBox="0 0 17 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17 29.1548L15.1915 31L1.80851 17.3453L-1.35505e-06 15.5L8.18363e-06 15.5L1.80852 13.6548L15.1915 5.79267e-07L17 1.84524L3.61703 15.5L17 29.1548Z" fill="#C4C4C4" />
                        </svg>
                    </ButtonBack>
                </div>
                <div className=" mt-10 xl:flex flex-row space-x-[34px]">
                    <div className="w-[160px] flex-shrink-0"><img src={props.avatar} className="flex-shrink-0" alt="" srcSet="" /></div>
                    <div className="flex flex-col">
                        <p className="leading-[29px]">{props.body}</p>
                        <div className="mt-[35px] flex flex-row items-center">
                            <div className="flex flex-col">
                                <h3 className="text-xl font-bold">{props.name + (props.age ? ', Age ' : ' ') + props.age} </h3>
                                <h3 className="mt-[2px] text-xl font-bold">{props.conditions}</h3>
                            </div>
                            <div className="ml-4 h-full w-[1px] bg-[#A3C0E5]"></div>
                            <div className="ml-5"><Button className="" text={props.buttonText} /></div>
                        </div>
                    </div>

                </div>
                <div className="">
                    <ButtonNext className="">
                        <svg width="17" height="31" viewBox="0 0 17 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M-1.74603e-06 29.1548L1.80851 31L15.1915 17.3453L17 15.5L17 15.5L15.1915 13.6548L1.80852 5.79267e-07L1.01782e-05 1.84524L13.383 15.5L-1.74603e-06 29.1548Z" fill="#C4C4C4" />
                        </svg>
                    </ButtonNext>
                </div>
            </div>


            <div className="xl:hidden mt-[30px]">
                <div className="flex flex-col items-center">
                    <div className="flex flex-row w-full justify-between px-4">
                        <ButtonBack className="z-20">
                            <svg width="17" height="31" viewBox="0 0 17 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17 29.1548L15.1915 31L1.80851 17.3453L-1.35505e-06 15.5L8.18363e-06 15.5L1.80852 13.6548L15.1915 5.79267e-07L17 1.84524L3.61703 15.5L17 29.1548Z" fill="#C4C4C4" />
                            </svg>
                        </ButtonBack>
                        <div className="w-[140px]"><img src={props.avatar} className="" alt="" srcSet="" /></div>
                        <ButtonNext className="">
                            <svg width="17" height="31" viewBox="0 0 17 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M-1.74603e-06 29.1548L1.80851 31L15.1915 17.3453L17 15.5L17 15.5L15.1915 13.6548L1.80852 5.79267e-07L1.01782e-05 1.84524L13.383 15.5L-1.74603e-06 29.1548Z" fill="#C4C4C4" />
                            </svg>
                        </ButtonNext>
                    </div>
                    <p className="mt-5 px-2.5 text-center">{props.body}</p>
                    <h3 className="mt-3 text-xl font-bold">{props.name + ', Age' + props.age}</h3>
                    <h3 className="mt-[2px] text-xl font-bold">{props.conditions}</h3>
                    <div className="mt-3">
                        <Button className="" text={props.buttonText} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
