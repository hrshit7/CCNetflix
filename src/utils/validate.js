export const validateForm = (email, password)=>{
    const validateEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const validatePassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if(!validateEmail) return "Email is not Valid";
    if(!validatePassword) return "Password is not Valid";
    return null;
}

export const validateFN = (name) =>{
    if(name == null) return "Enter Name";
}