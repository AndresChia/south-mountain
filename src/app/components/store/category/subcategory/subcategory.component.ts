import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.scss'],
})
export class SubcategoryComponent implements OnInit {
  category!: string | null;
  subCategory!: string | null;

  constructor(private ativatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.category = this.ativatedRoute.snapshot.paramMap.get('categoryId');
    this.subCategory =
      this.ativatedRoute.snapshot.paramMap.get('subCategoryId');
  }
}
