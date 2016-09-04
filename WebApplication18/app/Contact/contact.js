"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var base_component_1 = require('../common/base.component');
var services = require('../services/services');
var dal = require('../dal/models');
var Contact = (function (_super) {
    __extends(Contact, _super);
    function Contact(dataservice, dialogeService, router) {
        _super.call(this, router);
        this.dataservice = dataservice;
        this.dialogeService = dialogeService;
        this.router = router;
    }
    Contact.prototype.ngOnDestroy = function () {
        this.submitted = false;
        this.displaySubmitError = false;
        this.isSubmitting = false;
    };
    Contact.prototype.ngOnInit = function () {
        this.submitted = false;
        this.displaySubmitError = false;
        this.isSubmitting = false;
        //this.message = { Content: 'sds', Date: new Date(), IP: '', Sender: { Email: 'sdsd@sdsd', Name: 'sdsd' } };
        this.message = { Content: '', Date: new Date(), IP: '', Sender: { Email: '', Name: '' } };
    };
    Contact.prototype.onSubmit = function () {
        var _this = this;
        this.isSubmitting = true;
        var req = { Message: this.message, Language: dal.Language.Hebrew };
        this.dataservice.ConnectToApiData(req, 'api/Data/SendMessage')
            .subscribe(function (res) {
            _this.submitted = true;
            _this.isSubmitting = false;
        }, function (err) {
            _this.displaySubmitError = true;
            _this.isSubmitting = false;
        });
    };
    Contact = __decorate([
        core_1.Component({
            templateUrl: "./contact.html",
            moduleId: module.id,
        }), 
        __metadata('design:paramtypes', [services.DataService, services.DialogService, router_1.Router])
    ], Contact);
    return Contact;
}(base_component_1.BaseComponent));
exports.Contact = Contact;
//# sourceMappingURL=contact.js.map