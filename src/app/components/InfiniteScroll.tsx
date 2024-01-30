'use client'

import React from "react"; // Add the missing import statement for React module
import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { ProductType } from "@/types/ProductType";
import Products from "./Product";
import { fetchProducts } from "../actions";

async function InfiniteScroll({ initialProducts }: { initialProducts: ProductType[]; }){
    const [products, setProducts] = useState<ProductType[]>(initialProducts);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [ref, inView] = useInView({
        threshold: 0,
        triggerOnce: false
    });

    const lastProductId = products[products.length - 1]?.id;

    const loadingMoreProducts = useCallback(async () => {
        setIsLoading(true);
        const { formatedProducts, has_more } = await fetchProducts({ lastProductId });

        if (formatedProducts) {
            setProducts((prev) => [...prev, ...formatedProducts]);
            setHasMore(has_more);      
        };

        setIsLoading(false);

    }, [lastProductId]);

    useEffect(() => {
        if (inView && hasMore && !isLoading) {
            loadingMoreProducts();
        }
    }, [hasMore, inView, isLoading, loadingMoreProducts]);

    if(!products) return <div>Carregando...</div>;

    return (
        <>
            {products.map((e) => (
                <Products key={e.id} product={e} />
            ))}
            {hasMore && (
                <div ref={ref}>
                    Carregando...
                </div>
            )}
        </>
    )
}

export default InfiniteScroll;