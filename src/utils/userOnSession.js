export const userOnSession = {
    logIn(user) {
        sessionStorage.setItem("username", user.name)
        sessionStorage.setItem("userPhoto", user.userPhoto)
    }
    
}