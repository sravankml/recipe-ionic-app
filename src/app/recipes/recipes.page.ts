import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  private recipes: Recipe[];
  constructor(private recipesList: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipesList.getAllRecipies();
    console.log(this.recipes);
  }

}
