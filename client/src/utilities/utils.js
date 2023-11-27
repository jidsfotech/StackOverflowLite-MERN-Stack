
// get an element coordinate
export const getOffset = (el) => {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
}

// Get window inner width
export const getWindowInnerWidth = () => window.innerWidth;