import { Selector} from 'testcafe';
export default class GooglePage {
    get searchbox() {return 'input[name="q"]';}
    constructor() {
    }
    get getTestResult(){
         return Selector('h3').withText("LambdaTest");
     }
     get getTestResultURL(){
        return Selector('h3').withText("LambdaTest").parent().getAttribute('href');
     }
}