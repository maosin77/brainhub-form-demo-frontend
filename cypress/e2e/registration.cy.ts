describe('user registration flow', () => {
    it('should register new user', () => {
        cy.visit('/');

        cy.get('[data-cy="addUserForm-input-firstName"]').type('Janek');
        cy.get('[data-cy="addUserForm-input-lastName"]').type('Kowalski');
        cy.get('[data-cy="addUserForm-input-email"]').type(
            'janekkowalski@gmail.com',
        );
        cy.get('[data-cy="addUserForm-button-submit"]').click();
        cy.contains('User registered successfully');
    });

    it('should throw error on invalid email', () => {
        cy.visit('/');

        cy.get('[data-cy="addUserForm-input-firstName"]').type('Janek');
        cy.get('[data-cy="addUserForm-input-lastName"]').type('Kowalski');
        cy.get('[data-cy="addUserForm-input-email"]').type('incorrect');
        cy.get('[data-cy="addUserForm-button-submit"]').click();
        cy.contains('The Email is invalid.');
    });
});
