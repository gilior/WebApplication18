/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import0 = require('../../../app/Contact/contact');
var import1 = require('@angular/core/src/linker/view');
var import3 = require('@angular/core/src/linker/view_utils');
var import4 = require('@angular/core/src/metadata/view');
var import5 = require('@angular/core/src/linker/view_type');
var import6 = require('@angular/core/src/change_detection/change_detection');
var import7 = require('@angular/core/src/linker/component_factory');
var import8 = require('../../../app/services/services');
var import9 = require('@angular/router/src/router');
var import10 = require('../../node_modules/@angular/forms/src/directives/ng_form.ngfactory');
var import11 = require('../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory');
var import12 = require('../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory');
var import13 = require('../../node_modules/@angular/forms/src/directives/validators.ngfactory');
var import14 = require('../../node_modules/@angular/forms/src/directives/ng_model.ngfactory');
var import15 = require('../../../app/pipes/pipes');
var import16 = require('@angular/core/src/linker/element_ref');
var import17 = require('@angular/forms/src/directives/default_value_accessor');
var import18 = require('@angular/forms/src/directives/validators');
var import19 = require('@angular/forms/src/validators');
var import20 = require('@angular/forms/src/directives/control_value_accessor');
var import21 = require('@angular/forms/src/directives/ng_model');
var import22 = require('@angular/forms/src/directives/ng_control');
var import23 = require('@angular/forms/src/directives/ng_control_status');
var import24 = require('@angular/forms/src/directives/ng_form');
var import25 = require('@angular/forms/src/directives/control_container');
var Wrapper_Contact = (function () {
    function Wrapper_Contact(p0, p1, p2, p3, p4) {
        this._changed = false;
        this.context = new import0.Contact(p0, p1, p2, p3, p4);
    }
    Wrapper_Contact.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_Contact.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy();
    };
    Wrapper_Contact.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_Contact.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_Contact.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_Contact.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_Contact;
}());
exports.Wrapper_Contact = Wrapper_Contact;
var renderType_Contact_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_Contact_Host0 = (function (_super) {
    __extends(View_Contact_Host0, _super);
    function View_Contact_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_Contact_Host0, renderType_Contact_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_Contact_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ng-component', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_Contact0(this.viewUtils, this, 0, this._el_0);
        this._Contact_0_3 = new Wrapper_Contact(this.injectorGet(import8.DataService, this.parentIndex), this.injectorGet(import8.DialogService, this.parentIndex), this.injectorGet(import8.DialogService, this.parentIndex), this.injectorGet(import9.Router, this.parentIndex), this.injector(0));
        this.compView_0.create(this._Contact_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._Contact_0_3.context);
    };
    View_Contact_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.Contact) && (0 === requestNodeIndex))) {
            return this._Contact_0_3.context;
        }
        return notFoundResult;
    };
    View_Contact_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._Contact_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    };
    View_Contact_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
        this._Contact_0_3.ngOnDestroy();
    };
    View_Contact_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_Contact_Host0;
}(import1.AppView));
exports.ContactNgFactory = new import7.ComponentFactory('ng-component', View_Contact_Host0, import0.Contact);
var styles_Contact = [];
var renderType_Contact = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_Contact, {});
var View_Contact0 = (function (_super) {
    __extends(View_Contact0, _super);
    function View_Contact0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_Contact0, renderType_Contact, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
        this._expr_98 = import6.UNINITIALIZED;
        this._expr_99 = import6.UNINITIALIZED;
        this._expr_102 = import6.UNINITIALIZED;
        this._expr_104 = import6.UNINITIALIZED;
        this._expr_106 = import6.UNINITIALIZED;
        this._expr_107 = import6.UNINITIALIZED;
        this._expr_108 = import6.UNINITIALIZED;
        this._expr_109 = import6.UNINITIALIZED;
        this._expr_110 = import6.UNINITIALIZED;
        this._expr_111 = import6.UNINITIALIZED;
    }
    View_Contact0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'white-panel contact-form'), null);
        this._text_2 = this.renderer.createText(this._el_1, '\n    ', null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_1, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_4 = this.renderer.createText(this._el_3, '\n        ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_3, 'form', import3.EMPTY_INLINE_ARRAY, null);
        this._NgForm_5_3 = new import10.Wrapper_NgForm(null, null);
        this._ControlContainer_5_4 = this._NgForm_5_3.context;
        this._NgControlStatusGroup_5_5 = new import11.Wrapper_NgControlStatusGroup(this._ControlContainer_5_4);
        this._text_6 = this.renderer.createText(this._el_5, '\n            ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_5, 'div', new import3.InlineArray2(2, 'class', 'form-group'), null);
        this._text_8 = this.renderer.createText(this._el_7, '\n                ', null);
        this._text_9 = this.renderer.createText(this._el_7, '\n                ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_7, 'input', new import3.InlineArray16(10, 'class', 'form-control form-field input-lg', 'name', 'Name', 'ngControl', 'name', 'required', '', 'type', 'text'), null);
        this._DefaultValueAccessor_10_3 = new import12.Wrapper_DefaultValueAccessor(this.renderer, new import16.ElementRef(this._el_10));
        this._RequiredValidator_10_4 = new import13.Wrapper_RequiredValidator();
        this._NG_VALIDATORS_10_5 = [this._RequiredValidator_10_4.context];
        this._NG_VALUE_ACCESSOR_10_6 = [this._DefaultValueAccessor_10_3.context];
        this._NgModel_10_7 = new import14.Wrapper_NgModel(this._ControlContainer_5_4, this._NG_VALIDATORS_10_5, null, this._NG_VALUE_ACCESSOR_10_6);
        this._NgControl_10_8 = this._NgModel_10_7.context;
        this._NgControlStatus_10_9 = new import11.Wrapper_NgControlStatus(this._NgControl_10_8);
        this._text_11 = this.renderer.createText(this._el_7, '\n                ', null);
        this._text_12 = this.renderer.createText(this._el_7, '\n            ', null);
        this._text_13 = this.renderer.createText(this._el_5, '\n            ', null);
        this._el_14 = import3.createRenderElement(this.renderer, this._el_5, 'div', new import3.InlineArray2(2, 'class', 'form-group'), null);
        this._text_15 = this.renderer.createText(this._el_14, '\n                ', null);
        this._text_16 = this.renderer.createText(this._el_14, '\n                ', null);
        this._el_17 = import3.createRenderElement(this.renderer, this._el_14, 'input', new import3.InlineArray16(10, 'class', 'form-control form-field input-lg', 'name', 'Email', 'ngControl', 'email', 'required', '', 'type', 'email'), null);
        this._DefaultValueAccessor_17_3 = new import12.Wrapper_DefaultValueAccessor(this.renderer, new import16.ElementRef(this._el_17));
        this._RequiredValidator_17_4 = new import13.Wrapper_RequiredValidator();
        this._NG_VALIDATORS_17_5 = [this._RequiredValidator_17_4.context];
        this._NG_VALUE_ACCESSOR_17_6 = [this._DefaultValueAccessor_17_3.context];
        this._NgModel_17_7 = new import14.Wrapper_NgModel(this._ControlContainer_5_4, this._NG_VALIDATORS_17_5, null, this._NG_VALUE_ACCESSOR_17_6);
        this._NgControl_17_8 = this._NgModel_17_7.context;
        this._NgControlStatus_17_9 = new import11.Wrapper_NgControlStatus(this._NgControl_17_8);
        this._text_18 = this.renderer.createText(this._el_14, '\n            ', null);
        this._text_19 = this.renderer.createText(this._el_5, '\n            ', null);
        this._el_20 = import3.createRenderElement(this.renderer, this._el_5, 'div', new import3.InlineArray2(2, 'class', 'form-group'), null);
        this._text_21 = this.renderer.createText(this._el_20, '\n                ', null);
        this._text_22 = this.renderer.createText(this._el_20, '\n                ', null);
        this._el_23 = import3.createRenderElement(this.renderer, this._el_20, 'textarea', new import3.InlineArray16(10, 'class', 'form-control input-lg', 'name', 'Content', 'ngControl', 'content', 'required', '', 'rows', '8'), null);
        this._DefaultValueAccessor_23_3 = new import12.Wrapper_DefaultValueAccessor(this.renderer, new import16.ElementRef(this._el_23));
        this._RequiredValidator_23_4 = new import13.Wrapper_RequiredValidator();
        this._NG_VALIDATORS_23_5 = [this._RequiredValidator_23_4.context];
        this._NG_VALUE_ACCESSOR_23_6 = [this._DefaultValueAccessor_23_3.context];
        this._NgModel_23_7 = new import14.Wrapper_NgModel(this._ControlContainer_5_4, this._NG_VALIDATORS_23_5, null, this._NG_VALUE_ACCESSOR_23_6);
        this._NgControl_23_8 = this._NgModel_23_7.context;
        this._NgControlStatus_23_9 = new import11.Wrapper_NgControlStatus(this._NgControl_23_8);
        this._text_24 = this.renderer.createText(this._el_20, '\n            ', null);
        this._text_25 = this.renderer.createText(this._el_5, '\n            ', null);
        this._el_26 = import3.createRenderElement(this.renderer, this._el_5, 'button', new import3.InlineArray4(4, 'class', 'btn btn-default', 'type', 'submit'), null);
        this._text_27 = this.renderer.createText(this._el_26, 'Submit', null);
        this._text_28 = this.renderer.createText(this._el_5, '\n            ', null);
        this._el_29 = import3.createRenderElement(this.renderer, this._el_5, 'span', new import3.InlineArray2(2, 'class', 'alert alert-danger'), null);
        this._text_30 = this.renderer.createText(this._el_29, 'message not sent - plz try again later', null);
        this._text_31 = this.renderer.createText(this._el_5, '\n        ', null);
        this._text_32 = this.renderer.createText(this._el_3, '\n    ', null);
        this._text_33 = this.renderer.createText(this._el_1, '\n    ', null);
        this._el_34 = import3.createRenderElement(this.renderer, this._el_1, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_35 = this.renderer.createText(this._el_34, '\n        ', null);
        this._el_36 = import3.createRenderElement(this.renderer, this._el_34, 'h2', import3.EMPTY_INLINE_ARRAY, null);
        this._text_37 = this.renderer.createText(this._el_36, 'You have submitted the following:', null);
        this._text_38 = this.renderer.createText(this._el_34, '\n        ', null);
        this._el_39 = import3.createRenderElement(this.renderer, this._el_34, 'div', new import3.InlineArray2(2, 'class', 'row back-cornsilk-color margin-row black-border x-large-font'), null);
        this._text_40 = this.renderer.createText(this._el_39, '\n            ', null);
        this._el_41 = import3.createRenderElement(this.renderer, this._el_39, 'div', new import3.InlineArray2(2, 'class', 'col-xs-12 col-sm-1'), null);
        this._text_42 = this.renderer.createText(this._el_41, 'Name:', null);
        this._text_43 = this.renderer.createText(this._el_39, '\n            ', null);
        this._el_44 = import3.createRenderElement(this.renderer, this._el_39, 'div', new import3.InlineArray2(2, 'class', 'col-xs-12 col-sm-11'), null);
        this._text_45 = this.renderer.createText(this._el_44, '', null);
        this._text_46 = this.renderer.createText(this._el_39, '\n        ', null);
        this._text_47 = this.renderer.createText(this._el_34, '\n\n        ', null);
        this._el_48 = import3.createRenderElement(this.renderer, this._el_34, 'div', new import3.InlineArray2(2, 'class', 'row back-cornsilk-color margin-row black-border x-large-font'), null);
        this._text_49 = this.renderer.createText(this._el_48, '\n            ', null);
        this._el_50 = import3.createRenderElement(this.renderer, this._el_48, 'div', new import3.InlineArray2(2, 'class', 'col-xs-12 col-sm-1'), null);
        this._text_51 = this.renderer.createText(this._el_50, 'Email:', null);
        this._text_52 = this.renderer.createText(this._el_48, '\n            ', null);
        this._el_53 = import3.createRenderElement(this.renderer, this._el_48, 'div', new import3.InlineArray2(2, 'class', 'col-xs-12 col-sm-11'), null);
        this._text_54 = this.renderer.createText(this._el_53, '', null);
        this._text_55 = this.renderer.createText(this._el_48, '\n        ', null);
        this._text_56 = this.renderer.createText(this._el_34, '\n\n        ', null);
        this._el_57 = import3.createRenderElement(this.renderer, this._el_34, 'div', new import3.InlineArray2(2, 'class', 'row back-cornsilk-color margin-row black-border x-large-font'), null);
        this._text_58 = this.renderer.createText(this._el_57, '\n            ', null);
        this._el_59 = import3.createRenderElement(this.renderer, this._el_57, 'div', new import3.InlineArray2(2, 'class', 'col-xs-12 col-sm-1'), null);
        this._text_60 = this.renderer.createText(this._el_59, 'Content:', null);
        this._text_61 = this.renderer.createText(this._el_57, '\n            ', null);
        this._el_62 = import3.createRenderElement(this.renderer, this._el_57, 'div', new import3.InlineArray2(2, 'class', 'col-xs-12 col-sm-11'), null);
        this._text_63 = this.renderer.createText(this._el_62, '', null);
        this._text_64 = this.renderer.createText(this._el_57, '\n        ', null);
        this._text_65 = this.renderer.createText(this._el_34, '\n\n\n        ', null);
        this._el_66 = import3.createRenderElement(this.renderer, this._el_34, 'div', new import3.InlineArray2(2, 'class', 'row'), null);
        this._text_67 = this.renderer.createText(this._el_66, '\n            ', null);
        this._el_68 = import3.createRenderElement(this.renderer, this._el_66, 'button', new import3.InlineArray2(2, 'class', 'btn btn-default'), null);
        this._text_69 = this.renderer.createText(this._el_68, 'Send Another', null);
        this._text_70 = this.renderer.createText(this._el_66, '\n        ', null);
        this._text_71 = this.renderer.createText(this._el_34, '\n\n    ', null);
        this._text_72 = this.renderer.createText(this._el_1, '\n', null);
        this._text_73 = this.renderer.createText(parentRenderNode, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_5, new import3.InlineArray8(6, 'ngSubmit', null, 'submit', null, 'reset', null), this.eventHandler(this.handleEvent_5));
        this._NgForm_5_3.subscribe(this, this.eventHandler(this.handleEvent_5), true);
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_10, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_10));
        this._NgModel_10_7.subscribe(this, this.eventHandler(this.handleEvent_10), true);
        this._pipe_translate_0 = new import15.TranslatePipe(this.parentView.injectorGet(import8.TranslationService, this.parentIndex), this.parentView.injectorGet(import8.CacheManager, this.parentIndex));
        this._pipe_translate_0_0 = import3.pureProxy1(this._pipe_translate_0.transform.bind(this._pipe_translate_0));
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_17, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_17));
        this._NgModel_17_7.subscribe(this, this.eventHandler(this.handleEvent_17), true);
        this._pipe_translate_0_1 = import3.pureProxy1(this._pipe_translate_0.transform.bind(this._pipe_translate_0));
        var disposable_3 = import3.subscribeToRenderElement(this, this._el_23, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_23));
        this._NgModel_23_7.subscribe(this, this.eventHandler(this.handleEvent_23), true);
        this._pipe_translate_0_2 = import3.pureProxy1(this._pipe_translate_0.transform.bind(this._pipe_translate_0));
        var disposable_4 = import3.subscribeToRenderElement(this, this._el_68, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_68));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._text_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._text_28,
            this._el_29,
            this._text_30,
            this._text_31,
            this._text_32,
            this._text_33,
            this._el_34,
            this._text_35,
            this._el_36,
            this._text_37,
            this._text_38,
            this._el_39,
            this._text_40,
            this._el_41,
            this._text_42,
            this._text_43,
            this._el_44,
            this._text_45,
            this._text_46,
            this._text_47,
            this._el_48,
            this._text_49,
            this._el_50,
            this._text_51,
            this._text_52,
            this._el_53,
            this._text_54,
            this._text_55,
            this._text_56,
            this._el_57,
            this._text_58,
            this._el_59,
            this._text_60,
            this._text_61,
            this._el_62,
            this._text_63,
            this._text_64,
            this._text_65,
            this._el_66,
            this._text_67,
            this._el_68,
            this._text_69,
            this._text_70,
            this._text_71,
            this._text_72,
            this._text_73
        ]), [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3,
            disposable_4
        ]);
        return null;
    };
    View_Contact0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import17.DefaultValueAccessor) && (10 === requestNodeIndex))) {
            return this._DefaultValueAccessor_10_3.context;
        }
        if (((token === import18.RequiredValidator) && (10 === requestNodeIndex))) {
            return this._RequiredValidator_10_4.context;
        }
        if (((token === import19.NG_VALIDATORS) && (10 === requestNodeIndex))) {
            return this._NG_VALIDATORS_10_5;
        }
        if (((token === import20.NG_VALUE_ACCESSOR) && (10 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_10_6;
        }
        if (((token === import21.NgModel) && (10 === requestNodeIndex))) {
            return this._NgModel_10_7.context;
        }
        if (((token === import22.NgControl) && (10 === requestNodeIndex))) {
            return this._NgControl_10_8;
        }
        if (((token === import23.NgControlStatus) && (10 === requestNodeIndex))) {
            return this._NgControlStatus_10_9.context;
        }
        if (((token === import17.DefaultValueAccessor) && (17 === requestNodeIndex))) {
            return this._DefaultValueAccessor_17_3.context;
        }
        if (((token === import18.RequiredValidator) && (17 === requestNodeIndex))) {
            return this._RequiredValidator_17_4.context;
        }
        if (((token === import19.NG_VALIDATORS) && (17 === requestNodeIndex))) {
            return this._NG_VALIDATORS_17_5;
        }
        if (((token === import20.NG_VALUE_ACCESSOR) && (17 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_17_6;
        }
        if (((token === import21.NgModel) && (17 === requestNodeIndex))) {
            return this._NgModel_17_7.context;
        }
        if (((token === import22.NgControl) && (17 === requestNodeIndex))) {
            return this._NgControl_17_8;
        }
        if (((token === import23.NgControlStatus) && (17 === requestNodeIndex))) {
            return this._NgControlStatus_17_9.context;
        }
        if (((token === import17.DefaultValueAccessor) && (23 === requestNodeIndex))) {
            return this._DefaultValueAccessor_23_3.context;
        }
        if (((token === import18.RequiredValidator) && (23 === requestNodeIndex))) {
            return this._RequiredValidator_23_4.context;
        }
        if (((token === import19.NG_VALIDATORS) && (23 === requestNodeIndex))) {
            return this._NG_VALIDATORS_23_5;
        }
        if (((token === import20.NG_VALUE_ACCESSOR) && (23 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_23_6;
        }
        if (((token === import21.NgModel) && (23 === requestNodeIndex))) {
            return this._NgModel_23_7.context;
        }
        if (((token === import22.NgControl) && (23 === requestNodeIndex))) {
            return this._NgControl_23_8;
        }
        if (((token === import23.NgControlStatus) && (23 === requestNodeIndex))) {
            return this._NgControlStatus_23_9.context;
        }
        if (((token === import24.NgForm) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 31)))) {
            return this._NgForm_5_3.context;
        }
        if (((token === import25.ControlContainer) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 31)))) {
            return this._ControlContainer_5_4;
        }
        if (((token === import23.NgControlStatusGroup) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 31)))) {
            return this._NgControlStatusGroup_5_5.context;
        }
        return notFoundResult;
    };
    View_Contact0.prototype.detectChangesInternal = function (throwOnChange) {
        var valUnwrapper = new import6.ValueUnwrapper();
        this._NgForm_5_3.ngDoCheck(this, this._el_5, throwOnChange);
        this._NgControlStatusGroup_5_5.ngDoCheck(this, this._el_5, throwOnChange);
        this._DefaultValueAccessor_10_3.ngDoCheck(this, this._el_10, throwOnChange);
        var currVal_10_1_0 = '';
        this._RequiredValidator_10_4.check_required(currVal_10_1_0, throwOnChange, false);
        this._RequiredValidator_10_4.ngDoCheck(this, this._el_10, throwOnChange);
        var currVal_10_2_0 = 'Name';
        this._NgModel_10_7.check_name(currVal_10_2_0, throwOnChange, false);
        var currVal_10_2_1 = this.context.isSubmitting;
        this._NgModel_10_7.check_isDisabled(currVal_10_2_1, throwOnChange, false);
        var currVal_10_2_2 = this.context.message.Sender.Name;
        this._NgModel_10_7.check_model(currVal_10_2_2, throwOnChange, false);
        this._NgModel_10_7.ngDoCheck(this, this._el_10, throwOnChange);
        this._NgControlStatus_10_9.ngDoCheck(this, this._el_10, throwOnChange);
        this._DefaultValueAccessor_17_3.ngDoCheck(this, this._el_17, throwOnChange);
        var currVal_17_1_0 = '';
        this._RequiredValidator_17_4.check_required(currVal_17_1_0, throwOnChange, false);
        this._RequiredValidator_17_4.ngDoCheck(this, this._el_17, throwOnChange);
        var currVal_17_2_0 = 'Email';
        this._NgModel_17_7.check_name(currVal_17_2_0, throwOnChange, false);
        var currVal_17_2_1 = this.context.isSubmitting;
        this._NgModel_17_7.check_isDisabled(currVal_17_2_1, throwOnChange, false);
        var currVal_17_2_2 = this.context.message.Sender.Email;
        this._NgModel_17_7.check_model(currVal_17_2_2, throwOnChange, false);
        this._NgModel_17_7.ngDoCheck(this, this._el_17, throwOnChange);
        this._NgControlStatus_17_9.ngDoCheck(this, this._el_17, throwOnChange);
        this._DefaultValueAccessor_23_3.ngDoCheck(this, this._el_23, throwOnChange);
        var currVal_23_1_0 = '';
        this._RequiredValidator_23_4.check_required(currVal_23_1_0, throwOnChange, false);
        this._RequiredValidator_23_4.ngDoCheck(this, this._el_23, throwOnChange);
        var currVal_23_2_0 = 'Content';
        this._NgModel_23_7.check_name(currVal_23_2_0, throwOnChange, false);
        var currVal_23_2_1 = this.context.isSubmitting;
        this._NgModel_23_7.check_isDisabled(currVal_23_2_1, throwOnChange, false);
        var currVal_23_2_2 = this.context.message.Content;
        this._NgModel_23_7.check_model(currVal_23_2_2, throwOnChange, false);
        this._NgModel_23_7.ngDoCheck(this, this._el_23, throwOnChange);
        this._NgControlStatus_23_9.ngDoCheck(this, this._el_23, throwOnChange);
        var currVal_98 = this.context.submitted;
        if (import3.checkBinding(throwOnChange, this._expr_98, currVal_98)) {
            this.renderer.setElementProperty(this._el_3, 'hidden', currVal_98);
            this._expr_98 = currVal_98;
        }
        this._NgControlStatusGroup_5_5.checkHost(this, this, this._el_5, throwOnChange);
        valUnwrapper.reset();
        var currVal_99 = import3.inlineInterpolate(1, '', valUnwrapper.unwrap(import3.castByValue(this._pipe_translate_0_0, this._pipe_translate_0.transform)('Name')), '');
        if ((valUnwrapper.hasWrappedValue || import3.checkBinding(throwOnChange, this._expr_99, currVal_99))) {
            this.renderer.setElementProperty(this._el_10, 'placeholder', currVal_99);
            this._expr_99 = currVal_99;
        }
        this._RequiredValidator_10_4.checkHost(this, this, this._el_10, throwOnChange);
        this._NgControlStatus_10_9.checkHost(this, this, this._el_10, throwOnChange);
        valUnwrapper.reset();
        var currVal_102 = import3.inlineInterpolate(1, '', valUnwrapper.unwrap(import3.castByValue(this._pipe_translate_0_1, this._pipe_translate_0.transform)('Email')), '');
        if ((valUnwrapper.hasWrappedValue || import3.checkBinding(throwOnChange, this._expr_102, currVal_102))) {
            this.renderer.setElementProperty(this._el_17, 'placeholder', currVal_102);
            this._expr_102 = currVal_102;
        }
        this._RequiredValidator_17_4.checkHost(this, this, this._el_17, throwOnChange);
        this._NgControlStatus_17_9.checkHost(this, this, this._el_17, throwOnChange);
        valUnwrapper.reset();
        var currVal_104 = import3.inlineInterpolate(1, '', valUnwrapper.unwrap(import3.castByValue(this._pipe_translate_0_2, this._pipe_translate_0.transform)('Content')), '');
        if ((valUnwrapper.hasWrappedValue || import3.checkBinding(throwOnChange, this._expr_104, currVal_104))) {
            this.renderer.setElementProperty(this._el_23, 'placeholder', currVal_104);
            this._expr_104 = currVal_104;
        }
        this._RequiredValidator_23_4.checkHost(this, this, this._el_23, throwOnChange);
        this._NgControlStatus_23_9.checkHost(this, this, this._el_23, throwOnChange);
        var currVal_106 = this.context.isSubmitting;
        if (import3.checkBinding(throwOnChange, this._expr_106, currVal_106)) {
            this.renderer.setElementProperty(this._el_26, 'disabled', currVal_106);
            this._expr_106 = currVal_106;
        }
        var currVal_107 = (!this.context.displaySubmitError || this.context.isSubmitting);
        if (import3.checkBinding(throwOnChange, this._expr_107, currVal_107)) {
            this.renderer.setElementProperty(this._el_29, 'hidden', currVal_107);
            this._expr_107 = currVal_107;
        }
        var currVal_108 = !this.context.submitted;
        if (import3.checkBinding(throwOnChange, this._expr_108, currVal_108)) {
            this.renderer.setElementProperty(this._el_34, 'hidden', currVal_108);
            this._expr_108 = currVal_108;
        }
        var currVal_109 = import3.inlineInterpolate(1, '', this.context.message.Sender.Name, '');
        if (import3.checkBinding(throwOnChange, this._expr_109, currVal_109)) {
            this.renderer.setText(this._text_45, currVal_109);
            this._expr_109 = currVal_109;
        }
        var currVal_110 = import3.inlineInterpolate(1, '', this.context.message.Sender.Email, '');
        if (import3.checkBinding(throwOnChange, this._expr_110, currVal_110)) {
            this.renderer.setText(this._text_54, currVal_110);
            this._expr_110 = currVal_110;
        }
        var currVal_111 = import3.inlineInterpolate(1, '', this.context.message.Content, '');
        if (import3.checkBinding(throwOnChange, this._expr_111, currVal_111)) {
            this.renderer.setText(this._text_63, currVal_111);
            this._expr_111 = currVal_111;
        }
    };
    View_Contact0.prototype.destroyInternal = function () {
        this._NgModel_10_7.ngOnDestroy();
        this._NgModel_17_7.ngOnDestroy();
        this._NgModel_23_7.ngOnDestroy();
        this._NgForm_5_3.ngOnDestroy();
    };
    View_Contact0.prototype.handleEvent_5 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._NgForm_5_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngSubmit')) {
            var pd_sub_0 = (this.context.onSubmit() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_Contact0.prototype.handleEvent_10 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_10_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.context.message.Sender.Name = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_Contact0.prototype.handleEvent_17 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_17_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.context.message.Sender.Email = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_Contact0.prototype.handleEvent_23 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_23_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.context.message.Content = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_Contact0.prototype.handleEvent_68 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = ((this.context.submitted = false) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_Contact0;
}(import1.AppView));
exports.View_Contact0 = View_Contact0;
//# sourceMappingURL=contact.ngfactory.js.map