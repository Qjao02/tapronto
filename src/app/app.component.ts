import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sel: number = 1;
  current: string = '';
  options = [
    { desc: ". . .", solution: "" },
    { desc: "Alocar vetor dinamicamente.", solution: "int* vetor = (int*) calloc(10, sizeof(int));" },
    { desc: "Alocar matriz dinamicamente.", solution:
    "int i;\n"+
    "int** matriz = (int**) calloc(10, sizeof(int*));\n"+
    "for(i = 0; i < 10; ++i)\n"+
    "\tmatriz[i] = (int*) calloc(10, sizeof(int));\n"
    },
    { desc: "Inverter uma string.", solution: "EU ME SINTO UM FURACÃO\nNO MEIO DA MULTIDÃO\nDEVORANDO UM MACARRÃO!" },
    { desc: "Toda string caixa baixa.", solution: "hehehehehihihihi" + "hahahahahahuhuhu" }
  ];

setSelector1() {
  this.sel = 1;
}
setSelector2() {
  this.sel = 2;
}
setSelector3() {
  this.sel = 3;
}
setSelector4() {
  this.sel = 4;
}

onSelect(current) {
  this.current = current.solution;
}
}
