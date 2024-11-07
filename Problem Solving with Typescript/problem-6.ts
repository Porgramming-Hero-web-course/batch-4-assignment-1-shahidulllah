//Problem 6:=====>
/*Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.*/


interface Profile {
    name: string;
    age: number;
    email: string;
}

const updateProfile = (profile: Profile, updates: Partial<Profile> ): Profile => {
    return {...profile, ...updates}
}


//Checking
const hisProfile = {
    name: "Alice", 
    age: 25,
    email: "a@gmail.com"
}
const profile = updateProfile (hisProfile, {email: "Halim@gamil.com"})
console.log(profile);