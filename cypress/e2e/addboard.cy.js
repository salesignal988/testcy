// <reference types="Cypress" //
import { boardPage} from '../page_objects/addBoardPage';
describe('create board test', () => {
  beforeEach('log in', () => {
    cy.loginViaBackend()
    cy.visit('/')
  })
  it('add board', () => {
    let boardName = 'test org'
    cy.intercept({
      method: 'GET',
      url: Cypress.env('API_BASE_URL') + '/boards'
    }).as('addBoard')
    cy.url().should('include', '/boards')
    boardPage.boardCard(boardName)
    cy.wait('@boardCard').then(interception => {
      expect(interception.response.statusCode).eq(201);
      expect(interception.response.statusMessage).eq('Created')
    })
    cy.visit('/')
    cy.url().should('include', '/boards')
    boardPage.boardCard
      .eq(-2)
      .find('h2')
      .should('have.text', boardName)
  })
  it.only('delete Board', () => {
    cy.visit('/')
    cy.url().should('include', '/boards')
    boardPage.closebtn.click()
    boardPage.okBtn.click();
    boardPage.sidebarBtn.last().click();
    boardPage.dtlBtn.click()
    boardPage.yesBtn.click()
    cy.contains('Board deleted.')
  })
})