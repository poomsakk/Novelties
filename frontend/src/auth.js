export function isLogin() {
    const userInfo = localStorage.getItem("userInfo")
    if (userInfo) {
        return true
    } else {
        return false
    }
}

export function isWriter() {
    const userInfo = localStorage.getItem("writer")
    if (userInfo) {
        return true
    } else {
        return false
    }
}

const auth = {
    isLogin,
    isWriter,
};

export default auth;