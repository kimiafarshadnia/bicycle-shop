'use client'
import { ShoppingCard } from 'Components';
import { useLocalStorage } from "../hooks/useLocalStorage";
import { ReactNode, createContext, useContext } from "react";
import { Product } from 'Types';

type CartProviderProps = {
    children: ReactNode
}

type CartItem = {
    id: number
    quantity: number
    size: number
    color: string
}

type CartContextType = {
    getItemQuantity: (id: number) => number
    updateItemQuantity: (id: number, quantity: number) => void
    addItem: (id: number, size: number, color: string) => void
    decreaseItem: (id: number) => void
    removeItem: (id: number) => void
    cartQuantity: number
    cartItems: CartItem[]
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCartContext = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCartContext must be used within a CartProvider');
    }
    return context;
}

export const CartProvider = ({ children }: CartProviderProps) => {

    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('shopping-cart', [])

    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)

    const updateItemQuantity = (id: number, quantity: number) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity } : item
            )
        );
    };

    const getItemQuantity = (id: number) => {
        const item = cartItems.find(item => item.id === id);
        return item ? item.quantity : 1;
    }

    const addItem = (id: number, size: number, color: string) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === id && item.size === size && item.color === color);
            console.log('existingIteme', existingItem)
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === id && item.size === size && item.color === color
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevItems, { id, quantity: 1, size, color }];
            }
        });
    };


    const decreaseItem = (id: number) => {
        setCartItems(prevItems => {
            const item = prevItems.find(item => item.id === id);
            if (item) {
                if (item.quantity === 1) {
                    return prevItems.filter(item => item.id !== id);
                } else {
                    return prevItems.map(item => item.id === id ? { ...item, quantity: item.quantity - 1 } : item);
                }
            }
            return prevItems;
        });
    };

    const removeItem = (id: number) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    return (
        <CartContext.Provider
            value={{
                getItemQuantity,
                updateItemQuantity,
                addItem,
                decreaseItem,
                removeItem,
                cartQuantity,
                cartItems
            }}
        >
            {children}
        </CartContext.Provider>
    )
}   