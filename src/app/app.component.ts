import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sel = 0;
  current = '';
  options = [
    {
      desc: '. . .',
      solution: ''
    },
    {
      desc: 'Como alocar vetor dinamicamente.',
      solution: 'int* vetor = (int*) calloc(10, sizeof(int));'
    },
    {
      desc: 'Como alocar matriz dinamicamente.',
      solution:
        'int i;\n' +
        'int** matriz = (int**) calloc(10, sizeof(int*));\n' +
        'for(i = 0; i < 10; ++i)\n' +
        '\tmatriz[i] = (int*) calloc(10, sizeof(int));\n'
    },
    {
      desc: 'Como inverter uma string.',
      solution: 'EU ME SINTO UM FURACÃO\nNO MEIO DA MULTIDÃO\nDEVORANDO UM MACARRÃO!'
    },
    {
      desc: 'Como Toda string caixa baixa.',
      solution: 'hehehehehihihihi' + 'hahahahahahuhuhu'
    }
  ];

  setSelector1() {
    console.log('OLÁ MARILENE');
    this.sel = 1;
  }
  setSelector2() {
    this.sel = 2;
  }

  onSelect(current) {
    this.current = current.solution;
  }
}
