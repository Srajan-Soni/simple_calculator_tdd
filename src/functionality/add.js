
export function add(numbers) {
    if (!numbers) return 0;

    
    const nums = numbers.split(/[\n,]/).map(Number)
    const sum = nums.reduce((acc,n)=> acc+n,0);
    console.log(sum);
    
    return sum;
  }
  