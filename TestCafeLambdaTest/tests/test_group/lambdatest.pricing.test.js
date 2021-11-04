import LambdaPage from '../page_model/lambdatest.page';

const lpage = new LambdaPage()

fixture `Lambda Test Pricing Options`
    .page `https://www.lambdatest.com/pricing`;

test('Search for Lambdatest', async t => {
    await t
    .expect(lpage.enterprisePlan.visible).ok()
    .expect(lpage.popularpricePlan.visible).ok()
    .expect(lpage.livePlan.visible).ok()
    .expect(lpage.webAutomationPlan.visible).ok()
});