import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from '../_services/categories.service';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
@Component({
  selector: 'app-nav-black',
  templateUrl: './nav-black.component.html',
  styleUrls: ['./nav-black.component.css']
})
export class NavBlackComponent implements OnInit {

  constructor(private categorieservice:CategoriesService,private router:Router,private authService: AuthService,private sessionStorage: TokenStorageService) { }
  items:any;
  categories!:any;
  user:any;
  ngOnInit(): void {
    this.getCategories();
    this.user=this.sessionStorage.getinfo();
    console.log(this.sessionStorage.getinfo());
  }
  getCategories(){
    this.categorieservice.getCategories('http://127.0.0.1:8000/api/categories/')
      .subscribe(
        items => {
          this.items=items;
          this.categories=this.items;
          console.log(this.categories);
        }
      );
  }
  toPage(obj:any){
    localStorage.setItem('categorie',JSON.stringify(obj));
    this.router.navigate(['liste-formation-white/',JSON.stringify(obj.id)]);
  }
  logout(){
    this.sessionStorage.signOut();
    this.router.navigate(['/'])
  }
}
