﻿import {Component, OnInit, Injector, AfterViewInit} from '@angular/core'
import {BaseComponent} from '../common/base.component'
import {Router} from '@angular/router'
@Component({
    templateUrl: "./home.html",
    moduleId: module.id,

})

export class Home extends BaseComponent implements OnInit, AfterViewInit {

    constructor(public router: Router, private injector: Injector) {
        super(injector);
    }

    ngAfterViewInit(): void {
        console.debug(this.pageName);
    }
    //public pageName
    //ngOnInit() {
    //    this.pageName
    //}
}