function calculateRank(wins, lost) {
  const balance = wins - lost;

  let level;

  switch (true) {
    case balance <= 10:
      level = "Ferro";
      break;
    case balance <= 20:
      level = "Bronze";
      break;
    case balance <= 50:
      level = "Prata";
      break;
    case balance <= 80:
      level = "Ouro";
      break;
    case balance <= 90:
      level = "Diamante";
      break;
    case balance <= 100:
      level = "Lendário";
      break;
    case balance >= 101:
      level = "Imortal";
      break;
    default:
      level = "Sem nível";
      break;
  }

  return { balance, level };
}

const { balance, level } = calculateRank(150, 49);

console.log(
  `O Herói tem o saldo de ${balance} vitórias e está no nível ${level}.`
);
