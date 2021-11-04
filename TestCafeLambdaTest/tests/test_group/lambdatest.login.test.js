import LambdaPage from '../page_model/lambdatest.page';

const lpage = new LambdaPage()

fixture `Login Errors Lambda Test Page`
    .page `https://accounts.lambdatest.com/login`;

test('Search for Lambdatest', async t => {
    await t
    .typeText(lpage.signInUserName,'test@test.com')
    .typeText(lpage.signInPassword,'randomPassword1')
    .click(lpage.submit)
    .expect(lpage.error.textContent).contains('Please enter a correct username and password. Note that the password is case-sensitive')
});