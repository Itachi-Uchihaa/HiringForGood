import Image from "next/image";
import {FEATURES} from "@/constants";
import {motion, useScroll} from "framer-motion";
import {useRef} from "react";

const Features = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    });
    return(
        <section className="w-full mb-36">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center">
                <h1 className="mt-14 mb-16 text-2xl font-bold tracking-tight leading-none text-gray-900 md:text-5xl">NOUVEAUX PRODUITS</h1>
                <motion.div
                    ref={ref}
                    style={{
                        scale: scrollYProgress,
                        opacity: scrollYProgress,
                    }}
                    className="mx-auto max-w-4xl">
                    {FEATURES.map((features, index) =>(
                        <div key={index} className="flex gap-8 items-center py-5">
                            <Image src={features.icon} alt={""} width={45} height={45} />
                            <p className="text-left font-medium">{features.description}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
        )
}

export default Features