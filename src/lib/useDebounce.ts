import React from 'react'

export function useDebounce(value: string, delay: number) {
    // value is the value we want to debounce
    // delay is the delay in ms we want to debounce by
    const [debouncedValue, setDebouncedValue] = React.useState(value);

    React.useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value); // function to be called after the delay
        }, delay); // only if i stop typing then this function will get called
        return () => {
            clearTimeout(handler); // if the user keeps typing, the timer will be cleared and the function will not be called
        }
    }, [value, delay]);

    return debouncedValue;
}