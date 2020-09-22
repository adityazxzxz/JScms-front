export const isLogin = () => {
    if(localStorage.getItem('session')){
        return true;
    }
    return false;
}