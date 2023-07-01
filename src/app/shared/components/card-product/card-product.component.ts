import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss'],
})
export class CardProductComponent implements OnInit {
  @Input() title!: string;
  @Input() labels!: string[];
  @Input() image!: string;
  @Input() price!: number;
  @Input() quantity!: number;
  @Input() units!: string[];
  @Input() description!: string;
  @Input() type!: string;


  constructor() {}

  ngOnInit() {}
}
