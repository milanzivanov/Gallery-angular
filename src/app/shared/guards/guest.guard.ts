import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Injectable()
export class GuestGuard implements CanActivate {

	constructor(
		private router: Router,
		private authService: AuthService
		) { }

	canActivate(
		activatedRouteSnapshot: ActivatedRouteSnapshot,
		routerStateSnapshot: RouterStateSnapshot
		) {
		if (this.auth.Serbice.isAuthentificated) {
			this.router.navigate(['home']);
		}

		return true;
	}
}