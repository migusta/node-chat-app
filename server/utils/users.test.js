const expect = require ("expect");

const {Users} = require ("./users");

describe("Users", () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
        id: '1',
        name: "Mike",
        room: "Room 1"
    },
    {
        id: '2',
        name: "Jean",
        room: "Room 2"
    },
    {
        id: '3',
        name: "Anna",
        room: "Room 1"
    }];
  });

  it("should add new user", () => {
    var users = new Users();
    var user = {
      id:"123",
      name: "Anna",
      room: "Room 1"
    };

    var resUsers = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it("should remove a user", () => {
    var userId = '1';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it("shouldn't remove a user", () => {
    var userId = '100';
    var user = users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it("should find user", () => {
    var userId = '2';
    var user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it("shoulldn't remove a user", () => {
    var userId = '90';
    var user = users.getUser(userId);

    expect(user).toNotExist();
  });

  it("should returns names for Room 1", () => {
    var userList = users.getUserList('Room 1');

    expect(userList).toEqual(['Mike','Anna']);
  });

  it("should returns names for Room 2", () => {
    var userList = users.getUserList('Room 2');

    expect(userList).toEqual(['Jean']);
  });
});
