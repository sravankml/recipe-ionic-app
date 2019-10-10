import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnizel',
      imageUrl: 'https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-5.jpg',
      ingredients: ['French Fires', 'pork Meat', 'Salad']
 
    },
    {
      id: 'r2',
      title: 'Spaghtti',
      imageUrl: 'https://www.cookitalia.co.uk/wp-content/uploads/2014/09/Linguine-Bolognese-focussed.png',
      ingredients: ['Tomato', 'checken Meat', 'Salad']

    }
  ];
  constructor() { }

  getAllRecipies() {
    return [...this.recipes]
  }

  getRecipes(recipeId: string) {
    return {...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })
  };
  }

  removeIteam(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
    console.log(this.recipes);
  }

}
