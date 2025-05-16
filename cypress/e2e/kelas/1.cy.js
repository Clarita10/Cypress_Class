describe('UI automation cypress', async function(){
    it('login', async function () {
        await cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await cy.get(`[name='username']`).type('Admin');
        // cy.xpath("//input[@name = 'password']");
        let password = cy.get("[name='password']");
        await password.type('password')
        await password.clear()
        await password.type('admin123');
        cy.get(`[type='Submit']`).click();
       
        // Notes
        // cy.xpath(`//button[@type='Submit']`).click();

        // xpath lain
        // button[contains(@class,'orangehrm-quick-launch-icon')and contains(@title, 'Assign Leave')]

        // xpath siblings setelahnya
        // (//div[contains(@class, 'orangehrm-quick-launch-card')])[1]/following-sibling::div -> mencari sibling setelahnya 
        // semisal kita buat arraynya [3] maka siblings yang muncul start dari 3 kebawah

        // xpath sibling sebelumnya
        // (//div[contains(@class, 'orangehrm-quick-launch-card')])[3]/preceding-sibling::div

        // xpath parents
        // (//div[contains(@class, 'orangehrm-quick-launch-card')])[3]/ancestor::div ->dari root sampai parent itu sendiri
        // (//div[contains(@class, 'orangehrm-quick-launch-card')])[3]/parent::div ->parent langsung

        // xpath child
        // (//div[contains(@class, 'orangehrm-quick-launch-card')])[3]/div -> didalam span itu
        // (//div[contains(@class, 'orangehrm-quick-launch-card')])[3]//* -> mencari semua anaknya

        // xpath contains
        // //p[contains(.,'Quick Launch')] -> kita gunakan titik agar bisa mendapatkan xpath lebih cepat 
        // //div[div[p[contains(.,'Candidate')]]] -> contoh untuk containt yang panjang

        // start with
        // //div[starts-with(@class,'orangehrm-attendance')]

    })
    
})