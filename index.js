const prompt = require("prompt-sync")();
const turno = require("./modulos/turno.js");
const curso = require("./modulos/curso.js");
const materia = require("./modulos/materia.js")
const aluno = require("./modulos/aluno.js")
const professor = require("./modulos/professor.js")
const sala = require("./modulos/sala.js")
const aula = require("./modulos/aula.js")
const alunoAula = require("./modulos/alunoAula.js")

console.log('==GERENCIAMENTO DE CORRETORA DE IMÓVEIS==')

while(true){
    
    console.log(`
    O que deseja gerenciar?
    1. Turno
    2. Curso
    3. Matéria
    4. Aluno
    5. Professor
    6. Sala
    7. Aula
    8. Aulas
    0. Sair
    `);
    
    const opcaoEntidade = parseInt(prompt('Escolha uma opção: '));
    
    let continuar;

    switch (opcaoEntidade) {
        case 1:
            continuar = true;
            while(continuar){
                console.log(`
    GERENCIAMENTO DE TURNO
                
    1. Criar
    2. Listar
    3. Atualizar
    4. Remover
    5. Sair
                `);
                
                const opcaoServico = parseInt(prompt('Escolha uma opção: '));
                
                switch (opcaoServico) {
                    case 1:
                    turno.criar();
                    break;
                case 2:
                    turno.listar();
                    break;
                case 3:
                    turno.atualizar();
                    break;
                case 4:
                    turno.remover();
                    break;
                case 5:
                    continuar = false;
                    break;
                default:
                    console.log('Opção inválida.')
                    break;    
            }
        }
        break;
        case 2:
            continuar = true;
            while(continuar){
                console.log(`
    GERENCIAMENTO DE CURSO
                
    1. Criar
    2. Listar
    3. Atualizar
    4. Remover
    5. Sair
                `);
                
                const opcaoServico = parseInt(prompt('Escolha uma opção: '));
                
                switch (opcaoServico) {
                    case 1:
                    curso.criar();
                    break;
                case 2:
                    curso.listar();
                    break;
                case 3:
                    curso.atualizar();
                    break;
                case 4:
                    curso.remover();
                    break;
                case 5:
                    continuar = false;
                    break;
                default:
                    console.log('Opção inválida.')
                    break;    
            }
        }
        break;
        case 3:
            continuar = true;
            while(continuar){
                console.log(`
    GERENCIAMENTO DE MATÉRIA
                
    1. Criar
    2. Listar
    3. Atualizar
    4. Remover
    5. Sair
                `);
                
                const opcaoServico = parseInt(prompt('Escolha uma opção: '));
                
                switch (opcaoServico) {
                    case 1:
                    materia.criar();
                    break;
                case 2:
                    materia.listar();
                    break;
                case 3:
                    materia.atualizar();
                    break;
                case 4:
                    materia.remover();
                    break;
                case 5:
                    continuar = false;
                    break;
                default:
                    console.log('Opção inválida.')
                    break;    
            }
        }
        break;
        case 4:
            continuar = true;
            while(continuar){
                console.log(`
    GERENCIAMENTO DE ALUNO
                
    1. Criar
    2. Listar
    3. Atualizar
    4. Remover
    5. Sair
                `);
                
                const opcaoServico = parseInt(prompt('Escolha uma opção: '));
                
                switch (opcaoServico) {
                    case 1:
                    aluno.criar();
                    break;
                case 2:
                    aluno.listar();
                    break;
                case 3:
                    aluno.atualizar();
                    break;
                case 4:
                    aluno.remover();
                    break;
                case 5:
                    continuar = false;
                    break;
                default:
                    console.log('Opção inválida.')
                    break;    
            }
        }
        break;
        case 5:
            continuar = true;
            while(continuar){
                console.log(`
    GERENCIAMENTO DE PROFESSOR
                
    1. Criar
    2. Listar
    3. Atualizar
    4. Remover
    5. Sair
                `);
                
                const opcaoServico = parseInt(prompt('Escolha uma opção: '));
                
                switch (opcaoServico) {
                    case 1:
                    professor.criar();
                    break;
                case 2:
                    professor.listar();
                    break;
                case 3:
                    professor.atualizar();
                    break;
                case 4:
                    professor.remover();
                    break;
                case 5:
                    continuar = false;
                    break;
                default:
                    console.log('Opção inválida.')
                    break;    
            }
        }
        break;
        case 6:
            continuar = true;
            while(continuar){
                console.log(`
    GERENCIAMENTO DE SALA
                
    1. Criar
    2. Listar
    3. Atualizar
    4. Remover
    5. Sair
                `);
                
                const opcaoServico = parseInt(prompt('Escolha uma opção: '));
                
                switch (opcaoServico) {
                    case 1:
                    sala.criar();
                    break;
                case 2:
                    sala.listar();
                    break;
                case 3:
                    sala.atualizar();
                    break;
                case 4:
                    sala.remover();
                    break;
                case 5:
                    continuar = false;
                    break;
                default:
                    console.log('Opção inválida.')
                    break;    
            }
        }
        break;
        case 7:
            continuar = true;
            while(continuar){
                console.log(`
    GERENCIAMENTO DE AULA
                
    1. Criar
    2. Listar
    3. Atualizar
    4. Remover
    5. Sair
                `);
                
                const opcaoServico = parseInt(prompt('Escolha uma opção: '));
                
                switch (opcaoServico) {
                    case 1:
                    aula.criar();
                    break;
                case 2:
                    aula.listar();
                    break;
                case 3:
                    aula.atualizar();
                    break;
                case 4:
                    aula.remover();
                    break;
                case 5:
                    continuar = false;
                    break;
                default:
                    console.log('Opção inválida.')
                    break;    
            }
        }
        break;
        case 8:
            continuar = true;
            while(continuar){
                console.log(`
    GERENCIAMENTO DE AULAS
                
    1. Criar
    2. Listar
    3. Atualizar
    4. Remover
    5. Sair
                `);
                
                const opcaoServico = parseInt(prompt('Escolha uma opção: '));
                
                switch (opcaoServico) {
                    case 1:
                    alunoAula.criar();
                    break;
                case 2:
                    alunoAula.listar();
                    break;
                case 3:
                    alunoAula.atualizar();
                    break;
                case 4:
                    alunoAula.remover();
                    break;
                case 5:
                    continuar = false;
                    break;
                default:
                    console.log('Opção inválida.')
                    break;    
            }
        }
        break;
        case 0:
                console.log('Saindo do sistema.')
                process.exit();
                break;
        default:
                console.log('Opção inválida.')
                break;
    }
};