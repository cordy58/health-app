import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedCategory: string = '';
  title: string = 'Health App';

  onCategorySelected(category: string): void {
    this.selectedCategory = category;
    console.log("From App Component: " + this.selectedCategory);
  }
}
