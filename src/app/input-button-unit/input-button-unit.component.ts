import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter();
  title = 'Hello World';
  
  constructor() { 
    this.title = 'I Love Angular';
  }

  ngOnInit() {
    setTimeout(() => {
    this.title = 'This is not the title you are looking for';
  }, 3000);
  }

  // changeTitle(newTitle: string) {
  //   this.submit.emit(newTitle);
  // }

  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }

}
