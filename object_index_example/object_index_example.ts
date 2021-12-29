/* index signatures */
interface StringOnly {
  // age : number,   ///에러남 ㅅㄱ
  // [key: string]: string,
  age: number; ///가능
  [key: string]: string | number;
}

let obj2: StringOnly = {
  name: "kim",
  age: 20,
  location: "seoul",
};

/* Recursive Index Signatures */
interface MyType {
  "font-size": MyType | number;
}

let obj3: MyType = {
  "font-size": {
    "font-size": {
      "font-size": 14,
    },
  },
};

/*
    (숙제1) 다음 자료의 타입을 지정해보십시오. 
    let obj = {
        model : 'k5',
        brand : 'kia',
        price : 6000,
        year : 2030,
        date : '6월',
        percent : '5%',
        dealer : '김차장',
    }  
*/
interface Obj4Type {
  [key: string]: string | number;
}

let obj4: Obj4Type = {
  model: "k5",
  brand: "kia",
  price: 6000,
  year: 2030,
  date: "6월",
  percent: "5%",
  dealer: "김차장",
};

/*
    (숙제2) 다음 object 자료의 타입을 interface 써서 만들어보십시오. 
    let obj = {
        'font-size' : 10,
        'secondary' : {
            'font-size' : 12,
            'third' : {
            'font-size' : 14
            }
        }
    }
*/
interface Obj5Type {
  "font-size": number;
  [key: string]: number | Obj5Type;
}

let obj5: Obj5Type = {
  "font-size": 10,
  secondary: {
    "font-size": 12,
    third: {
      "font-size": 14,
    },
  },
};
