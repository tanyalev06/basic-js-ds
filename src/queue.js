const { ListNode } = require('../extensions/list-node.js');
class Queue {
  constructor() {
    this.head = null; // первый элемент очереди
    this.tail = null; // последний элемент очереди
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const newNode = new ListNode(value);

    if (!this.head) {
      // если очередь пуста, head и tail указывают на новый узел
      this.head = newNode;
      this.tail = newNode;
    } else {
      // добавляем в конец и обновляем tail
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    if (!this.head) return null; // если очередь пустая

    const value = this.head.value; // сохраняем значение
    this.head = this.head.next; // сдвигаем голову

    if (!this.head) this.tail = null; // если очередь стала пустой, tail обнуляем

    return value;
  }
}


module.exports = {
  Queue
};