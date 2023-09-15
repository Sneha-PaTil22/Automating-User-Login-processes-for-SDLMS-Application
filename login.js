import {Selector, t} from "testcafe";

fixture('login form')
    .page("https://dev.deepthought.education/login")


test ('login user with invalid credential',async t => {
    await t
        .typeText(Selector('#username'), 'snehapatil2205')
        .typeText(Selector('#password'), 'sneha@2209')
        .click ('#login')
        .takeScreenshot("loginfail.png")
    });

test ('login user with valid credential',async t => {

    await t
        .typeText(Selector('#username'), 'snehapatil2205')
        .typeText(Selector('#password'), 'Sneha@2205')
        .click ('#login')
        .takeScreenshot("loginsuccess.png")
        
});
