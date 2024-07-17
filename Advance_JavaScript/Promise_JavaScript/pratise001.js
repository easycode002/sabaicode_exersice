const mockDatabase = [
    { id: 1, name: 'sok' },
    { id: 2, name: 'sao' },
    { id: 3, name: 'pisey' }
];

// function getAllUser(){
//     return new Promise((resolve,reject)=>{
//         resolve(mockDatabase)
//     })
// }

// getAllUser()
//     .then((data)=>{
//         console.log(data);
//     })

function createUser(newUser) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!newUser || !newUser.name) {
                reject(new Error('Error'))
            } else {
                const newID = mockDatabase.length + 1;
                const user = {
                    id: newID,
                    name: newUser.name
                }
                mockDatabase.push(user)
                resolve(user)
            }

        }, 1000)
    })
}
const newUser = {name:"Sothea"}
createUser(newUser)
    .then((user)=>{
        console.log("New user created!",user);
    })
    .catch(error=>{
        console.error(error.message);
    })