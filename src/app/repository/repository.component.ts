// Import component from its package
import { Component } from '@angular/core';

// The variables of Component object must have these names, you can't change them
@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html'
})

export class RepositoryComponent
{
  name: string = "";
  btnDis: boolean = false;
  eval: boolean = false;

  onCreate()
  {
    this.eval = true;
    this.name = "vísivel!";
  }

  onUpdate(event: Event)
  {
    this.name = (<HTMLInputElement>event.target).value;
  }
}
