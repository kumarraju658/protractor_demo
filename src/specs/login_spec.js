/**
 * Created by RajuK on 7/25/2017.
 */

var flag = false;

describe('Login functionality',function() {

    it('Open loging page',function() {
        browser.get("https://stage.upwork.com/");
        element(by.xpath("//a[text()='Login']")).click();
        });

    it('Enter user details and click',function() {
        element(by.id('login_username')).sendKeys("rajuk@qa.team.com");
        element(by.id('login_password')).sendKeys("strange!");
        element(by.xpath("(//button[@ng-click='submit($event)'])[1]")).click();

        browser.sleep(10000);
    });

    it('Verify User Name',function() {
        browser.ignoreSynchronization=true;
        browser.waitForAngular();
        var userName = element(by.xpath("//*[@class='organization-selector']")).getText();
        expect(userName).toMatch("Raju Singh");

},150000)});
