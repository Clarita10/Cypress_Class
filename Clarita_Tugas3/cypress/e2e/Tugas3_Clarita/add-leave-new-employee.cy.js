describe ('Add Leave for New Employee', async function () {

    it('Add Leave', async function () {
        await cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        await cy.get(`[name='username']`).type('Admin');
        await cy.get(`[name='password']`).type('admin123')
        await cy.get(`[type='Submit']`).click();
        cy.url().should('include', '/dashboard');
        cy.get('h6.oxd-text--h6').should('contain', 'Dashboard');

        //open add entitlement
        await cy.xpath(`(//li[contains(@class, 'oxd-main-menu-item-wrapper')])[3]`).click();
        await cy.xpath(`(//nav[@data-v-5327b38a]//li)[3]`).click();
        await cy.get('ul.oxd-dropdown-menu').should('be.visible');
        await cy.xpath(`(//ul[@data-v-429cfcf3])/li[1]`).click();

        //add leave > entitlement)
        await cy.xpath('//input[@placeholder="Type for hints..."]').type('Clarita');
        await cy.xpath('//div[@role="listbox"]//span[contains(text(), "Clarita Coba Test")]').should('be.visible').click();
        cy.wait(500);
        // await cy.get('input[placeholder="Type for hints..."]').first().type('Clarita');
        // await cy.get('div.oxd-autocomplete-dropdown').should('be.visible');
        // await cy.contains('div.oxd-autocomplete-dropdown','Clarita Being Test').click();

        //leave type
        await cy.xpath(`(//div[contains(@class,'oxd-select-text--after')])[1]/i`).click();
        await cy.xpath(`//div[@class='oxd-select-option' and contains(., 'CAN - Matternity')]`).click();

        //tanggal leave 
        // await cy.xpath(`(//i[@data-v-bddebfba])[11]`).click();
        // await cy.xpath(`//div[@class='oxd-select-option' and contains(.,'2025-01-01 - 2025-31-12')]`).click();

        // 4. Isi Entitlement
        await cy.xpath(`//div[@data-v-957b4417 and contains(., 'Entitlement')]//input`).type('30');

        // 5. Submit form
        await cy.get(`button[type='submit']`).click();

        //confirm
        await cy.xpath(`(//button[@data-v-10d463b7])[4]`).click();


        // 6. Assertion sukses (jika ada pesan sukses)
        cy.get('.oxd-toast').should('contain.text', 'Successfully Saved');

        
    })
    
})