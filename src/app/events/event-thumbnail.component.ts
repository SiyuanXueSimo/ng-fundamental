import { Component, Input} from "@angular/core";

@Component({
    selector: 'event-thumbnail',
    template: `
    <div class="well hoverwell thumbnail">
        <h2>{{vEvent?.name}}</h2>
        <div>Date: {{vEvent?.date}}</div>
        <div>Time: {{vEvent?.time}}</div>
        <div>Price: \${{vEvent?.price}}</div>
        <div *ngIf="vEvent?.location">
            <span>Location: {{vEvent?.location?.address}}</span>
            <span class="pad-left">{{vEvent?.location?.city}}, {{vEvent?.location?.country}}</span>
        </div>
        <div *ngIf="vEvent?.onlineUrl">
            Online URL: {{vEvent?.onlineUrl}}
        </div>
    </div>
    `,
    styles: [`
        .thumbnail { min-height: 210px; }
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb; }
    `]
})

export class EventThumbnailComponent {
    @Input() vEvent: any
}