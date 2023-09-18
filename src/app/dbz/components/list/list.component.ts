import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];

  //El output se utiliza cuando hay dos componentes que se comunican entre si
  //El output se utiliza en el componente hijo para emitir el evento de que se está borrando de la lista
  //En este caso lo estamos haciendo a través del index
  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();

  //creamos el evento que vamos a emitir y lo hacemos con la función emit
  //hay que tener en cuenta que el evento también se agrega en el botón del html con un evento click
  //este es el componente hijo
  onDeleteCharacter( id:string) {
    // TODO: Emitir el ID del personaje a eliminar
    // if( !id ) return;

    this.onDeleteId.emit(id);
  }

}
