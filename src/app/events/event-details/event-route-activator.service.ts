import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import { EventService } from "../shared/event.service";

@Injectable()
export class EventRouteActivator implements CanActivate {
    constructor(private route: ActivatedRoute, private eventService:EventService, private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        const existEvent = !!this.eventService.getEvent(+route.params['id'])

        if(!existEvent)
            this.router.navigate(['./404'])
        return existEvent 
    }
}