import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

    constructor() { } public characters: Character[] = [{
      id: uuid(),
      name: 'Krillin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 8500
    }
  ];

    addCharacter(character: Character):void {
      const newCharacter: Character = { ...character, id: uuid() };
      this.characters.push(newCharacter);
    }

    //En el html recibimos el evento y lo asociamos a la función onDeleteCharacter
    //Esta función se encarga de eliminar el personaje de la lista
    deleteCharacterById(id:string) {
      this.characters = this.characters.filter(character => character.id !== id);
    }
}
