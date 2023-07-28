import bcrypt from "bcrypt";

/* The hashPassword function convert plain password into hashedPassword for security*/
export const hashPassword = async (password) =>{
    try {
        const saltRounds = 5;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        console.log(`The password unable to secure ${error}`);
        
    }

}


/* comparePassword function is used to compare the password enter by the user during login & saved hashedPassword is correct or not.*/
export const comparePassword = async(password, hashedPassword) =>{
    return bcrypt.compare(password,hashedPassword);

}