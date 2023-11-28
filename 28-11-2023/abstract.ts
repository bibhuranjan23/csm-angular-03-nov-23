abstract class EmployeeBase {
    public id: number;
    public name: string;
    constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
    } 
  }
  class OfficeWorker extends EmployeeBase {}
  class OfficeManager extends OfficeWorker {
        public employees: OfficeWorker[] = [];
  }
  let joeBlogg = new OfficeWorker(1, "Joe");
  let jillBlogg = new OfficeWorker(2, "Jill");
  let jackManager = new OfficeManager(3, "Jack");

  