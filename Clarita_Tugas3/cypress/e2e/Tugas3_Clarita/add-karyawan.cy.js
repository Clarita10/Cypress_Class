describe('Menambahkan Data Karyawan', async function () {

    it('Add Employee Data', async function () {
        await cy.visit(' https://opensource-demo.orangehrmlive.com/web/index.php/');
        await cy.get(`[name='username']`).type('Admin');
        await cy.get(`[name='password']`).type('admin123')
        await cy.get(`[type='Submit']`).click();
        cy.url().should('include', '/dashboard');
        cy.get('h6.oxd-text--h6').should('contain', 'Dashboard');

        // add employee data -> PIM Menu
        await cy.xpath(`(//li[contains(@class, 'oxd-main-menu-item-wrapper')])[2]`).click();
        await cy.xpath(`(//div[contains(@class, 'orangehrm-header-container')])/button`).click();
        //name employee
        await cy.get(`[name='firstName']`).type('Clarita');
        await cy.get(`[name='middleName']`).type('Coba');
        await cy.get(`[name='lastName']`).type('Test');
        // employee id
        // await cy.xpath(`//div[@data-v-c93bdbf3 and contains(., 'Employee Id')]//input`).clear();
        // await cy.xpath(`//div[@data-v-c93bdbf3 and contains(., 'Employee Id')]//input`).type('12345');
        //toggle on
        await cy.get('input[type="checkbox"]').check({ force: true });
        //username
        await cy.xpath(`(//input[contains(@class,'oxd-input--active')])[6]`).type('Test12');
        // await cy.xpath(`//input[@type="radio"]`).eq(1).check().should('be.checked');
        //password
        await cy.xpath(`(//input[contains(@type,'password')])[1]`).type('Testing123');
        //confirm password
        await cy.xpath(`(//input[contains(@type,'password')])[2]`).type('Testing123');
        //submit
        await cy.get(`button[type='submit']`).click();
        // cy.contains('Data Berhasil Ditambahkan').should('be.visible');

    
        //add account employee -> Admin Menu
        await cy.xpath(`(//li[contains(@class, 'oxd-main-menu-item-wrapper')])[1]`).click();
        await cy.xpath(`(//div[contains(@class, 'orangehrm-header-container')])/button`).click();
        //admin or ESS
        await cy.xpath(`(//div[contains(@class,'oxd-select-text--after')])[1]/i`).click();
        await cy.xpath(`//div[@class='oxd-select-option' and contains(., 'ESS')]`).click();
        //Employee name
        await cy.xpath(`//div[@data-v-c93bdbf3 and contains(., 'Employee Name')]//input`).type('Clarita Coba Test');
        await cy.get('div.oxd-autocomplete-dropdown').should('be.visible');
        await cy.contains('div.oxd-autocomplete-dropdown div', 'Clarita Coba Test').click();
        //status account
        await cy.xpath(`(//div[contains(@class,'oxd-select-text--after')])[2]/i`).click();
        await cy.xpath(`//div[@class='oxd-select-option' and contains(., 'Enabled')]`).click();
        //username
        await cy.xpath(`((//div[@data-v-957b4417])/input)[1]`).type('Test12');
        //password
        await cy.xpath(`(//div[@data-v-957b4417])[15]/input`).type('Testing123');
        //confirm password
        await cy.xpath(`//div[@data-v-c93bdbf3 and contains(., 'Confirm Password')]//input`).type('Testing123');
        //submit
        await cy.get(`button[type='submit']`).click();
        cy.get('.oxd-toast-content').should('contain.text', 'Successfully Saved').and('be.visible');

    })


})
        
       

        
       

    
