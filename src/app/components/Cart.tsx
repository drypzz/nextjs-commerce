'use client'
import { useCartStore } from "@/store";
import CartDrawer from "./CartDrawer";

function Cart(){
    const useStore = useCartStore();

    return (
        <>
            <div onClick={() => useStore.toggleCart()} className='flex items-center cursor-pointer relative'>
                <svg xmlns='http://www.w3.org/2000/svg' fill='#ffffff' className='h-5 w-5' viewBox='0 0 24 24' stroke='currentColor'>
                    <path d='M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z'/>
                </svg>
                {
                    useStore.cart.length > 0 &&
                    (
                        <span className='bg-teal-600 text-sm font-bold rounded-full h-4 w-4 flex items-center justify-center absolute left-3 bottom-3'>
                            {useStore.cart?.length}
                        </span>
                    )
                }
            </div>
            {!useStore.isOpen &&
                (
                    <CartDrawer />
                )
            }
        </>
    )
}

export default Cart;