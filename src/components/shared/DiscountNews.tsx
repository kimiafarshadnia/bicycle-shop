'use client'
import { useEffect, useState } from "react";

export const DiscountNews = () => {

    const messages = [
        "Use promocode COUPON to get 15% discount!",
        "Free plane shipping over $250 Today only!",
        "Post holiday Flash Sale! 2 for $20",
    ];

    const [currentMessage, setCurrentMessage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentMessage((prevMessage) => (prevMessage + 1) % messages.length);
        }, 3000); // Change text every 3 seconds

        return () => clearInterval(interval);
    }, []);
    return (
        <div className="h-8 overflow-hidden flex items-center justify-center bg-primary text-white text-center py-2">
            <div className="animate-slide text-white text-xs sm:text-sm md:text-base">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`${index === currentMessage ? 'block' : 'hidden'
                            } transition-opacity duration-500`}
                    >
                        {message}
                    </div>
                ))}
            </div>
        </div>
    )
}