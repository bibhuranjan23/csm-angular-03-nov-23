function Person(name){
    this.name = name;
    if (!new.target) {
        return new Person(name);
    }
    
}

const p1 = Person("Alok");


console.log(p1.name);