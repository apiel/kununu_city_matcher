import { Selector } from 'testcafe';

fixture `Cities matcher`.page `http://localhost:3000/`;

test('Search city', async t => {
    const input = Selector('input');
    await t
        .click(input)
        .typeText(input, 'ste')
        .wait(2000)
        .pressKey('enter')
        .pressKey('tab')
        .expect(Selector(input).value).eql('Steinfeld (Altmark)');
});