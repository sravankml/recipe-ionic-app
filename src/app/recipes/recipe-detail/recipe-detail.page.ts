import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.page.html",
  styleUrls: ["./recipe-detail.page.scss"]
})
export class RecipeDetailPage implements OnInit {
  reciptdetail: Recipe;
  constructor(
    private activeRout: ActivatedRoute,
    private reciptService: RecipeService,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.activeRout.paramMap.subscribe(paramMap => {
      if (!paramMap.has("recipeId")) {
        return;
      }
      // tslint:disable-next-line: no-unused-expression
      const receptid = paramMap.get("recipeId");
      this.reciptdetail = this.reciptService.getRecipes(receptid);
    });
  }

  removeIteam() {
    this.alertController.create({
      header: 'Delete Recipe',
      message: 'Are you sure you want to delete the recipe?',
      buttons:[{
        text: 'Cancel',
        role: 'cancel'
      }, {
        text: 'Delete',
        handler: () => {
          this.reciptService.removeIteam(this.reciptdetail.id);
          this.router.navigate(['/recipes']);
        }
      }]
    }).then(alertEl => {
      alertEl.present()
    });
    
  }
}
