import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css']
})
export class MapPageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onHomePage(){
    this.router.navigateByUrl('home');
  }
}
