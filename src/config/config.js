/**
 * Created by RajuK on 7/25/2017.
 */
exports.config ={
    //seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {
        browserName: 'chrome'
    },
    chromeOnly: true,
    specs:['../specs/login_spec.js'],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 2500000
    }

};
