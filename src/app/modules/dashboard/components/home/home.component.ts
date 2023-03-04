import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // public sidebarShow: boolean = true;


  constructor(private router : Router) { }


  header(){
    this.router.navigate(['/header'], {skipLocationChange: true});
  }

  ngOnInit(): void {
  }

}
