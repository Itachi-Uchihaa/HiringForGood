import Image from "next/image";
import {FAQS} from "@/constants";

const Guide = () => {
    return(
        <section className="w-full mb-48">
            <div className="pt-8 px-4 mx-auto max-w-screen-xl text-center">
                <div>
                    <p className="mb-2 text-3xl font-medium text-gray-900">
                        FAQS
                    </p>
                </div>
                <div className="mx-auto mt-8 grid max-w-4xl divide-y divide-neutral-200">
                    {FAQS.map((faqs,index) => (
                        <div key={index} className="pt-5 pb-12">
                            <details className="group">
                                <summary className="flex cursor-pointer list-none items-center font-medium gap-8">
                                <span className="transition group-open:rotate-180">
                                    <Image src={faqs.icon} alt={""} height={30} width={30}/>
                                </span>
                                    <span className="text-left">{faqs.title}</span>
                                </summary>
                                <p className="group-open:animate-fadeIn mt-8 text-left">{faqs.description}</p>
                            </details>
                        </div>
                    ))}
                </div>
            </div>

        </section>
        )

}

export default Guide