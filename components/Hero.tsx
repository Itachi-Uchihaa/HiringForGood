import Button from "@/components/ui/Button";
import Typewriter from "typewriter-effect";

const Hero = () => {
    return (
        <section className="bg-white relative">
             <div className="absolute z-20 top-0 left-0 right-0 bg-[#730EC2] text-white p-3">
                 <p className="text-center text-sm  leading-4">
                     {"Livraison OFFERTE à partir de 75€ d'achat"}
                 </p>
             </div>
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                    <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#333399] to-[#FF00CC] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
                </div>
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            LAYUP |
                            <Typewriter
                            options={{
                                strings: [
                                "RAISE YOURSELF.",
                                "FOR TEAM.",
                                "I LOVE THE COMFORT.",
                                    ],
                                autoStart:true,
                                loop:true
                            }}
                            />
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            {"Dans la définition de notre marque de chaussures de basketball, Raise Yourself désigne toutes les personnes qui se donnent les moyens de grandir, d’avancer et d’apprendre."}
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Button type="submit" title="JE DECOUVRE" variant="btn_hero"/>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                    <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#333399] to-[#FF00CC] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
                </div>
            </div>
        </section>
    )
}

export default Hero
