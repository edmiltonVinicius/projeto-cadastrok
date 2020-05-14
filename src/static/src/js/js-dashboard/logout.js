function logout(){
    sessionStorage.removeItem('token')
    window.location.replace('/')
}