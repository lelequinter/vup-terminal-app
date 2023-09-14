import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/pages/users/services/auth.service';
import { take, tap } from 'rxjs';

export const onlyLoggedInGuard = () => {
  const router = inject(Router);
  const authSvc = inject(AuthService);

  return authSvc.userState$
  .pipe(
    take(1),
    tap( (isLoggedIn) => ( isLoggedIn ? true : router.navigate(['/user/sign-in'])))
  )
};
