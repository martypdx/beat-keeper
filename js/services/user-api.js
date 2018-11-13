
let userSettings = [];

function saveUserData() {
    localStorage.setItem('userSettings', JSON.stringify(userSettings));
}

const userDataApi = {
    add(userData) {
        // 1. add to our array
        userSettings.push(userData);
        // 2. save array to localStorage
        saveUserData();
    }
};

export default userDataApi;