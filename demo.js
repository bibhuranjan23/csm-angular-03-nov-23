function getProperty(key, value) {
    console.log("".concat(key, " = ").concat(value[key]));
}
getProperty("id", { id: 1, name: "firstName" });
getProperty("name", { id: 2, name: "secondName" });
