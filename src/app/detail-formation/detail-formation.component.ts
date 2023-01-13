import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-formation',
  templateUrl: './detail-formation.component.html',
  styleUrls: ['./detail-formation.component.css']
})
export class DetailFormationComponent implements OnInit {

  constructor(private router :Router) { }
  training!:any;
  ngOnInit(): void {
    const retrieve=localStorage.getItem('formation');
    // @ts-ignore
    this.training=JSON.parse(retrieve);
    console.log(this.training);
    //const fav =this.favoris.addTofav(this.training);
  }
  gotopage(){
    this.router.navigate(['/registration']);
  }
}
