class Queue<T> {
  fila: T[];
  constructor() {
    this.fila = [];
  }
  push(number: T) {
    this.fila.push(number);
  }
  shift() {
    this.fila.shift();
  }

  [Symbol.iterator](): Iterator<T> {
    let index = 0;
    const arr = this.fila;
    return {
      next: (): IteratorResult<T> => {
        if (arr[index] !== undefined) {
          let value = arr[index];
          index++;
          return { value, done: false };
        } else return { value: undefined, done: true };
      },
    };
  }
}

const novaFila = new Queue<Number>();
novaFila.push(90);
novaFila.push(35);
novaFila.push(34);
novaFila.push(56);
novaFila.shift()

console.log(novaFila);
for (const numero of novaFila) {
  console.log('Numero: ' + numero);
}
