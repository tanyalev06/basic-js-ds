const { ListNode } = require('../extensions/list-node.js');

function removeKFromList(l, k) {
// Удаляем все узлы с нужным значением в начале списка
  while (l && l.value === k) {
    l = l.next;
  }

  let current = l;

  // Проходим по списку и удаляем узлы с value === k
  while (current && current.next) {
    if (current.next.value === k) {
      current.next = current.next.next; // перепрыгиваем через узел
    } else {
      current = current.next;
    }
  }

  return l;
}

module.exports = {
  removeKFromList
};