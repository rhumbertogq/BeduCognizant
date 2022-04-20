//Importar TestCafe
import {Selector} from 'testcafe';

fixture`Getting Started`
    //.page`http://devexpress.github.io/testcafe/example`;
    .page`http://localhost:8080/`;

test('My first test', async t => {
    await t
        //.typeText('#developer-name', 'John Smith')
        .typeText('#number-to-calculate-fibonacci', '8')
        .wait(500)
        .click('#calculate-button')
        //.click('#submit-button')

        // Usa las verificaciones pra checar si el valor actual corresponde con el vlaor esperado
       // .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
       .expect(Selector('#result').innerText).eql('177');
});