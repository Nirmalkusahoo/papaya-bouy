import {Component} from '@angular/core';
import {HttpService} from '../../../../modules/shared-module/services/http.service';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent {
  public searchInput: string;
  public showResults: boolean = false;
  public recipes: [];
  public selectedRecipe;
  private timeoutId: any;
  private cacheResult = new Map<string, []>();
  public selectedIndex = -1;

  constructor(private httpService: HttpService) {
    this.getRecipes();
  }

  public getRecipes(): void {
    if (this.searchInput === '') {
      this.clearAll();
    }
    if (this.cacheResult.has(this.searchInput)) {
      this.recipes = this.cacheResult.get(this.searchInput);
      this.showResults = true;
      console.log('Result from cache');
      return;
    }
    const url = `https://dummyjson.com/recipes/search?q=${this.searchInput}`;
    this.httpService.getData(url).subscribe((response) => {
      this.recipes = response.recipes;
      this.cacheResult.set(this.searchInput, this.recipes);
      this.showResults = true;
    });
  }

  public getRecipesBasedOnUserInput(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    this.timeoutId = setTimeout(() => {
      this.getRecipes();
    }, 300);
  }

  public onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'ArrowDown') {
      console.log(event);
      // The modulo operation ensures that the index wraps around to the beginning of the list if it exceeds the length.
      this.selectedIndex = (1 + this.selectedIndex) % this.recipes.length;
    } else if (event.key === 'ArrowUp') {
      // The modulo operation ensures that the index wraps around to the end of the list if it goes below zero.
      this.selectedIndex = (this.selectedIndex - 1 + this.recipes.length) % this.recipes.length;
    } else if (event.key === 'Enter' && this.selectedIndex >= 0) {
      this.selectedRecipe = this.recipes[this.selectedIndex];
    }
  }

  public selectRecipe(index: number): void {
    this.selectedRecipe = this.recipes[index];
    this.searchInput = this.selectedRecipe.name;
  }

  public hideResults(): void {
    setTimeout(() => {
      this.showResults = false;
    }, 300);
  }

  private clearAll(): void {
    this.recipes = [];
    this.selectedRecipe = null;
    this.showResults = false;
    this.selectedIndex = -1;
  }
}
