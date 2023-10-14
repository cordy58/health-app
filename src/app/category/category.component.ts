import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: string[] = [];
  @Output() categorySelected = new EventEmitter<string>();

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.categories = this.categoriesService.getCategories();
  }

  selectCategory(category: string): void {
    this.categorySelected.emit(category);
  }
}
