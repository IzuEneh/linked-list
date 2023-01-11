Linked List in JavaScript
=========================

This is a basic implementation of a linked list in JavaScript. It includes two factory classes: `LinkedList` and `Node`.

Class: LinkedList
-----------------

This class represents the full linked list. It has the following properties and methods:

Properties:

-   `head`: A reference to the first node in the list, set as `null` by default.
-   `tail`: A reference to the last node in the list, set as `null` by default.

Methods:

-   `append(value)`: Adds a new node containing `value` to the end of the list.
-   `prepend(value)`: Adds a new node containing `value` to the start of the list.
-   `size()`: Returns the total number of nodes in the list.
-   `at(index)`: Returns the node at the given `index`.
-   `pop()`: Removes the last element from the list.
-   `contains(value)`: Returns `true` if the passed in `value` is in the list and otherwise returns `false`.
-   `find(value)`: Returns the index of the node containing `value`, or `null` if not found.

Class: Node
-----------

This class represents a single node in the linked list. It has the following properties and methods:

Properties:

-   `value`: The value stored in the node.
-   `next`: A reference to the next node in the list, set as `null` by default.

Usage
-----

To use the linked list, create a new instance of the `LinkedList` class and call methods on it as needed. For example:

```
let list = new LinkedList();
list.append(5);
list.append(10);
list.prepend(1);
console.log(list.size()); // 3
console.log(list.at(1)); // Node {value: 5, next: Node}
console.log(list.find(10)); // 2
```

Note: The `at` method is 0 indexed so the index zero is the first element of the list.