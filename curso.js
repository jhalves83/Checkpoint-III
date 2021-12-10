const Aluno = require("./aluno");

const Curso = {
    tema: 'Programação',
    notaAprovacao: 7,
    limiteFaltas: 2,
    listaAlunos: [],
    incluirAluno: function (nome, faltas, notas) {
        this.listaAlunos.push(new Aluno.construtor(nome, faltas, notas));
    },
    aprovacao: function (aaluno) {
        const media = parseFloat(Aluno.calculodemedia(aaluno).toFixed(2));

        if (
            media >= this.notaAprovacao && aaluno.qtdfaltas < this.limiteFaltas
        ) {
            return `O estudante ${aaluno.nome} teve a média ${media} e o total de ${aaluno.qtdfaltas} faltas,e foi aprovado`;
        } else if (
            aaluno.qtdfaltas === this.limiteFaltas &&
            media > this.notaAprovacao * 1.1
        ) {
            return `O estudante ${aaluno.nome} teve a média ${media} e o total de ${aaluno.qtdfaltas} faltas, foi aprovado com ressalvas`;
        } else {
            return `O estudante ${aaluno.nome} teve a média ${media} e o total de ${aaluno.qtdfaltas} faltas, e foi reprovado`;
        }
    },
    listaAprovados: function () {
        let resultado = [];

        this.listaAlunos.forEach(aluno => {
            resultado.push(this.aprovacao(aluno));
        });

        return resultado;
    },

}

module.exports = Curso;