import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-sidebar',
  templateUrl: './category-sidebar.component.html',
  styleUrls: ['./category-sidebar.component.scss'],
})
export class CategorySidebarComponent implements OnInit {
  categories = [
    {
      title: 'Feature',
      id: 'feature',
      divider: false,
      subCategories: [
        { title: 'Product Highlights', id: 'product-highlights' },
        { title: 'South Mountain Kitchen', id: 'south-mountain-kitchen' },
        { title: 'Produce Bundles', id: 'produce-bundles' },
        { title: 'Meat Bundles', id: 'meat-bundles' },
      ],
    },
    {
      title: 'Specials',
      id: 'specials',
      divider: true,
      subCategories: [
        { title: 'Valentines', id: 'valentines' },
        { title: 'Thanksgiving', id: 'Thanksgiving' },
        { title: 'Christmass', id: 'christmas' },
      ],
    },

    {
      title: 'Dairy & Eggs',
      id: 'dairy-&-eggs',
      divider: false,
      subCategories: [
        { title: 'Glass Bottled Milk', id: 'glass-bottled-milk' },
        { title: 'Butter', id: 'butter' },
        { title: 'Yogurt', id: 'yogurt' },
        { title: 'Cheese & Cheese Curds', id: 'cheese-&-cheese-curds' },
        { title: 'Cream Cheese', id: 'cream-cheese' },
        { title: 'Goat Milk & Cheese', id: 'goat-milk-&-cheese' },
        { title: 'Ice Cream', id: 'ice-cream' },
        { title: 'Eggs', id: 'eggs' },
      ],
    },
  ];

  constructor() {}

  ngOnInit() {}
}
