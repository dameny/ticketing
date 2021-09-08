import { fakeStripeResponse } from "../test/constants";

export const stripe = {
  charges: {
    create: jest.fn().mockResolvedValue(fakeStripeResponse),
  },
};
