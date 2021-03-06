System.register(['@angular/core', "../../sliderpanel/Sliderpanel", "../../../services/CommBroker", "./NotesBase"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
    var core_1, Sliderpanel_1, CommBroker_1, NotesBase_1;
    var Notes4;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Sliderpanel_1_1) {
                Sliderpanel_1 = Sliderpanel_1_1;
            },
            function (CommBroker_1_1) {
                CommBroker_1 = CommBroker_1_1;
            },
            function (NotesBase_1_1) {
                NotesBase_1 = NotesBase_1_1;
            }],
        execute: function() {
            Notes4 = (function (_super) {
                __extends(Notes4, _super);
                function Notes4(sliderPanel, commBroker) {
                    _super.call(this, sliderPanel, commBroker);
                    this.sliderPanel = sliderPanel;
                    this.commBroker = commBroker;
                    this.show = true;
                    this.someValue = '999';
                    this.someValue = 'FooBar';
                    var self = this;
                    this.slideLeft = 'notes5';
                    this.slideRight = 'notes3';
                }
                Notes4.prototype.getContent = function (user) {
                    return user;
                };
                Notes4.prototype.itemDetailsClicked = function (event) {
                    alert(event);
                };
                Notes4 = __decorate([
                    core_1.Component({
                        selector: 'Notes4',
                        template: " <button type=\"button\" (click)=\"onPrev($event)\" class=\"btn btn-default btn-sm\">\n                    <span class=\"fa fa-arrow-left \"></span>\n                </button>\n                <button type=\"button\" (click)=\"onNext($event)\" class=\"btn btn-default btn-sm\">\n                    <span class=\"fa fa-arrow-right\"></span>\n                </button>\n                <hr/>\n                <small>I am notes4 component</small>\n                <hr/>\n                <button (click)=\"show = !show\">Toggle one item</button>\n                <notes-details>\n                  <notes-details-item [content]=\"getContent\" [myValue]=\"'One'\"\n                        (select)=\"itemDetailsClicked($event)\"> noted details item 1 </notes-details-item>\n                  <notes-details-item [content]=\"getContent\" [myValue]=\"'Two'\"\n                        (select)=\"itemDetailsClicked($event)\" *ngIf=\"show\"> noted details item 2 </notes-details-item>\n                </notes-details>\n                <ng-content></ng-content>"
                    }), 
                    __metadata('design:paramtypes', [Sliderpanel_1.Sliderpanel, CommBroker_1.CommBroker])
                ], Notes4);
                return Notes4;
            }(NotesBase_1.NotesBase));
            exports_1("Notes4", Notes4);
        }
    }
});
