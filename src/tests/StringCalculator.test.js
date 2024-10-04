import { add } from "../functionality/add";

// 1. Unit test : checking empty string 

test('returns 0 for an empty string', () => {
    expect(add("")).toBe(0);
  });

// 2. Checking number 


test('returns number when a single number is passed', () => {
    expect(add("1")).toBe(1);
  });

// 3. Checking for sum of two nums

test('returns sum of two numbers', () => {
    expect(add("1,2")).toBe(3);
  });


// 4. Checking for sum of numbers with newline deliminator

test('returns sum of two numbers', () => {
    expect(add("1\n2,3")).toBe(6);
  });
