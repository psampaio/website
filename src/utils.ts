export const sortArray = <T>(array: T[], keySelector: (item: T) => number | null | undefined) =>
    array.sort((a, b) => {
        const aVal = keySelector(a);
        const bVal = keySelector(b);

        if (aVal == null && bVal == null) return 0;
        if (aVal == null) return 1;
        if (bVal == null) return -1;
        return aVal - bVal;
    });
