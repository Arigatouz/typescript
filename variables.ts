// supported types number, boolean, null ,undefined

let myName: string = "Ali Gamal",
  age: number = 34,
  isMarried: boolean = true,
  hasCar: null = null,
  hasChildren: undefined = undefined,
  collection: any; //this can be any type of the above

// union Types
// if we connecting api call and we don't know if it will return data or undefined
// we use the pipe | to do a union type
let response: object | undefined = { name: "Ali", age: 35 };
let response2: object | undefined = undefined;

//array
let arrayNumber: number[] = []; // array of numbers
let arrayString: string[] = []; // array of string
let myArray: (string | number)[] = []; // multi-type array
let items = ["ali", 35]; // it will automatically detect the multi-type
myArray.push("ALi");
myArray.push(45);
// myArray.push(true); /// this will throw and error coz the type inside is boolean

//object
const account: {
  name: string;
  balance: number;
  isMarried?: boolean;
  // if i  add ? after the type specification it wil not throw an error
  // maybe i wanna use property later
} = {
  name: "Ali",
  balance: 111,
};

// defining empty array of objects

let emptyArrayOfObject2: object[] = [];
// when using the up coming syntax it will now throw an error when
// you try to push (passing wrong type)
let emptyArrayOfObject: {}[] = [];

emptyArrayOfObject2?.push(account);
emptyArrayOfObject.push("ali");
console.log(emptyArrayOfObject2); //?
console.log(emptyArrayOfObject); //?

// Interface
// an interface is typescript feature for creating types for objects
// it allows us to create custom types on the object
interface IJob {
  name: string;
  job: string;
  age: number;
  isMarried?: boolean;
  balance?: () => void;
}

const communicationJobs: IJob[] = [];
communicationJobs.push(
  { name: "Ali", job: "communication Officer", age: 35, isMarried: true },
  { name: "malek", job: "fullstack developer", age: 25 }
); //?
console.log(communicationJobs); //?

// classes

class JobSearch implements IJob {
  constructor(public name: string, public job: string, public age: number) {}

  calculateSalaries(): number {
    const bonusNumber: number = this.bonus([15, 4, 5]).reduce(
      (crr, acc) => crr
    );
    return bonusNumber * 6;
  }
  private bonus(theBonus: number[]): number[] {
    return theBonus;
  }
}

const ALI = new JobSearch("ALi", "doodle", 23);

ALI.calculateSalaries(); //?

// Generics
// class Queue {
//   private data: (string | number)[] = [];

//   add(item: string | number) {
//     this.data.push(item);
//   }
//   remove() {
//     this.data.shift();
//   }
// }

class Queue<TYPE> {
  private data: TYPE[] = [];

  add(item: TYPE) {
    this.data.push(item);
  }
  remove() {
    this.data.shift();
  }
}

const myQueue = new Queue();
myQueue.add("Hello");
myQueue.add("World");
myQueue; //?
myQueue.remove();
myQueue; //?

const numberQueue = new Queue();
numberQueue.add(2);
numberQueue.add(15);
numberQueue; //?
myQueue.remove();
numberQueue; //?
