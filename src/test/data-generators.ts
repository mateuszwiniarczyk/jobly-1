import { faker } from '@faker-js/faker';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Overrides = Record<string, any>;

export const userGenerator = (overrides?: Overrides) => ({
  fullName: faker.name.fullName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  phoneNumber: faker.phone.number('##########'),
  ...overrides,
});
