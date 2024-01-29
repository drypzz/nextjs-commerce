'use client'

import { ReactNode, useState, useEffect } from "react";

export default function Hydrate({ children }: { children: ReactNode}) {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    return hasMounted ? <>{children}</> : <span>Carregando...</span>;
}