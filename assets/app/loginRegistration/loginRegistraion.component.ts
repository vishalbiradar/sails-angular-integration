import {Component} from '@angular/core';
@Component({
    selector: 'app-login-registraion',
    templateUrl: './app/loginRegistration/loginRegistration.component.html',
    styleUrls: ['./app/loginRegistration/loginRegistration.component.css']
})
export class LoginRegistraionComponent {

    animateClass = 'user_options-forms';

    showFormPage(pageType: string) {
        console.log('pageType', pageType);
        if (pageType === 'signup') {
            this.animateClass = 'user_options-forms bounceLeft';
        } else {
            this.animateClass = 'user_options-forms bounceRight';
        }
    }

}