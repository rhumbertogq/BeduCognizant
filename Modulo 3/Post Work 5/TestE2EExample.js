//Importar TestCafe
import {Selector} from 'testcafe';

fixture`Getting Started`
    //.page`http://devexpress.github.io/testcafe/example`;
    .page`https://www.google.com.mx/`;

test('My first test', async t => {
    await t
        //.typeText('#developer-name', 'John Smith')
        .typeText('.gLFyf', 'pruebaBedu')
        .wait(500)
        .click('div[jsmodel] >div > div > center > input[name="btnK"]')
        //.click('#submit-button')

        // Usa las verificaciones pra checar si el valor actual corresponde con el vlaor esperado
       // .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
       .expect(Selector('.iUh30').innerText).eql('http://himfg.com.mx');
});