const Aluno = {
    nome: '',
    qtdfaltas: 0,
    notas: [],
    construtor: function (nome, faltas, notas) {
        this.nome = nome,
            this.qtdfaltas = faltas,
            this.notas = notas;
    },
    calculodemedia: function (aaluno) {

        const total = aaluno.notas.reduce((total, nota) => {
            return total + nota;
        }, 0);

        const media = total / aaluno.notas.length;
        return media;
    },
    incluirfalta(aluno) {
        aluno.qtdfaltas++;
    }

}

module.exports = Aluno;