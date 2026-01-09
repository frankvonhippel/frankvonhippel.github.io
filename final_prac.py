'''
Functions
• Not associated with any class or object
‒ invoked by name alone
• Arguments passed explicitly
• Operates on data passed to it

Methods
• Associated with a class or object
‒ invoked by object.name
• Can operate on data contained within the class

Computer memory is organized as a sequence of locations
‒ each location is identified by its address (a number) ---> use a reference
‒ a location typically consists of 8 bits (a "byte")
‒ bytes are often grouped into "words" (32 or 64 bits)

A linear data structure is a collection of objects with a straight-line ordering among them

- PREORDER TRAVERSAL: NLR
- INORDER TRAVERSAL: LNR
- POSTORDER TRAVERSAL: LRN


A hash function is a function that can be used to map data of arbitrary size (and of various types) to
a integer value in a fixed range

linear probing: decrement by 1

Probe sequence: the locations examined when inserting a new key

Double Hashing: probe by hash value

separate chaining
‒ each table location references a linked list
‒ on collision, add to the linked list, starting at the collision slot

Procedural programming:
‒ programs are decomposed into procedures (functions) that manipulate a collection of data structures

Object-oriented programming
‒ programs are composed of interacting entities (objects)that encapsulate data and code


FOR DIAGRAMS:
when z = x and x = y ---> diagtram shows z--->y, x--->y

- Breadth-first traversal:
‒ visit all nodes at the current level --> then next level

- Depth-first traversal:
‒ visit all nodes in the left subtree
‒ then visit all nodes in the right subtree --> left to right

A stack is a linear data structure where objects are inserted or removed only at one end ---> FIFO
----> push(), pop(), is_empty()

A queue is a linear data structure where insertions and deletions happen at different ends ---> LIFO
----> enqueue(), dequeue(), is_empty(), size()


• The attributes of a class ---> ex: a dog has a name
• The methods of a class describe the behavior ---> ex: a dog can bark

A linked list is a linear data structure where each object contains a reference to the next object in the list

A tree is a non-linear data structure where each object contains a reference to the parent object and zero or more child objects

• Recursive functions have two kinds of cases:
‒ base case(s) : ----> then ---> recursive case(s) : simplify

• Huffman coding:
• Use fewer bits (not 7) for more frequently occurring characters
• Do this by using a tree that stores characters at the leaves
• root-to-leaf paths provide the bit sequence used to encode the characters

Black-Box Testing:
• Focuses only on functionality

White-box testing:
• Focuses on the code and how it works