describe ('E2E Pengajuan Leave', async function () {

    //login as karyawan baru
    it('Request Leave', async function () {
        await cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        await cy.get(`[name='username']`).type('Test12');
        await cy.get(`[name='password']`).type('Testing123')
        await cy.get(`[type='Submit']`).click();
        cy.url().should('include', '/dashboard');
        cy.get('h6.oxd-text--h6').should('contain', 'Dashboard');

        //request leave
        await cy.xpath(`(//li[contains(@class, 'oxd-main-menu-item-wrapper')])[1]`).click();
        await cy.xpath(`(//nav[@data-v-5327b38a]//li)[1]`).click();

        //select type leave
        await cy.xpath(`(//div[contains(@class,'oxd-select-text--after')])[1]/i`).click();
        await cy.xpath(`//div[@class='oxd-select-option' and contains(., 'CAN - Matternity')]`).click();

        //select from date
        // await cy.get('input[placeholder="yyyy-dd-mm"]').first().click();
        // await cy.get('.oxd-calendar-date').contains('20').click();

    
        await cy.xpath(`//div[@data-v-957b4417 and contains(., 'From Date')]//input`).click();
        // await cy.xpath(`//ul[@class='oxd-calendar-selector']//li[@class='oxd-calendar-selector-month'`).click()
        // await cy.xpath(`//*[@class='oxd-calendar-dropdown']/*[contains(.,'June')]`).click()
        await cy.xpath(`//div[@class='oxd-calendar-date' and contains(.,'21')]`).click();
        cy.wait(500);
        

        //select to date
        // await cy.get('input[placeholder="yyyy-dd-mm"]').eq(1).click();
        // await cy.get('.oxd-calendar-date').contains('30').click();

        await cy.xpath(`//div[@data-v-957b4417 and contains(., 'To Date')]//input`).click();
        // await cy.xpath(`//ul[@class='oxd-calendar-selector']//li[@class='oxd-calendar-selector-month']`).click()
        // await cy.xpath(`//*[@class='oxd-calendar-dropdown']/*[contains(.,'June')]`).click()
        await cy.xpath(`//div[@class='oxd-calendar-date' and contains(.,'24')]`).click();

        //partial days
        // cy.xpath(`(//div[@data-v-67d2aedf])[4]`).click();

        //comments
        await cy.xpath(`//div[@data-v-957b4417 and contains(., 'Comments')]//textarea`).type('Maternity Leave for One Month');

        //submit
        await cy.get(`button[type='submit']`).click();
        cy.wait(2000);

        //logout
        await cy.xpath(`//span[@data-v-bdd6d943]`).click();
        await cy.xpath(`//ul[@data-v-429cfcf3]//li[4]`).click();
    })

    it('Approve by admin', async function () {
        await cy.visit(' https://opensource-demo.orangehrmlive.com/web/index.php/');
        await cy.get(`[name='username']`).type('Admin');
        await cy.get(`[name='password']`).type('admin123')
        await cy.get(`[type='Submit']`).click();
        cy.url().should('include', '/dashboard');
        cy.get('h6.oxd-text--h6').should('contain', 'Dashboard');

        //approve cuti
        await cy.xpath(`(//li[contains(@class, 'oxd-main-menu-item-wrapper')])[3]`).click();
        await cy.contains('Leave List').click();
        await cy.get('.oxd-autocomplete-text-input input').type('Clarita');
        await cy.get('div.oxd-autocomplete-dropdown').should('be.visible');
        await cy.contains('div.oxd-autocomplete-dropdown div','Clarita Coba Test').click();
        await cy.get(`//button[@data-v-10d463b7 and contains(.,'Search')]`);

        await cy.xpath(`//button[@data-v-10d463b7 and contains(.,'Approve')]`).click();
        
        
    })

    it('See Leave Approved', async function () {
        await cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        await cy.get(`[name='username']`).type('Test12');
        await cy.get(`[name='password']`).type('Testing123')
        await cy.get(`[type='Submit']`).click();
        cy.url().should('include', '/dashboard');
        cy.get('h6.oxd-text--h6').should('contain', 'Dashboard');

        await cy.xpath('//span[text()="Leave"]').click();
        await cy.xpath('//a[contains(.,"My Leave")]').click();
        
    })

        
})
    