"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var LoginRegistraionComponent = (function () {
    function LoginRegistraionComponent() {
        this.animateClass = 'user_options-forms';
    }
    LoginRegistraionComponent.prototype.showFormPage = function (pageType) {
        console.log('pageType', pageType);
        if (pageType === 'signup') {
            this.animateClass = 'user_options-forms bounceLeft';
        }
        else {
            this.animateClass = 'user_options-forms bounceRight';
        }
    };
    return LoginRegistraionComponent;
}());
LoginRegistraionComponent = __decorate([
    core_1.Component({
        selector: 'app-login-registraion',
        templateUrl: './app/loginRegistration/loginRegistration.component.html',
        styleUrls: ['./app/loginRegistration/loginRegistration.component.css']
    })
], LoginRegistraionComponent);
exports.LoginRegistraionComponent = LoginRegistraionComponent;
//# sourceMappingURL=loginRegistraion.component.js.map