export const extractQueryString = key => {
    const queries = window.location.search.split('?').pop();
    if (queries) {
        const kvs = queries.split('&');
        for (const k of kvs) {
            const keys = k.split('=');
            if (keys[0] === key) {
                return keys[1];
            }
        }
    }
    return null;
};