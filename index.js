// Se data do evento posterior hoje não permitir cadastro
var hoje = new Date ();
let dataEvento = '13/09/2021';
const dataSplit = dataEvento.split('/');
const day = dataSplit[0]; // 13
const month = dataSplit[1]; // 09
const year = dataSplit[2]; // 2021
dataEvento = new Date (year, month - 1, day)
    console.log (dataEvento)
if (dataEvento < hoje)
    console.log ("Data inválida")

// Se o participante maior de 18 permitir cadastro, senão alertar
var idade = idade
idade = 15
if (idade <= 18)
    console.log ("Só para maiores de 18 anos")

// Enquanto a quantidade de participantes for até 99 permitir
let lParticipantes= ["Helena", "Chico", "Mário"];
let qParticipantes = lParticipantes.length;
    console.log (qParticipantes)
if (qParticipantes < 100) {
    lParticipantes.push ("José")
    console.log (lParticipantes)
}   else console.log ("Número máximo 100 participantes")

// Listar participantes e palestrantes por evento

let lParticipantes1 = [];
lParticipantes1 [0] = ["Helena", 20, "Palestra 1", "Palestrante A"];
lParticipantes1 [1] = ["Chico", 21, "Palestra 2", "Palestrante B"];
lParticipantes1 [2] = ["Mário", 31, "Palestra 3", "Palestrante C"];
lParticipantes1 [3] = ["Joana", 22, "Palestra 4", "Palestrante D"];
lParticipantes1 [4] = ["Celso", 22, "Palestra 4", "Palestrante E"];

console.table(lParticipantes1);
console.log (lParticipantes1.length);

