interface IPerson {
    id: number;
    name: string;
    telephone:string
  }
  type PersonPropertyName = keyof IPerson;
  function getProperty(key: PersonPropertyName, value: IPerson) {
    console.log(`${key} = ${value[key]}`);
  }
  getProperty("id", { id: 1, name: "firstName",telephone:"" });
  getProperty("name", { id: 2, name: "secondName",telephone:"" });
  getProperty("telephone", { id: 3, name: "thirdName",telephone:"" });
  