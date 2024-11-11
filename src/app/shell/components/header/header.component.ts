import { Component } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { AuthenticationService } from '@app/auth';
import { ActivatedRoute, Router } from '@angular/router';

@UntilDestroy()
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  menuHidden = true;

  constructor(
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
    private readonly _authService: AuthenticationService,
  ) {}

  logout() {
    this._router.navigate([this._route.snapshot.queryParams['redirect'] || '/logout'], { replaceUrl: true }).then(() => {
      // Handle the navigation
      console.log('Navigated to Logout');
    });
  }
}
