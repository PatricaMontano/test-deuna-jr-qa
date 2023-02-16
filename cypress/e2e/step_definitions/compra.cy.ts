import { Given,Then, When } from '@badeball/cypress-cucumber-preprocessor';

Given('un cliente de KFC con credito disponible', () => {
    // Para este caso en la forma en que sun cliente accede al checkout
    // el contexto inicial podria obiarse
    // El contexto inicila sera un usuario invitado (Guest)
});

When('ingrese a la plataforma {string}', () => {
    cy.visit('https://www.kfc.co/');
});

When('seleccione el producto deseado', () => {

    cy.on('uncaught:exception', (err, runnable) => {
        return false
    })

    cy.get('.ml-md-5 > li:nth-child(1) > a').click();    
    cy.wait(5000).url().should('contains', 'https://www.kfc.co/menu');
    cy.get('.nav-item:nth-child(6) .rounded-circle').click({force:true});

    cy.wait(7000).get('#product_28 .product-component-image').click({force:true});

    cy.wait(7000).get('.modal-product-preview .modifier-container .form-check:last-of-type input').click();


    cy.get('.complement-group-select:nth-child(2) > .group-divider > .d-flex:nth-child(2) .border-0:nth-child(3)').click();
    cy.get('#options_additional_information').click();
    cy.get('#options_additional_information').type('Prueba hecha por Johanna Montaño');
    cy.get('.button__text').click();
    cy.get('#add-to-cart-form').click({force:true});
    cy.wait(4000)

});

Then('realizara el pago de manera exitosa', () => {
    cy.get("#link-to-cart .d-xl-none").click({force:true});
    cy.wait(4000);
    cy.url().should('contains', 'https://www.kfc.co/cart');
    cy.get('.d-flex > #button-checkout-duna').click({force:true});

    cy.wait(40000);
    cy.iframe('.zoid-visible')
    .findByLabelText('Correo Electrónico*')
    .should('be.visible')
    .type("prueba@deuna.com");

    cy.iframe('.zoid-visible')
    .findByText('Quiero continuar como invitado')
    .should('be.visible')
    .click();

    cy.iframe('.zoid-visible').findByLabelText('Nombre*').should('exist').type('Johanna');
    cy.iframe('.zoid-visible').findByLabelText('Apellido*').should('exist').type('Montaño');
    cy.iframe('.zoid-visible').findByLabelText('Teléfono celular*').should('exist').clear().type('3164646546');
    cy.iframe('.zoid-visible').findByLabelText('Cédula / Doc. de Identidad*').should('exist').clear().type('1105381018');
    //cy.iframe('.zoid-visible').findByLabelText('Dirección *').should('exist').click()
    //cy.iframe('.zoid-visible').findByLabelText('Dirección *').should('exist').type('Bogotà D.C., Carrera 7, Bogotá, Bogota, Colombia{enter}');
    //cy.iframe('.zoid-visible').findByText('Confirmar').should('be.visible').clear().click().wait(3000);
    cy.iframe('.zoid-visible').findByText('Continuar a Pago').should('be.visible').click().wait(1000);
    
    
});

