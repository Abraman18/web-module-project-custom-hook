import React, {useState} from "react";

// let's add `key` and `initialValue` as parameters to the hook.
// - We're going to set up some state here. Set up a state property called storedValue.
//   - This state property is going to take a function as it's initial value. When we do this, whatever that callback function returns is what gets set as the intialValue for the state property.
//   - In the callback function, we'll check to see if the item we passed in already exists in localStorage, and return that value, otherwise we'll return whatever initialValue was passed in.
//   - Quick note, if you pass in arrays or objects to localStorage, you will need to parse it into JSON. Then when you retrieve it, like we do below, you'll need to parse it back into regular JavaScript

// ```js
// // To retrieve an item from localStorage, call localStorage.getItem('itemName')
// // If that item doesn't exist, it will return undefined
// const [storedValue, setStoredValue] = useState(() => {
//   // Get from local storage by key
//   const item = window.localStorage.getItem(key);
//   // Parse and return stored json or, if undefined, return initialValue
//   return item ? JSON.parse(item) : initialValue;
// });
// ```

// - Now, let's return `storedValue` from this hook in an array:

// ```js
// import { useState } from "react";

// export const useLocalStorage = (key, initialValue) => {
//   const [storedValue, setStoredValue] = useState(() => {
//     const item = window.localStorage.getItem(key);
//     return item ? JSON.parse(item) : initialValue;
//   });

//   return [storedValue];
// };


const useLocalStorage = (key, initialValue) => {
	const [storedValue, setStoredValue] = useState(() => {
		  const item = window.localStorage.getItem(key);
		return item? JSON.parse(item) : initialValue ;
	});
	return [storedValue];
};

export default useLocalStorage;