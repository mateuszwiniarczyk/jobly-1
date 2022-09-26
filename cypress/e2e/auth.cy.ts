import { ROUTES } from '../../src/config';
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
  cy.visit(ROUTES.SIGN_UP);

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

function signIn({ email, password }: { email: string; password: string }) {
  cy.visit(ROUTES.SIGN_IN);

  cy.findAllByPlaceholderText(/email/i).type(email);
  cy.findByPlaceholderText(/password/i).type(password);

  cy.findByRole('button', { name: /sign in/i })
    .click()
    .should('be.disabled');
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

    signIn({ email, password });

    cy.findByText(/authorized/i).should('exist');
  });

  it('sign-in fails when you provide incorrect credentials', () => {
    const { email, fullName, password, phoneNumber } = userGenerator();
    createAccount({
      email,
      fullName,
      phoneNumber,
      password,
      confirmPassword: password,
    });

    const incorrectPassword = `${password}_incorrect`;
    signIn({ email, password: incorrectPassword });

    cy.findByText('Not authorized. Try again.').should('exist');
  });
});
