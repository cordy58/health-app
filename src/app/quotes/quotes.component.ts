import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { QuotesService } from '../services/quotes.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  @Input() category: string = "";
  quotes: { category: string, text: string, link: string }[] = [];

  constructor(private quotesService: QuotesService) { }

  ngOnInit(): void {
    if (this.category) {
      this.quotes = this.quotesService.getQuotesByCategory(this.category);
    }
  }

  getRandomQuote() {
    return this.quotes[Math.floor(Math.random() * this.quotes.length)];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['category'] && changes['category'].currentValue) {
        this.quotes = this.quotesService.getQuotesByCategory(this.category);
    }
  }
}
