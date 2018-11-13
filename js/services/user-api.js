
//let userSettings = [];

function saveUserData(data) {
    localStorage.setItem('userSettings', JSON.stringify(data));
}

const userDataApi = {
    add(userData) {
        // 1. add to our array
        //userSettings.push(userData);
        // 2. save array to localStorage
        saveUserData(userData);
    }
};

export default userDataApi;