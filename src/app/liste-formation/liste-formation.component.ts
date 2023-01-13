import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categories } from '../models/categories';
import { CategoriesService } from '../_services/categories.service';

@Component({
  selector: 'app-liste-formation',
  templateUrl: './liste-formation.component.html',
  styleUrls: ['./liste-formation.component.css']
})
export class ListeFormationComponent implements OnInit {

  constructor(private categorieservice: CategoriesService,private router:Router) { }
  Tformation:any;
  categorie= new Categories();
  items:any;
  formation:any;
  ngOnInit(): void {
    const a=localStorage.getItem('categorie');
    // @ts-ignore
    this.categorie=JSON.parse(a);
    this.getCategories();
  }
  getCategories(){
    this.categorieservice.getCategories('http://127.0.0.1:8000/api/training/')
      .subscribe(
        items => {
          this.items=items;
          this.formation=this.items.results;
          console.log(this.formation);
          // @ts-ignore
          this.Tformation=this.formation.filter((item => item.category === this.categorie.id));
          console.log(this.Tformation);
        }
      );
  }
  toPage(obj:any){
    localStorage.setItem('formation',JSON.stringify(obj));
    this.router.navigate(['/detail-formation']);

  }

}
