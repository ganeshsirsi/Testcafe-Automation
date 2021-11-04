import { Selector, t } from 'testcafe';

export default class LambdaPage {
    constructor() {
}
    get lambdatestLogo() {return Selector('img[alt="Logo"]');}
    get enterprisePlan() {return Selector('.enterprise_pricing_plan');}
    get livePlan() {return Selector('.live_pricing_plan');}
    get popularpricePlan() {return Selector('.mostpopularpricecol');}
    get webAutomationPlan() {return Selector('.webautomation_pricing_plan');}

    get signInUserName() {return Selector('#email');}
    get signInPassword() {return Selector('#password');}
    get submit() {return Selector('#login-button');}
    get error() { return Selector('p[class="error-mass"]');}
    
}