describe ('Days 2', async function () {
    it('Static dropdown', async function () {
        cy.on('uncaught:exception', (err, runnable)=>{
            return false; //mengabaikan error khusus karena website

        });

        // cy.visit('https://demo.automationtesting.in/Register.html');
        // cy.xpath(`//select[@id='Skills']`).select(3);
        // cy.xpath(`//select[@id='Skills']`).select('HTML');

        await cy.visit('https://demoqa.com/select-menu');
        await cy.xpath(`//select[@id='oldSelectMenu']`).select('2')
        
    })
    
})