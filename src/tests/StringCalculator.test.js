import { add } from "../functionality/add";

// Unit test : checking empty string 

test('returns 0 for an empty string', () => {
    expect(add("")).toBe(0);
  });

// Checking number 


test('returns number when a single number is passed', () => {
    expect(add("1")).toBe(1);
  });

// Checking for sum of two nums

test('returns sum of two numbers', () => {
    expect(add("1,2")).toBe(3);
  });

