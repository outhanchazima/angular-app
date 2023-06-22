import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

export const authenticationGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const localStorageService = inject(LocalStorageService)

  if (!localStorageService.getAccessToken()) {
      router.navigateByUrl('/auth/login');
      return false;
    }

    return true;
};
