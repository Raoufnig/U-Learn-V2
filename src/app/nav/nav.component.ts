import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from '../_services/categories.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private categorieservice:CategoriesService,private router:Router) { }
  items:any;
  categories!:any;
  ngOnInit(): void {
    this.getCategories();
  }
  getCategories(){
    this.categorieservice.getCategories('http://127.0.0.1:8000/api/categories/')
      .subscribe(
        items => {
          this.items=items;
          this.categories=this.items.results;
          console.log(this.categories);
        }
      );
  }
  toPage(obj:any){
    localStorage.setItem('categorie',JSON.stringify(obj));
    this.router.navigate(['liste-formation/',obj.id]);
  }

}
