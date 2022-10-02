/*----------------------------------------------------------
JavaScript Prototype: Method
Every object in JavaScript has a built-in property called "prototype." 
The prototype constructor is used to add new methods (functions) and properties to a JavaScript object. 
- If a method is constructed, then it will be available for the object. 
- If a property is constructed, then the object will be given the property and its value, as default.

In this Assignment, we use the prototype constructor to add new methods to the Array() object.
----------------------------------------------------------*/


// MAP //
Array.prototype.myMap = function(callbackFn) {
  // Place your code here.
  let map1 = [] // creating empty array called map1
  for (let i = 0; i < this.length; i++) //loop through the array "this" to access each element
  {
    map1.push(callbackFn(this[i], i, this)) //executing the callback function on each of those elements
  }
  return map1; //returning the new array
};

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
  // Place your code here.
  let filter1 = []
  for (let i = 0; i < this.length; i++) //loops through array
  {
    if(callbackFn(this[i], i, this) === true) //checks to see if the element passes the test from the callbackFn
    {
      filter1.push(this[i]) //if the element passes the test it is then pushed into the new array
    }
  }
  return filter1;
};

// SOME //
Array.prototype.mySome = function(callbackFn) {
  // Place your code here.
  //true if the callback function returns a truthy value for at least one element in the array. Otherwise, false.
  //loop through the array
  for (let i = 0; i < this.length; i++)
  {
    if(callbackFn(this[i], i, this) === true)//checks if any one of the elements returns true
    {
      return true;
    }
  }
  return false;
};

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
  // Place your code here.
  //true if the callbackFn function returns a truthy value for every array element. Otherwise, false.
  //loop through the array
  for (let i = 0; i < this.length; i++)
  {
    if(callbackFn(this[i], i, this) != true)//check if all values return true if one value is not true then the method returns false
    {
      return false;
    }
  }
  return true;
};

// REDUCE //
Array.prototype.myReduce = function(callbackFn) {
  // Place your code here.
};

// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
  // Place your code here.
  //loop through array
  for (let i = 0; i < this.length; i++)
  {
    if(this[i] === searchElement)//check if serchelement is within the array if found return true
    {
      return true;
    }
  }
  return false;
};

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {
  // Place your code here.
  //The first index of the element in the array; -1 if not found
  //loop through array
  for (let i = 0; i < this.length; i++)
  {
    if(this[i]===searchElement) //checks if the elemtent in the array is equal to the element being searched
    {
      return i;//returns element
    }
  }
  return -1;
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {
  // Place your code here.
  //The last index of the element in the array; -1 if not found.
  for (let i = this.length-1; i > -1; i--) //looping the array in from the last element
  {
    if(this[i]===searchElement) //checks if the elemtent in the array is equal to the element being searched
    {
      return i;//returns element
    }
  }
  return -1;
};

// KEYS //
Object.myKeys = function(object) {
  // Place your code here.
};

// VALUES //
Object.myValues = function(object) {
  // Place your code here.
};