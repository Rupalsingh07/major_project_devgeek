import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-intern',
  templateUrl: './intern.component.html',
  styleUrls: ['./intern.component.scss']
})
export class InternComponent implements OnInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver,private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  dashboardNav() {
    this.router.navigate(['member/dashboard'])
  }

  allTracksNav() {
    this.router.navigate(['member/allTracks'])
  }

  allProjectNav() {
    this.router.navigate(['member/allProjects'])
  }
  poc(){
    this.router.navigate(['member/poc'])
  }
  pro(){
    this.router.navigate(['member/profile'])
  }

}
