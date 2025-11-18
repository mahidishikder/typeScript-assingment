
// problems 2

type CheckValue = string | number | boolean;

const formatValue = (value: CheckValue): string | number | boolean => {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    
    else if (typeof value === 'number') {
        return value * 10;
    } 
    
    else {
        return !value;
    }
};



// problems 2


function getLength(inputValue: string | any[]): number {
    if (typeof inputValue === 'string') {
        return inputValue.length; 
    } 
    else if (Array.isArray(inputValue)) {
        return inputValue.length; 
    } 
    
    else {
        return 0;
    }
}



// problems 3

class Persony {
    name : string;
    age : number;

    constructor(name : string,age :number) {
     this.name  = name
     this.age = age
    }

    getDetails() {
        console.log(`Name : ${this.name} Age :${this.age}`)
    }
}





// problems  4

interface books {
    title : string;
    rating:number
}


const filterByRating = (value : books[]):books[]=> {
       const bookFilter = value.filter(book => book.rating >= 4)
       return bookFilter
}




// problems 5



type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
  };
  
  function filterActiveUsers(users: User[]): User[] {
    return users.filter((user) => user.isActive === true);
  }




// problems 6


interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

function printBookDetails(book: Book): string {
    const availability = book.isAvailable ? "Yes" : "No";
    return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`;
}




// problems 7

function getUniqueValues<T extends number | string>(a: T[], b: T[]): T[] {
    const result: T[] = [];
  
    function addValue(value: T) {
      for (let i = 0; i < result.length; i++) {
        if (result[i] === value) return; 
      }
      result.push(value); 
    }

    for (let i = 0; i < a.length; i++) {
      addValue(a[i]);
    }

    for (let i = 0; i < b.length; i++) {
      addValue(b[i]);
    }
  
    return result;
  }


// problem 8


type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}

const calculateTotalPrice = (allProduct: Product[]): number => {
    if (allProduct.length === 0) return 0;
    const prices = allProduct.map(product => {
        const basePrice = product.price * product.quantity;
        return product.discount ? basePrice * (1 - product.discount / 100) : basePrice;
    });
    const total = prices.reduce((acc, price) => acc + price, 0);
    return total;
}
  
  
  

  


    




