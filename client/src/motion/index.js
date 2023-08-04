export const animation = {
    hiddenHorizontal: {
        x: 100,
        opacity: 0,
    },
    visibleHorizontal: (custom) => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 },
    }),
    hiddenVertical: {
        y: -100,
        opacity: 0,
    },
    visibleVertical: (custom) => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 },
    }),
};