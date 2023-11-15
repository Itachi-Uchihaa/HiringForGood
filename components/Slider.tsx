"use client"

import Reviews from "@/components/Reviews";
import {REVIEWS} from "@/constants";
import ArrowRight from "@/public/img/arrowRight.png"
import ArrowLeft from "@/public/img/arrowLeft.png"
import Image from "next/image";
import {useState} from "react";

const Slider = () => {
    const [current, setCurrent] = useState<number>(0);

    let previousSlide = () => {
        if (current === 0) setCurrent(REVIEWS.length - 1 );
        else setCurrent(current - 1);
    };

    let nextSlide = () => {
        setCurrent(current === REVIEWS.length - 1 ? 0 : current + 1);
    };

    return(
        <div className="overflow-hidden relative max-w-screen-xl py-8 mx-auto">
            <div
                className=" flex transition ease-out duration-700"
                style={{transform: `translateX(-${current * 100}%)`}}
            >
                {REVIEWS.map((reviews, index) => (
                    <div key={index} className="min-w-full">
                        <Reviews
                            icon={reviews.icon}
                            description={reviews.description}
                            ratings={reviews.rating}
                            author={reviews.author}
                            area={reviews.area}
                            profile={reviews.profile}/>
                    </div>
                ))}
            </div>
            <div className="absolute w-full top-0 h-full justify-between items-center flex">
                <button onClick={previousSlide}>
                    <Image src={ArrowRight} alt={""} width={120} height={120}/>
                </button>
                <button onClick={nextSlide }>
                    <Image src={ArrowLeft} alt={""} width={120} height={120}/>
                </button>
            </div>
        </div>
    )

}

export default Slider