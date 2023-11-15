import React from 'react'
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const Neswletter = () => {
    return(
        <section className="w-full">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center">
                <div>
                    <p className="font-medium text-gray-900 mb-8 ">Some text explanations why you should sign up.</p>
                </div>
                <form action="#">
                    <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                        <div className="flex-grow">
                            <Input type="email" placeholder="Email Address"/>
                        </div>
                        <div className="shrink-0">
                            <Button type="submit" title="Get Started" variant="btn_indigo_newsletter"/>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Neswletter