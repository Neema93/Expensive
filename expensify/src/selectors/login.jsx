
  export default (users, {username, password}) =>{
    return users.filter((user) => {
      
        const usernameMatch = user.username.toLowerCase().includes(username.toLowerCase());
        const passwordMatch = user.password.includes(password);
        return usernameMatch && passwordMatch; 
  
    })
}