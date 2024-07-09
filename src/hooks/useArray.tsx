import React, {useState} from 'react';

export const useArray = <T,>(original: T[] = []) => {
  const [array, setArray] = useState<T[]>(original);

  const push = (item: T) => setArray(oldArray => [...oldArray, item]);

  const removeAtIndex = (index: number) => setArray(oldArray => oldArray.filter((_, i) => i !== index));

  const removeIf = (predicate: (item: T, index?: number, array?: T[]) => boolean) => setArray(oldArray => oldArray.filter((t, i, a) => !predicate(t, i, a)));

  const replace = (index: number, newItem: T) => setArray(oldArray => oldArray.map((item, i) => index === i ? newItem : item));

  const swap = (index1: number, index2: number) => setArray(prevArray => {
    const data = [...prevArray];
    const temp = data[index1];
    data[index1] = data[index2];
    data[index2] = temp;
    return data;
  });

  const clear = () => setArray([]);

  const toggle = (item: T) => {
    if (array.find(i => i === item)) {
      removeIf(i => i === item);
    } else {
      push(item);
    }
  } 

  return {
    array, push, removeAtIndex, removeIf, clear, replace, swap, setArray, toggle
  }
}