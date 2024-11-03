# Credentials

Usernames are in the file database-seed.json eg

- Username : Heath93
- Password : s3cret

# **App/Cypress Commands:**

yarn dev
yarn cypress:open

http://localhost:3000/signin

# Naming Conventions

**1. Functions**

- _Convention_: Use **camelCase**.
  Example: `login`, `verifyOnBankAccountPage`, `enterBankName`.

**2. Classes**

- _Convention_: Use **PascalCase**.
  Example: `SignInPage`, `BankAccountPage`, `HomePageHeader`.
  Reason: PascalCase distinguishes classes from variables and functions.

**3. Imports**

- _Convention_: Use **camelCase** for variables and **PascalCase** for classes or React components.
  Example:

```
import SignInPage from "../page-objects/pages signinPage";
```

Note: For imports that represent modules or non-component functions, camelCase is often used.

**4. Exports**

- _Convention_: Use **default exports** for primary components or classes. Named exports are often used for utility functions or when multiple exports are needed from one file.
  Example:

```
export function login() { ... }
export default BankAccountPage;
```

**5. Tests**

- _Convention_: Use **describe** and **it blocks** with concise and descriptive titles.
  Style: Use **camelCase** for variable names within tests, following the general conventions for Cypress commands.
  Example:

```
describe("Access the application's homepage", () => {
  it("should load the application's homepage", () => {
    ...
  });
});
```

Tip: Descriptive test names enhance readability and make test reports easier to understand.

**6. Constants (Selectors and Environment Variables)**

- _Convention_: Use **UPPER_CASE** for environment variables, while **camelCase** is generally used for selectors if they are grouped in objects.
  Example:

```
const bankAccPageSelectors = {
  bankAccounts: '[data-test="bankaccount-list"]',
  createBankAccount: '[data-test="bankaccount-new"]',
  ...
};
```

Reason: camelCase for selectors aligns with Cypress conventions and makes accessing these properties more readable.
