let hero = { name: "Thunder", experience: 19000 };

let level;

switch (true) {
  case (hero.experience <= 1000):
    level = "Ferro";
    break;
  case (hero.experience <= 2000):
    level = "Bronze";
    break;
  case (hero.experience <= 5000):
    level = "Prata";
    break;
  case (hero.experience <= 7000):
    level = "Ouro";
    break;
  case (hero.experience <= 8000):
    level = "Platina";
    break;
  case ( hero.experience <= 9000):
    level = "Ascendente";
    break;
  case (hero.experience <= 10000):
    level = "Imortal";
    break;
  case (hero.experience >= 10001):
    level = "Radiante";
    break;

  default:
    level = "Sem nível";
    break;
}

console.log(`O Herói ${hero.name} está no nível ${level}.`);
