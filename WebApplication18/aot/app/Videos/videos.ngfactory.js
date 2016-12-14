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
var import0 = require('../../../app/Videos/videos');
var import1 = require('@angular/core/src/linker/view');
var import3 = require('@angular/core/src/linker/view_utils');
var import4 = require('@angular/core/src/metadata/view');
var import5 = require('@angular/core/src/linker/view_type');
var import6 = require('@angular/core/src/change_detection/change_detection');
var import7 = require('@angular/core/src/linker/component_factory');
var import8 = require('@angular/router/src/router');
var import9 = require('./videos.css.shim');
var Wrapper_Videos = (function () {
    function Wrapper_Videos(p0, p1) {
        this._changed = false;
        this.context = new import0.Videos(p0, p1);
    }
    Wrapper_Videos.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_Videos.prototype.ngOnDestroy = function () {
    };
    Wrapper_Videos.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_Videos.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_Videos.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_Videos.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_Videos;
}());
exports.Wrapper_Videos = Wrapper_Videos;
var renderType_Videos_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_Videos_Host0 = (function (_super) {
    __extends(View_Videos_Host0, _super);
    function View_Videos_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_Videos_Host0, renderType_Videos_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_Videos_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ng-component', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_Videos0(this.viewUtils, this, 0, this._el_0);
        this._Videos_0_3 = new Wrapper_Videos(this.injectorGet(import8.Router, this.parentIndex), this.injector(0));
        this.compView_0.create(this._Videos_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._Videos_0_3.context);
    };
    View_Videos_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.Videos) && (0 === requestNodeIndex))) {
            return this._Videos_0_3.context;
        }
        return notFoundResult;
    };
    View_Videos_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._Videos_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Videos_0_3.context.ngAfterViewInit();
            }
        }
    };
    View_Videos_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_Videos_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_Videos_Host0;
}(import1.AppView));
exports.VideosNgFactory = new import7.ComponentFactory('ng-component', View_Videos_Host0, import0.Videos);
var styles_Videos = [import9.styles];
var renderType_Videos = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.Emulated, styles_Videos, {});
var View_Videos0 = (function (_super) {
    __extends(View_Videos0, _super);
    function View_Videos0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_Videos0, renderType_Videos, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_Videos0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray4(4, 'class', 'youmax', 'id', 'youmax'), null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n\n\n\n\n', null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._text_0,
            this._el_1,
            this._text_2
        ]), null);
        return null;
    };
    return View_Videos0;
}(import1.AppView));
exports.View_Videos0 = View_Videos0;
//# sourceMappingURL=videos.ngfactory.js.map