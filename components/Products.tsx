import CardImage from "@/components/ui/CardImage";
import {PRODUCTS} from "@/constants";

const Products = () => {
    return(
        <div>
            <section className="w-full mb-52 pt-14">
                <div
                    className="py-8 px-4 mx-auto max-w-screen-xl text-center">
                    <div className="grid grid-cols-3 gap-4 max-md:gap-16 max-md:grid-cols-1">
                        {PRODUCTS.map((products, index) => (
                            <CardImage
                                key={index}
                                icon={products.icon}
                                title={products.title}
                                description={products.description}
                                extraClass={`max-md:translate-y-0 ${index === 1 ? 'translate-y-40' : ''}`}

                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )

}

export default Products