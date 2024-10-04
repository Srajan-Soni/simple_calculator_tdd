export function add(numbers) {
    if (!numbers) return 0;
  
    let delimiter = /[\n,]/; 
    if (numbers.startsWith("//")) {
      const parts = numbers.split('\n');
      delimiter = new RegExp(`[${parts[0].slice(2)}]`);
      numbers = parts[1];
    }
  
    const arr = numbers.split(delimiter).map(Number);
    const negativeNumbers = arr.filter(num => num < 0);
  
    if (negativeNumbers.length > 0) {
      throw new Error(`negative numbers not allowed: ${negativeNumbers.join(',')}`);
    }
  
    return arr.reduce((acc, num) => acc + num, 0);
  }
  