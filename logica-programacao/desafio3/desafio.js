
class hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type.toLowerCase();
    }

    attack() {
        
        let attackType;

        switch (true) {
          case this.type === "mago":
            attackType = "magia";
            break;
          case this.type === "guerreiro":
            attackType = "espada";
            break;
          case this.type === "monge":
            attackType = "artes marciais";
            break;
          case this.type === "ninja":
            attackType = "shuriken";
            break;
          default:
            attackType = "habilidades desconhecidas";
            break;
        }

        return `O ${this.type} atacou usando ${attackType}.`;
    };
};

let newHero = new hero ("Ogam", 26, "MAGO");

console.log(newHero.attack());

newHero = new hero ("Orierreug", 32, "GUERREIRO");

console.log(newHero.attack());

newHero = new hero ("Ajnin", 24, "ninja");

console.log(newHero.attack());

newHero = new hero ("Egom", 60, "monge");

console.log(newHero.attack());

newHero = new hero ("Onidal", 26, "ladino");

console.log(newHero.attack());