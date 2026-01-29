function getName1(name) {
    return `Имя вашего ${name}`;
}

const getName2 = function(name) {
    return `Имя вашего ${name}`;
};

const getName3 = (name) => {
    return `Имя вашего ${name}`;
};

console.log(getName1("Анна"));
console.log(getName2("Петр"));
console.log(getName3("Мария"));