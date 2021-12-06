import { Injectable } from '@angular/core';

interface Tarefas {
  nome: string;
}

@Injectable()
export class RenetasksService {
  tarefas: Array<Tarefas> = [];

  constructor() {
    {
      this.adicionarTarefa('Reunião com Gerência');
      this.adicionarTarefa('Reunião com clientes');
      this.adicionarTarefa('Ir ao mercado');
    }

    if (localStorage.getItem('tarefas')) {
      this.tarefas = JSON.parse(localStorage.getItem('tarefas'));
    } else {
      localStorage.setItem('tarefas', JSON.stringify([]));
    }
  }

  getTarefas() {
    if (this.tarefas != null) {
      this.tarefas = JSON.parse(localStorage.getItem('tarefas'));
    }
    return this.tarefas;
  }

  adicionarTarefa(nome: string) {
    if (nome != '') {
      this.tarefas.push({ nome });
      localStorage.setItem('tarefas', JSON.stringify(this.tarefas));
    }
  }

  removerTarefa(index: number) {
    this.tarefas.splice(index, 1);
    localStorage.setItem('tarefas', JSON.stringify(this.tarefas));
  }
}
