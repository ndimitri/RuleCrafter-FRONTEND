import {HttpInterceptorFn} from '@angular/common/http';
import {inject} from "@angular/core";
import {AuthService} from '../../features/auth/service/auth.service';
import {UserTokenDtoModel} from '../../features/auth/models/user.token.dto.model';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const authService: AuthService = inject(AuthService);
  let userToken: UserTokenDtoModel|undefined = authService.currentUser;
  if (userToken) {
    let token = userToken.token;
    if (token) {
      if (token !== '') {
        let requestClone = req.clone({
          headers: req.headers.append('Authorization','Bearer ' + token)
        });
        return next(requestClone);
      }
    }
  }
  return next(req);
};
