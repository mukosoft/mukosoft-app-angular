import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import { AppStateService } from "@core";
import { Injectable } from "@angular/core";

@Injectable()
export class NotFirstTimeGuard implements CanActivate {
  constructor(
    private readonly appStateService: AppStateService,
    private readonly router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.appStateService.isFirstStart()) {
      return true;
    } else {
      this.router.navigate(["intro"]);
      return false;
    }
  }
}
