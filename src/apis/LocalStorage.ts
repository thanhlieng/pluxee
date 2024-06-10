const LocalStorage = {
    getToken: () => localStorage.getItem('token'),
    setToken: (token: string) => localStorage.setItem('token', token),
    getTokenUser: () => localStorage.getItem('token-user'),
    setTokenUser: (token: string) => localStorage.setItem('token-user', token),
    removeToken: () => localStorage.removeItem('token'),
    removeTokenUser: () => localStorage.removeItem('token-user'),
};

export default LocalStorage;
