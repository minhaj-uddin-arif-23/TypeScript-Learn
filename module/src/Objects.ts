const UserName : {
 readonly fatherName :  string; //type ->  literal type
  firstName: string;
  middleName? : string // optional Type
  lastName: string;
  isMarried :boolean
} = {
  fatherName: "Ayub ali",
  firstName : "samia",
  middleName : "Aktar",
  lastName : "Jaman",
  isMarried : true
}
// UserName.fatherName = '' Cannot assign to 'fatherName' because it is a read-only property

UserName.firstName = "Mr.Samia Jaman"