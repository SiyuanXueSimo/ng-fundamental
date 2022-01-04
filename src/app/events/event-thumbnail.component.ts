import { Component, Input} from "@angular/core";

@Component({
    selector: 'event-thumbnail',
    template: `
    <div class="well hoverwell thumbnail">
        <h2>{{vEvent?.name}}</h2>
        <div>Date: {{vEvent?.date}}</div>
        <div class = "well" [ngClass]="getStartTimeClass()" [ngSwitch]="vEvent?.time">
            Time: {{vEvent?.time}}
            <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
            <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
            <span *ngSwitchDefault>(Normal Start)</span>
        </div>
        <div>Price: \${{vEvent?.price}}</div>
        <div [hidden]="!vEvent?.location">
            <span>Location: {{vEvent?.location?.address}}</span>
            <span class="pad-left">{{vEvent?.location?.city}}, {{vEvent?.location?.country}}</span>
        </div>
        <div *ngIf="vEvent?.onlineUrl">
            Online URL: {{vEvent?.onlineUrl}}
        </div>
    </div>
    `,
    styles: [`
        .green { color: #003300 !important; }
        .bold { font-weight: bold; }
        .thumbnail { min-height: 210px; }
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb; }
    `]
})

export class EventThumbnailComponent {
    @Input() vEvent: any

    getStartTimeClass() {
        if(this.vEvent && this.vEvent.time == '8:00 am')
            return ['green', 'bold']
        return []
    }
}