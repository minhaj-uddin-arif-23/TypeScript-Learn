{
  // ? Spread Operator | add to all value together
  const arr1: string[] = ["one", "two", "three", "four"];
  const arr2: string[] = ["Jahed", "Almgir", "Noyon", "Akash"];

  arr1.push(...arr2);

  const user1 = {
    name1: "Karim",
    name2: "Shafiq",
    name3: "Khader",
  };
  const user2 = {
    name4: "Billal",
    name5: "Shayek",
    name6: "Rahim",
  };

  const ans = {
    ...user1,
    ...user2,
  };
console.log(ans)
  // ? Rest Operator | multiple value can be assien a single array

  const meetOurTeam = (...friends: string[]) => {
   friends.forEach((friend:String) => console.log(`Hi ${friend}`))
  };

  meetOurTeam("inaya", "Hasib", "Hasnat", "Jamal", "kamal",'sahab');

}
