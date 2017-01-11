export const get = () => {
    return JSON.parse(localStorage.getItem('state')) || {};
};

export const set = (data) => {
    try {
        let stringData = JSON.stringify(data);
        localStorage.setItem('state', JSON.stringify(data));
    } catch (e) {}
};
