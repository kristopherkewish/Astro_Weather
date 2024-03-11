import { useEffect } from 'react';

export default function ThemeProvider({children, weatherCategory}) {
    const COLOURS = {
        LIGHT_BLUE: '#8ECAE6',
        MID_BLUE: '#219EBC',
        DARK_BLUE: '#023047',
        ORANGE: '#FB8500',
        YELLOW: '#FFB703',
        GREY: '#A6A6A6'
    };

    useEffect(() => {
        if(typeof window !== 'undefined') {
            const root = document.documentElement;
            switch(weatherCategory) {
                case 'Sunny':
                    root.style.setProperty('--accent', COLOURS['ORANGE']);
                    root.style.setProperty('--bg-color', COLOURS['LIGHT_BLUE']);
                    break;
                case 'Cloudy':
                    root.style.setProperty('--accent', COLOURS['YELLOW']);
                    root.style.setProperty('--bg-color', COLOURS['LIGHT_BLUE']);
                    break;
                case 'Rainy':
                    root.style.setProperty('--accent', COLOURS['DARK_BLUE']);
                    root.style.setProperty('--bg-color', COLOURS['GREY']);
                    break;
                case 'Windy':
                    root.style.setProperty('--accent', COLOURS['LIGHT_BLUE']);
                    root.style.setProperty('--bg-color', COLOURS['DARK_BLUE']);
                    break;
                default:
                    root.style.setProperty('--accent', COLOURS['ORANGE']);
                    root.style.setProperty('--bg-color', COLOURS['LIGHT_BLUE']);        
            };
        } 
    }, []);

    return <>{children}</>;
}