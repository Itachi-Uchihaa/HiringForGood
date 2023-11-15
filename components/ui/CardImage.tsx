"use client"

import {motion, useAnimation, useInView} from 'framer-motion'
import Image from 'next/image'
import {useEffect, useRef} from "react";

type CardImageProps = {
    icon: string | any,
    title: string,
    description:string,
    extraClass?: string,
}

const CardImage = ({icon, title, description, extraClass} : CardImageProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const animationControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            animationControls.start("visible");
        }
    }, [isInView, animationControls]);

    return(
        <div ref={ref} className={`shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded w-fit ${extraClass}`}>
            <motion.div
                variants={{
                    hidden: {opacity: 0, y: 75},
                    visible: {opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={animationControls}
                transition={{duration: 1, delay: 0.25 }}
                ref={ref} style={{position: "relative", overflow: "hidden"}}
                className="p-[10%]">
                <Image
                    src={icon}
                    alt="Picture of the product"
                    width={400}
                    height={400}
                    className="p-2"
                />
                <div className="py-0.5 text-center">
                    <h1 className="text-2xl font-medium">{title}</h1>
                    <p className="text-base	">{description}</p>
                </div>
            </motion.div>
        </div>
    )
}

export default CardImage