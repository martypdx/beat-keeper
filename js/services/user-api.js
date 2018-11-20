

function saveUserData(data) {
    localStorage.setItem('userData', JSON.stringify(data));
}

const userDataApi = {
    get() {
        return localStorage.getItem('userData');
    },
    add(userData) {
        // save array to localStorage
        saveUserData(userData);
    }
};

export default userDataApi;