const FirstName = "najla";
const FatherName = "mohammad";
const lastName = "aldossary";
const DateOfBirth = "26-5-1999";
const gender = "femal";

console.log(typeof FirstName);
console.log(typeof FatherName);
console.log(typeof lastName);
console.log(typeof DateOfBirth);
console.log(typeof gender);

const writeName = (FName, SName, LName) => {
  console.log(FName + " " + SName + " " + LName);
};
console.log(writeName(FirstName, FatherName, lastName));

for (i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

let sum = (num1, num2) => {
  let total = num1 + num2;
  if (total > 100) {
    console.log("the total is " + total + " It is larger than 100");
  }
};

let sub = (num1, num2) => {
  let result = num1 - num2;
  console.log("the result is " + result);
};

let multiply = (num1, num2) => {
  let result = num1 * num2;
  console.log("the result is " + result);
};

let divided = (num1, num2) => {
  let result = num1 / num2;
  console.log("the result is " + result);
};

let avrege = (num1, num2) => {
  let total = num1 + num2;
  let result = total / 2;
  console.log("the result is " + result);
};

let taxes = (price) => {
  let tax = 0.15;
  let theTaxPrice = price * tax;
  let total = theTaxPrice + price;
  console.log("the price after adding tax is  " + total);
};
console.log(taxes(100));

let grade = (marke) => {
  if (marke < 49) {
    console.log("F");
  } else if (marke <= 54) {
    console.log("D");
  } else if (marke <= 59) {
    console.log("D+");
  } else if (marke <= 74) {
    console.log("C");
  } else if (marke <= 79) {
    console.log("C+");
  } else if (marke <= 84) {
    console.log("B");
  } else if (marke <= 89) {
    console.log("B+");
  } else if (marke <= 94) {
    console.log("A");
  } else if (marke <= 100) {
    console.log("A+");
  }
};

const oddOrEven = (number) => {
  let type;
  if (number % 2 == 0) {
    type = "Even";
  } else {
    type = "Odd";
  }
  switch (type) {
    case "Even":
      console.log("then number " + " is Even");

      break;
    case "Odd":
      console.log("then number " + " is Odd");
      break;
  }
};

for (i = 1; i < 11; i++) {
  let result = i * i;
  console.log(result);
}

let ageinDay = (age) => {
  let result = age * 365;
  console.log(result);
};

for (i = 0; i < 8; i++) {
  //nested loop
  console.log(i);
}

console.log(grade(85));
console.log(oddOrEven(8));
console.log(ageinDay(2));
