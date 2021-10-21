const newItem1 = 'Armar ejemplos para Nerdearla';
const newItem2 = 'Preparar los slides';

describe('example to-do app', () => {
  before(() => {
    cy.clearTasks();
  });

  beforeEach(() => {
    cy.visit('/');
  });

  it('can add new todo items', () => {
    cy.get('.new-todo').type(`${newItem1}{enter}`);
    cy.get('.todo-list li').should('have.length', 1).last().should('have.text', newItem1);

    cy.get('.new-todo').type(`${newItem2}{enter}`);
    cy.get('.todo-list li').should('have.length', 2).last().should('have.text', newItem2);
  });

  it('can check off an item as completed', () => {
    cy.contains(newItem1).parent().find('.toggle').click();
    cy.contains(newItem1).parent().find('input[type=checkbox]').should('be.checked');
  });

  context('with a checked task', () => {
    beforeEach(() => {
      cy.contains(newItem1).parent().find('input[type=checkbox]').check();
    });

    it('can delete tasks', () => {
      cy.contains(newItem1).parent().trigger('mouseover');
      cy.contains(newItem1).parent().find('button').click({ force: true });
      cy.get('.todo-list li').should('have.length', 1).should('not.have.text', newItem1);
    });
  });
});
