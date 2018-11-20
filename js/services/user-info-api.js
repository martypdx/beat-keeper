
function saveUserInfo(userInfo) {
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
}

const userInfoApi = {
    get() {
        return localStorage.getItem('userInfo');
    },
    add(userInfo) {
        saveUserInfo(userInfo);
    }
};

export default userInfoApi;