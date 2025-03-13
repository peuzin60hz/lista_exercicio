/* (10 pontos)
10 - Crie um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
    "Telefonou para a vítima?"
    "Esteve no local do crime?"
    "Mora perto da vítima?"
    "Devia para a vítima?"
    "Já trabalhou com a vítima?" 
O programa deve no final emitir uma classificação sobre a participação da pessoa no crime. 
Se a pessoa responder positivamente a 2 questões, ela deve ser classificada/exibida como "Suspeita", 
entre 3 e 4 como "Cúmplice" e 5 como "Assassino". Caso contrário, ele será classificado como "Inocente".
Aluno: Pedro Elias
*/

let teclado = require(`prompt-sync`)();

let perguntas: string[] = [
    `Telefonou para a vítima? (s/n): `,
    `Esteve no local do crime? (s/n): `,
    `Mora perto da vítima? (s/n): `,
    `Devia para a vítima? (s/n): `,
    `Já trabalhou com a vítima? (s/n): `
];

let respostasPositivas: number = 0;

for (let i = 0; i < perguntas.length; i++) {
    let resposta: string = teclado(perguntas[i]).toLowerCase();
    if (resposta === `s`) {
        respostasPositivas++;
    }
}

if (respostasPositivas === 5) {
    console.log(`Classificação: Assassino`);
} else if (respostasPositivas >= 3) {
    console.log(`Classificação: Cúmplice`);
} else if (respostasPositivas === 2) {
    console.log(`Classificação: Suspeita`);
} else {
    console.log(`Classificação: Inocente`);
}
