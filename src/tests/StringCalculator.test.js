import { add } from "../functionality/add";


test('returns 0 for an empty string', () => {
    expect(add("")).toBe(0);
  });