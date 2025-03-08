import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GoRouteService {

  constructor(private router: Router) { }

  goRoute(route: string) {
    this.router.navigate([route]).catch(console.error);
  }
}
