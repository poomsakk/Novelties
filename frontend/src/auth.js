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

export function isOwnThisChap(chapid) {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"))
    if (userInfo.ownChap?.find((chap) => chap.chapId === chapid) === undefined) {
        return false
    } else {
        return true
    }
}

const auth = {
    isLogin,
    isWriter,
    isOwnThisChap
};

export default auth;