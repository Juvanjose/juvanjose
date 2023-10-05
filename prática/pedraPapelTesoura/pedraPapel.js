const nome1 = prompt("Qual o nome do primeiro jogador?");
let vida1 = 10;
const nome2 = prompt("Qual o nome do segundo jogador?");
let vida2 = 10;

let escolha1 = " ";
let escolha2 = " ";

alert(
  "os jogadores agora precisarão decidir entre pedra,papel ou tesoura para vencerem batalhas até a vida zerar, sendo 10 para cada" +
    "\n1. Tesoura" +
    "\n2. Papel" +
    "\n3. pedra"
);

do {
  alert(
    nome1 + " Ainda possui: " + vida1 + " e " + nome2 + " possui: " + vida2
  );
  escolha1 = prompt("Qual a sua escolha? " + nome1);
  escolha2 = prompt("E a sua escolha? " + nome2);

  if (escolha1 == "1" && escolha2 == "2") {
    alert(
      `O jogador: " + ${nome1} + " venceu e reduziu em 1 a vida de " + ${nome2}`
    );
    vida2--;
  } else if (escolha1 == "2" && escolha2 == "1") {
    alert(`O jogador: " + ${nome2} + " venceu e reduziu em 1 a vida de " + ${nome1}`);
    vida1--;
  } else if (escolha1 == "2" && escolha2 == "3") {
    alert(`"O jogador: " + ${nome1} + " venceu e reduziu em 1 a vida de " + ${nome2}`);
    vida2--;
  } else if (escolha1 == "3" && escolha2 == "2") {
    alert(`"O jogador: " + ${nome2} + " venceu e reduziu em 1 a vida de " + ${nome1}`);
    vida1--;
  } else if (escolha1 == "3" && escolha2 == "1") {
    alert(`"O jogador: " + {${nome1}} + " venceu e reduziu em 1 a vida de " + ${nome2}`);
    vida2--;
  } else if (escolha1 == "1" && escolha2 == "3") {
    alert(`O jogador: " + ${nome2} +  venceu e reduziu em 1 a vida de  + ${nome1}`);
    vida1--;
  }else if (escolha1 && escolha2 !== "1","2","3"){
    alert("Você escolheu a opção errada.")
  }
} while (vida1 || vida2 != 0);
