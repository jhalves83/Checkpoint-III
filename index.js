const Aluno = require("./aluno");
const Curso = require("./curso");
const estudantes = require("./estudantes");

Aluno.listaalunos = estudantes.AlunosInscritos;

Curso.incluirAluno('Antonella', 2, [10, 10, 10])

const aprovados = Curso.listaAprovados();

console.clear();
console.log("######### Lista de Aprovados #########")

console.log(`Curso de ${Curso.tema} - Alunos Inscritos: ${Curso.listaAlunos.length}`);

aprovados.forEach(aprovado => {
    console.log(aprovado);
});