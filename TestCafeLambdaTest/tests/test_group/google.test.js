import GooglePage from '../page_model/google.page';

const gpage = new GooglePage()

fixture `Getting Started with Google Navigation`
    .page `http://www.google.com`;

test('Search for Lambdatest', async t => {
    await t
    .typeText(gpage.searchbox, 'Lambda Test')
    .pressKey('enter')
    .expect(gpage.getTestResult.exists).ok({ timeout: 10000 })
    .expect(gpage.getTestResultURL).contains('www.lambdatest.com');
});