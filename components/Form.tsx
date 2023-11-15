import Image from "next/image";
import  LayupRose from "@/public/img/layupRose.webp";
import Arrow from "@/public/img/fleche-vers-le-haut.png";
import Higlihter from "@/public/img/Group_1.png"
import Input from "@/components/ui/Input";
import InputLabel from "@/components/ui/InputLabel";
import Button from "@/components/ui/Button";


const Profile = () => {
    return(
        <section className="w-full mb-52">
            <div className="max-w-screen-xl px-4 pt-8 mx-auto">
                <div className="flex flex-col items-center">
                    <h1 className="mt-14 mb-2 text-7xl font-semibold tracking-tight leading-none text-gray-900 md:text-5xl">Profilr</h1>
                    <h3 className="text-4xl font-medium mb-0 mt-4">
                        Talent inteligente software
                    </h3>
                    <Image src={Higlihter} alt={""} className="mt-[-12px] max-w-[600px]" />
                </div>
                <div className="grid lg:gap-8 xl:gap-28 lg:py-16 lg:grid-cols-12">
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <Image src={LayupRose} alt={""} />
                    </div>
                    <div className="mr-auto place-self-center lg:col-span-7 w-full">
                        <form className="w-3/5 max-md:px-6 max-md:w-full">
                            <div className="mb-6">
                                <InputLabel type="text" title="First Name"/>
                            </div>
                            <div className="mb-6">
                                <InputLabel type="text" title="Last Name"/>
                            </div>
                            <div className="mb-6">
                                <InputLabel type="email" title="Email Adress"/>
                            </div>
                            <div className="flex items-start mb-6">
                                <div className="flex items-center h-5">
                                    <Input type="checkbox" placeholder={""}/>
                                </div>
                                <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900">T&C</label>
                            </div>
                            <Button type="submit" title="CTA" variant="btn_indigo_two"/>
                            <Image src={Arrow} alt={""} width={250} height={250} className="rotate-[55deg] skew-y-[-50deg] skew-x-[-5deg]"/>
                        </form>
                    </div>
                </div>
                <div className=" lg:gap-8 xl:gap-14 lg:grid-cols-12">
                    <span className="font-medium">
                        {
                            "We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location, \n" +
                            "We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location."
                        }
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Profile
