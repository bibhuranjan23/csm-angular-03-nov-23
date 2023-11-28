var Employee = /** @class */ (function () {
    function Employee(id, name, email) {
        this._id = id;
        this.name = name;
        this.email = email;
    }
    Object.defineProperty(Employee.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (email) {
            this._email = email;
        },
        enumerable: false,
        configurable: true
    });
    Employee.prototype.get = function () {
        console.log("id:".concat(this.id));
        console.log("name:".concat(this.name));
        console.log("email:".concat(this.email));
    };
    Employee.updateCout = function () {
        Employee.count++;
    };
    Employee.count = 0;
    return Employee;
}());
var emp1 = new Employee(100, "Alok", "alok@gmail.com");
Employee.updateCout();
var emp2 = new Employee(101, "Asish", "asish@gmail.com");
Employee.updateCout();
console.log("count=".concat(Employee.count));
emp1.name = "Rahul";
emp1.get();
emp2.get();
