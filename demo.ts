interface IPerson {
    id: number;
    name: string;
  }
  type PersonPropertyName = keyof IPerson;
  function getProperty(key: PersonPropertyName, value: IPerson) {
    console.log(`${key} = ${value[key]}`);
  }
  getProperty("id", { id: 1, name: "firstName" });
  getProperty("name", { id: 2, name: "secondName" });
  
  