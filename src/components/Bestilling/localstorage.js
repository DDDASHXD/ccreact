export const setLocalUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
}

export const getLocalUser = () => {
    return JSON.parse(localStorage.getItem('user'));
}

export const removeLocalUser = () => {
    localStorage.removeItem('user');
}