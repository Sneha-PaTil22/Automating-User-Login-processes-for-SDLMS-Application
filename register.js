import {Selector, t} from "testcafe";

fixture('registration form')
    .page("https://dev.deepthought.education/register")

test ('register new user details',async t => {

    await t
        .typeText(Selector('#email'), 'snehapatil2000@gmail.com')
        .typeText(Selector('#username'), 'snehapatil2205')
        .typeText(Selector('#password'), 'Sneha@2205')
        .typeText(Selector('#password-confirm'), 'Sneha@2205')
        .click ('#register')
        
});