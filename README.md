

1️⃣ What are some differences between interfaces and types in TypeScript?


1️⃣ Interface

মূলত object-এর structure বা blueprint define করার জন্য।

নতুন properties যোগ করতে extend করা যায়।

Classes-এ implement করা যায়।

উদাহরণ:

interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  salary: number;
}

const emp: Employee = {
  name: "Kausar",
  age: 20,
  salary: 30000
};

2️⃣ Type

Object, primitive, union, intersection সব define করতে পারে।

interface এর মত extend করা যায় না, তবে intersection (&) দিয়ে combine করা যায়।

কিছু ক্ষেত্রে, type union/alias করার জন্য বেশি সুবিধাজনক।

উদাহরণ:

type PersonType = {
  name: string;
  age: number;
};

type EmployeeType = PersonType & {
  salary: number;
};

const emp2: EmployeeType = {
  name: "Kausar",
  age: 20,
  salary: 30000
};



2️⃣ Use of keyof Keyword in TypeScript

keyof দিয়ে কোনো object type-এর সব key-এর union type পাওয়া যায়।

Type-safe property access করতে ব্যবহার হয়।

Example:

type Person = { name: string; age: number; email: string };
type PersonKeys = keyof Person; // "name" | "age" | "email"

function getValue(obj: Person, key: keyof Person) {
  return obj[key];
}

const person: Person = { name: "Kausar", age: 20, email: "@example.com" };
console.log(getValue(person, "email")); // Output: "@example.com"

3️⃣ Difference between any, unknown, and never

any

কোনো type-checking ছাড়াই যেকোনো value assign করা যায়।

Risky, type-safety হারায়।

let a: any = 10;
a = "hello"; // কোন সমস্যা নেই


unknown

any এর মতো flexible কিন্তু safer।

Value use করার আগে type-check করা আবশ্যক।

let b: unknown = 10;
// let x: number = b; // ❌ Error
if (typeof b === "number") {
  let x: number = b; // ✅ ঠিক আছে
}


never

কখনো value return করবে না এমন type।

Mostly error handling বা infinite loop এ ব্যবহার হয়।

function errorMsg(): never {
  throw new Error("Something went wrong!");
}

4️⃣ Use of Enums in TypeScript

Enums দিয়ে আমরা named constants declare করতে পারি।

Numeric এবং string উভয় ধরনের enum possible।

Numeric Enum Example

enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}
console.log(Direction.Up); // Output: 1
console.log(Direction.Right); // Output: 4


String Enum Example

enum Status {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
  Pending = "PENDING"
}
console.log(Status.Active); // Output: "ACTIVE"

5️⃣ Union and Intersection Types in TypeScript

Union (|): Variable একাধিক type নিতে পারে।

type ID = number | string;
let userId: ID;
userId = 123;   
userId = "ABC"; 


Intersection (&): দুই বা তার বেশি type combine করে নতুন type তৈরি হয়।

type Person = { name: string; age: number };
type Employee = { salary: number };

type EmployeePerson = Person & Employee;

const emp: EmployeePerson = { name: "Kausar", age: 20, salary: 30000 };