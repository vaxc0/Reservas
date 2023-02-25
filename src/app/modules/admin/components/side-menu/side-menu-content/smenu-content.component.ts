import { Component, Input } from "@angular/core";
import { NgbActiveOffcanvas } from "@ng-bootstrap/ng-bootstrap";
import { SharedModule } from "src/app/core/shared/shared.module";

@Component({
    selector: 'ngbd-offcanvas-content',
    standalone: true,
    templateUrl: './smenu-content.component.html',
    styleUrls: ['./smenu-content.component.css'],
    imports: [SharedModule]
})
export class canvasContent {// compoennte dento del offcanva
    @Input() titulo: string = '';
    @Input() listaOpsAd!: any

    constructor(public activeOffcanvas: NgbActiveOffcanvas) { }
}