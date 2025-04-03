// * null able type
const hello = (value: string | null) => {
  if (value) {
    console.log(`Hi ${value}`);
  } else {
    console.log("No Name");
  }
};

// hello(null)
const throwError = (msg: string): never => {
  throw new Error(msg);
};

throwError("Gal te se mistake");
