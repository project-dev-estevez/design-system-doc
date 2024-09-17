import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  public canShowPassword: boolean = false;

  public loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    // private sweetAlert: SweetAlertService,
    // private authService: AuthenticationService
  )
  {
    this.loginForm = this.fb.group({
      email: [ '', [ Validators.required, Validators.email ] ],
      password: [ '', [ Validators.required, Validators.minLength(8) ] ]
    });

  }

  ngOnInit(): void {
    // this.checkToken();
  }

  // private checkDashboardToRedirect( data: LoginResponse | CheckTokenResponse ){
    
  //   this.authService.setToken( data.token );
  //   const { roles = [] } = data;
  //   const isSuperAdmin = roles.includes('ceo') || roles.includes('generalDirector') || roles.includes('director');

  //   if( isSuperAdmin )
  //     return this.router.navigate(['/super-dashboard']);

  //   return this.router.navigate(['/dashboard']);
  // }

  // private refreshToken( checkTokenResponse: CheckTokenResponse ) {
  //   const { token = '' } = checkTokenResponse;
  //   if(!token) return;

  //   this.authService.setToken( token );
  // }

  login(){
    return this.router.navigate(['/design-system']);
    // this.authService.login( this.loginForm.value ).subscribe(
    //   response => {
    //     this.checkDashboardToRedirect( response );
    //   },
    //   errorResponse => {
    //     const errorDetail = errorResponse.error?.message || 'Error';
    //     this.sweetAlert.presentError( errorDetail );
    //   }
    // );
  }

  checkToken(){
    // if( !this.authService.getToken() ) return; 

    // this.authService.checkToken().subscribe(
    //   response => {
    //     this.refreshToken( response );
    //     this.checkDashboardToRedirect( response );
    //   },
    //   () => {
    //     localStorage.clear();
    //   }
    // );
  }

}
