import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';


@Component({
  selector: 'app-dashboardpage',
  templateUrl: './dashboardpage.component.html',
  styleUrls: ['./dashboardpage.component.css']
})
export class DashboardpageComponent implements OnInit {
  public sidebarShow: boolean = true;


  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  header(){
    this.router.navigate(['dashboard/header'], {skipLocationChange: true});
  }

  home(){
    this.router.navigate(['dashboard/home'], {skipLocationChange: true});
  }

  services(){
    this.router.navigate(['dashboard/services'], {skipLocationChange: true});
  }

  contact(){
    this.router.navigate(['dashboard/contact'], {skipLocationChange: true});
  }

  footer(){
    this.router.navigate(['dashboard/footer'], {skipLocationChange: true});
  }

}
