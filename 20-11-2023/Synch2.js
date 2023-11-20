function getUsers() {
    let users = [];
    setTimeout(() => {
      users = [
        { username: 'john', email: 'john@test.com' },
        { username: 'jane', email: 'jane@test.com' },
      ];
    }, 1000);
    return users;
  }
  function findUser(username) {
    const users = getUsers(); // A
    const user = users.find((user) => user.username === username); // B
    return user;
  }
  console.log(findUser('john'));
  