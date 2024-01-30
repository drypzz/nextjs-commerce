'use client'
import { useState } from "react";
import Image from "next/image";
import { ProductType } from "@/types/ProductType";

type ProductImageProps = {
    product: ProductType
    fill?: boolean
}

function ProductImage({ product, fill } : ProductImageProps) {

    const [isLoading, setIsLoading] = useState(true);

    return fill ?(
        <Image
            src={product.image}
            fill
            alt={product.name}
            onLoad={() => setIsLoading(false)}
            className={`object-cover ${isLoading ? 'blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'}`}
        />
    ) : (
        <Image
            src={product.image}
            width={400}
            height={700}
            alt={product.name}
            onLoad={() => setIsLoading(false)}
            className={`object-cover ${isLoading ? 'blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'}`}
        />
    )
}

export default ProductImage;