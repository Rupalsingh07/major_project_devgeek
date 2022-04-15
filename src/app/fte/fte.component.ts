import { Component, OnInit,ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-fte',
  templateUrl: './fte.component.html',
  styleUrls: ['./fte.component.scss']
})
export class FteComponent implements OnInit {
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
    this.router.navigate(['leader/dashboard'])
  }
   createProject(){
     this.router.navigate(['leader/create-project']);
   }
  

  allProjectNav() {
    this.router.navigate(['leader/allProjects'])
  }
  poc(){
    this.router.navigate(['leader/poc'])
  }
  pro(){
    this.router.navigate(['leader/profile'])
  }
}
