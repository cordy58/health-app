import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private categories = ['Motivation', 'Inspiration', 'Happiness']; // Sample categories

  getCategories() {
    return this.categories;
  }
}
