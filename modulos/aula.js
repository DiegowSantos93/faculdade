const prompt = require("prompt-sync")();
const professor = require("./professor.js")
const materia = require("./materia.js")
const sala = require("./sala.js")

const db = [];

let ultimoId = 0;

function getIndice(id){
    const indice = db.findIndex(el =>  el.id == id)

        if (indice != -1){
            return indice
        } else {
            console.log('Id inválido.')
        }
};

const modelo = (id = ++ultimoId) => {
    
    let id_professor = 0;
    if (professor.listar()){
        id_professor = parseInt(prompt('Digite o ID do professor: '));
    }

    let id_materia = 0;
    if (materia.listar()){
        id_materia = parseInt(prompt('Digite o ID da matéria: '));
    }
    
    let id_sala = 0;
    if (sala.listar()){
        id_sala = parseInt(prompt('Digite o ID da sala: '));
    }

    const professorAula = professor.mostrar(id_professor);
    const materiaAula = materia.mostrar(id_materia);
    const salaAula = sala.mostrar(id_sala);

    if (professorAula && materiaAula && salaAula) {
        return {
            id,
            professorAula,
            materiaAula,
            salaAula
        }
    }

    console.log('Dados inválidos.')
    ultimoId--;
};

function mostrar(id){
    const el = db.find(el => el.id == id)

    return el
}

const criar = () => {
    const novo = modelo();

    if (novo){
    db.push(novo);
    console.log('Registro criado com sucesso.')
    }
};

const listar = () => {
    if (db.length == 0){
        console.log('Nenhum registro encontrado.')
        return false
    }

    db.forEach(el => console.log(el))
    return true;
};

const atualizar = () => {
    if (listar()){
        const id = parseInt(prompt('Digite o id que deseja atualizar: '))

        const indice = getIndice(id)

        if (indice > -1){
            const novo = modelo(id)
            
            if (novo) {
                db[indice] = novo;
                console.log('Atualizado com sucesso.')
            }
        }
    }
};

const remover = () => {
    if (listar()){

        const id = parseInt(prompt('Digite o id que deseja atualizar: '))

        const indice = getIndice(id);

        if (indice > -1){
            db.splice(indice,1)
            console.log('Removido com sucesso.')
        }
    }
};

module.exports = {criar, listar, atualizar, remover, mostrar}