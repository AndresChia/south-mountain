import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  category = {
    title: '',
    subCategory: [
      { id: '1', title: 'Glass Bottled Milk' },
      { id: '2', title: 'Butter' },
      { id: '3', title: 'Yogurt' },
      { id: '4', title: 'Cheese & Cheese Curds' },
      { id: '5', title: 'Cream Cheese' },
      { id: '6', title: 'Goat Milk & Cheese' },
      { id: '7', title: 'Ice Cream' },
      { id: '8', title: 'Eggs' },
    ],
  };

  constructor(private ativatedRoute: ActivatedRoute) {}

  ngOnInit() {
    const categoryId =
      this.ativatedRoute.snapshot.paramMap.get('categoryId') ?? '';
    this.category.title =
      categoryId?.charAt(0).toUpperCase() +
      categoryId?.split('-').join(' ').slice(1);
  }
}
