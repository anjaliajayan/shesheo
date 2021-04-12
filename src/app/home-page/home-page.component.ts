import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  SearchRestuarentsForm: FormGroup;
  searchAction: boolean = false;
  restaurents = [
    {
      name: "Holy Grail Restaurent", Image: "../../assets/images/resturarent1.png", type: "Arabic,Leabanese,Chinese",
      delivery: "Delivery 10AED", star: "../../assets/images/star.png"
    },
    { name: "Delicio Cuisine Place", Image: "../../assets/images/restaurent7.png", type: "Arabic,Leabanese,Chinese", delivery: "Delivery 10AED", star: "../../assets/images/star.png" },
    { name: "Holy Grail Restaurent", Image: "../../assets/images/resturarent1.png", type: "Arabic,Leabanese,Chinese", delivery: "Delivery 10AED", star: "../../assets/images/star.png" },
    { name: "Delicio Cuisine Place", Image: "../../assets/images/restaurent7.png", type: "Arabic,Leabanese,Chinese", delivery: "Delivery 10AED", star: "../../assets/images/star.png" },
    { name: "Holy Grail Restaurent", Image: "../../assets/images/resturarent1.png", type: "Arabic,Leabanese,Chinese", delivery: "Delivery 10AED", star: "../../assets/images/star.png" },
    { name: "Delicio Cuisine Place", Image: "../../assets/images/restaurent7.png", type: "Arabic,Leabanese,Chinese", delivery: "Delivery 10AED", star: "../../assets/images/star.png" },
  ]
  stars = [
    { value: 1, star: "../../assets/images/star.png" },
    { value: 2, star: "../../assets/images/star.png" },
    { value: 3, star: "../../assets/images/star.png" },
    { value: 4, star: "../../assets/images/star.png" },
    { value: 5, star: "../../assets/images/star.png" }]
  serachedData: { name: string; Image: string; }[];
  constructor(private router: Router, private fb: FormBuilder) { }


  ngOnInit(): void {
    this.InItForm();
  }
  InItForm() {
    this.SearchRestuarentsForm = this.fb.group({
      searchItems: ['']
    })
  }
  onHomePage() {
    this.router.navigateByUrl('home');
  }
  // onMapMarkerPage(){
  //   this.router.navigateByUrl('https://www.google.com/maps');
  // }
  searchWithNames(event: any) {
    if (event.target.value) {
      this.searchAction = true;
      this.serachedData = this.restaurents;
      this.serachedData = this.serachedData.filter(data => data.name.match(event.target.value));

    } else {
      this.searchAction = false;
    }
  }
}
