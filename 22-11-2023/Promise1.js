function getUsers() 
{
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([
          { username: 'john', email: 'john@test.com' },
          { username: 'jane', email: 'jane@test.com' },
        ]);
      }, 1000);
    });
}
  

const promise = getUsers();
  
promise.then((users)=>{
    console.log(users);
});
  