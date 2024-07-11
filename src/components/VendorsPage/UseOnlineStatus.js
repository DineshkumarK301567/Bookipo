import React, { useState, useEffect } from "react";

export default function UseOnlineStatus() {
    const [isOnline, SetIsOnline] = useState(navigator.onLine);
    const updateOnlineStatus = () => {
        SetIsOnline(navigator.onLine);
    };
    useEffect(() => {
        window.addEventListener('online', updateOnlineStatus);
        window.addEventListener('offline', updateOnlineStatus);
        return () => {
            window.removeEventListener('online', updateOnlineStatus);
            window.addEventListener('offline', updateOnlineStatus);
        };
    }, []);
    return(
        <div>
            <span className={`dot ${isOnline ? 'online': 'offline'}`}></span>
        </div>
    )

}