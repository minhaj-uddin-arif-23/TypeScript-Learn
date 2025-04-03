{
  const multiply = (n1: number, n2: number = 12): number => {
    return n1 + n2;
  };
  multiply(5);
  
  // object -> function -> method 
  
  const Sum ={
    name: "Minhaj",
    count : 0,
    increaseCount(counts : number):string{
      return `Total Count is ${this.count + counts}`
    }
  }
  
  
  
  const array: number[] = [1, 2, 3, 4, 5];
  
  const NewArray: number[] = array.map(
    (element: number): number => element * element
  );
}
