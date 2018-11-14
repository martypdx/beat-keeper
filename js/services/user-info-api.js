
function saveUserInfo(userInfo) {
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
}

const userInfoApi = {
    add(userInfo) {

        saveUserInfo(userInfo);
    }
};

export default userInfoApi;