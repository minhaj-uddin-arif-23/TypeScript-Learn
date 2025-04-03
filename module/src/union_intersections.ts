{
  // * union
  type Devloper = "fronted" | "backend";
  type knowLanguage = "C++" | "C" | "python" | "C#";
  const newDeveloper: Devloper = "fronted";
  const language: knowLanguage = "C++";

  // * object
  type Country = {
    name: String;
    mohadesh: String;
    people: "male" | "female" | "3rd";
  };

  type FrontedDeveloper = {
    skills: string[];
    designation: "Fronted Developer";
  };
  type BackendDeveloper = {
    skills: string[];
    designation: "Backend Developer";
  };

  type FullStackDeveloper = FrontedDeveloper & BackendDeveloper


  // const fullstackDeveloper : FullStackDeveloper = {
  //   skills : ["HTML","CSS","JavaScript"],
  //   designation1 : "Fronted Developer",

  // }
}
