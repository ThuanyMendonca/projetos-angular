import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ItemLista } from './itemlista';

@Component({
  selector: 'app-lista-compras',
  imports: [FormsModule, CommonModule],
  templateUrl: './lista-compras.component.html',
  styleUrl: './lista-compras.component.scss'
})
export class ListaComprasComponent {
  item: string = "";
  lista: ItemLista[] = [];

  adicionarItem(){
    let itemLista = new ItemLista();
    itemLista.id = this.lista.length + 1;
    itemLista.nome = this.item;
    itemLista.comprado = false;

    this.lista.push(itemLista);
    this.item = "";

    //console.table(this.lista);
  }

  riscarItem(item: ItemLista){
    item.comprado = !item.comprado;
  }

  limparLista(){
    this.lista = [];
  }

}
