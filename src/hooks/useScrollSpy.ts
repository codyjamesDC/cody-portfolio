import { useState, useEffect } from 'react';

export function useScrollSpy(ids: string[], offset: number = 100) {
    const [activeId, setActiveId] = useState<string>('');

    useEffect(() => {
        const listener = () => {
            const scroll = window.scrollY;
            
            for (let i = ids.length - 1; i >= 0; i--) {
                const element = document.getElementById(ids[i]);
                if (element) {
                    const top = element.getBoundingClientRect().top + scroll - offset;
                    if (scroll >= top) {
                        setActiveId(ids[i]);
                        return;
                    }
                }
            }
            setActiveId('');
        };

        listener();
        window.addEventListener('scroll', listener);
        return () => window.removeEventListener('scroll', listener);
    }, [ids, offset]);

    return activeId;
}
