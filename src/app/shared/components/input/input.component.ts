import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TypeInput } from './input.enum';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() type: TypeInput = TypeInput.TEXT;
  @Input() data!: any;

  @Output() ngModelChange = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}
}
