import LambdaPage from '../page_model/lambdatest.page';

const lpage = new LambdaPage()

fixture `Lambda Test Home Page`
    .page `https://www.lambdatest.com/`;

test('Search for Lambdatest', async t => {
    await t
    .expect(lpage.lambdatestLogo.visible).ok()
});