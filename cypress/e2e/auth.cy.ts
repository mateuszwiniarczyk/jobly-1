import { userGenerator } from '../../src/test/data-generators';

type AccountType = ReturnType<typeof userGenerator> & {
  confirmPassword: string;
};

function createAccount({
  email,
  fullName,
  phoneNumber,
  password,
  confirmPassword,
}: AccountType) {
  cy.visit('/signup');

  cy.findByText('Person').click();

  cy.findByPlaceholderText(/full name/i).type(fullName);
  cy.findAllByPlaceholderText(/email/i).type(email);
  cy.findByPlaceholderText(/phone number/i).type(phoneNumber);
  cy.findByPlaceholderText('Password').type(password);
  cy.findByPlaceholderText('Confirm password').type(confirmPassword);
  cy.findByText(/sign up/i)
    .click()
    .should('be.disabled');

  cy.findByText(`The user ${fullName} has been created`).should('exist');
}

describe('Authentication', () => {
  it('successfully creates account', () => {
    const { email, fullName, password, phoneNumber } = userGenerator();
    createAccount({
      email,
      fullName,
      phoneNumber,
      password,
      confirmPassword: password,
    });
  });

  it('successfully sign in after creating account', () => {
    const { email, fullName, password, phoneNumber } = userGenerator();
    createAccount({
      email,
      fullName,
      phoneNumber,
      password,
      confirmPassword: password,
    });

    cy.visit('/signin');

    cy.findAllByPlaceholderText(/email/i).type(email);
    cy.findByPlaceholderText(/password/i).type(password);

    cy.findByRole('button', { name: /sign in/i })
      .click()
      .should('be.disabled');

    cy.findByText(/authorized/i).should('exist');
  });
});
