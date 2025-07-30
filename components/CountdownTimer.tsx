import { useEffect, useState } from 'react';

interface CountdownTimerProps {
    initialSeconds?: number;
    onComplete?: () => void;
}

export default function CountdownTimer({
    initialSeconds = 60,
    onComplete,
}: CountdownTimerProps): React.ReactNode {
    const [seconds, setSeconds] = useState(initialSeconds);

    const formatTime = (secs: number): string => {
        const minute = Math.floor(secs / 60);
        const remainingSeconds = secs % 60;

        return `0${minute} : ${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds((prev) => prev - 1);
        }, 1000);

        if (seconds <= 0) {
            clearInterval(timer);
        }

        return (): void => clearInterval(timer);
    }, [seconds, onComplete]);

    return <>{formatTime(seconds)}</>;
}
