import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  buttonHeading: string = "Buttons"
  inactive: boolean = false;
  goldOn: boolean = false;
  silverOn: boolean = false;
  copperOn: boolean = false;

  constructor() { }

  ngOnInit() { }

  reset(): void {
    let buttons: boolean[] = [this.goldOn, this.silverOn, this.copperOn];
    for (let i of buttons) {
      if (i) {
        buttons[buttons.indexOf(i)] = !i
      }
    }
    this.goldOn = buttons[0];
    this.silverOn = buttons[1];
    this.copperOn = buttons[2];
  }

}
