const QUIZ_DATA = {
  "CAT 1": [
    {
      "topic": "Loop Detection",
      "difficulty": "Easy",
      "question": "What is a loop (cycle) in a linked list?",
      "options": [
        "A node pointing to a node that appears later in the sequence.",
        "A node pointing back to a previous node, creating an infinite sequence.",
        "Two nodes pointing to the same node.",
        "The last node pointing to NULL."
      ],
      "answer": "B"
    },
    {
      "topic": "Loop Detection",
      "difficulty": "Easy",
      "question": "Which of the following is the most common and efficient algorithm to detect a loop in a linked list?",
      "options": [
        "Linear Search",
        "Binary Search",
        "Floyd's Cycle Detection Algorithm (Tortoise and Hare)",
        "Two-Pointer Technique for Sorting"
      ],
      "answer": "C"
    },
    {
      "topic": "Loop Detection",
      "difficulty": "Easy",
      "question": "In Floyd's Cycle Detection algorithm, if a loop exists, what happens to the slow and fast pointers?",
      "options": [
        "They never meet.",
        "They meet at the head node.",
        "They are guaranteed to meet at some point within the loop.",
        "The fast pointer becomes NULL."
      ],
      "answer": "C"
    },
    {
      "topic": "Loop Detection",
      "difficulty": "Easy",
      "question": "What is the primary consequence of a loop in a singly linked list?",
      "options": [
        "The list becomes doubly linked.",
        "Traversing the list becomes impossible and may never terminate.",
        "The list automatically sorts itself.",
        "Memory is automatically deallocated."
      ],
      "answer": "B"
    },
    {
      "topic": "Loop Detection",
      "difficulty": "Easy",
      "question": "In Floyd’s algorithm, what does the fast pointer typically do?",
      "options": [
        "Moves one node at a time.",
        "Moves two nodes at a time.",
        "Moves to the middle of the list.",
        "Points to the head of the list."
      ],
      "answer": "B"
    },
    {
      "topic": "Loop Detection",
      "difficulty": "Easy",
      "question": "If a linked list has no cycle, what will the fast pointer eventually point to in Floyd's algorithm?",
      "options": [
        "The slow pointer",
        "The head",
        "NULL",
        "The tail"
      ],
      "answer": "C"
    },
    {
      "topic": "Loop Detection",
      "difficulty": "Easy",
      "question": "Besides Floyd's algorithm, what is another simple method to detect a loop?",
      "options": [
        "Reversing the list",
        "Using a Hash Set to store visited node addresses",
        "Counting the total number of nodes",
        "Swapping adjacent nodes"
      ],
      "answer": "B"
    },
    {
      "topic": "Loop Detection",
      "difficulty": "Easy",
      "question": "What is the space complexity of detecting a loop using a Hash Set approach?",
      "options": [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n log n)"
      ],
      "answer": "C"
    },
    {
      "topic": "Loop Detection",
      "difficulty": "Easy",
      "question": "In a linked list with a cycle, what does the next pointer of the node that closes the loop point to?",
      "options": [
        "NULL",
        "A new node",
        "A previous node in the list",
        "The node itself"
      ],
      "answer": "C"
    },
    {
      "topic": "Loop Detection",
      "difficulty": "Easy",
      "question": "What is the time complexity of Floyd's Cycle Detection algorithm?",
      "options": [
        "O(n^2)",
        "O(n)",
        "O(log n)",
        "O(n log n)"
      ],
      "answer": "B"
    },
    {
      "topic": "Loop Detection",
      "difficulty": "Medium",
      "question": "After detecting a loop using Floyd's algorithm, how do you find the starting node of the loop?",
      "options": [
        "Reset slow to head and move both pointers one step until they meet.",
        "Move the fast pointer one step at a time until it meets the slow pointer.",
        "Increment the fast pointer's speed.",
        "The meeting point itself is the start of the loop."
      ],
      "answer": "A"
    },
    {
      "topic": "Loop Detection",
      "difficulty": "Medium",
      "question": "In Floyd's algorithm, if the slow and fast pointers meet at a node inside the loop, what is the distance from the head to the start of the loop equal to?",
      "options": [
        "The distance from the meeting point to the start of the loop.",
        "Twice the length of the loop.",
        "The length of the loop.",
        "Half the length of the list."
      ],
      "answer": "A"
    },
    {
      "topic": "Loop Detection",
      "difficulty": "Medium",
      "question": "What is the primary advantage of Floyd's Cycle Detection algorithm over the Hash Set method?",
      "options": [
        "It works on doubly linked lists only.",
        "It has a better time complexity (O(log n)).",
        "It has a constant space complexity (O(1)).",
        "It can detect the exact node where the loop starts immediately."
      ],
      "answer": "C"
    },
    {
      "topic": "Loop Detection",
      "difficulty": "Medium",
      "question": "What will happen if you try to traverse a linked list containing a loop without any detection mechanism?",
      "options": [
        "The program will crash immediately.",
        "The traversal will enter an infinite loop.",
        "The list will be automatically repaired.",
        "The traversal will stop at the duplicate node."
      ],
      "answer": "B"
    },
    {
      "topic": "Loop Detection",
      "difficulty": "Medium",
      "question": "Consider a singly linked list: 1->2->3->4->5->3 (where 5 points back to 3). What is the length of the loop?",
      "options": [
        "2.0",
        "3.0",
        "4.0",
        "5.0"
      ],
      "answer": "B"
    },
    {
      "topic": "Loop Detection",
      "difficulty": "Medium",
      "question": "You have detected a loop in a linked list. What is the standard method to remove the loop?",
      "options": [
        "Delete the node where the pointers met.",
        "Set the \"next\" pointer of the last node in the loop to NULL.",
        "Reverse the list from the meeting point.",
        "Create a new node at the meeting point."
      ],
      "answer": "B"
    },
    {
      "topic": "Loop Detection",
      "difficulty": "Medium",
      "question": "In Floyd's algorithm, if the list has a loop, why is it guaranteed that the slow and fast pointers will meet?",
      "options": [
        "Because the fast pointer is always exactly one step ahead.",
        "Because of the relative speed difference, the distance between them decreases by 1 each step inside the loop.",
        "Because the fast pointer eventually becomes the slow pointer.",
        "Because the list sorts itself."
      ],
      "answer": "B"
    },
    {
      "topic": "Loop Detection",
      "difficulty": "Medium",
      "question": "If a linked list has a loop, and you set the \"next\" pointer of the node where the pointers met to NULL, will this always remove the loop correctly?",
      "options": [
        "Yes, always.",
        "No, this will only remove the loop if the meeting point is the start of the loop.",
        "No, this will corrupt the list.",
        "Yes, because the meeting point is always the last node."
      ],
      "answer": "B"
    },
    {
      "topic": "Loop Detection",
      "difficulty": "Medium",
      "question": "What is a \"self-loop\" in a linked list?",
      "options": [
        "A list where every node points to itself.",
        "A node whose `next` pointer points to itself.",
        "A loop that spans the entire list.",
        "A loop with a length of 2."
      ],
      "answer": "B"
    },
    {
      "topic": "Loop Detection",
      "difficulty": "Medium",
      "question": "What is the time complexity of finding the start of the loop after the initial detection in Floyd's algorithm?",
      "options": [
        "O(n^2)",
        "O(n)",
        "O(log n)",
        "O(1)"
      ],
      "answer": "B"
    },
    {
      "topic": "Loop Detection",
      "difficulty": "Hard",
      "question": "In Floyd's algorithm, let the distance from head to loop start be `d`, and the distance from loop start to meeting point be `k`. If the loop length is `L`, which of these equations holds true at the meeting point?",
      "options": [
        "d = k",
        "2(d + k) = d + k + nL",
        "d + k = nL",
        "d = nL - k"
      ],
      "answer": "B"
    },
    {
      "topic": "Loop Detection",
      "difficulty": "Hard",
      "question": "Given a linked list with a loop, which of the following operations is not possible without first breaking the loop?",
      "options": [
        "Finding the 3rd node from the end",
        "Finding the middle element",
        "Counting the total number of nodes in the list",
        "Finding the maximum value in the list"
      ],
      "answer": "A"
    },
    {
      "topic": "Loop Detection",
      "difficulty": "Hard",
      "question": "What is the minimum number of pointers required to detect a loop in a singly linked list using Floyd's algorithm?",
      "options": [
        "1.0",
        "2.0",
        "3.0",
        "4.0"
      ],
      "answer": "B"
    },
    {
      "topic": "Loop Detection",
      "difficulty": "Hard",
      "question": "Consider a modified version of Floyd's algorithm where the fast pointer moves three steps for every one step of the slow pointer. Will this algorithm still guarantee detection of a loop?",
      "options": [
        "No, it will never detect a loop.",
        "Yes, but it will be less efficient.",
        "Yes, but only if the loop length is odd.",
        "No, it will always skip the meeting point."
      ],
      "answer": "B"
    },
    {
      "topic": "Loop Detection",
      "difficulty": "Hard",
      "question": "What is the maximum number of nodes a fast pointer can skip over before a loop is detected in standard Floyd's algorithm?",
      "options": [
        "",
        "1.0",
        "2.0",
        "It depends on the loop length."
      ],
      "answer": "D"
    },
    {
      "topic": "Loop Detection",
      "difficulty": "Hard",
      "question": "You are given a linked list where the last node's next pointer points to the head (circular list). Where will the slow and fast pointers meet in Floyd's algorithm?",
      "options": [
        "At the head node",
        "At the last node",
        "At the second node",
        "At a random node within the loop"
      ],
      "answer": "A"
    },
    {
      "topic": "Loop Detection",
      "difficulty": "Hard",
      "question": "If a linked list has a loop, and the distance from the head to the start of the loop is `m`, and the loop length is `l`, what is the time complexity of Floyd's algorithm in terms of `m` and `l`?",
      "options": [
        "O(m)",
        "O(l)",
        "O(m + l)",
        "O(m * l)"
      ],
      "answer": "C"
    },
    {
      "topic": "Loop Detection",
      "difficulty": "Hard",
      "question": "Which of the following is a disadvantage of using a Hash Set for loop detection?",
      "options": [
        "It cannot detect the start of the loop.",
        "It requires O(n) extra space.",
        "It is slower than Floyd's algorithm in all cases.",
        "It only works on sorted lists."
      ],
      "answer": "B"
    },
    {
      "topic": "Loop Detection",
      "difficulty": "Hard",
      "question": "In the provided code snippet for loop detection, after removing the loop, what should the last node's next pointer be set to?",
      "options": [
        "The head",
        "The node where the loop started",
        "NULL",
        "The node after the start of the loop"
      ],
      "answer": "C"
    },
    {
      "topic": "Loop Detection",
      "difficulty": "Hard",
      "question": "For a linked list with a loop, which of the following statements is true?",
      "options": [
        "The tail node is always part of the loop.",
        "The head node is always part of the loop.",
        "The node where the pointers meet is always the start of the loop.",
        "The number of nodes traversed before the pointers meet is always equal to the length of the list."
      ],
      "answer": "A"
    },
    {
      "topic": "Segregate even & odd nodes in a LL",
      "difficulty": "Easy",
      "question": "In the context of segregating even and odd nodes in a linked list, what are we typically segregating based on?",
      "options": [
        "The data value of the node (numerical value)",
        "The memory address of the node",
        "The position (index) of the node",
        "The color of the node"
      ],
      "answer": "A"
    },
    {
      "topic": "Segregate even & odd nodes in a LL",
      "difficulty": "Easy",
      "question": "Given a linked list: 1->2->3->4->5, after segregating even and odd nodes (keeping relative order), what will the list look like?",
      "options": [
        "1->3->5->2->4",
        "2->4->1->3->5",
        "5->3->1->4->2",
        "1->2->3->4->5"
      ],
      "answer": "B"
    },
    {
      "topic": "Segregate even & odd nodes in a LL",
      "difficulty": "Easy",
      "question": "What is a common approach to segregate even and odd nodes without using extra space?",
      "options": [
        "Creating two new linked lists and merging them",
        "Using an array to store nodes",
        "Swapping data between nodes",
        "Using recursion"
      ],
      "answer": "A"
    },
    {
      "topic": "Segregate even & odd nodes in a LL",
      "difficulty": "Easy",
      "question": "When segregating even and odd nodes, which of these is NOT typically maintained?",
      "options": [
        "An \"evenStart\" pointer",
        "An \"oddStart\" pointer",
        "An \"evenEnd\" pointer",
        "A \"middle\" pointer"
      ],
      "answer": "D"
    },
    {
      "topic": "Segregate even & odd nodes in a LL",
      "difficulty": "Easy",
      "question": "What does the \"evenEnd\" pointer point to in the segregation algorithm?",
      "options": [
        "The first even node in the list",
        "The last even node in the list",
        "The node before the first even node",
        "The node after the last even node"
      ],
      "answer": "B"
    },
    {
      "topic": "Segregate even & odd nodes in a LL",
      "difficulty": "Easy",
      "question": "In the segregation algorithm, what is the purpose of the \"oddStart\" pointer?",
      "options": [
        "To traverse the original list",
        "To mark the beginning of the odd node sublist",
        "To mark the end of the odd node sublist",
        "To point to the next odd node to be processed"
      ],
      "answer": "B"
    },
    {
      "topic": "Segregate even & odd nodes in a LL",
      "difficulty": "Easy",
      "question": "After segregating evens first and odds later, what should the \"next\" pointer of the last even node point to?",
      "options": [
        "NULL",
        "The first odd node",
        "The head of the list",
        "The last odd node"
      ],
      "answer": "B"
    },
    {
      "topic": "Segregate even & odd nodes in a LL",
      "difficulty": "Easy",
      "question": "What is the time complexity of the standard algorithm to segregate even and odd nodes?",
      "options": [
        "O(n^2)",
        "O(n log n)",
        "O(n)",
        "O(1)"
      ],
      "answer": "C"
    },
    {
      "topic": "Segregate even & odd nodes in a LL",
      "difficulty": "Easy",
      "question": "What is the space complexity of the standard in-place algorithm to segregate even and odd nodes?",
      "options": [
        "O(n)",
        "O(log n)",
        "O(1)",
        "O(n log n)"
      ],
      "answer": "C"
    },
    {
      "topic": "Segregate even & odd nodes in a LL",
      "difficulty": "Easy",
      "question": "If a linked list contains only even numbers, what will be the result of the segregation algorithm?",
      "options": [
        "The list will be reversed",
        "The list will remain unchanged",
        "All nodes will be moved to the odd list",
        "An error will occur"
      ],
      "answer": "B"
    },
    {
      "topic": "Segregate even & odd nodes in a LL",
      "difficulty": "Medium",
      "question": "In the segregation algorithm, if we traverse the list and find an even node, where do we append it?",
      "options": [
        "At the beginning of the odd list",
        "At the end of the existing even list",
        "At the end of the original list",
        "Before the current node"
      ],
      "answer": "B"
    },
    {
      "topic": "Segregate even & odd nodes in a LL",
      "difficulty": "Medium",
      "question": "Consider the list: 1->1->2->2. After segregating evens and odds, what is the correct order?",
      "options": [
        "1->1->2->2",
        "2->2->1->1",
        "1->2->1->2",
        "2->1->2->1"
      ],
      "answer": "B"
    },
    {
      "topic": "Segregate even & odd nodes in a LL",
      "difficulty": "Medium",
      "question": "What is a potential pitfall if you forget to set the \"next\" pointer of the last node in the new list to NULL after segregation?",
      "options": [
        "The list will become sorted",
        "The list may contain a cycle",
        "The list will lose all odd nodes",
        "The list will become doubly linked"
      ],
      "answer": "B"
    },
    {
      "topic": "Segregate even & odd nodes in a LL",
      "difficulty": "Medium",
      "question": "In a singly linked list, if the head node itself contains an even value, how does the algorithm handle it?",
      "options": [
        "The head becomes the start of the even list",
        "It swaps it with the first odd node",
        "It moves it to the end of the even list",
        "The algorithm fails"
      ],
      "answer": "A"
    },
    {
      "topic": "Segregate even & odd nodes in a LL",
      "difficulty": "Medium",
      "question": "What is the advantage of segregating nodes (by changing links) rather than swapping data values?",
      "options": [
        "It is faster in all cases",
        "It preserves the structure if node data is large or complex",
        "It requires less code",
        "It automatically sorts the list"
      ],
      "answer": "B"
    },
    {
      "topic": "Segregate even & odd nodes in a LL",
      "difficulty": "Medium",
      "question": "Given a list: 2->4->6->1->3, what is the state of the list after the first pass of the segregation algorithm (before final linking)?",
      "options": [
        "Two separate lists: 2->4->6 and 1->3",
        "One combined list: 2->4->6->1->3",
        "Two separate lists: 2->1->4->3->6",
        "The list is reversed"
      ],
      "answer": "A"
    },
    {
      "topic": "Segregate even & odd nodes in a LL",
      "difficulty": "Medium",
      "question": "After segregation, if there are no odd nodes, what should the next pointer of the last even node point to?",
      "options": [
        "The first even node",
        "NULL",
        "The head",
        "The last even node"
      ],
      "answer": "B"
    },
    {
      "topic": "Segregate even & odd nodes in a LL",
      "difficulty": "Medium",
      "question": "Which of the following is a necessary condition for the standard in-place segregation algorithm to work?",
      "options": [
        "The list must be sorted",
        "The list must be circular",
        "The list must be singly linked",
        "The list must contain at least 5 nodes"
      ],
      "answer": "C"
    },
    {
      "topic": "Segregate even & odd nodes in a LL",
      "difficulty": "Medium",
      "question": "In the segregation algorithm, why do we need to maintain both start and end pointers for the even and odd lists?",
      "options": [
        "To count the number of nodes",
        "To enable O(1) time complexity for appending new nodes to the sublists",
        "To sort the sublists",
        "To reverse the sublists"
      ],
      "answer": "B"
    },
    {
      "topic": "Segregate even & odd nodes in a LL",
      "difficulty": "Medium",
      "question": "What will be the output after segregating even and odd nodes in the list: 1->3->5->2->4?",
      "options": [
        "1->3->5->2->4",
        "2->4->1->3->5",
        "1->2->3->4->5",
        "5->3->1->4->2"
      ],
      "answer": "B"
    },
    {
      "topic": "Segregate even & odd nodes in a LL",
      "difficulty": "Hard",
      "question": "In the algorithm where we build two separate lists, what is the worst-case number of pointer updates required?",
      "options": [
        "n",
        "n/2",
        "2n",
        "n^2"
      ],
      "answer": "A"
    },
    {
      "topic": "Segregate even & odd nodes in a LL",
      "difficulty": "Hard",
      "question": "Consider a list where all nodes are odd. If you run the standard segregation algorithm, what will the \"evenStart\" pointer point to?",
      "options": [
        "The head of the list",
        "The last node",
        "NULL",
        "The first odd node"
      ],
      "answer": "C"
    },
    {
      "topic": "Segregate even & odd nodes in a LL",
      "difficulty": "Hard",
      "question": "If the list is: 2 (head) -> 4 -> 1 -> 3 -> 6, what is the sequence of nodes visited by the traversal pointer in the first iteration after initialization?",
      "options": [
        "2, 4, 1, 3, 6",
        "2, 4, 1, 3",
        "4, 1, 3, 6",
        "2006-02-04 00:00:00"
      ],
      "answer": "A"
    },
    {
      "topic": "Segregate even & odd nodes in a LL",
      "difficulty": "Hard",
      "question": "In a recursive approach to segregation, what would be a major drawback compared to the iterative approach?",
      "options": [
        "Higher time complexity",
        "Higher space complexity due to call stack",
        "Inability to handle large data",
        "It cannot preserve order"
      ],
      "answer": "B"
    },
    {
      "topic": "Segregate even & odd nodes in a LL",
      "difficulty": "Hard",
      "question": "After segregation, if you want the odd nodes to appear first followed by the even nodes, how would you modify the standard algorithm?",
      "options": [
        "Swap the roles of even and odd pointers",
        "Reverse the final list",
        "Sort the list first",
        "It is not possible"
      ],
      "answer": "A"
    },
    {
      "topic": "Segregate even & odd nodes in a LL",
      "difficulty": "Hard",
      "question": "Suppose you have a doubly linked list. How does the segregation algorithm change?",
      "options": [
        "It becomes impossible",
        "You need to update both 'next' and 'prev' pointers",
        "It requires O(n^2) time",
        "The algorithm remains exactly the same"
      ],
      "answer": "B"
    },
    {
      "topic": "Segregate even & odd nodes in a LL",
      "difficulty": "Hard",
      "question": "In a singly linked list, after segregation, how do you find the new head of the combined list?",
      "options": [
        "It is always the original head",
        "It is the \"evenStart\" pointer",
        "It is the \"oddStart\" pointer",
        "It is whichever list (even or odd) appears first based on the desired order"
      ],
      "answer": "D"
    },
    {
      "topic": "Segregate even & odd nodes in a LL",
      "difficulty": "Hard",
      "question": "What is the main difference between \"segregating even/odd nodes\" and \"sorting the linked list\"?",
      "options": [
        "Segregation only groups by parity; sorting orders all elements",
        "There is no difference",
        "Sorting uses more memory",
        "Segregation cannot be done in-place"
      ],
      "answer": "A"
    },
    {
      "topic": "Segregate even & odd nodes in a LL",
      "difficulty": "Hard",
      "question": "Given a list with a cycle, can the standard even-odd segregation algorithm be applied?",
      "options": [
        "Yes, without any issues",
        "Yes, but it will also detect the cycle",
        "No, it will lead to an infinite loop",
        "No, because cycles don't exist in linked lists"
      ],
      "answer": "C"
    },
    {
      "topic": "Segregate even & odd nodes in a LL",
      "difficulty": "Hard",
      "question": "If we want to segregate nodes such that all even nodes come first, but in reverse order of appearance, what is the most efficient approach?",
      "options": [
        "Use a stack to store even nodes",
        "Use the standard algorithm and then reverse the even sublist",
        "Modify the standard algorithm to insert at the beginning of the even list",
        "Use recursion"
      ],
      "answer": "C"
    },
    {
      "topic": "Sort the bitonic DLL",
      "difficulty": "Easy",
      "question": "What does the term \"bitonic\" mean in the context of a Doubly Linked List (DLL)?",
      "options": [
        "The list contains only two unique values",
        "The list first increases (strictly) and then decreases (strictly)",
        "The list is circular",
        "The list has an even number of nodes"
      ],
      "answer": "B"
    },
    {
      "topic": "Sort the bitonic DLL",
      "difficulty": "Easy",
      "question": "In a bitonic DLL, how many \"peaks\" or \"inflection points\" does the sequence have?",
      "options": [
        "Zero",
        "One",
        "Two",
        "It depends on the data"
      ],
      "answer": "B"
    },
    {
      "topic": "Sort the bitonic DLL",
      "difficulty": "Easy",
      "question": "Which of the following sequences represents a bitonic doubly linked list?",
      "options": [
        "1, 2, 3, 4, 5",
        "5, 4, 3, 2, 1",
        "1, 3, 5, 4, 2",
        "2, 4, 1, 3, 5"
      ],
      "answer": "C"
    },
    {
      "topic": "Sort the bitonic DLL",
      "difficulty": "Easy",
      "question": "What is a key advantage of sorting a bitonic DLL compared to sorting a random DLL?",
      "options": [
        "It requires no comparisons",
        "It can be sorted in O(log n) time",
        "The inflection point provides a natural split into two sorted lists",
        "It requires extra space for merging"
      ],
      "answer": "C"
    },
    {
      "topic": "Sort the bitonic DLL",
      "difficulty": "Easy",
      "question": "If a bitonic DLL is split at the point where the order changes (the peak), what is the nature of the two resulting lists?",
      "options": [
        "One is sorted in ascending order, the other in descending order",
        "Both are sorted in ascending order",
        "Both are sorted in descending order",
        "One is random, the other is sorted"
      ],
      "answer": "A"
    },
    {
      "topic": "Sort the bitonic DLL",
      "difficulty": "Easy",
      "question": "To sort a bitonic DLL, which efficient algorithm is commonly applied after splitting it into two lists?",
      "options": [
        "Bubble Sort",
        "Insertion Sort",
        "Merge",
        "Quick Sort"
      ],
      "answer": "C"
    },
    {
      "topic": "Sort the bitonic DLL",
      "difficulty": "Easy",
      "question": "What is the time complexity of the most efficient algorithm to sort a bitonic DLL?",
      "options": [
        "O(n)",
        "O(n log n)",
        "O(n^2)",
        "O(log n)"
      ],
      "answer": "A"
    },
    {
      "topic": "Sort the bitonic DLL",
      "difficulty": "Easy",
      "question": "In a DLL, what additional pointer does each node have compared to a Singly Linked List?",
      "options": [
        "next",
        "prev",
        "random",
        "child"
      ],
      "answer": "B"
    },
    {
      "topic": "Sort the bitonic DLL",
      "difficulty": "Easy",
      "question": "Which property of a DLL is most helpful when sorting a bitonic list?",
      "options": [
        "It uses less memory",
        "It allows traversal in both directions",
        "It has a head pointer",
        "It has a tail pointer"
      ],
      "answer": "B"
    },
    {
      "topic": "Sort the bitonic DLL",
      "difficulty": "Easy",
      "question": "What is the first step in the standard algorithm to sort a bitonic DLL?",
      "options": [
        "Reverse the entire list",
        "Find the node where the sequence stops increasing and starts decreasing",
        "Split the list into two halves",
        "Sort each half individually"
      ],
      "answer": "B"
    },
    {
      "topic": "Sort the bitonic DLL",
      "difficulty": "Medium",
      "question": "In a bitonic DLL, if you reverse the second part (the decreasing part), what do you get?",
      "options": [
        "Another decreasing list",
        "An increasing list",
        "A random list",
        "A circular list"
      ],
      "answer": "B"
    },
    {
      "topic": "Sort the bitonic DLL",
      "difficulty": "Medium",
      "question": "After finding the peak (the node where the sequence changes from increasing to decreasing) in a bitonic DLL, what are the heads of the two resulting lists?",
      "options": [
        "Head of list1 = original head; Head of list2 = peak",
        "Head of list1 = original head; Head of list2 = peak->next",
        "Head of list1 = original head; Head of list2 = peak->prev",
        "Head of list1 = peak; Head of list2 = peak->next"
      ],
      "answer": "B"
    },
    {
      "topic": "Sort the bitonic DLL",
      "difficulty": "Medium",
      "question": "How do you find the peak (inflection point) in a bitonic DLL?",
      "options": [
        "Traverse from head until you find a node whose next node's value is smaller",
        "Traverse from head until you find a node whose value is greater than both its prev and next",
        "Traverse from head until you find the smallest node",
        "Traverse from head until you find a node with a NULL next"
      ],
      "answer": "A"
    },
    {
      "topic": "Sort the bitonic DLL",
      "difficulty": "Medium",
      "question": "After splitting a bitonic DLL into two lists (A: increasing, B: decreasing) and reversing list B, what is the state of the two lists?",
      "options": [
        "Both are sorted in increasing order",
        "Both are sorted in decreasing order",
        "A is increasing, B is decreasing",
        "A is decreasing, B is increasing"
      ],
      "answer": "A"
    },
    {
      "topic": "Sort the bitonic DLL",
      "difficulty": "Medium",
      "question": "When merging two sorted DLLs into one sorted DLL, what is the typical time complexity?",
      "options": [
        "O(n log n)",
        "O(n)",
        "O(n^2)",
        "O(log n)"
      ],
      "answer": "B"
    },
    {
      "topic": "Sort the bitonic DLL",
      "difficulty": "Medium",
      "question": "Consider a bitonic DLL: 1 <-> 3 <-> 5 <-> 4 <-> 2. What is the peak node?",
      "options": [
        "1.0",
        "3.0",
        "5.0",
        "4.0"
      ],
      "answer": "C"
    },
    {
      "topic": "Sort the bitonic DLL",
      "difficulty": "Medium",
      "question": "After splitting the bitonic DLL 1-3-5-4-2 at the peak and reversing the second part, what are the two lists to be merged?",
      "options": [
        "1-3-5 and 4-2",
        "1-3 and 5-4-2",
        "1-3-5 and 2-4",
        "1-3 and 2-4-5"
      ],
      "answer": "C"
    },
    {
      "topic": "Sort the bitonic DLL",
      "difficulty": "Medium",
      "question": "What is the space complexity of the algorithm that splits the bitonic DLL, reverses the second part, and merges the two sorted lists?",
      "options": [
        "O(n)",
        "O(log n)",
        "O(1)",
        "O(n log n)"
      ],
      "answer": "C"
    },
    {
      "topic": "Sort the bitonic DLL",
      "difficulty": "Medium",
      "question": "In a DLL, after reversing the second part of a bitonic list, what must be done to the 'prev' pointers of the nodes in that part?",
      "options": [
        "They must be set to NULL",
        "They must be updated to maintain the DLL structure",
        "Nothing, they remain correct",
        "They must all point to the head"
      ],
      "answer": "B"
    },
    {
      "topic": "Sort the bitonic DLL",
      "difficulty": "Medium",
      "question": "If a bitonic DLL has all elements in strictly increasing order, what is the peak?",
      "options": [
        "The first node",
        "The last node",
        "The middle node",
        "There is no peak; the list is not bitonic"
      ],
      "answer": "B"
    },
    {
      "topic": "Sort the bitonic DLL",
      "difficulty": "Hard",
      "question": "In the standard algorithm for sorting a bitonic DLL, what is the primary challenge during the merging phase compared to merging two sorted arrays?",
      "options": [
        "Maintaining the 'prev' pointers of the DLL",
        "Deciding which element is smaller",
        "Handling duplicate values",
        "The merge requires O(n^2) time"
      ],
      "answer": "A"
    },
    {
      "topic": "Sort the bitonic DLL",
      "difficulty": "Hard",
      "question": "Given a bitonic DLL with n nodes, what is the maximum number of comparisons required to find the peak using a linear scan?",
      "options": [
        "n/2",
        "n-1",
        "n",
        "log n"
      ],
      "answer": "C"
    },
    {
      "topic": "Sort the bitonic DLL",
      "difficulty": "Hard",
      "question": "If you are not allowed to reverse the second half explicitly, how else can you achieve the merge of two sorted lists from a bitonic DLL?",
      "options": [
        "Sort the second half using bubble sort",
        "Traverse the second half from its tail (using prev pointers) as if it were increasing",
        "Split the list into three parts",
        "Use a hash table"
      ],
      "answer": "B"
    },
    {
      "topic": "Sort the bitonic DLL",
      "difficulty": "Hard",
      "question": "Consider a bitonic DLL: 10 <-> 8 <-> 6 <-> 7 <-> 9. Is this list bitonic?",
      "options": [
        "Yes, because it first decreases then increases",
        "No, because it decreases then increases (valley), not increases then decreases (peak).",
        "Yes, because it has a peak",
        "No, because it has a valley, not a peak"
      ],
      "answer": "B"
    },
    {
      "topic": "Sort the bitonic DLL",
      "difficulty": "Hard",
      "question": "After merging two sorted DLLs, how do you determine the new head of the fully sorted list?",
      "options": [
        "It is always the head of the first list",
        "It is the smaller of the two starting nodes of the lists to be merged",
        "It is the tail of the merged list",
        "It is the peak node"
      ],
      "answer": "B"
    },
    {
      "topic": "Sort the bitonic DLL",
      "difficulty": "Hard",
      "question": "What is the worst-case time complexity of sorting a bitonic DLL using the standard \"split, reverse, merge\" approach?",
      "options": [
        "O(n^2)",
        "O(n log n)",
        "O(n)",
        "O(log n)"
      ],
      "answer": "C"
    },
    {
      "topic": "Sort the bitonic DLL",
      "difficulty": "Hard",
      "question": "In a bitonic DLL, if the increasing part has 'x' nodes and the decreasing part has 'y' nodes, what is the total time for the \"reverse\" step?",
      "options": [
        "O(x + y)",
        "O(x * y)",
        "O(min(x, y))",
        "O(1)"
      ],
      "answer": "A"
    },
    {
      "topic": "Sort the bitonic DLL",
      "difficulty": "Hard",
      "question": "How would the algorithm change if the bitonic DLL was defined as first decreasing and then increasing?",
      "options": [
        "It would be impossible to sort",
        "You would find the \"valley\" instead of the peak, and reverse the first part",
        "You would use Quick Sort instead of Merge",
        "You would still find the peak"
      ],
      "answer": "B"
    },
    {
      "topic": "Sort the bitonic DLL",
      "difficulty": "Hard",
      "question": "Which of the following is NOT a step in the efficient sorting of a bitonic DLL?",
      "options": [
        "Finding the inflection point",
        "Reversing one of the sublists",
        "Merging two sorted sublists",
        "Recursively sorting each sublist"
      ],
      "answer": "D"
    },
    {
      "topic": "Sort the bitonic DLL",
      "difficulty": "Hard",
      "question": "If you attempt to sort a bitonic DLL using a standard algorithm for random lists (e.g., insertion sort), what would be the time complexity in the worst case?",
      "options": [
        "O(n log n)",
        "O(n)",
        "O(n^2)",
        "O(log n)"
      ],
      "answer": "C"
    },
    {
      "topic": "Merge sort for DLL",
      "difficulty": "Easy",
      "question": "What type of algorithm is Merge Sort?",
      "options": [
        "Greedy Algorithm",
        "Dynamic Programming",
        "Divide and Conquer",
        "Backtracking"
      ],
      "answer": "C"
    },
    {
      "topic": "Merge sort for DLL",
      "difficulty": "Easy",
      "question": "In the context of sorting a Doubly Linked List (DLL), what is a key advantage of Merge Sort over Quick Sort?",
      "options": [
        "Merge Sort is always faster",
        "Merge Sort has O(1) space complexity",
        "Merge Sort offers better cache performance",
        "Merge Sort has consistent O(n log n) worst-case time complexity"
      ],
      "answer": "D"
    },
    {
      "topic": "Merge sort for DLL",
      "difficulty": "Easy",
      "question": "What is the first step in the Merge Sort algorithm for a DLL?",
      "options": [
        "Merging the lists",
        "Finding the middle node to split the list into two halves",
        "Swapping adjacent elements",
        "Comparing the first and last nodes"
      ],
      "answer": "B"
    },
    {
      "topic": "Merge sort for DLL",
      "difficulty": "Easy",
      "question": "In a DLL, why is finding the middle node easier than in a Singly Linked List?",
      "options": [
        "Because DLLs are always sorted",
        "Because you can traverse backwards from the tail",
        "Using the slow and fast pointer technique works the same way",
        "Because DLLs have a fixed size"
      ],
      "answer": "C"
    },
    {
      "topic": "Merge sort for DLL",
      "difficulty": "Easy",
      "question": "What is the time complexity of Merge Sort for a DLL in all cases (best, average, worst)?",
      "options": [
        "O(n)",
        "O(n^2)",
        "O(n log n)",
        "O(log n)"
      ],
      "answer": "C"
    },
    {
      "topic": "Merge sort for DLL",
      "difficulty": "Easy",
      "question": "What is the space complexity of the recursive Merge Sort implementation for a DLL (excluding the recursion stack)?",
      "options": [
        "O(n)",
        "O(log n)",
        "O(1)",
        "O(n log n)"
      ],
      "answer": "C"
    },
    {
      "topic": "Merge sort for DLL",
      "difficulty": "Easy",
      "question": "In the merge step of two sorted DLLs, what is primarily compared to determine the order of nodes?",
      "options": [
        "Memory addresses of nodes",
        "Data values stored in nodes",
        "Position of nodes in the original list",
        "The color of nodes"
      ],
      "answer": "B"
    },
    {
      "topic": "Merge sort for DLL",
      "difficulty": "Easy",
      "question": "After splitting a DLL into two halves for Merge Sort, what should the last node of the first half point to?",
      "options": [
        "The head of the second half",
        "The first node of the first half",
        "NULL",
        "The tail of the second half"
      ],
      "answer": "C"
    },
    {
      "topic": "Merge sort for DLL",
      "difficulty": "Easy",
      "question": "Which of the following is a necessary condition for Merge Sort to work on a DLL?",
      "options": [
        "The DLL must be circular",
        "The DLL must be bitonic",
        "The DLL must be able to be split into two halves",
        "The DLL must contain unique elements"
      ],
      "answer": "C"
    },
    {
      "topic": "Merge sort for DLL",
      "difficulty": "Easy",
      "question": "In a DLL with only one node, what happens during Merge Sort?",
      "options": [
        "An error occurs",
        "The node is considered already sorted, and the function returns",
        "The node is duplicated",
        "The algorithm enters an infinite loop"
      ],
      "answer": "B"
    },
    {
      "topic": "Merge sort for DLL",
      "difficulty": "Medium",
      "question": "What is the primary challenge when implementing Merge Sort on a DLL compared to an array?",
      "options": [
        "More comparisons are needed",
        "Difficulty in random access (finding middle and splitting)",
        "Higher time complexity",
        "Cannot handle duplicate values"
      ],
      "answer": "B"
    },
    {
      "topic": "Merge sort for DLL",
      "difficulty": "Medium",
      "question": "In the split function for a DLL (to find the middle), if there are two middle nodes (even number of nodes), which one is typically chosen as the head of the second half?",
      "options": [
        "The first middle node",
        "The second middle node",
        "Any node randomly",
        "The tail node"
      ],
      "answer": "B"
    },
    {
      "topic": "Merge sort for DLL",
      "difficulty": "Medium",
      "question": "After merging two sorted DLLs, what additional pointers need to be updated compared to merging two sorted Singly Linked Lists?",
      "options": [
        "Only the 'next' pointers",
        "Only the 'prev' pointers",
        "Both 'next' and 'prev' pointers",
        "No pointers need updating"
      ],
      "answer": "C"
    },
    {
      "topic": "Merge sort for DLL",
      "difficulty": "Medium",
      "question": "Consider two sorted DLLs: List A: 1<->3<->5; List B: 2<->4<->6. During merging, after picking node '1' as the new head, what should node '1's 'prev' pointer point to?",
      "options": [
        "Node '2'",
        "Node '3'",
        "NULL",
        "Node '6'"
      ],
      "answer": "C"
    },
    {
      "topic": "Merge sort for DLL",
      "difficulty": "Medium",
      "question": "In the recursive Merge Sort algorithm for DLL, when does the base case occur?",
      "options": [
        "When the list has 100 nodes",
        "When the list has 0 or 1 nodes",
        "When the list is already sorted",
        "When the list is empty"
      ],
      "answer": "B"
    },
    {
      "topic": "Merge sort for DLL",
      "difficulty": "Medium",
      "question": "If you forget to set the 'prev' pointer of the first node to NULL after merging, what could happen?",
      "options": [
        "The list will be sorted in descending order",
        "The list may become circular or cause incorrect backward traversal",
        "The merge sort will be faster",
        "Nothing, it is not necessary"
      ],
      "answer": "B"
    },
    {
      "topic": "Merge sort for DLL",
      "difficulty": "Medium",
      "question": "Why is Merge Sort often preferred for sorting linked lists over algorithms like Quick Sort?",
      "options": [
        "Quick Sort cannot be implemented on linked lists",
        "Merge Sort's merging step works naturally with linked lists without needing extra space for elements",
        "Merge Sort has better best-case complexity",
        "Quick Sort is unstable"
      ],
      "answer": "B"
    },
    {
      "topic": "Merge sort for DLL",
      "difficulty": "Medium",
      "question": "What is the role of the \"fast\" and \"slow\" pointer technique in Merge Sort for DLL?",
      "options": [
        "To count the total nodes",
        "To find the middle node to split the list",
        "To reverse the list during merge",
        "To detect loops before sorting"
      ],
      "answer": "B"
    },
    {
      "topic": "Merge sort for DLL",
      "difficulty": "Medium",
      "question": "Given a DLL: 4<->2<->5<->1<->3. After the first split in Merge Sort, what are the two sublists?",
      "options": [
        "4<->2 and 5<->1<->3",
        "4<->2<->5 and 1<->3",
        "4 and 2<->5<->1<->3",
        "4<->2<->5<->1 and 3"
      ],
      "answer": "B"
    },
    {
      "topic": "Merge sort for DLL",
      "difficulty": "Medium",
      "question": "In the merging step, if we are merging List A (1-3-5) and List B (2-4-6), how many pointer adjustments are needed to insert node '2' between node '1' and node '3'?",
      "options": [
        "2.0",
        "4.0",
        "6.0",
        "1.0"
      ],
      "answer": "B"
    },
    {
      "topic": "Merge sort for DLL",
      "difficulty": "Hard",
      "question": "What is the maximum depth of the recursion stack for Merge Sort on a DLL with 'n' nodes in the worst case?",
      "options": [
        "n",
        "n/2",
        "log n",
        "n^2"
      ],
      "answer": "C"
    },
    {
      "topic": "Merge sort for DLL",
      "difficulty": "Hard",
      "question": "In an iterative (bottom-up) Merge Sort for a DLL, what is a major implementation challenge compared to the recursive version?",
      "options": [
        "It cannot be implemented iteratively",
        "It requires O(n) extra space",
        "Managing the 'prev' pointers correctly for each merged segment",
        "It has higher time complexity"
      ],
      "answer": "C"
    },
    {
      "topic": "Merge sort for DLL",
      "difficulty": "Hard",
      "question": "Suppose you implement Merge Sort on a DLL but skip updating 'prev' pointers during the merge. What will be the consequence when the sorting is complete?",
      "options": [
        "The list will be sorted correctly but backward traversal will be incorrect",
        "The list will not be sorted",
        "The 'next' pointers will also become corrupted",
        "The algorithm will crash"
      ],
      "answer": "A"
    },
    {
      "topic": "Merge sort for DLL",
      "difficulty": "Hard",
      "question": "How does the merge step for two sorted DLLs handle the scenario where one list becomes empty before the other?",
      "options": [
        "It throws an error",
        "It appends the remaining nodes of the non-empty list to the end of the merged list",
        "It reverses the remaining list",
        "It discards the remaining nodes"
      ],
      "answer": "B"
    },
    {
      "topic": "Merge sort for DLL",
      "difficulty": "Hard",
      "question": "What is the time complexity of the \"find middle\" operation in each recursive call of Merge Sort for a DLL?",
      "options": [
        "O(1)",
        "O(n)",
        "O(log n)",
        "O(n log n)"
      ],
      "answer": "B"
    },
    {
      "topic": "Merge sort for DLL",
      "difficulty": "Hard",
      "question": "Which of the following correctly represents the recurrence relation for the time complexity of Merge Sort?",
      "options": [
        "T(n) = 2T(n/2) + O(1)",
        "T(n) = T(n-1) + O(n)",
        "T(n) = 2T(n/2) + O(n)",
        "T(n) = T(n/2) + O(1)"
      ],
      "answer": "C"
    },
    {
      "topic": "Merge sort for DLL",
      "difficulty": "Hard",
      "question": "In a DLL, after splitting the list into two halves, why must the last node of the left half be set to NULL?",
      "options": [
        "To mark the end of the left sublist during recursion",
        "To save memory",
        "To prevent the merge function from traversing into the right half prematurely",
        "Both A and C"
      ],
      "answer": "D"
    },
    {
      "topic": "Merge sort for DLL",
      "difficulty": "Hard",
      "question": "If a DLL contains a cycle, can the standard Merge Sort algorithm be applied?",
      "options": [
        "Yes, but it will also break the cycle",
        "Yes, with no modifications",
        "No, because finding the middle will fail due to infinite loop",
        "No, because cycles don't exist in DLLs"
      ],
      "answer": "C"
    },
    {
      "topic": "Merge sort for DLL",
      "difficulty": "Hard",
      "question": "In the merge step of two DLLs, how should 'next' and 'prev' pointers be updated to maintain list integrity?",
      "options": [
        "Set 'next' pointers first, then set 'prev' pointers of the subsequent nodes",
        "Set 'prev' pointers first, then 'next' pointers",
        "Set 'next' and 'prev' simultaneously",
        "Order does not matter"
      ],
      "answer": "A"
    },
    {
      "topic": "Merge sort for DLL",
      "difficulty": "Hard",
      "question": "What is the primary advantage of using a DLL over a Singly Linked List for Merge Sort?",
      "options": [
        "Faster sorting algorithm",
        "Ability to easily traverse backwards during the merge step for debugging or alternative merge strategies",
        "Lower time complexity",
        "Lower space complexity"
      ],
      "answer": "B"
    },
    {
      "topic": "Minimum Stack",
      "difficulty": "Easy",
      "question": "What is the primary purpose of a \"Minimum Stack\"?",
      "options": [
        "To sort the elements in the stack",
        "To retrieve the minimum element in O(1) time",
        "To keep the stack size minimal",
        "To implement a stack using arrays"
      ],
      "answer": "B"
    },
    {
      "topic": "Minimum Stack",
      "difficulty": "Easy",
      "question": "In a standard stack, what is the time complexity to find the minimum element if no special design is used?",
      "options": [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n log n)"
      ],
      "answer": "C"
    },
    {
      "topic": "Minimum Stack",
      "difficulty": "Easy",
      "question": "Which data structure is commonly used as an auxiliary space to implement a Minimum Stack?",
      "options": [
        "Another stack",
        "A queue",
        "A linked list",
        "An array"
      ],
      "answer": "A"
    },
    {
      "topic": "Minimum Stack",
      "difficulty": "Easy",
      "question": "In a Minimum Stack with an auxiliary stack, what does the auxiliary stack typically store?",
      "options": [
        "All elements of the main stack",
        "The maximum element so far",
        "The minimum element encountered so far at each step",
        "The top element of the main stack"
      ],
      "answer": "C"
    },
    {
      "topic": "Minimum Stack",
      "difficulty": "Easy",
      "question": "When pushing an element onto a Minimum Stack, when do you push onto the auxiliary stack?",
      "options": [
        "Every time",
        "Only when the element is smaller than or equal to the current minimum",
        "Only when the element is larger than the current minimum",
        "Only when the stack is empty"
      ],
      "answer": "B"
    },
    {
      "topic": "Minimum Stack",
      "difficulty": "Easy",
      "question": "When popping an element from a Minimum Stack, when do you pop from the auxiliary stack?",
      "options": [
        "Every time",
        "Only when the popped element is equal to the current minimum",
        "Only when the popped element is greater than the current minimum",
        "Never"
      ],
      "answer": "B"
    },
    {
      "topic": "Minimum Stack",
      "difficulty": "Easy",
      "question": "What is the time complexity of the `getMin()` operation in a properly implemented Minimum Stack?",
      "options": [
        "O(n)",
        "O(log n)",
        "O(1)",
        "O(n log n)"
      ],
      "answer": "C"
    },
    {
      "topic": "Minimum Stack",
      "difficulty": "Easy",
      "question": "What is the space complexity of the auxiliary stack approach for Minimum Stack in the worst case?",
      "options": [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n log n)"
      ],
      "answer": "C"
    },
    {
      "topic": "Minimum Stack",
      "difficulty": "Easy",
      "question": "If a Minimum Stack is empty, what should `getMin()` typically return?",
      "options": [
        "",
        "-1.0",
        "NULL or throw an exception",
        "The maximum integer value"
      ],
      "answer": "C"
    },
    {
      "topic": "Minimum Stack",
      "difficulty": "Easy",
      "question": "Which stack operation does NOT affect the minimum element tracking in a Minimum Stack?",
      "options": [
        "push()",
        "pop()",
        "top()",
        "Both push() and pop()"
      ],
      "answer": "C"
    },
    {
      "topic": "Minimum Stack",
      "difficulty": "Medium",
      "question": "In the auxiliary stack approach, if duplicate minimum values are allowed, how should they be handled?",
      "options": [
        "Store only unique minimums",
        "Push to auxiliary stack only when element is strictly less than current min",
        "Push to auxiliary stack when element is less than or equal to current min",
        "Do not store duplicates to save space"
      ],
      "answer": "C"
    },
    {
      "topic": "Minimum Stack",
      "difficulty": "Medium",
      "question": "Consider the push sequence: 5, 3, 7, 3, 2. What will the auxiliary stack contain after these pushes?",
      "options": [
        "5, 3, 3, 2",
        "5, 3, 3, 3, 2",
        "2002-05-03 00:00:00",
        "5, 3, 7, 3, 2"
      ],
      "answer": "A"
    },
    {
      "topic": "Minimum Stack",
      "difficulty": "Medium",
      "question": "What is an optimization to reduce space usage in a Minimum Stack when there are many duplicate minimum values?",
      "options": [
        "Store the minimum value along with its frequency count",
        "Use a hash table instead of a stack",
        "Stop tracking minimum altogether",
        "Use a single variable instead of a stack"
      ],
      "answer": "A"
    },
    {
      "topic": "Minimum Stack",
      "difficulty": "Medium",
      "question": "In the \"single variable\" approach (without auxiliary stack) for Minimum Stack, what is the main challenge?",
      "options": [
        "It cannot handle pop operations correctly",
        "It requires O(n^2) time",
        "It requires encoding the previous minimum within the pushed element using mathematical tricks",
        "It only works for integers"
      ],
      "answer": "C"
    },
    {
      "topic": "Minimum Stack",
      "difficulty": "Medium",
      "question": "In the encoding method for Minimum Stack, if `2*new_min - prev_min` is stored, what does this formula help achieve?",
      "options": [
        "To find the maximum element",
        "To retrieve the previous minimum after a pop",
        "To sort the stack",
        "To compress the data"
      ],
      "answer": "B"
    },
    {
      "topic": "Minimum Stack",
      "difficulty": "Medium",
      "question": "What is a potential drawback of the encoding method (single variable approach) for Minimum Stack?",
      "options": [
        "It has O(n) time complexity for getMin()",
        "It cannot handle negative numbers",
        "It may cause integer overflow issues",
        "It requires an auxiliary stack"
      ],
      "answer": "C"
    },
    {
      "topic": "Minimum Stack",
      "difficulty": "Medium",
      "question": "Given a Minimum Stack with main stack: [5,3,7,2] (top is 2) and auxiliary stack: [5,3,2]. After one pop(), what are the new stacks?",
      "options": [
        "Main: [5,3,7]; Aux: [5,3]",
        "Main: [5,3,7]; Aux: [5,3,2]",
        "Main: [5,3]; Aux: [5,3]",
        "Main: [5,3,7]; Aux: [5]"
      ],
      "answer": "A"
    },
    {
      "topic": "Minimum Stack",
      "difficulty": "Medium",
      "question": "Which of the following operations in a Minimum Stack requires comparison with the current minimum?",
      "options": [
        "push() only",
        "pop() only",
        "both push() and pop()",
        "Neither push() nor pop()"
      ],
      "answer": "C"
    },
    {
      "topic": "Minimum Stack",
      "difficulty": "Medium",
      "question": "In a Minimum Stack, if the auxiliary stack's top represents the current minimum, what does the second element in the auxiliary stack represent?",
      "options": [
        "The maximum element",
        "The previous minimum before the current one was pushed",
        "The next greater element",
        "The average of all elements"
      ],
      "answer": "B"
    },
    {
      "topic": "Minimum Stack",
      "difficulty": "Medium",
      "question": "What is the main trade-off in the auxiliary stack approach for Minimum Stack?",
      "options": [
        "Time vs. Code Complexity",
        "Space vs. Time",
        "Accuracy vs. Speed",
        "Simplicity vs. Functionality"
      ],
      "answer": "B"
    },
    {
      "topic": "Minimum Stack",
      "difficulty": "Hard",
      "question": "In the encoding approach (single variable), if the stored value `x` is less than the current minimum, what does `x` represent?",
      "options": [
        "The new minimum value",
        "The previous minimum value encoded",
        "The original element pushed",
        "An error condition"
      ],
      "answer": "B"
    },
    {
      "topic": "Minimum Stack",
      "difficulty": "Hard",
      "question": "In the encoding method, if `2*new_min - prev_min` results in a value greater than the current min, what does the stored value represent?",
      "options": [
        "The encoded previous minimum",
        "The actual element pushed",
        "The new minimum",
        "The top of stack"
      ],
      "answer": "B"
    },
    {
      "topic": "Minimum Stack",
      "difficulty": "Hard",
      "question": "What is a limitation of the encoding method when dealing with floating-point numbers?",
      "options": [
        "It works perfectly",
        "It requires more memory",
        "The mathematical encoding may introduce precision errors",
        "It becomes O(n) complexity"
      ],
      "answer": "C"
    },
    {
      "topic": "Minimum Stack",
      "difficulty": "Hard",
      "question": "How would you extend a Minimum Stack to also support `getMax()` in O(1) time?",
      "options": [
        "Use a single auxiliary stack for both min and max",
        "Use two separate auxiliary stacks (one for min, one for max)",
        "Use a balanced binary search tree",
        "It is impossible to support both"
      ],
      "answer": "B"
    },
    {
      "topic": "Minimum Stack",
      "difficulty": "Hard",
      "question": "In a multi-threaded environment, what additional consideration is needed for a Minimum Stack?",
      "options": [
        "It must be made thread-safe with synchronization",
        "It must use the encoding method",
        "It cannot be implemented",
        "The auxiliary stack must be avoided"
      ],
      "answer": "A"
    },
    {
      "topic": "Minimum Stack",
      "difficulty": "Hard",
      "question": "If you implement a Minimum Stack using a Min-Heap instead of an auxiliary stack, what would be the time complexity of `getMin()`?",
      "options": [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n log n)"
      ],
      "answer": "A"
    },
    {
      "topic": "Minimum Stack",
      "difficulty": "Hard",
      "question": "What would be the time complexity of `pop()` in the Min-Heap based approach for Minimum Stack?",
      "options": [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n log n)"
      ],
      "answer": "B"
    },
    {
      "topic": "Minimum Stack",
      "difficulty": "Hard",
      "question": "Consider the push sequence: 10, 5, 15, 5, 2. In the auxiliary stack approach storing (value, count) pairs to handle duplicates, what would the auxiliary stack look like?",
      "options": [
        "(10,1), (5,2), (15,1), (2,1)",
        "(10,1), (5,1), (2,1)",
        "(10,1), (5,2), (2,1)",
        "(5,2), (2,1)"
      ],
      "answer": "C"
    },
    {
      "topic": "Minimum Stack",
      "difficulty": "Hard",
      "question": "After pushing 10, 5, 15, 5, 2 and then popping twice, what is the minimum value in the stack using the (value, count) approach from question 29?",
      "options": [
        "2.0",
        "5.0",
        "10.0",
        "15.0"
      ],
      "answer": "B"
    },
    {
      "topic": "The Celebrity problem",
      "difficulty": "Easy",
      "question": "In the Celebrity Problem, what is the definition of a \"celebrity\"?",
      "options": [
        "A person who knows everyone",
        "A person who is known by everyone but knows no one",
        "A person who knows no one",
        "A person who is known by no one"
      ],
      "answer": "B"
    },
    {
      "topic": "The Celebrity problem",
      "difficulty": "Easy",
      "question": "What kind of data structure is typically used to represent the \"knows\" relationship in the Celebrity Problem?",
      "options": [
        "A linked list",
        "A stack",
        "A 2D matrix (adjacency matrix)",
        "A tree"
      ],
      "answer": "C"
    },
    {
      "topic": "The Celebrity problem",
      "difficulty": "Easy",
      "question": "In the Celebrity Problem, if `knows(i, j)` is true, what does it indicate?",
      "options": [
        "Person i knows person j",
        "Person j knows person i",
        "Both know each other",
        "Neither knows the other"
      ],
      "answer": "A"
    },
    {
      "topic": "The Celebrity problem",
      "difficulty": "Easy",
      "question": "What is the minimum number of celebrities possible in a party of N people according to the problem's definition?",
      "options": [
        "",
        "1.0",
        "2.0",
        "N"
      ],
      "answer": "A"
    },
    {
      "topic": "The Celebrity problem",
      "difficulty": "Easy",
      "question": "What is the maximum number of celebrities possible in a party of N people?",
      "options": [
        "",
        "1.0",
        "2.0",
        "N"
      ],
      "answer": "B"
    },
    {
      "topic": "The Celebrity problem",
      "difficulty": "Easy",
      "question": "Which approach is commonly used to solve the Celebrity Problem in O(N) time?",
      "options": [
        "Brute force checking all pairs",
        "Using a stack or two-pointer elimination technique",
        "Using dynamic programming",
        "Using a hash table"
      ],
      "answer": "B"
    },
    {
      "topic": "The Celebrity problem",
      "difficulty": "Easy",
      "question": "In the stack-based approach, how many people are initially pushed onto the stack?",
      "options": [
        "",
        "1.0",
        "All N people",
        "Only the first person"
      ],
      "answer": "C"
    },
    {
      "topic": "The Celebrity problem",
      "difficulty": "Easy",
      "question": "In the elimination phase of the stack approach, two people A and B are popped. If A knows B, what does that imply about A?",
      "options": [
        "A could be a celebrity",
        "A cannot be a celebrity",
        "B cannot be a celebrity",
        "Both could be celebrities"
      ],
      "answer": "B"
    },
    {
      "topic": "The Celebrity problem",
      "difficulty": "Easy",
      "question": "After the elimination phase in the stack approach, how many candidates remain?",
      "options": [
        "",
        "1.0",
        "2.0",
        "N/2"
      ],
      "answer": "B"
    },
    {
      "topic": "The Celebrity problem",
      "difficulty": "Easy",
      "question": "What is the time complexity of the brute force approach to find a celebrity?",
      "options": [
        "O(n)",
        "O(n log n)",
        "O(n^2)",
        "O(1)"
      ],
      "answer": "C"
    },
    {
      "topic": "The Celebrity problem",
      "difficulty": "Medium",
      "question": "After the elimination phase in any O(n) algorithm, why do we need a verification step?",
      "options": [
        "To confirm the candidate is known by everyone",
        "To confirm the candidate knows no one",
        "To confirm both conditions (known by all, knows none)",
        "To count how many people know the candidate"
      ],
      "answer": "C"
    },
    {
      "topic": "The Celebrity problem",
      "difficulty": "Medium",
      "question": "In the verification step, if the candidate knows any other person, what is the result?",
      "options": [
        "The candidate is still a celebrity",
        "There is no celebrity",
        "The candidate is not a celebrity",
        "The candidate is a celebrity only if that person also knows them"
      ],
      "answer": "C"
    },
    {
      "topic": "The Celebrity problem",
      "difficulty": "Medium",
      "question": "Consider a 4x4 matrix where `knows(0,1)=T`, `knows(1,2)=T`, `knows(2,3)=T`, and all others false. Is there a celebrity?",
      "options": [
        "Yes, person 0",
        "Yes, person 3",
        "Yes, person 1",
        "No"
      ],
      "answer": "D"
    },
    {
      "topic": "The Celebrity problem",
      "difficulty": "Medium",
      "question": "In a party of 3 people, if person 0 knows person 1, person 1 knows person 2, and person 2 knows person 0 (a cycle), how many celebrities exist?",
      "options": [
        "3.0",
        "2.0",
        "1.0",
        ""
      ],
      "answer": "D"
    },
    {
      "topic": "The Celebrity problem",
      "difficulty": "Medium",
      "question": "What is the space complexity of the stack-based approach for the Celebrity Problem?",
      "options": [
        "O(n)",
        "O(n^2)",
        "O(log n)",
        "O(1)"
      ],
      "answer": "A"
    },
    {
      "topic": "The Celebrity problem",
      "difficulty": "Medium",
      "question": "In the elimination algorithm, why can we safely eliminate a person as a celebrity candidate?",
      "options": [
        "Because if A knows B, A cannot be a celebrity",
        "Because if A knows B, B cannot be a celebrity",
        "Because if A does not know B, A cannot be a celebrity",
        "Because if A does not know B, B cannot be a celebrity"
      ],
      "answer": "A"
    },
    {
      "topic": "The Celebrity problem",
      "difficulty": "Medium",
      "question": "If there are two people who both satisfy \"known by everyone\" but not \"knows no one\", are they celebrities?",
      "options": [
        "Yes, both are celebrities",
        "Yes, but only one is a celebrity",
        "No, because a celebrity must satisfy both conditions",
        "It depends on the situation"
      ],
      "answer": "C"
    },
    {
      "topic": "The Celebrity problem",
      "difficulty": "Medium",
      "question": "In the verification step, what two conditions must be checked for the candidate C?",
      "options": [
        "`knows(C, i)` is false for all i, and `knows(i, C)` is true for all i â‰ C",
        "`knows(C, i)` is true for all i, and `knows(i, C)` is false for all i â‰ C",
        "`knows(C, C)` must be true",
        "`knows(i, C)` is false for all i, and `knows(C, i)` is true for all i"
      ],
      "answer": "A"
    },
    {
      "topic": "The Celebrity problem",
      "difficulty": "Hard",
      "question": "In the optimal O(n) algorithm, how many times is the `knows(A, B)` function called in the worst case?",
      "options": [
        "n",
        "2n",
        "3n",
        "n^2"
      ],
      "answer": "C"
    },
    {
      "topic": "The Celebrity problem",
      "difficulty": "Hard",
      "question": "If the `knows` relationship is not transitive, can the elimination algorithm still correctly identify a celebrity candidate?",
      "options": [
        "No, it will always fail",
        "Yes, because the elimination is based on pairwise elimination, not transitivity",
        "Yes, but only if the graph is acyclic",
        "No, it requires transitivity"
      ],
      "answer": "B"
    },
    {
      "topic": "The Celebrity problem",
      "difficulty": "Hard",
      "question": "Consider a scenario where person i knows person j, and person j knows person i. What can we conclude from this mutual relationship?",
      "options": [
        "Both could be celebrities",
        "Neither can be a celebrity",
        "One of them must be a celebrity",
        "This scenario is impossible"
      ],
      "answer": "B"
    },
    {
      "topic": "The Celebrity problem",
      "difficulty": "Hard",
      "question": "In the elimination algorithm using a stack, if after processing, the stack is empty, what does that indicate?",
      "options": [
        "There is exactly one celebrity",
        "There are multiple celebrities",
        "There is no celebrity",
        "The algorithm has failed"
      ],
      "answer": "C"
    },
    {
      "topic": "The Celebrity problem",
      "difficulty": "Hard",
      "question": "What is the minimum number of `knows` queries required in the best case to determine there is no celebrity?",
      "options": [
        "1.0",
        "n-1",
        "n",
        "n(n-1)/2"
      ],
      "answer": "B"
    },
    {
      "topic": "The Celebrity problem",
      "difficulty": "Hard",
      "question": "In a party with N people, if there is a celebrity, how many entries in the `knows` matrix will be true (excluding diagonal)?",
      "options": [
        "N-1",
        "2(N-1)",
        "(N-1)^2",
        "N"
      ],
      "answer": "A"
    },
    {
      "topic": "The Celebrity problem",
      "difficulty": "Hard",
      "question": "If the `knows` matrix is such that for all i â‰ j, `knows(i, j)` is true (complete graph), is there a celebrity?",
      "options": [
        "Yes, everyone is a celebrity",
        "Yes, exactly one person",
        "No, because everyone knows others",
        "No, because no one is known by everyone exclusively"
      ],
      "answer": "C"
    },
    {
      "topic": "The Celebrity problem",
      "difficulty": "Hard",
      "question": "In a graph theory perspective, what does a celebrity represent?",
      "options": [
        "A node with out-degree 0 and in-degree N-1",
        "A node with in-degree 0 and out-degree N-1",
        "A node with both in-degree and out-degree N-1",
        "A node with degree N-1"
      ],
      "answer": "A"
    },
    {
      "topic": "The Celebrity problem",
      "difficulty": "Hard",
      "question": "In the two-pointer elimination method, if i and j meet (i == j), what does that indicate?",
      "options": [
        "i is the celebrity candidate",
        "There is no celebrity",
        "The algorithm has failed",
        "We need to restart with different pointers"
      ],
      "answer": "A"
    },
    {
      "topic": "The Celebrity problem",
      "difficulty": "Hard",
      "question": "Suppose we have an O(n) algorithm that returns a candidate. If the verification step fails, what is the correct conclusion?",
      "options": [
        "The candidate is not a celebrity, and there might be no celebrity",
        "The algorithm has a bug",
        "The candidate is still a celebrity",
        "We should try verifying with a different condition"
      ],
      "answer": "A"
    },
    {
      "topic": "Iterative Tower of Hanoi",
      "difficulty": "Easy",
      "question": "The Tower of Hanoi puzzle consists of three rods and a number of disks of different sizes. What is the fundamental rule?",
      "options": [
        "A larger disk can be placed on a smaller disk",
        "A smaller disk can be placed on a larger disk",
        "Disks can be placed in any order",
        "Disks can be moved directly from any rod to any other regardless of size"
      ],
      "answer": "B"
    },
    {
      "topic": "Iterative Tower of Hanoi",
      "difficulty": "Easy",
      "question": "What is the minimum number of moves required to solve the Tower of Hanoi problem with `n` disks?",
      "options": [
        "n",
        "2^n",
        "2^n - 1",
        "n^2"
      ],
      "answer": "C"
    },
    {
      "topic": "Iterative Tower of Hanoi",
      "difficulty": "Easy",
      "question": "In the iterative algorithm, what is used to simulate the recursion?",
      "options": [
        "A queue",
        "A stack",
        "A tree",
        "A graph"
      ],
      "answer": "B"
    },
    {
      "topic": "Iterative Tower of Hanoi",
      "difficulty": "Easy",
      "question": "For an even number of disks, what is the direction of the first move (if pegs are arranged left to right)?",
      "options": [
        "Left to Right",
        "Right to Left",
        "No movement",
        "Depends on disk size"
      ],
      "answer": "A"
    },
    {
      "topic": "Iterative Tower of Hanoi",
      "difficulty": "Easy",
      "question": "For an odd number of disks, what is the direction of the first move (if pegs are arranged left to right)?",
      "options": [
        "Left to Right",
        "Right to Left",
        "No movement",
        "Depends on disk size"
      ],
      "answer": "B"
    },
    {
      "topic": "Iterative Tower of Hanoi",
      "difficulty": "Easy",
      "question": "In the iterative Tower of Hanoi, which disk is moved first?",
      "options": [
        "The largest disk",
        "The smallest disk",
        "Any disk",
        "The middle-sized disk"
      ],
      "answer": "B"
    },
    {
      "topic": "Iterative Tower of Hanoi",
      "difficulty": "Easy",
      "question": "What is the time complexity of the iterative Tower of Hanoi algorithm?",
      "options": [
        "O(n)",
        "O(2^n)",
        "O(n^2)",
        "O(n log n)"
      ],
      "answer": "B"
    },
    {
      "topic": "Iterative Tower of Hanoi",
      "difficulty": "Easy",
      "question": "How many pegs are used in the classic Tower of Hanoi problem?",
      "options": [
        "2.0",
        "3.0",
        "4.0",
        "n"
      ],
      "answer": "B"
    },
    {
      "topic": "Iterative Tower of Hanoi",
      "difficulty": "Easy",
      "question": "In the iterative algorithm, after moving the smallest disk, what is the next step?",
      "options": [
        "Move the smallest disk again",
        "Make the only legal move involving a disk other than the smallest",
        "Move the largest disk",
        "Wait for user input"
      ],
      "answer": "B"
    },
    {
      "topic": "Iterative Tower of Hanoi",
      "difficulty": "Easy",
      "question": "The iterative solution for Tower of Hanoi is based on which mathematical concept?",
      "options": [
        "Gray code",
        "Binary search",
        "Fibonacci sequence",
        "Prime numbers"
      ],
      "answer": "A"
    },
    {
      "topic": "Iterative Tower of Hanoi",
      "difficulty": "Medium",
      "question": "In the iterative algorithm, the movement of the smallest disk follows a pattern. If there are 3 pegs (A, B, C) and an odd number of disks, what is the cyclic order of movement for the smallest disk?",
      "options": [
        "A->B, B->C, C->A",
        "A->C, C->B, B->A",
        "A->B, B->A, A->B",
        "A->C, C->A, A->C"
      ],
      "answer": "B"
    },
    {
      "topic": "Iterative Tower of Hanoi",
      "difficulty": "Medium",
      "question": "In the iterative algorithm, the movement of the smallest disk follows a pattern. If there are 3 pegs (A, B, C) and an even number of disks, what is the cyclic order of movement for the smallest disk?",
      "options": [
        "A->B, B->C, C->A",
        "A->C, C->B, B->A",
        "A->B, B->A, A->B",
        "A->C, C->A, A->C"
      ],
      "answer": "A"
    },
    {
      "topic": "Iterative Tower of Hanoi",
      "difficulty": "Medium",
      "question": "How many stacks are typically used in the iterative implementation of Tower of Hanoi?",
      "options": [
        "1.0",
        "2.0",
        "3.0",
        "n"
      ],
      "answer": "C"
    },
    {
      "topic": "Iterative Tower of Hanoi",
      "difficulty": "Medium",
      "question": "In the iterative algorithm, after moving the smallest disk, how do you decide which other disk to move?",
      "options": [
        "Randomly select a disk",
        "Move the disk that can legally be moved to the peg not occupied by the smallest disk",
        "Always move the largest available disk",
        "Move the disk from the source to destination peg"
      ],
      "answer": "B"
    },
    {
      "topic": "Iterative Tower of Hanoi",
      "difficulty": "Medium",
      "question": "What is the maximum number of stacks that need to be checked to find the legal move involving a non-smallest disk in the iterative algorithm?",
      "options": [
        "1.0",
        "2.0",
        "3.0",
        "4.0"
      ],
      "answer": "C"
    },
    {
      "topic": "Iterative Tower of Hanoi",
      "difficulty": "Medium",
      "question": "In the iterative algorithm, what indicates that the puzzle is solved?",
      "options": [
        "All disks are on the destination peg",
        "The smallest disk has been moved n times",
        "The largest disk has been moved",
        "The source peg is empty"
      ],
      "answer": "A"
    },
    {
      "topic": "Iterative Tower of Hanoi",
      "difficulty": "Medium",
      "question": "What is the space complexity of the iterative algorithm using stacks?",
      "options": [
        "O(1)",
        "O(n)",
        "O(2^n)",
        "O(n^2)"
      ],
      "answer": "B"
    },
    {
      "topic": "Iterative Tower of Hanoi",
      "difficulty": "Medium",
      "question": "How does the iterative algorithm's number of moves compare to the recursive algorithm's number of moves?",
      "options": [
        "Iterative requires more moves",
        "Recursive requires more moves",
        "Both require exactly 2^n - 1 moves",
        "It depends on the implementation"
      ],
      "answer": "C"
    },
    {
      "topic": "Iterative Tower of Hanoi",
      "difficulty": "Medium",
      "question": "In the iterative algorithm using three stacks, what does each stack represent?",
      "options": [
        "The number of moves",
        "The disks on a particular peg",
        "The recursion depth",
        "The history of moves"
      ],
      "answer": "B"
    },
    {
      "topic": "Iterative Tower of Hanoi",
      "difficulty": "Medium",
      "question": "If there are 4 disks (even), what is the first move in the iterative algorithm?",
      "options": [
        "Move disk 1 from A to B",
        "Move disk 1 from A to C",
        "Move disk 4 from A to B",
        "Move disk 2 from A to B"
      ],
      "answer": "A"
    },
    {
      "topic": "Iterative Tower of Hanoi",
      "difficulty": "Hard",
      "question": "In the iterative algorithm based on Gray code, the nth move corresponds to moving which disk?",
      "options": [
        "The disk corresponding to the least significant bit that changes in the binary representation of n",
        "The largest disk",
        "The disk whose size equals the number of trailing zeros in the binary representation of the move number",
        "The smallest disk"
      ],
      "answer": "C"
    },
    {
      "topic": "Iterative Tower of Hanoi",
      "difficulty": "Hard",
      "question": "For a given move number `m` (starting from 1) in the iterative solution, which disk is moved?",
      "options": [
        "Disk number = m mod 3",
        "Disk number = position of least significant set bit in m",
        "Disk number = m mod n",
        "Disk number = floor(log2(m)) + 1"
      ],
      "answer": "B"
    },
    {
      "topic": "Iterative Tower of Hanoi",
      "difficulty": "Hard",
      "question": "In the non-recursive algorithm, what is the relationship between the move number and the source and destination pegs?",
      "options": [
        "They are fixed throughout the game",
        "They depend on the disk number and the total number of disks",
        "They are randomly assigned",
        "They depend only on the move number"
      ],
      "answer": "B"
    },
    {
      "topic": "Iterative Tower of Hanoi",
      "difficulty": "Hard",
      "question": "How can you determine the source and destination pegs for moving the smallest disk on move number `k`?",
      "options": [
        "Using the parity of k and the total number of disks",
        "Using the value of k mod n",
        "Using the disk size",
        "Using a random function"
      ],
      "answer": "A"
    },
    {
      "topic": "Iterative Tower of Hanoi",
      "difficulty": "Hard",
      "question": "If there are 5 disks (odd), on which peg will the smallest disk be after 3 moves?",
      "options": [
        "Peg A",
        "Peg B",
        "Peg C",
        "Cannot be determined"
      ],
      "answer": "B"
    },
    {
      "topic": "Iterative Tower of Hanoi",
      "difficulty": "Hard",
      "question": "What is an advantage of the iterative solution over the recursive solution for Tower of Hanoi?",
      "options": [
        "It uses less memory in terms of call stack",
        "It is easier to understand",
        "It requires fewer moves",
        "It can handle more disks"
      ],
      "answer": "A"
    },
    {
      "topic": "Iterative Tower of Hanoi",
      "difficulty": "Hard",
      "question": "In the iterative algorithm using three stacks, how do you check if a move is legal before performing it?",
      "options": [
        "Compare the top elements of the source and destination stacks",
        "Check if the destination stack is empty",
        "Check if the source stack is empty",
        "All of the above"
      ],
      "answer": "D"
    },
    {
      "topic": "Iterative Tower of Hanoi",
      "difficulty": "Hard",
      "question": "What is the total number of moves performed on disks other than the smallest in a complete solution with n disks?",
      "options": [
        "2^(n-1) - 1",
        "2^n - 1",
        "2^(n-1)",
        "n-1"
      ],
      "answer": "A"
    },
    {
      "topic": "Iterative Tower of Hanoi",
      "difficulty": "Hard",
      "question": "In the binary representation approach, how many bits change when moving from move number (2^(n-1) - 1) to (2^(n-1))?",
      "options": [
        "1.0",
        "n",
        "n-1",
        "2.0"
      ],
      "answer": "B"
    },
    {
      "topic": "Iterative Tower of Hanoi",
      "difficulty": "Hard",
      "question": "If we modify the iterative algorithm to use 4 pegs instead of 3 (Reve's puzzle), what happens to the optimal solution?",
      "options": [
        "It remains 2^n - 1",
        "It becomes more complex with no simple iterative pattern known",
        "It becomes O(n)",
        "It becomes O(n log n)"
      ],
      "answer": "B"
    },
    {
      "topic": "Stock Span problem",
      "difficulty": "Easy",
      "question": "What does the stock span of a stock price on a given day represent?",
      "options": [
        "The price of the stock on that day",
        "The number of consecutive days (including current day) the price has been less than or equal to current day's price",
        "The total volume of stocks traded",
        "The difference between current day's price and previous day's price"
      ],
      "answer": "B"
    },
    {
      "topic": "Stock Span problem",
      "difficulty": "Easy",
      "question": "For the first day of a stock's price history, what is the stock span always equal to?",
      "options": [
        "",
        "1.0",
        "The price itself",
        "The total number of days"
      ],
      "answer": "B"
    },
    {
      "topic": "Stock Span problem",
      "difficulty": "Easy",
      "question": "Which data structure is most commonly used to solve the Stock Span problem efficiently?",
      "options": [
        "Queue",
        "Stack",
        "Heap",
        "Tree"
      ],
      "answer": "B"
    },
    {
      "topic": "Stock Span problem",
      "difficulty": "Easy",
      "question": "What is the time complexity of the brute force approach to compute stock spans?",
      "options": [
        "O(n)",
        "O(n log n)",
        "O(n^2)",
        "O(log n)"
      ],
      "answer": "C"
    },
    {
      "topic": "Stock Span problem",
      "difficulty": "Easy",
      "question": "What is the time complexity of the efficient stack-based solution for the Stock Span problem?",
      "options": [
        "O(n)",
        "O(n^2)",
        "O(n log n)",
        "O(log n)"
      ],
      "answer": "A"
    },
    {
      "topic": "Stock Span problem",
      "difficulty": "Easy",
      "question": "In the stock span problem, what does the stack typically store?",
      "options": [
        "Stock prices only",
        "Indices of days",
        "Stock prices and indices together",
        "Span values"
      ],
      "answer": "B"
    },
    {
      "topic": "Stock Span problem",
      "difficulty": "Easy",
      "question": "Given prices: [100, 80, 60, 70, 60, 75, 85]. What is the span for the price 100 (first day)?",
      "options": [
        "",
        "1.0",
        "100.0",
        "2.0"
      ],
      "answer": "B"
    },
    {
      "topic": "Stock Span problem",
      "difficulty": "Easy",
      "question": "If today's stock price is higher than yesterday's, the span for today will be:",
      "options": [
        "1.0",
        "At least 2",
        "Equal to yesterday's span",
        ""
      ],
      "answer": "B"
    },
    {
      "topic": "Stock Span problem",
      "difficulty": "Easy",
      "question": "The stock span problem is a variation of which classic problem?",
      "options": [
        "Next Greater Element",
        "Previous Greater Element",
        "Next Smaller Element",
        "Previous Smaller or Equal Element"
      ],
      "answer": "B"
    },
    {
      "topic": "Stock Span problem",
      "difficulty": "Easy",
      "question": "In the efficient algorithm, when do we pop elements from the stack?",
      "options": [
        "When we find a price greater than current price",
        "When we find a price less than or equal to current price",
        "After computing each span",
        "At the end of the algorithm"
      ],
      "answer": "B"
    },
    {
      "topic": "Stock Span problem",
      "difficulty": "Medium",
      "question": "Given prices: [10, 4, 5, 90, 120, 80]. What is the span for the price 90 (4th day)?",
      "options": [
        "1.0",
        "2.0",
        "3.0",
        "4.0"
      ],
      "answer": "D"
    },
    {
      "topic": "Stock Span problem",
      "difficulty": "Medium",
      "question": "Given prices: [10, 4, 5, 90, 120, 80]. What is the span for the price 80 (last day)?",
      "options": [
        "1.0",
        "2.0",
        "3.0",
        "4.0"
      ],
      "answer": "A"
    },
    {
      "topic": "Stock Span problem",
      "difficulty": "Medium",
      "question": "In the stack-based algorithm, after processing day i, what does the stack contain?",
      "options": [
        "Indices of days with prices greater than current day's price",
        "Indices of all previous days",
        "Indices of days with prices less than or equal to current day's price",
        "The span values of all previous days"
      ],
      "answer": "A"
    },
    {
      "topic": "Stock Span problem",
      "difficulty": "Medium",
      "question": "What is the space complexity of the efficient stack-based solution?",
      "options": [
        "O(1)",
        "O(n)",
        "O(log n)",
        "O(n^2)"
      ],
      "answer": "B"
    },
    {
      "topic": "Stock Span problem",
      "difficulty": "Medium",
      "question": "If the stock prices are in strictly increasing order, what will be the span values?",
      "options": [
        "All 1's",
        "1, 2, 3, 4, ... n",
        "1, 1, 1, 1, ...",
        "n, n-1, ... 1"
      ],
      "answer": "B"
    },
    {
      "topic": "Stock Span problem",
      "difficulty": "Medium",
      "question": "If the stock prices are in strictly decreasing order, what will be the span values?",
      "options": [
        "All 1's",
        "1, 2, 3, 4, ... n",
        "n, n-1, ... 1",
        "All n's"
      ],
      "answer": "A"
    },
    {
      "topic": "Stock Span problem",
      "difficulty": "Medium",
      "question": "In the efficient algorithm, how is the span for day i calculated when the stack's top has index j?",
      "options": [
        "i - j",
        "i - j + 1",
        "i - j - 1",
        "j - i"
      ],
      "answer": "A"
    },
    {
      "topic": "Stock Span problem",
      "difficulty": "Medium",
      "question": "Given prices: [7, 6, 5, 4, 3, 8]. What is the span for the price 8 (last day)?",
      "options": [
        "1.0",
        "5.0",
        "6.0",
        "4.0"
      ],
      "answer": "C"
    },
    {
      "topic": "Stock Span problem",
      "difficulty": "Medium",
      "question": "What does an empty stack indicate when computing span for day i?",
      "options": [
        "This is the first day",
        "All previous prices are greater than current price",
        "All previous prices are less than or equal to current price",
        "An error has occurred"
      ],
      "answer": "C"
    },
    {
      "topic": "Stock Span problem",
      "difficulty": "Medium",
      "question": "In the stock span problem, if we use a stack that stores prices instead of indices, what additional information would we need?",
      "options": [
        "The day number for each price",
        "The span value for each price",
        "The next greater element",
        "Nothing, it works the same"
      ],
      "answer": "A"
    },
    {
      "topic": "Stock Span problem",
      "difficulty": "Hard",
      "question": "In the stack-based algorithm, what invariant is maintained regarding the stack?",
      "options": [
        "The stack contains indices of days with prices in strictly increasing order",
        "The stack contains indices of days with prices in strictly decreasing order",
        "The stack contains indices of days with prices in any order",
        "The stack contains indices of days with prices equal to current price"
      ],
      "answer": "B"
    },
    {
      "topic": "Stock Span problem",
      "difficulty": "Hard",
      "question": "Given prices: [100, 80, 60, 70, 60, 75, 85]. After processing the price 75 (6th day), what indices are in the stack?",
      "options": [
        "[0, 1, 5]",
        "[0, 5]",
        "[0, 1, 2, 5]",
        "[5]"
      ],
      "answer": "A"
    },
    {
      "topic": "Stock Span problem",
      "difficulty": "Hard",
      "question": "How would you modify the algorithm to compute the span for each day using only a single traversal and O(1) extra space (excluding output array)?",
      "options": [
        "It's impossible",
        "Use two pointers",
        "Use the input array itself as a stack",
        "This is not possible; O(n) space is needed for indices"
      ],
      "answer": "D"
    },
    {
      "topic": "Stock Span problem",
      "difficulty": "Hard",
      "question": "If the stock prices are constant (all days same price), what will be the span for day i?",
      "options": [
        "1.0",
        "i",
        "i+1",
        "n"
      ],
      "answer": "B"
    },
    {
      "topic": "Stock Span problem",
      "difficulty": "Hard",
      "question": "What is the maximum number of times an index can be pushed and popped from the stack in the entire algorithm?",
      "options": [
        "Once each",
        "Twice each (once push, once pop)",
        "n times",
        "It depends on the prices"
      ],
      "answer": "B"
    },
    {
      "topic": "Stock Span problem",
      "difficulty": "Hard",
      "question": "In the context of the stock span problem, what does the term \"consecutive\" imply when there are equal stock prices?",
      "options": [
        "Equal prices break the consecutiveness",
        "Equal prices are included in the count",
        "Equal prices are ignored",
        "Equal prices are counted only if they are exactly the same day"
      ],
      "answer": "B"
    },
    {
      "topic": "Stock Span problem",
      "difficulty": "Hard",
      "question": "How can the stock span problem be solved using a dynamic programming approach?",
      "options": [
        "span[i] = 1 + span[i-1] if price[i] >= price[i-1]",
        "span[i] = 1 + span[i-1] if price[i] < price[i-1]",
        "By using a recursive function with memoization",
        "Dynamic programming cannot solve this problem efficiently"
      ],
      "answer": "A"
    },
    {
      "topic": "Stock Span problem",
      "difficulty": "Hard",
      "question": "In the DP approach, if price[i] >= price[i-1], what additional step is needed beyond adding span[i-1]?",
      "options": [
        "We must also check previous days beyond i-1 using a while loop",
        "Nothing, it's complete",
        "We must reset the count to 1",
        "We must subtract 1 from the result"
      ],
      "answer": "A"
    },
    {
      "topic": "Stock Span problem",
      "difficulty": "Hard",
      "question": "Given the stack-based algorithm is essentially finding the \"previous greater element\" index, what is the formula for span once that index (pge) is found?",
      "options": [
        "i - pge",
        "i - pge + 1",
        "pge - i",
        "pge - i + 1"
      ],
      "answer": "A"
    },
    {
      "topic": "Stock Span problem",
      "difficulty": "Hard",
      "question": "If the input prices are given in an array and we want to output the spans, what is the best possible worst-case time complexity?",
      "options": [
        "O(n)",
        "O(n log n)",
        "O(n^2)",
        "O(log n)"
      ],
      "answer": "A"
    },
    {
      "topic": "Priority Queue using DLL",
      "difficulty": "Easy",
      "question": "What is a Priority Queue?",
      "options": [
        "A queue where elements are processed in FIFO order",
        "A queue where each element has a priority and higher priority elements are processed first",
        "A queue that only stores priority values",
        "A stack with priority"
      ],
      "answer": "B"
    },
    {
      "topic": "Priority Queue using DLL",
      "difficulty": "Easy",
      "question": "In a Priority Queue implemented using a Doubly Linked List (DLL), what does each node typically contain?",
      "options": [
        "Data and a priority value",
        "Only data",
        "Only priority",
        "Data, priority, and two pointers"
      ],
      "answer": "D"
    },
    {
      "topic": "Priority Queue using DLL",
      "difficulty": "Easy",
      "question": "What is an advantage of using a DLL over a Singly Linked List for a Priority Queue?",
      "options": [
        "Easier deletion from the end",
        "Easier deletion from the beginning",
        "Easier deletion from any position (especially from the end)",
        "Less memory usage"
      ],
      "answer": "C"
    },
    {
      "topic": "Priority Queue using DLL",
      "difficulty": "Easy",
      "question": "If we maintain a DLL in sorted order based on priority, where is the highest priority element typically located?",
      "options": [
        "At the head",
        "At the tail",
        "In the middle",
        "Random location"
      ],
      "answer": "A"
    },
    {
      "topic": "Priority Queue using DLL",
      "difficulty": "Easy",
      "question": "What is the time complexity of inserting an element into a sorted DLL-based Priority Queue in the worst case?",
      "options": [
        "O(1)",
        "O(n)",
        "O(log n)",
        "O(n log n)"
      ],
      "answer": "B"
    },
    {
      "topic": "Priority Queue using DLL",
      "difficulty": "Easy",
      "question": "What is the time complexity of deleting the highest priority element from a sorted DLL-based Priority Queue?",
      "options": [
        "O(1)",
        "O(n)",
        "O(log n)",
        "O(n log n)"
      ],
      "answer": "A"
    },
    {
      "topic": "Priority Queue using DLL",
      "difficulty": "Easy",
      "question": "What is the time complexity of peeking (viewing) the highest priority element in a sorted DLL-based Priority Queue?",
      "options": [
        "O(1)",
        "O(n)",
        "O(log n)",
        "O(n log n)"
      ],
      "answer": "A"
    },
    {
      "topic": "Priority Queue using DLL",
      "difficulty": "Easy",
      "question": "In an unsorted DLL-based Priority Queue, where would you find the highest priority element?",
      "options": [
        "At the head",
        "At the tail",
        "You need to traverse the entire list to find it",
        "At a fixed position"
      ],
      "answer": "C"
    },
    {
      "topic": "Priority Queue using DLL",
      "difficulty": "Easy",
      "question": "What is the time complexity of inserting an element into an unsorted DLL-based Priority Queue?",
      "options": [
        "O(1)",
        "O(n)",
        "O(log n)",
        "O(n log n)"
      ],
      "answer": "A"
    },
    {
      "topic": "Priority Queue using DLL",
      "difficulty": "Easy",
      "question": "What is the time complexity of deleting the highest priority element from an unsorted DLL-based Priority Queue?",
      "options": [
        "O(1)",
        "O(n)",
        "O(log n)",
        "O(n log n)"
      ],
      "answer": "B"
    },
    {
      "topic": "Priority Queue using DLL",
      "difficulty": "Medium",
      "question": "In a sorted DLL-based Priority Queue (ascending order with highest priority at tail), what is the time complexity of deletion?",
      "options": [
        "O(1) at head, O(n) at tail",
        "O(1) at tail, O(n) at head",
        "O(1) at both ends",
        "O(n) at both ends"
      ],
      "answer": "B"
    },
    {
      "topic": "Priority Queue using DLL",
      "difficulty": "Medium",
      "question": "Which approach for a DLL-based Priority Queue is better if insertions are frequent and deletions are infrequent?",
      "options": [
        "Sorted order (insert O(n), delete O(1))",
        "Unsorted order (insert O(1), delete O(n))",
        "Both are equally good",
        "It depends on the priority values"
      ],
      "answer": "B"
    },
    {
      "topic": "Priority Queue using DLL",
      "difficulty": "Medium",
      "question": "Which approach for a DLL-based Priority Queue is better if deletions are frequent and insertions are infrequent?",
      "options": [
        "Sorted order (insert O(n), delete O(1))",
        "Unsorted order (insert O(1), delete O(n))",
        "Both are equally good",
        "It depends on the priority values"
      ],
      "answer": "A"
    },
    {
      "topic": "Priority Queue using DLL",
      "difficulty": "Medium",
      "question": "In a sorted DLL, after inserting a new node(new Node prev is null), how many pointers need to be updated in the best case (insertion at beginning)?",
      "options": [
        "2.0",
        "4.0",
        "6.0",
        "1.0"
      ],
      "answer": "A"
    },
    {
      "topic": "Priority Queue using DLL",
      "difficulty": "Medium",
      "question": "In a sorted DLL, after inserting a new node in the middle, how many pointers need to be updated?",
      "options": [
        "2.0",
        "4.0",
        "6.0",
        "8.0"
      ],
      "answer": "B"
    },
    {
      "topic": "Priority Queue using DLL",
      "difficulty": "Medium",
      "question": "What additional pointer does a DLL have compared to a Singly Linked List that makes deletion more flexible?",
      "options": [
        "next",
        "prev",
        "random",
        "child"
      ],
      "answer": "B"
    },
    {
      "topic": "Priority Queue using DLL",
      "difficulty": "Medium",
      "question": "In an unsorted DLL-based Priority Queue, to delete the highest priority element, what is required?",
      "options": [
        "Traverse the list once to find the max, then delete it",
        "Traverse the list twice",
        "Delete the head node",
        "Delete the tail node"
      ],
      "answer": "A"
    },
    {
      "topic": "Priority Queue using DLL",
      "difficulty": "Medium",
      "question": "What is the space complexity of a Priority Queue implemented using a DLL with n elements?",
      "options": [
        "O(1)",
        "O(n)",
        "O(log n)",
        "O(n log n)"
      ],
      "answer": "B"
    },
    {
      "topic": "Priority Queue using DLL",
      "difficulty": "Medium",
      "question": "If two elements have the same priority in a Priority Queue, and FIFO order is desired among them, which DLL structure is more suitable?",
      "options": [
        "Sorted DLL with insertion at the end of same-priority group",
        "Unsorted DLL",
        "Any DLL will maintain FIFO naturally",
        "Priority Queues cannot handle duplicates"
      ],
      "answer": "A"
    },
    {
      "topic": "Priority Queue using DLL",
      "difficulty": "Medium",
      "question": "In a sorted DLL-based Priority Queue, what happens if you insert an element with a priority higher than the current head?",
      "options": [
        "It becomes the new head",
        "It becomes the new tail",
        "It is inserted in the middle",
        "The insertion fails"
      ],
      "answer": "A"
    },
    {
      "topic": "Priority Queue using DLL",
      "difficulty": "Hard",
      "question": "How would you implement a Priority Queue that supports both `getHighestPriority()` and `getLowestPriority()` in O(1) time using a DLL?",
      "options": [
        "Use a sorted DLL and maintain both head and tail pointers",
        "Use two separate DLLs",
        "Use an unsorted DLL and cache both min and max",
        "This is impossible"
      ],
      "answer": "A"
    },
    {
      "topic": "Priority Queue using DLL",
      "difficulty": "Hard",
      "question": "In a sorted DLL-based Priority Queue, what is the worst-case number of comparisons required to find the correct insertion position?",
      "options": [
        "n",
        "n/2",
        "log n",
        "1.0"
      ],
      "answer": "A"
    },
    {
      "topic": "Priority Queue using DLL",
      "difficulty": "Hard",
      "question": "Consider a DLL-based Priority Queue where you need to increase the priority of a given node. What is the time complexity of this operation if the list is sorted?",
      "options": [
        "O(1)",
        "O(n)",
        "O(log n)",
        "O(n log n)"
      ],
      "answer": "B"
    },
    {
      "topic": "Priority Queue using DLL",
      "difficulty": "Hard",
      "question": "Consider a DLL-based Priority Queue where you need to increase the priority of a given node. What is the time complexity if the list is unsorted?",
      "options": [
        "O(1)",
        "O(n)",
        "O(log n)",
        "O(n log n)"
      ],
      "answer": "A"
    },
    {
      "topic": "Priority Queue using DLL",
      "difficulty": "Hard",
      "question": "How does a DLL-based Priority Queue compare to a Binary Heap implementation in terms of memory overhead per element?",
      "options": [
        "DLL has higher overhead (two pointers vs array index)",
        "Heap has higher overhead",
        "Both have the same overhead",
        "It depends on the programming language"
      ],
      "answer": "A"
    },
    {
      "topic": "Priority Queue using DLL",
      "difficulty": "Hard",
      "question": "What is the primary disadvantage of using a sorted DLL for a Priority Queue compared to a Binary Heap?",
      "options": [
        "O(n) insertion vs O(log n) in heap",
        "O(n) deletion vs O(log n) in heap",
        "O(n) peek vs O(1) in heap",
        "Higher memory usage"
      ],
      "answer": "A"
    },
    {
      "topic": "Priority Queue using DLL",
      "difficulty": "Hard",
      "question": "In a DLL-based Priority Queue, if you want to merge two Priority Queues quickly, which structure is more efficient?",
      "options": [
        "Sorted DLL (can merge in O(n+m))",
        "Unsorted DLL (can merge in O(1) by concatenating)",
        "Both are equally efficient",
        "Neither can be merged"
      ],
      "answer": "B"
    },
    {
      "topic": "Priority Queue using DLL",
      "difficulty": "Hard",
      "question": "What is the time complexity to merge two sorted DLL-based Priority Queues into one sorted DLL?",
      "options": [
        "O(1)",
        "O(n + m)",
        "O(n log m)",
        "O(n * m)"
      ],
      "answer": "B"
    },
    {
      "topic": "Priority Queue using DLL",
      "difficulty": "Hard",
      "question": "In a real-time system where predictable response time is critical, which DLL-based Priority Queue implementation would be preferred?",
      "options": [
        "Sorted, because deletion (high priority) is O(1) and predictable",
        "Unsorted, because insertion is O(1) and predictable",
        "Both have unpredictable operations",
        "Neither is suitable for real-time systems"
      ],
      "answer": "A"
    },
    {
      "topic": "Priority Queue using DLL",
      "difficulty": "Hard",
      "question": "If you implement a Priority Queue using a DLL and also maintain a pointer to the highest priority node, what is the time complexity of deleting the highest priority node?",
      "options": [
        "O(1)",
        "O(n)",
        "O(log n)",
        "O(n log n)"
      ],
      "answer": "A"
    },
    {
      "topic": "Sort without extra Space",
      "difficulty": "Easy",
      "question": "What does \"sorting without extra space\" typically mean in algorithm analysis?",
      "options": [
        "Sorting without using any memory",
        "Sorting using O(1) or constant auxiliary space (in-place sorting)",
        "Sorting without using comparisons",
        "Sorting without using temporary variables"
      ],
      "answer": "B"
    },
    {
      "topic": "Sort without extra Space",
      "difficulty": "Easy",
      "question": "Which of the following sorting algorithms is an example of an in-place sorting algorithm?",
      "options": [
        "Merge Sort",
        "Bubble Sort",
        "Counting Sort",
        "Radix Sort"
      ],
      "answer": "B"
    },
    {
      "topic": "Sort without extra Space",
      "difficulty": "Easy",
      "question": "What is the space complexity of Bubble Sort (excluding input array)?",
      "options": [
        "O(n)",
        "O(log n)",
        "O(1)",
        "O(n log n)"
      ],
      "answer": "C"
    },
    {
      "topic": "Sort without extra Space",
      "difficulty": "Easy",
      "question": "Which sorting algorithm is NOT typically in-place?",
      "options": [
        "Quick Sort",
        "Insertion Sort",
        "Merge Sort",
        "Selection Sort"
      ],
      "answer": "C"
    },
    {
      "topic": "Sort without extra Space",
      "difficulty": "Easy",
      "question": "Why is standard Merge Sort not considered in-place?",
      "options": [
        "It has O(n^2) time complexity",
        "It requires O(n) auxiliary space for merging",
        "It is recursive",
        "It is unstable"
      ],
      "answer": "B"
    },
    {
      "topic": "Sort without extra Space",
      "difficulty": "Easy",
      "question": "What is the space complexity of Selection Sort?",
      "options": [
        "O(1)",
        "O(n)",
        "O(log n)",
        "O(n^2)"
      ],
      "answer": "A"
    },
    {
      "topic": "Sort without extra Space",
      "difficulty": "Easy",
      "question": "In-place sorting algorithms modify which of the following?",
      "options": [
        "The input array itself",
        "A copy of the input array",
        "A new array created for output",
        "A linked list representation"
      ],
      "answer": "A"
    },
    {
      "topic": "Sort without extra Space",
      "difficulty": "Easy",
      "question": "Which of the following is an in-place sorting algorithm that works by repeatedly swapping adjacent elements if they are in wrong order?",
      "options": [
        "Quick Sort",
        "Merge Sort",
        "Bubble Sort",
        "Heap Sort"
      ],
      "answer": "C"
    },
    {
      "topic": "Sort without extra Space",
      "difficulty": "Easy",
      "question": "What is the space complexity of Insertion Sort?",
      "options": [
        "O(1)",
        "O(n)",
        "O(log n)",
        "O(n log n)"
      ],
      "answer": "A"
    },
    {
      "topic": "Sort without extra Space",
      "difficulty": "Easy",
      "question": "Heap Sort is considered in-place because it uses:",
      "options": [
        "O(1) auxiliary space",
        "O(log n) auxiliary space",
        "O(n) auxiliary space",
        "O(n log n) auxiliary space"
      ],
      "answer": "A"
    },
    {
      "topic": "Sort without extra Space",
      "difficulty": "Medium",
      "question": "Quick Sort's in-place implementation uses recursion. What contributes to its auxiliary space?",
      "options": [
        "The input array",
        "The recursion stack",
        "Temporary arrays for merging",
        "The pivot element"
      ],
      "answer": "B"
    },
    {
      "topic": "Sort without extra Space",
      "difficulty": "Medium",
      "question": "What is the worst-case space complexity of a properly implemented in-place Quick Sort (considering stack space)?",
      "options": [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n log n)"
      ],
      "answer": "C"
    },
    {
      "topic": "Sort without extra Space",
      "difficulty": "Medium",
      "question": "What is the best-case space complexity of a properly implemented in-place Quick Sort (considering stack space)?",
      "options": [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n log n)"
      ],
      "answer": "B"
    },
    {
      "topic": "Sort without extra Space",
      "difficulty": "Medium",
      "question": "Which of the following is an in-place sorting algorithm that uses a binary heap data structure?",
      "options": [
        "Heap Sort",
        "Merge Sort",
        "Counting Sort",
        "Radix Sort"
      ],
      "answer": "A"
    },
    {
      "topic": "Sort without extra Space",
      "difficulty": "Medium",
      "question": "What is a common technique to make Merge Sort in-place?",
      "options": [
        "Using linked lists instead of arrays",
        "Using a complex rotation-based merging algorithm",
        "Using extra memory for the merge step",
        "It cannot be made in-place"
      ],
      "answer": "B"
    },
    {
      "topic": "Sort without extra Space",
      "difficulty": "Medium",
      "question": "The \"in-place\" property is most important when:",
      "options": [
        "Sorting small arrays",
        "Memory is limited or expensive",
        "Sorting needs to be stable",
        "Sorting needs to be parallelized"
      ],
      "answer": "B"
    },
    {
      "topic": "Sort without extra Space",
      "difficulty": "Medium",
      "question": "Which sorting algorithm can be implemented as in-place but its standard implementation often uses O(n) extra space for stability?",
      "options": [
        "Quick Sort",
        "Heap Sort",
        "Merge Sort",
        "Selection Sort"
      ],
      "answer": "C"
    },
    {
      "topic": "Sort without extra Space",
      "difficulty": "Medium",
      "question": "What is the space complexity of Cycle Sort, an in-place sorting algorithm?",
      "options": [
        "O(1)",
        "O(n)",
        "O(log n)",
        "O(n^2)"
      ],
      "answer": "A"
    },
    {
      "topic": "Sort without extra Space",
      "difficulty": "Medium",
      "question": "Which of the following statements is true about in-place sorting algorithms?",
      "options": [
        "They always have O(n log n) time complexity",
        "They never use any extra memory, even for variables",
        "They use only O(1) extra space (excluding recursion stack)",
        "They cannot be stable"
      ],
      "answer": "C"
    },
    {
      "topic": "Sort without extra Space",
      "difficulty": "Medium",
      "question": "Shell Sort, an extension of Insertion Sort, has what space complexity?",
      "options": [
        "O(1)",
        "O(n)",
        "O(log n)",
        "O(n log n)"
      ],
      "answer": "A"
    },
    {
      "topic": "Sort without extra Space",
      "difficulty": "Hard",
      "question": "How can Quick Sort be modified to guarantee O(log n) space complexity in the worst case?",
      "options": [
        "Always pick the first element as pivot",
        "Use tail recursion optimization on the larger partition",
        "Use Iterative Quick Sort",
        "Use a random pivot"
      ],
      "answer": "B"
    },
    {
      "topic": "Sort without extra Space",
      "difficulty": "Hard",
      "question": "What is the main challenge in implementing an in-place, stable Merge Sort?",
      "options": [
        "Recursion depth",
        "Maintaining stability while merging in O(1) space",
        "Handling duplicate values",
        "Time complexity becomes O(n^3)"
      ],
      "answer": "B"
    },
    {
      "topic": "Sort without extra Space",
      "difficulty": "Hard",
      "question": "Block sort (e.g., WikiSort, GrailSort) is notable for being:",
      "options": [
        "An in-place, unstable sorting algorithm",
        "An in-place, stable sorting algorithm with O(n log n) time",
        "A non-comparison based sorting algorithm",
        "An algorithm with O(n) time complexity"
      ],
      "answer": "B"
    },
    {
      "topic": "Sort without extra Space",
      "difficulty": "Hard",
      "question": "In an in-place sorting context, what does \"stability\" typically force a trade-off with?",
      "options": [
        "Time complexity",
        "Space complexity",
        "Both time and space",
        "Readability"
      ],
      "answer": "B"
    },
    {
      "topic": "Sort without extra Space",
      "difficulty": "Hard",
      "question": "Which of the following sorts is in-place, non-recursive, and has a worst-case space complexity of O(1)?",
      "options": [
        "Recursive Quick Sort",
        "Merge Sort",
        "Iterative Heap Sort",
        "Bubble Sort"
      ],
      "answer": "C"
    },
    {
      "topic": "Sort without extra Space",
      "difficulty": "Hard",
      "question": "What is the space complexity of the \"Dutch National Flag\" algorithm (3-way partitioning)?",
      "options": [
        "O(1)",
        "O(n)",
        "O(3)",
        "O(log n)"
      ],
      "answer": "A"
    },
    {
      "topic": "Sort without extra Space",
      "difficulty": "Hard",
      "question": "For sorting a linked list, why is \"in-place\" defined differently than for arrays?",
      "options": [
        "Linked lists can be sorted by rearranging links without extra node allocation",
        "Linked lists cannot be sorted in-place",
        "Linked lists always require extra space",
        "In-place means something else for linked lists"
      ],
      "answer": "A"
    },
    {
      "topic": "Sort without extra Space",
      "difficulty": "Hard",
      "question": "What is the minimum number of extra variables (space) required to implement Bubble Sort?",
      "options": [
        "",
        "1.0",
        "2.0",
        "n"
      ],
      "answer": "B"
    },
    {
      "topic": "Sort without extra Space",
      "difficulty": "Hard",
      "question": "In the context of sorting without extra space, what does \"O(1) auxiliary space\" exclude?",
      "options": [
        "The input array itself",
        "Loop counters and temporary swap variables",
        "Recursion stack space",
        "Both A and C"
      ],
      "answer": "D"
    },
    {
      "topic": "Sort without extra Space",
      "difficulty": "Hard",
      "question": "Which sorting algorithm is in-place, comparison-based, and has a best-case time complexity of O(n)?",
      "options": [
        "Heap Sort",
        "Quick Sort",
        "Insertion Sort",
        "Selection Sort"
      ],
      "answer": "C"
    },
    {
      "topic": "Stack permutations",
      "difficulty": "Easy",
      "question": "What is a stack permutation?",
      "options": [
        "Sorting a stack using another stack",
        "A permutation of input that can be produced by passing it through a stack",
        "The order of elements in a stack after multiple pushes",
        "Reversing a stack"
      ],
      "answer": "B"
    },
    {
      "topic": "Stack permutations",
      "difficulty": "Easy",
      "question": "In the context of stack permutations, what operations are allowed on the stack?",
      "options": [
        "Only push",
        "Only pop",
        "Both push and pop",
        "Neither push nor pop"
      ],
      "answer": "C"
    },
    {
      "topic": "Stack permutations",
      "difficulty": "Easy",
      "question": "Given an input sequence [1,2,3] and a stack, which of the following output sequences is NOT possible?",
      "options": [
        "1,2,3",
        "3,2,1",
        "2,1,3",
        "3,1,2"
      ],
      "answer": "D"
    },
    {
      "topic": "Stack permutations",
      "difficulty": "Easy",
      "question": "What data structure is used to simulate stack permutations?",
      "options": [
        "Queue",
        "Stack",
        "Array",
        "Linked List"
      ],
      "answer": "B"
    },
    {
      "topic": "Stack permutations",
      "difficulty": "Easy",
      "question": "In stack permutation, what is the initial state of the stack?",
      "options": [
        "Full",
        "Empty",
        "Contains input elements",
        "Contains output elements"
      ],
      "answer": "B"
    },
    {
      "topic": "Stack permutations",
      "difficulty": "Easy",
      "question": "If the input sequence is [1,2,3,4] and the output is [1,2,3,4], what push/pop pattern occurred?",
      "options": [
        "Push all, then pop all",
        "Push 1, pop 1, push 2, pop 2, push 3, pop 3, push 4, pop 4",
        "Push 1, push 2, pop 2, pop 1, ...",
        "Push 4, pop 4, push 3, pop 3, ..."
      ],
      "answer": "B"
    },
    {
      "topic": "Stack permutations",
      "difficulty": "Easy",
      "question": "Which of the following output sequences is possible from input [1,2]?",
      "options": [
        "2,1 only",
        "1,2 only",
        "Both 1,2 and 2,1",
        "Neither 1,2 nor 2,1"
      ],
      "answer": "C"
    },
    {
      "topic": "Stack permutations",
      "difficulty": "Easy",
      "question": "What is the time complexity to check if a given permutation is a valid stack permutation?",
      "options": [
        "O(n)",
        "O(n^2)",
        "O(log n)",
        "O(n log n)"
      ],
      "answer": "A"
    },
    {
      "topic": "Stack permutations",
      "difficulty": "Easy",
      "question": "What is the space complexity of the algorithm to check stack permutations (excluding input)?",
      "options": [
        "O(1)",
        "O(n)",
        "O(log n)",
        "O(n^2)"
      ],
      "answer": "B"
    },
    {
      "topic": "Stack permutations",
      "difficulty": "Easy",
      "question": "In stack permutation simulation, what do we do when the top of stack matches the next output element?",
      "options": [
        "Push next input",
        "Pop from stack",
        "Push and then pop",
        "Ignore"
      ],
      "answer": "B"
    },
    {
      "topic": "Stack permutations",
      "difficulty": "Medium",
      "question": "In the simulation algorithm, if we have processed all input but the stack is not empty, and the stack's top does not match the next output, what does this indicate?",
      "options": [
        "The permutation is valid",
        "The permutation is invalid",
        "We need to push more input",
        "The stack is too small"
      ],
      "answer": "B"
    },
    {
      "topic": "Stack permutations",
      "difficulty": "Medium",
      "question": "How many distinct stack permutations are possible for input sequence [1,2,3]?",
      "options": [
        "3.0",
        "4.0",
        "5.0",
        "6.0"
      ],
      "answer": "C"
    },
    {
      "topic": "Stack permutations",
      "difficulty": "Medium",
      "question": "How many distinct stack permutations are possible for input sequence [1,2,3,4]?",
      "options": [
        "10.0",
        "12.0",
        "14.0",
        "16.0"
      ],
      "answer": "C"
    },
    {
      "topic": "Stack permutations",
      "difficulty": "Medium",
      "question": "The number of stack permutations for n elements is given by which number sequence?",
      "options": [
        "Fibonacci numbers",
        "Catalan numbers",
        "Prime numbers",
        "Factorial numbers"
      ],
      "answer": "B"
    },
    {
      "topic": "Stack permutations",
      "difficulty": "Medium",
      "question": "What is the Catalan number for n=4?",
      "options": [
        "5.0",
        "10.0",
        "14.0",
        "42.0"
      ],
      "answer": "C"
    },
    {
      "topic": "Stack permutations",
      "difficulty": "Medium",
      "question": "In the stack permutation simulation, what does it mean when we cannot push more input (input exhausted) and the stack's top doesn't match the next output?",
      "options": [
        "The permutation is valid",
        "The permutation is invalid",
        "We need to pop anyway",
        "The simulation is incomplete"
      ],
      "answer": "B"
    },
    {
      "topic": "Stack permutations",
      "difficulty": "Medium",
      "question": "Which of the following patterns in a permutation indicates it is NOT a valid stack permutation?",
      "options": [
        "1,3,2",
        "2,1,3",
        "3,1,2",
        "2,3,1"
      ],
      "answer": "C"
    },
    {
      "topic": "Stack permutations",
      "difficulty": "Medium",
      "question": "The pattern that makes a permutation invalid for stack permutation is known as:",
      "options": [
        "1-3-2 pattern",
        "2-3-1 pattern",
        "3-1-2 pattern",
        "1-2-3 pattern"
      ],
      "answer": "C"
    },
    {
      "topic": "Stack permutations",
      "difficulty": "Medium",
      "question": "What is the maximum size of the stack needed to generate a valid stack permutation?",
      "options": [
        "n",
        "n-1",
        "n/2",
        "Depends on the permutation"
      ],
      "answer": "A"
    },
    {
      "topic": "Stack permutations",
      "difficulty": "Hard",
      "question": "Given input [1,2,3,4], which of the following permutations requires the largest stack size?",
      "options": [
        "1,2,3,4",
        "4,3,2,1",
        "2,3,4,1",
        "1,3,2,4"
      ],
      "answer": "B"
    },
    {
      "topic": "Stack permutations",
      "difficulty": "Hard",
      "question": "In the simulation algorithm, if the next output element is found in the stack but not at the top, what does this indicate?",
      "options": [
        "The permutation is valid, just push more",
        "The permutation is invalid",
        "We need to pop from bottom",
        "We need to reverse the stack"
      ],
      "answer": "B"
    },
    {
      "topic": "Stack permutations",
      "difficulty": "Hard",
      "question": "What is the relationship between stack permutations and permutation patterns avoidance?",
      "options": [
        "Stack permutations avoid the pattern 231",
        "Stack permutations avoid the pattern 312",
        "Stack permutations avoid the pattern 123",
        "Stack permutations avoid the pattern 321"
      ],
      "answer": "B"
    },
    {
      "topic": "Stack permutations",
      "difficulty": "Hard",
      "question": "Which of the following permutations of [1,2,3,4] avoids the forbidden pattern and is therefore a valid stack permutation?",
      "options": [
        "3,1,4,2",
        "2,4,1,3",
        "3,2,1,4",
        "4,1,3,2"
      ],
      "answer": "C"
    },
    {
      "topic": "Stack permutations",
      "difficulty": "Hard",
      "question": "Given input [1,2,3,4], what is the total number of valid stack permutations?",
      "options": [
        "12.0",
        "14.0",
        "16.0",
        "24.0"
      ],
      "answer": "B"
    },
    {
      "topic": "Stack permutations",
      "difficulty": "Hard",
      "question": "In the recursive formulation, the number of stack permutations S(n) can be expressed as:",
      "options": [
        "S(n) = S(n-1) + S(n-2)",
        "S(n) = sum(S(k-1) * S(n-k)) for k=1..n",
        "S(n) = n * S(n-1)",
        "S(n) = 2^n - 1"
      ],
      "answer": "B"
    },
    {
      "topic": "Stack permutations",
      "difficulty": "Hard",
      "question": "What is the probability that a random permutation of n elements is a valid stack permutation as n approaches infinity?",
      "options": [
        "",
        "0.5",
        "1.0",
        "Approaches 1/e"
      ],
      "answer": "A"
    },
    {
      "topic": "Stack permutations",
      "difficulty": "Hard",
      "question": "In the simulation algorithm, if input is [1,2,3,4] and output is [2,4,3,1], what is the sequence of pushes and pops?",
      "options": [
        "push1, push2, pop2, push3, push4, pop4, pop3, pop1",
        "push1, push2, pop2, push3, pop3, push4, pop4, pop1",
        "push1, push2, pop2, push3, push4, pop3, pop4, pop1",
        "push1, push2, pop2, push3, pop3, pop4, pop1, push4"
      ],
      "answer": "A"
    },
    {
      "topic": "Stack permutations",
      "difficulty": "Hard",
      "question": "Which of the following statements is true about stack permutations?",
      "options": [
        "Every permutation is a stack permutation",
        "Stack permutations are a subset of all permutations",
        "Stack permutations are the same as permutations sortable by a queue",
        "No permutation of length > 2 is a stack permutation"
      ],
      "answer": "B"
    },
    {
      "topic": "Stack permutations",
      "difficulty": "Hard",
      "question": "How does the concept of stack permutations relate to railroad switching problems?",
      "options": [
        "It models the same problem of rearranging cars using a siding track",
        "It is unrelated",
        "It models train collisions",
        "It models train scheduling with multiple tracks"
      ],
      "answer": "A"
    }
  ],
  "CAT 2": [
    {
      "topic": "Max Sliding Window",
      "difficulty": "Easy",
      "question": "In the \"Maximum of all subarrays of size k\" (Sliding Window Maximum) problem, what is k?",
      "options": [
        "The number of elements in the array",
        "The size of the sliding window",
        "The maximum value in the array",
        "The number of queries"
      ],
      "answer": "B"
    },
    {
      "topic": "Max Sliding Window",
      "difficulty": "Easy",
      "question": "Given an array [1,3,-1,-3,5,3,6,7] and k=3, what is the first window's maximum?",
      "options": [
        "1.0",
        "3.0",
        "-1.0",
        "5.0"
      ],
      "answer": "B"
    },
    {
      "topic": "Max Sliding Window",
      "difficulty": "Easy",
      "question": "What is the brute force time complexity to solve the Sliding Window Maximum problem for an array of size n and window size k?",
      "options": [
        "O(n)",
        "O(n log k)",
        "O(n * k)",
        "O(k)"
      ],
      "answer": "C"
    },
    {
      "topic": "Max Sliding Window",
      "difficulty": "Easy",
      "question": "Which data structure is most commonly used to solve the Sliding Window Maximum problem efficiently?",
      "options": [
        "Stack",
        "Queue",
        "Deque (Double-ended queue)",
        "Priority Queue"
      ],
      "answer": "C"
    },
    {
      "topic": "Max Sliding Window",
      "difficulty": "Easy",
      "question": "In the efficient deque-based solution, what order are elements maintained in the deque?",
      "options": [
        "Increasing order of values",
        "Decreasing order of values",
        "Order of indices",
        "Random order"
      ],
      "answer": "B"
    },
    {
      "topic": "Max Sliding Window",
      "difficulty": "Easy",
      "question": "In the deque-based solution, what does the front of the deque represent?",
      "options": [
        "The smallest element in current window",
        "The index of the maximum element for the current window",
        "The newest element in the window",
        "The oldest element in the window"
      ],
      "answer": "B"
    },
    {
      "topic": "Max Sliding Window",
      "difficulty": "Easy",
      "question": "What is the time complexity of the efficient deque-based solution?",
      "options": [
        "O(n * k)",
        "O(n log k)",
        "O(n)",
        "O(k)"
      ],
      "answer": "C"
    },
    {
      "topic": "Max Sliding Window",
      "difficulty": "Easy",
      "question": "What is the space complexity of the deque-based solution (excluding output array)?",
      "options": [
        "O(1)",
        "O(k)",
        "O(n)",
        "O(log k)"
      ],
      "answer": "B"
    },
    {
      "topic": "Max Sliding Window",
      "difficulty": "Easy",
      "question": "In the sliding window maximum problem, if k=1, what are the outputs?",
      "options": [
        "The array itself",
        "The maximum of the array",
        "An empty array",
        "The first element only"
      ],
      "answer": "A"
    },
    {
      "topic": "Max Sliding Window",
      "difficulty": "Easy",
      "question": "If the array is sorted in decreasing order, what is the maximum of each window of size k?",
      "options": [
        "The first element of each window",
        "The last element of each window",
        "The middle element of each window",
        "It varies"
      ],
      "answer": "A"
    },
    {
      "topic": "Max Sliding Window",
      "difficulty": "Medium",
      "question": "In the deque-based algorithm, when do you remove elements from the front of the deque?",
      "options": [
        "When they are smaller than current element",
        "When their index is out of the current window",
        "When they are larger than current element",
        "At regular intervals"
      ],
      "answer": "B"
    },
    {
      "topic": "Max Sliding Window",
      "difficulty": "Medium",
      "question": "In the deque-based algorithm, when do you remove elements from the back of the deque?",
      "options": [
        "When they are out of window",
        "When they are smaller than or equal to the current element",
        "When they are larger than the current element",
        "Never"
      ],
      "answer": "B"
    },
    {
      "topic": "Max Sliding Window",
      "difficulty": "Medium",
      "question": "Given array [2,5,3,8,6,1] and k=3, what is the deque's state after processing the first 3 elements (index 0,1,2)?",
      "options": [
        "[5,3] (indices)",
        "[5,3,8]",
        "[2,5,3]",
        "[3,8]"
      ],
      "answer": "A"
    },
    {
      "topic": "Max Sliding Window",
      "difficulty": "Medium",
      "question": "In the deque-based solution, what is stored in the deque?",
      "options": [
        "Actual values",
        "Indices of elements",
        "Both values and indices",
        "Only the maximum value"
      ],
      "answer": "B"
    },
    {
      "topic": "Max Sliding Window",
      "difficulty": "Medium",
      "question": "Why are indices stored in the deque instead of values?",
      "options": [
        "To save memory",
        "To easily check if an element is out of the current window",
        "To make comparisons faster",
        "Because values cannot be stored in a deque"
      ],
      "answer": "B"
    },
    {
      "topic": "Max Sliding Window",
      "difficulty": "Medium",
      "question": "For array [1,3,1,2,0,5] and k=3, what is the output array?",
      "options": [
        "[3,3,2,5]",
        "[3,3,2,5,5]",
        "[1,3,3,2,5]",
        "[3,1,2,0,5]"
      ],
      "answer": "A"
    },
    {
      "topic": "Max Sliding Window",
      "difficulty": "Medium",
      "question": "What is the output if k > n (window size larger than array)?",
      "options": [
        "Empty array",
        "Array with one element (maximum of whole array)",
        "Error",
        "Array of size n"
      ],
      "answer": "B"
    },
    {
      "topic": "Max Sliding Window",
      "difficulty": "Medium",
      "question": "Which of the following problems is a variation of Sliding Window Maximum?",
      "options": [
        "Finding minimum in sliding window",
        "Finding median in sliding window",
        "Finding average in sliding window",
        "All of the above"
      ],
      "answer": "D"
    },
    {
      "topic": "Max Sliding Window",
      "difficulty": "Medium",
      "question": "In the deque approach, how many times is each element pushed and popped?",
      "options": [
        "Once each",
        "Twice each (once push, once pop)",
        "k times",
        "n times"
      ],
      "answer": "B"
    },
    {
      "topic": "Max Sliding Window",
      "difficulty": "Medium",
      "question": "If we use a max-heap (priority queue) to solve this problem, what would be the time complexity?",
      "options": [
        "O(n log k)",
        "O(n)",
        "O(nk)",
        "O(k log n)"
      ],
      "answer": "A"
    },
    {
      "topic": "Max Sliding Window",
      "difficulty": "Hard",
      "question": "In the deque algorithm, why is it correct to remove elements from the back that are smaller than the current element?",
      "options": [
        "Because they will never be needed again as they are smaller and come earlier",
        "Because they are out of the window",
        "Because we only need the maximum",
        "To save space"
      ],
      "answer": "A"
    },
    {
      "topic": "Max Sliding Window",
      "difficulty": "Hard",
      "question": "Given an array of size n and window size k, how many windows are there?",
      "options": [
        "n",
        "n - k + 1",
        "n - k",
        "k"
      ],
      "answer": "B"
    },
    {
      "topic": "Max Sliding Window",
      "difficulty": "Hard",
      "question": "What is the maximum number of elements that can be in the deque at any time?",
      "options": [
        "k",
        "n",
        "k+1",
        "n-k+1"
      ],
      "answer": "A"
    },
    {
      "topic": "Max Sliding Window",
      "difficulty": "Hard",
      "question": "How would you modify the algorithm to find the minimum in each sliding window?",
      "options": [
        "Reverse the comparison (remove from back when larger than current)",
        "Use a min-heap instead",
        "Store elements in increasing order in deque",
        "Both A and C"
      ],
      "answer": "D"
    },
    {
      "topic": "Max Sliding Window",
      "difficulty": "Hard",
      "question": "For a stream of data (infinite array), which approach is best suited for sliding window maximum?",
      "options": [
        "Deque-based approach",
        "Max-heap approach",
        "Brute force",
        "Cannot be done"
      ],
      "answer": "A"
    },
    {
      "topic": "Max Sliding Window",
      "difficulty": "Hard",
      "question": "What is the space complexity of the deque approach if the input is a stream and we don't store the entire array?",
      "options": [
        "O(k)",
        "O(n)",
        "O(1)",
        "Depends on stream length"
      ],
      "answer": "A"
    },
    {
      "topic": "Max Sliding Window",
      "difficulty": "Hard",
      "question": "Consider array [4,3,2,1,5,4,3,2] and k=3. After processing index 4 (value 5), what indices are in the deque?",
      "options": [
        "[4]",
        "[4,5]",
        "[3,4]",
        "[2,3,4]"
      ],
      "answer": "A"
    },
    {
      "topic": "Max Sliding Window",
      "difficulty": "Hard",
      "question": "How does the sliding window maximum problem change if the array is circular?",
      "options": [
        "No change",
        "We need to consider n windows of size k",
        "We need to handle wrap-around",
        "It becomes impossible"
      ],
      "answer": "C"
    },
    {
      "topic": "Max Sliding Window",
      "difficulty": "Hard",
      "question": "For an array with all equal elements, what is the size of the deque throughout the algorithm?",
      "options": [
        "1.0",
        "k",
        "n",
        "Depends on the value"
      ],
      "answer": "A"
    },
    {
      "topic": "Recover the BST",
      "difficulty": "Easy",
      "question": "What does BST stand for?",
      "options": [
        "Binary Search Tree",
        "Balanced Search Tree",
        "Binary Sort Tree",
        "Basic Search Tree"
      ],
      "answer": "A"
    },
    {
      "topic": "Recover the BST",
      "difficulty": "Easy",
      "question": "What is the key property of a Binary Search Tree (BST)?",
      "options": [
        "Left child < Parent < Right child",
        "Left child > Parent > Right child",
        "Left child = Parent = Right child",
        "No specific order"
      ],
      "answer": "A"
    },
    {
      "topic": "Recover the BST",
      "difficulty": "Easy",
      "question": "In the \"Recover BST\" problem, what is wrong with the tree?",
      "options": [
        "It is unbalanced",
        "Two nodes have been swapped by mistake",
        "It has a cycle",
        "It is empty"
      ],
      "answer": "B"
    },
    {
      "topic": "Recover the BST",
      "difficulty": "Easy",
      "question": "How many nodes are incorrectly placed in a BST that needs recovery?",
      "options": [
        "One",
        "Two",
        "Three",
        "It varies"
      ],
      "answer": "B"
    },
    {
      "topic": "Recover the BST",
      "difficulty": "Easy",
      "question": "Which traversal of a BST gives nodes in sorted order?",
      "options": [
        "Preorder",
        "Inorder",
        "Postorder",
        "Level order"
      ],
      "answer": "B"
    },
    {
      "topic": "Recover the BST",
      "difficulty": "Easy",
      "question": "If two nodes are swapped in a BST, what happens to the inorder traversal?",
      "options": [
        "It becomes reverse sorted",
        "It will have exactly two elements out of place",
        "It remains sorted",
        "It becomes random"
      ],
      "answer": "B"
    },
    {
      "topic": "Recover the BST",
      "difficulty": "Easy",
      "question": "What is the time complexity of the brute force approach to recover a BST (sort and reconstruct)?",
      "options": [
        "O(n)",
        "O(n log n)",
        "O(n^2)",
        "O(log n)"
      ],
      "answer": "B"
    },
    {
      "topic": "Recover the BST",
      "difficulty": "Easy",
      "question": "What is the space complexity of the brute force approach (inorder store and sort)?",
      "options": [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n log n)"
      ],
      "answer": "C"
    },
    {
      "topic": "Recover the BST",
      "difficulty": "Easy",
      "question": "In the efficient Morris traversal-based solution, what is the space complexity?",
      "options": [
        "O(n)",
        "O(log n)",
        "O(1)",
        "O(n log n)"
      ],
      "answer": "C"
    },
    {
      "topic": "Recover the BST",
      "difficulty": "Easy",
      "question": "After recovering a BST by swapping the two nodes back, what property is restored?",
      "options": [
        "Tree is balanced",
        "Inorder traversal is sorted",
        "Tree is complete",
        "Tree is full"
      ],
      "answer": "B"
    },
    {
      "topic": "Recover the BST",
      "difficulty": "Medium",
      "question": "In the inorder traversal of a BST with two swapped nodes, how many times will we find a pair where previous > current?",
      "options": [
        "Always 1",
        "Always 2",
        "Either 1 or 2",
        ""
      ],
      "answer": "C"
    },
    {
      "topic": "Recover the BST",
      "difficulty": "Medium",
      "question": "If the swapped nodes are adjacent in inorder traversal, how many violations are detected?",
      "options": [
        "",
        "1.0",
        "2.0",
        "3.0"
      ],
      "answer": "B"
    },
    {
      "topic": "Recover the BST",
      "difficulty": "Medium",
      "question": "If the swapped nodes are NOT adjacent in inorder traversal, how many violations are detected?",
      "options": [
        "1.0",
        "2.0",
        "3.0",
        "4.0"
      ],
      "answer": "B"
    },
    {
      "topic": "Recover the BST",
      "difficulty": "Medium",
      "question": "In the violation detection during inorder traversal, when you find prev > current, what does the 'prev' node represent?",
      "options": [
        "The first misplaced node",
        "The second misplaced node",
        "One of the misplaced nodes",
        "A correctly placed node"
      ],
      "answer": "C"
    },
    {
      "topic": "Recover the BST",
      "difficulty": "Medium",
      "question": "In the violation detection during inorder traversal, when you find prev > current, what does the 'current' node represent?",
      "options": [
        "The first misplaced node",
        "The second misplaced node",
        "One of the misplaced nodes",
        "A correctly placed node"
      ],
      "answer": "C"
    },
    {
      "topic": "Recover the BST",
      "difficulty": "Medium",
      "question": "Given an inorder traversal [1,3,2,4] of a BST with swapped nodes, which nodes are swapped?",
      "options": [
        "1 and 2",
        "3 and 2",
        "3 and 4",
        "1 and 4"
      ],
      "answer": "B"
    },
    {
      "topic": "Recover the BST",
      "difficulty": "Medium",
      "question": "Given an inorder traversal [1,4,3,2,5] of a BST with swapped nodes, which nodes are swapped?",
      "options": [
        "4 and 2",
        "3 and 2",
        "4 and 3",
        "1 and 5"
      ],
      "answer": "A"
    },
    {
      "topic": "Recover the BST",
      "difficulty": "Medium",
      "question": "After identifying two nodes 'first' and 'second' that are misplaced, how do you recover the BST?",
      "options": [
        "Delete both and reinsert",
        "Swap the values of the two nodes",
        "Swap their positions in the tree",
        "Rebuild the entire tree"
      ],
      "answer": "B"
    },
    {
      "topic": "Recover the BST",
      "difficulty": "Medium",
      "question": "What is the advantage of using Morris traversal for this problem?",
      "options": [
        "It is recursive",
        "It uses O(1) extra space",
        "It is faster than other methods",
        "It works only on balanced trees"
      ],
      "answer": "B"
    },
    {
      "topic": "Recover the BST",
      "difficulty": "Medium",
      "question": "In a recursive inorder traversal approach for recovering BST, what contributes to space complexity?",
      "options": [
        "The input tree",
        "The recursion stack",
        "The swapped nodes",
        "The output"
      ],
      "answer": "B"
    },
    {
      "topic": "Recover the BST",
      "difficulty": "Hard",
      "question": "In the Morris traversal algorithm, what is the purpose of creating temporary links (threads)?",
      "options": [
        "To enable backtracking without stack",
        "To store the swapped nodes",
        "To balance the tree",
        "To sort the tree"
      ],
      "answer": "A"
    },
    {
      "topic": "Recover the BST",
      "difficulty": "Hard",
      "question": "If the BST has duplicate values, can the standard recovery algorithm still work?",
      "options": [
        "Yes, without any changes",
        "No, it fails because inorder property becomes ambiguous",
        "Yes, but only if duplicates are allowed in BST",
        "It depends on the tree structure"
      ],
      "answer": "B"
    },
    {
      "topic": "Recover the BST",
      "difficulty": "Hard",
      "question": "What is the worst-case time complexity of recovering a BST using the Morris traversal approach?",
      "options": [
        "O(n)",
        "O(n log n)",
        "O(n^2)",
        "O(log n)"
      ],
      "answer": "A"
    },
    {
      "topic": "Recover the BST",
      "difficulty": "Hard",
      "question": "In a BST where the two swapped nodes are in different subtrees, how many pointers need to be swapped to recover the tree?",
      "options": [
        "1.0",
        "2.0",
        "3.0",
        "1900-01-04 00:00:00"
      ],
      "answer": "D"
    },
    {
      "topic": "Recover the BST",
      "difficulty": "Hard",
      "question": "Consider a BST where the root and a leaf are swapped. How many violations will appear in inorder traversal?",
      "options": [
        "1.0",
        "2.0",
        "3.0",
        "4.0"
      ],
      "answer": "B"
    },
    {
      "topic": "Recover the BST",
      "difficulty": "Hard",
      "question": "If we use a recursive approach with explicit stack, what is the worst-case space complexity for a skewed tree?",
      "options": [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n log n)"
      ],
      "answer": "C"
    },
    {
      "topic": "Recover the BST",
      "difficulty": "Hard",
      "question": "In the one-pass algorithm using inorder traversal, what are the three pointers we need to maintain?",
      "options": [
        "first, middle, last",
        "first, second, prev",
        "prev, curr, next",
        "root, left, right"
      ],
      "answer": "B"
    },
    {
      "topic": "Recover the BST",
      "difficulty": "Hard",
      "question": "How does the algorithm differentiate between adjacent swap and non-adjacent swap cases?",
      "options": [
        "By counting violations",
        "By checking if first and second are consecutive",
        "By comparing values",
        "By tree height"
      ],
      "answer": "B"
    },
    {
      "topic": "Recover the BST",
      "difficulty": "Hard",
      "question": "After swapping the values of two nodes to recover the BST, what remains unchanged?",
      "options": [
        "The structure of the tree",
        "The inorder traversal",
        "The preorder traversal",
        "The height of the tree"
      ],
      "answer": "A"
    },
    {
      "topic": "Recover the BST",
      "difficulty": "Hard",
      "question": "If the BST is also an AVL tree (height-balanced), after recovering by swapping node values, is the AVL property automatically preserved?",
      "options": [
        "Yes, because structure is unchanged",
        "No, because swapping values can affect balance",
        "Yes, because AVL property depends only on structure",
        "It depends on the nodes swapped"
      ],
      "answer": "A"
    },
    {
      "topic": "Views of tree",
      "difficulty": "Easy",
      "question": "Which tree traversal is typically used to find the Left View of a binary tree?",
      "options": [
        "Inorder",
        "Preorder",
        "Level Order",
        "Postorder"
      ],
      "answer": "C"
    },
    {
      "topic": "Views of tree",
      "difficulty": "Easy",
      "question": "In the Left View of a binary tree, which node at each level is visible?",
      "options": [
        "The rightmost node",
        "The leftmost node",
        "The middle node",
        "All nodes"
      ],
      "answer": "B"
    },
    {
      "topic": "Views of tree",
      "difficulty": "Easy",
      "question": "In the Right View of a binary tree, which node at each level is visible?",
      "options": [
        "The rightmost node",
        "The leftmost node",
        "The middle node",
        "All nodes"
      ],
      "answer": "A"
    },
    {
      "topic": "Views of tree",
      "difficulty": "Easy",
      "question": "What data structure is commonly used to implement Level Order traversal?",
      "options": [
        "Stack",
        "Queue",
        "Array",
        "Heap"
      ],
      "answer": "B"
    },
    {
      "topic": "Views of tree",
      "difficulty": "Easy",
      "question": "In Top View of a binary tree, what concept is used to determine which nodes are visible?",
      "options": [
        "Node height",
        "Node depth",
        "Horizontal distance from root",
        "Node color"
      ],
      "answer": "C"
    },
    {
      "topic": "Views of tree",
      "difficulty": "Easy",
      "question": "In Bottom View of a binary tree, which node is selected for each horizontal distance?",
      "options": [
        "The first node encountered",
        "The last node encountered (lowest level)",
        "The node with maximum value",
        "The node with minimum value"
      ],
      "answer": "B"
    },
    {
      "topic": "Views of tree",
      "difficulty": "Easy",
      "question": "In Top View, if two nodes share the same horizontal distance, which one appears in the view?",
      "options": [
        "The one at greater depth",
        "The one at lesser depth (closer to root)",
        "Both appear",
        "Neither appears"
      ],
      "answer": "B"
    },
    {
      "topic": "Views of tree",
      "difficulty": "Easy",
      "question": "What is the time complexity of finding all views (Top, Bottom, Left, Right) using level order traversal?",
      "options": [
        "O(n)",
        "O(n log n)",
        "O(n^2)",
        "O(log n)"
      ],
      "answer": "A"
    },
    {
      "topic": "Views of tree",
      "difficulty": "Easy",
      "question": "In Horizontal View (Level Order), how are nodes at the same level typically displayed?",
      "options": [
        "Left to right",
        "Right to left",
        "Top to bottom",
        "Bottom to top"
      ],
      "answer": "A"
    },
    {
      "topic": "Views of tree",
      "difficulty": "Easy",
      "question": "Which view of a tree requires tracking the horizontal distance of each node from the root?",
      "options": [
        "Left View",
        "Right View",
        "Top View",
        "Level Order View"
      ],
      "answer": "C"
    },
    {
      "topic": "Views of tree",
      "difficulty": "Medium",
      "question": "For a binary tree, the Left View can be obtained by modifying which traversal to visit the left child first?",
      "options": [
        "Preorder",
        "Inorder",
        "Postorder",
        "Any traversal"
      ],
      "answer": "A"
    },
    {
      "topic": "Views of tree",
      "difficulty": "Medium",
      "question": "For a binary tree, the Right View can be obtained by modifying which traversal to visit the right child first?",
      "options": [
        "Preorder",
        "Inorder",
        "Postorder",
        "Any traversal"
      ],
      "answer": "A"
    },
    {
      "topic": "Views of tree",
      "difficulty": "Medium",
      "question": "In the Top View algorithm, what data structure is used to store nodes for each horizontal distance?",
      "options": [
        "Stack",
        "Queue",
        "Hash Map / Dictionary",
        "Array"
      ],
      "answer": "C"
    },
    {
      "topic": "Views of tree",
      "difficulty": "Medium",
      "question": "Given a tree with root at horizontal distance 0, left child has HD = -1, right child has HD = +1. In Top View, if nodes exist at HD = -2, -1, 0, 1, 2, how many nodes will be in the view?",
      "options": [
        "3.0",
        "4.0",
        "5.0",
        "Depends on tree structure"
      ],
      "answer": "C"
    },
    {
      "topic": "Views of tree",
      "difficulty": "Medium",
      "question": "In Bottom View, if multiple nodes share the same horizontal distance, which one is selected?",
      "options": [
        "The one with smallest value",
        "The one with largest value",
        "The one at the deepest level",
        "The one closest to root"
      ],
      "answer": "C"
    },
    {
      "topic": "Views of tree",
      "difficulty": "Medium",
      "question": "For a perfectly balanced binary tree of height h, how many nodes appear in the Left View?",
      "options": [
        "h",
        "h+1",
        "2^h",
        "2^(h+1)-1"
      ],
      "answer": "B"
    },
    {
      "topic": "Views of tree",
      "difficulty": "Medium",
      "question": "For a skewed tree (all left children), how do the Left View and Level Order traversal compare?",
      "options": [
        "Left View contains more nodes",
        "Level Order contains more nodes",
        "They are identical",
        "They are unrelated"
      ],
      "answer": "C"
    },
    {
      "topic": "Views of tree",
      "difficulty": "Medium",
      "question": "In Bottom View, if we use a map to store the last node at each horizontal distance, what traversal ensures we process nodes in increasing level order?",
      "options": [
        "Preorder",
        "Inorder",
        "Level Order",
        "Postorder"
      ],
      "answer": "C"
    },
    {
      "topic": "Views of tree",
      "difficulty": "Medium",
      "question": "Which view of a tree requires knowledge of both horizontal distance and level?",
      "options": [
        "Left View",
        "Right View",
        "Top View",
        "Bottom View"
      ],
      "answer": "D"
    },
    {
      "topic": "Views of tree",
      "difficulty": "Medium",
      "question": "What is the space complexity of finding Top View using level order traversal and a map?",
      "options": [
        "O(n)",
        "O(log n)",
        "O(height)",
        "O(width)"
      ],
      "answer": "A"
    },
    {
      "topic": "Views of tree",
      "difficulty": "Hard",
      "question": "In the Top View algorithm using recursion, what additional parameter must be tracked?",
      "options": [
        "Node color",
        "Horizontal distance and level",
        "Node height",
        "Parent pointer"
      ],
      "answer": "B"
    },
    {
      "topic": "Views of tree",
      "difficulty": "Hard",
      "question": "For a tree with nodes having the same horizontal distance but different vertical levels, how does Bottom View differ from Top View?",
      "options": [
        "Bottom View picks deepest, Top View picks shallowest",
        "Bottom View picks shallowest, Top View picks deepest",
        "Both pick the same node",
        "Bottom View picks leftmost, Top View picks rightmost"
      ],
      "answer": "A"
    },
    {
      "topic": "Views of tree",
      "difficulty": "Hard",
      "question": "Given a binary tree, if we print nodes column-wise (same horizontal distance together), which view is this similar to?",
      "options": [
        "Left View",
        "Right View",
        "Vertical Order Traversal",
        "Level Order"
      ],
      "answer": "C"
    },
    {
      "topic": "Views of tree",
      "difficulty": "Hard",
      "question": "In the Right View of a binary tree, if we use a recursive preorder traversal (root-right-left), how do we know when to add a node to the view?",
      "options": [
        "When level is greater than max_level seen so far",
        "Always add the first node",
        "When node has no right child",
        "When node is a leaf"
      ],
      "answer": "A"
    },
    {
      "topic": "Views of tree",
      "difficulty": "Hard",
      "question": "How does the Bottom View algorithm handle nodes that are at the same horizontal distance and same level?",
      "options": [
        "Pick any one",
        "Pick the leftmost",
        "Pick the rightmost",
        "This cannot happen"
      ],
      "answer": "A"
    },
    {
      "topic": "Views of tree",
      "difficulty": "Hard",
      "question": "For a tree where all nodes have unique horizontal distances, how many nodes will be in the Top View?",
      "options": [
        "Equal to height",
        "Equal to number of nodes",
        "Equal to number of distinct horizontal distances",
        "Equal to number of levels"
      ],
      "answer": "C"
    },
    {
      "topic": "Views of tree",
      "difficulty": "Hard",
      "question": "In the Level Order (Horizontal) View, if we want to print nodes level by level in separate lines, what additional data structure might we use?",
      "options": [
        "Two queues",
        "One queue with delimiter",
        "Stack",
        "Array"
      ],
      "answer": "B"
    },
    {
      "topic": "Views of tree",
      "difficulty": "Hard",
      "question": "What is the minimum number of traversals needed to compute all five views (Top, Bottom, Left, Right, Level Order)?",
      "options": [
        "1.0",
        "2.0",
        "3.0",
        "4.0"
      ],
      "answer": "A"
    },
    {
      "topic": "Views of tree",
      "difficulty": "Hard",
      "question": "In the Bottom View, if a node is hidden behind another node at the same horizontal distance but higher level, when does it become visible?",
      "options": [
        "When the higher node is removed",
        "It never becomes visible",
        "It is always visible",
        "When tree is rotated"
      ],
      "answer": "B"
    },
    {
      "topic": "Views of tree",
      "difficulty": "Hard",
      "question": "For a complete binary tree, which view will have the maximum number of nodes?",
      "options": [
        "Left View",
        "Right View",
        "Top View",
        "Bottom View"
      ],
      "answer": "D"
    },
    {
      "topic": "Vertical order traversal",
      "difficulty": "Easy",
      "question": "In vertical order traversal of a binary tree, what determines the \"vertical line\" a node belongs to?",
      "options": [
        "Node's depth",
        "Node's value",
        "Horizontal distance from the root",
        "Node's height"
      ],
      "answer": "C"
    },
    {
      "topic": "Vertical order traversal",
      "difficulty": "Easy",
      "question": "What is the horizontal distance of the root node in vertical order traversal?",
      "options": [
        "-1.0",
        "",
        "1.0",
        "Depends on tree"
      ],
      "answer": "B"
    },
    {
      "topic": "Vertical order traversal",
      "difficulty": "Easy",
      "question": "If a node has horizontal distance = -2, what is the horizontal distance of its left child?",
      "options": [
        "-3.0",
        "-2.0",
        "-1.0",
        ""
      ],
      "answer": "A"
    },
    {
      "topic": "Vertical order traversal",
      "difficulty": "Easy",
      "question": "If a node has horizontal distance = 1, what is the horizontal distance of its right child?",
      "options": [
        "",
        "1.0",
        "2.0",
        "3.0"
      ],
      "answer": "C"
    },
    {
      "topic": "Vertical order traversal",
      "difficulty": "Easy",
      "question": "In vertical order traversal, nodes are grouped by their:",
      "options": [
        "Level",
        "Horizontal distance",
        "Height",
        "Color"
      ],
      "answer": "B"
    },
    {
      "topic": "Vertical order traversal",
      "difficulty": "Easy",
      "question": "What traversal is typically used to perform vertical order traversal?",
      "options": [
        "Preorder only",
        "Inorder only",
        "Level order (BFS)",
        "Postorder only"
      ],
      "answer": "C"
    },
    {
      "topic": "Vertical order traversal",
      "difficulty": "Easy",
      "question": "Which data structure is commonly used to map horizontal distances to lists of nodes?",
      "options": [
        "Stack",
        "Queue",
        "Hash Map / Dictionary",
        "Array"
      ],
      "answer": "C"
    },
    {
      "topic": "Vertical order traversal",
      "difficulty": "Easy",
      "question": "After grouping nodes by horizontal distance, in what order are nodes within the same vertical line typically printed?",
      "options": [
        "Sorted by value",
        "Sorted by level (top to bottom)",
        "Random order",
        "Sorted by horizontal distance"
      ],
      "answer": "B"
    },
    {
      "topic": "Vertical order traversal",
      "difficulty": "Easy",
      "question": "What is the time complexity of vertical order traversal using BFS and a map?",
      "options": [
        "O(n)",
        "O(n log n)",
        "O(n^2)",
        "O(log n)"
      ],
      "answer": "B"
    },
    {
      "topic": "Vertical order traversal",
      "difficulty": "Easy",
      "question": "What is the space complexity of vertical order traversal?",
      "options": [
        "O(n)",
        "O(log n)",
        "O(height)",
        "O(1)"
      ],
      "answer": "A"
    },
    {
      "topic": "Vertical order traversal",
      "difficulty": "Medium",
      "question": "In vertical order traversal, if two nodes are in the same vertical line and same level, how are they ordered?",
      "options": [
        "Left child before right child",
        "Right child before left child",
        "Sorted by value",
        "Order doesn't matter"
      ],
      "answer": "A"
    },
    {
      "topic": "Vertical order traversal",
      "difficulty": "Medium",
      "question": "Given a tree, which of the following is NOT needed for vertical order traversal?",
      "options": [
        "Horizontal distance",
        "Level number",
        "Node value",
        "Node color"
      ],
      "answer": "D"
    },
    {
      "topic": "Vertical order traversal",
      "difficulty": "Medium",
      "question": "How do you find the range of horizontal distances (min and max) in vertical order traversal?",
      "options": [
        "Traverse the tree and track min/max HD",
        "Calculate based on tree height",
        "Assume -n to +n",
        "Use a fixed range"
      ],
      "answer": "A"
    },
    {
      "topic": "Vertical order traversal",
      "difficulty": "Medium",
      "question": "In the map-based approach, after BFS traversal, what must be done to print nodes in correct vertical order?",
      "options": [
        "Sort the map keys (horizontal distances)",
        "Sort the values in each list",
        "Reverse the map",
        "Nothing, map is already ordered"
      ],
      "answer": "A"
    },
    {
      "topic": "Vertical order traversal",
      "difficulty": "Medium",
      "question": "For a perfectly balanced binary tree, what is the range of horizontal distances?",
      "options": [
        "#NAME?",
        "#NAME?",
        "-h/2 to h/2",
        "0 to 2h"
      ],
      "answer": "A"
    },
    {
      "topic": "Vertical order traversal",
      "difficulty": "Medium",
      "question": "How does vertical order traversal differ from Top View?",
      "options": [
        "Top View shows one node per HD; Vertical shows all",
        "Vertical shows one node per HD; Top shows all",
        "They are identical",
        "Both show all nodes"
      ],
      "answer": "A"
    },
    {
      "topic": "Vertical order traversal",
      "difficulty": "Medium",
      "question": "In vertical order traversal, if we use DFS instead of BFS, what additional information must be tracked to maintain correct order within a vertical line?",
      "options": [
        "Node height",
        "Node depth (level)",
        "Node value",
        "Parent pointer"
      ],
      "answer": "B"
    },
    {
      "topic": "Vertical order traversal",
      "difficulty": "Medium",
      "question": "Given root with HD=0, its left child has HD=-1. If left child has a right child, what is its HD?",
      "options": [
        "-2.0",
        "-1.0",
        "",
        "1.0"
      ],
      "answer": "C"
    },
    {
      "topic": "Vertical order traversal",
      "difficulty": "Medium",
      "question": "In vertical order traversal output, the vertical lines are printed:",
      "options": [
        "Left to right (increasing HD)",
        "Right to left (decreasing HD)",
        "Top to bottom",
        "Bottom to top"
      ],
      "answer": "A"
    },
    {
      "topic": "Vertical order traversal",
      "difficulty": "Medium",
      "question": "What problem arises if we use simple DFS without tracking level in vertical order traversal?",
      "options": [
        "Nodes in same vertical line may not be in top-to-bottom order",
        "Horizontal distances will be wrong",
        "Map keys will be duplicated",
        "Tree will be modified"
      ],
      "answer": "A"
    },
    {
      "topic": "Vertical order traversal",
      "difficulty": "Hard",
      "question": "In vertical order traversal, if two nodes have the same horizontal distance and same level, what determines their relative order?",
      "options": [
        "Their values",
        "Their position in the tree (left/right)",
        "Their heights",
        "Random"
      ],
      "answer": "B"
    },
    {
      "topic": "Vertical order traversal",
      "difficulty": "Hard",
      "question": "How would you implement vertical order traversal that prints nodes from smallest HD to largest HD, and within same HD from top to bottom, and within same level from left to right?",
      "options": [
        "BFS with queue storing (node, HD, level) and map of HD -> list of (level, value) sorted",
        "DFS with inorder traversal",
        "BFS without level tracking",
        "Simple recursion"
      ],
      "answer": "A"
    },
    {
      "topic": "Vertical order traversal",
      "difficulty": "Hard",
      "question": "What is the space complexity if we store both HD and level for each node in the map?",
      "options": [
        "O(n)",
        "O(n log n)",
        "O(n^2)",
        "O(height * width)"
      ],
      "answer": "A"
    },
    {
      "topic": "Vertical order traversal",
      "difficulty": "Hard",
      "question": "For a skewed tree (all left children), what will be the range of horizontal distances?",
      "options": [
        "0 to -n",
        "-n to 0",
        "0 to n",
        "-n/2 to n/2"
      ],
      "answer": "A"
    },
    {
      "topic": "Vertical order traversal",
      "difficulty": "Hard",
      "question": "In vertical order traversal, if we want to print nodes in the same vertical line from bottom to top instead of top to bottom, how would we modify the algorithm?",
      "options": [
        "Use DFS that goes to leaves first",
        "Reverse the list after traversal",
        "Use stack instead of queue",
        "Change horizontal distance sign"
      ],
      "answer": "A"
    },
    {
      "topic": "Vertical order traversal",
      "difficulty": "Hard",
      "question": "How does vertical order traversal relate to the concept of \"column-wise\" printing?",
      "options": [
        "It is exactly column-wise printing",
        "It is row-wise printing",
        "It is diagonal printing",
        "No relation"
      ],
      "answer": "A"
    },
    {
      "topic": "Vertical order traversal",
      "difficulty": "Hard",
      "question": "In a tree with n nodes, what is the maximum possible number of vertical lines?",
      "options": [
        "n",
        "n/2",
        "log n",
        "height"
      ],
      "answer": "A"
    },
    {
      "topic": "Vertical order traversal",
      "difficulty": "Hard",
      "question": "Given a tree where all nodes have unique horizontal distances, how many vertical lines will be in the output?",
      "options": [
        "1.0",
        "height",
        "n",
        "n/2"
      ],
      "answer": "C"
    },
    {
      "topic": "Vertical order traversal",
      "difficulty": "Hard",
      "question": "In vertical order traversal using BFS, why is it important to process nodes level by level?",
      "options": [
        "To ensure that within each vertical line, nodes appear in top-to-bottom order",
        "To calculate horizontal distances correctly",
        "To avoid stack overflow",
        "To reduce time complexity"
      ],
      "answer": "A"
    },
    {
      "topic": "Vertical order traversal",
      "difficulty": "Hard",
      "question": "If we modify vertical order traversal to also sort nodes within the same vertical line by their values, what would be the new time complexity?",
      "options": [
        "O(n log n)",
        "O(n)",
        "O(n^2)",
        "O(log n)"
      ],
      "answer": "A"
    },
    {
      "topic": "Boundary traversal",
      "difficulty": "Easy",
      "question": "In boundary traversal of a binary tree, which parts of the tree are traversed?",
      "options": [
        "All nodes",
        "Left boundary, leaves, right boundary",
        "Only leaves",
        "Only root and leaves"
      ],
      "answer": "B"
    },
    {
      "topic": "Boundary traversal",
      "difficulty": "Easy",
      "question": "In boundary traversal, the left boundary is traversed in which order?",
      "options": [
        "Top-down",
        "Bottom-up",
        "Level order",
        "Random"
      ],
      "answer": "A"
    },
    {
      "topic": "Boundary traversal",
      "difficulty": "Easy",
      "question": "In boundary traversal, the right boundary is traversed in which order?",
      "options": [
        "Top-down",
        "Bottom-up",
        "Level order",
        "Random"
      ],
      "answer": "B"
    },
    {
      "topic": "Boundary traversal",
      "difficulty": "Easy",
      "question": "In boundary traversal, the leaf nodes are traversed in which order?",
      "options": [
        "Left to right",
        "Right to left",
        "Top to bottom",
        "Bottom to top"
      ],
      "answer": "A"
    },
    {
      "topic": "Boundary traversal",
      "difficulty": "Easy",
      "question": "What is the first node printed in boundary traversal?",
      "options": [
        "The leftmost leaf",
        "The rightmost leaf",
        "The root",
        "Any boundary node"
      ],
      "answer": "C"
    },
    {
      "topic": "Boundary traversal",
      "difficulty": "Easy",
      "question": "For a tree with only a root node, what does boundary traversal print?",
      "options": [
        "Nothing",
        "The root only",
        "Error",
        "Left and right boundary"
      ],
      "answer": "B"
    },
    {
      "topic": "Boundary traversal",
      "difficulty": "Easy",
      "question": "For a left-skewed tree (only left children), what does boundary traversal include?",
      "options": [
        "All nodes (since all are on left boundary or leaves)",
        "Only root and leaves",
        "Only left boundary",
        "Only leaves"
      ],
      "answer": "A"
    },
    {
      "topic": "Boundary traversal",
      "difficulty": "Easy",
      "question": "What is the time complexity of boundary traversal?",
      "options": [
        "O(n)",
        "O(n log n)",
        "O(n^2)",
        "O(log n)"
      ],
      "answer": "A"
    },
    {
      "topic": "Boundary traversal",
      "difficulty": "Easy",
      "question": "Which traversal is NOT part of boundary traversal?",
      "options": [
        "Preorder",
        "Inorder",
        "Postorder",
        "Level order"
      ],
      "answer": "D"
    },
    {
      "topic": "Boundary traversal",
      "difficulty": "Easy",
      "question": "In boundary traversal, how are leaf nodes identified?",
      "options": [
        "Nodes with no children",
        "Nodes at maximum depth",
        "Nodes with one child",
        "Nodes on the boundary"
      ],
      "answer": "A"
    },
    {
      "topic": "Boundary traversal",
      "difficulty": "Medium",
      "question": "In boundary traversal, why is the root not included again when printing leaves?",
      "options": [
        "Root is not a leaf",
        "Root is already printed",
        "Leaves are printed before root",
        "Root has no value"
      ],
      "answer": "B"
    },
    {
      "topic": "Boundary traversal",
      "difficulty": "Medium",
      "question": "What is a potential pitfall when printing the right boundary in bottom-up order?",
      "options": [
        "Including the root again",
        "Including leaf nodes twice",
        "Missing the rightmost leaf",
        "Reversing the order"
      ],
      "answer": "B"
    },
    {
      "topic": "Boundary traversal",
      "difficulty": "Medium",
      "question": "Given a tree where the left subtree is empty, what does the left boundary consist of?",
      "options": [
        "Nothing (skip)",
        "Only the root",
        "The root and its right children",
        "The leaves only"
      ],
      "answer": "A"
    },
    {
      "topic": "Boundary traversal",
      "difficulty": "Medium",
      "question": "How do you avoid printing a node twice if it is both on the boundary and a leaf?",
      "options": [
        "Print it only in leaf traversal",
        "Print it only in boundary traversal",
        "Print it twice",
        "Skip the node"
      ],
      "answer": "B"
    },
    {
      "topic": "Boundary traversal",
      "difficulty": "Medium",
      "question": "In the standard boundary traversal algorithm, what is the correct order of the three steps?",
      "options": [
        "Leaves, left boundary, right boundary",
        "Left boundary, leaves, right boundary",
        "Right boundary, leaves, left boundary",
        "Left boundary, right boundary, leaves"
      ],
      "answer": "B"
    },
    {
      "topic": "Boundary traversal",
      "difficulty": "Medium",
      "question": "For a complete binary tree, which nodes are NOT included in boundary traversal?",
      "options": [
        "Internal nodes not on boundary",
        "All nodes are included",
        "Only root and leaves",
        "Left boundary nodes"
      ],
      "answer": "A"
    },
    {
      "topic": "Boundary traversal",
      "difficulty": "Medium",
      "question": "In the right boundary traversal (bottom-up), how is this typically implemented?",
      "options": [
        "Using recursion and printing after recursive call",
        "Using a stack",
        "Using a queue",
        "Using level order"
      ],
      "answer": "B"
    },
    {
      "topic": "Boundary traversal",
      "difficulty": "Medium",
      "question": "What is the space complexity of the recursive boundary traversal algorithm?",
      "options": [
        "O(n) (for recursion stack in worst case)",
        "O(1)",
        "O(log n)",
        "O(n log n)"
      ],
      "answer": "A"
    },
    {
      "topic": "Boundary traversal",
      "difficulty": "Medium",
      "question": "If a tree has only a right child at each node (right-skewed), what is the boundary traversal output?",
      "options": [
        "All nodes in order (root to leaves)",
        "All nodes in reverse order",
        "Only root and leaves",
        "None of these"
      ],
      "answer": "D"
    },
    {
      "topic": "Boundary traversal",
      "difficulty": "Medium",
      "question": "In boundary traversal, when traversing leaves, which traversal is typically used?",
      "options": [
        "Inorder",
        "Preorder",
        "Postorder",
        "Level order"
      ],
      "answer": "A"
    },
    {
      "topic": "Boundary traversal",
      "difficulty": "Hard",
      "question": "How does the algorithm ensure that the bottom-most left leaf is not printed twice (once in left boundary and once in leaves)?",
      "options": [
        "Exclude leaves when traversing boundaries",
        "Exclude boundaries when traversing leaves",
        "Print leaves first",
        "Use a visited set"
      ],
      "answer": "A"
    },
    {
      "topic": "Boundary traversal",
      "difficulty": "Hard",
      "question": "For a tree where the root has only a left child, and that left child has only a right child, which nodes are in the left boundary?",
      "options": [
        "Root and left child",
        "Root only",
        "Root, left child, and right child",
        "Root and right child"
      ],
      "answer": "A"
    },
    {
      "topic": "Boundary traversal",
      "difficulty": "Hard",
      "question": "In the recursive approach for left boundary (top-down), what condition prevents printing a leaf node?",
      "options": [
        "If node has no children, don't print",
        "If node has children, print",
        "Always print",
        "If node is not root"
      ],
      "answer": "A"
    },
    {
      "topic": "Boundary traversal",
      "difficulty": "Hard",
      "question": "In boundary traversal of a tree with n nodes, what is the maximum number of nodes that can be printed?",
      "options": [
        "n",
        "n-1",
        "n/2",
        "height"
      ],
      "answer": "A"
    },
    {
      "topic": "Boundary traversal",
      "difficulty": "Hard",
      "question": "How would you modify boundary traversal to print nodes in anti-clockwise direction starting from root?",
      "options": [
        "This is the standard boundary traversal",
        "Reverse the order of leaves",
        "Reverse the order of right boundary",
        "Start from right boundary first"
      ],
      "answer": "A"
    },
    {
      "topic": "Boundary traversal",
      "difficulty": "Hard",
      "question": "For a tree that is a single path (each node has one child), how many nodes are in the boundary traversal output?",
      "options": [
        "All nodes",
        "Half the nodes",
        "Two nodes (root and leaf)",
        "Only the root"
      ],
      "answer": "A"
    },
    {
      "topic": "Boundary traversal",
      "difficulty": "Hard",
      "question": "In boundary traversal, why is it important to traverse the left boundary before the leaves?",
      "options": [
        "To maintain anti-clockwise order",
        "To avoid duplicates",
        "To reduce complexity",
        "It doesn't matter"
      ],
      "answer": "A"
    },
    {
      "topic": "Boundary traversal",
      "difficulty": "Hard",
      "question": "What happens if we include the root in the leaf traversal step?",
      "options": [
        "Root will be printed twice",
        "Root will be skipped",
        "No effect",
        "Leaves will be printed twice"
      ],
      "answer": "A"
    },
    {
      "topic": "Boundary traversal",
      "difficulty": "Hard",
      "question": "In a tree with no left subtree, how is the left boundary traversal implemented?",
      "options": [
        "It is skipped entirely",
        "It prints the root only",
        "It prints the right boundary instead",
        "It prints the leaves"
      ],
      "answer": "A"
    },
    {
      "topic": "Boundary traversal",
      "difficulty": "Hard",
      "question": "What is the primary challenge in implementing boundary traversal iteratively?",
      "options": [
        "Managing the bottom-up right boundary without recursion",
        "Finding leaf nodes",
        "Traversing left boundary",
        "Avoiding duplicates"
      ],
      "answer": "A"
    },
    {
      "topic": "BFS, DFS",
      "difficulty": "Easy",
      "question": "What does BFS stand for?",
      "options": [
        "Best First Search",
        "Breadth-First Search",
        "Back-First Search",
        "Binary-First Search"
      ],
      "answer": "B"
    },
    {
      "topic": "BFS, DFS",
      "difficulty": "Easy",
      "question": "What does DFS stand for?",
      "options": [
        "Depth-First Search",
        "Double-First Search",
        "Dynamic-First Search",
        "Direct-First Search"
      ],
      "answer": "A"
    },
    {
      "topic": "BFS, DFS",
      "difficulty": "Easy",
      "question": "Which data structure is primarily used for BFS traversal?",
      "options": [
        "Stack",
        "Queue",
        "Priority Queue",
        "Heap"
      ],
      "answer": "B"
    },
    {
      "topic": "BFS, DFS",
      "difficulty": "Easy",
      "question": "Which data structure is primarily used for DFS traversal?",
      "options": [
        "Stack",
        "Queue",
        "Priority Queue",
        "Array"
      ],
      "answer": "A"
    },
    {
      "topic": "BFS, DFS",
      "difficulty": "Easy",
      "question": "In BFS, how are vertices visited?",
      "options": [
        "Level by level",
        "Depth-wise",
        "Randomly",
        "In reverse order"
      ],
      "answer": "A"
    },
    {
      "topic": "BFS, DFS",
      "difficulty": "Easy",
      "question": "In DFS, how are vertices visited?",
      "options": [
        "Level by level",
        "Going as deep as possible along each branch",
        "In numerical order",
        "In reverse order"
      ],
      "answer": "B"
    },
    {
      "topic": "BFS, DFS",
      "difficulty": "Easy",
      "question": "What is the time complexity of BFS on a graph with V vertices and E edges (using adjacency list)?",
      "options": [
        "O(V)",
        "O(E)",
        "O(V + E)",
        "O(V * E)"
      ],
      "answer": "C"
    },
    {
      "topic": "BFS, DFS",
      "difficulty": "Easy",
      "question": "What is the time complexity of DFS on a graph with V vertices and E edges (using adjacency list)?",
      "options": [
        "O(V)",
        "O(E)",
        "O(V + E)",
        "O(V * E)"
      ],
      "answer": "C"
    },
    {
      "topic": "BFS, DFS",
      "difficulty": "Easy",
      "question": "BFS can be used to find the shortest path in which type of graph?",
      "options": [
        "Weighted graph",
        "Unweighted graph",
        "Directed acyclic graph",
        "Any graph"
      ],
      "answer": "B"
    },
    {
      "topic": "BFS, DFS",
      "difficulty": "Easy",
      "question": "Which traversal uses a stack either explicitly or via recursion?",
      "options": [
        "BFS",
        "DFS",
        "Both BFS and DFS",
        "Neither"
      ],
      "answer": "B"
    },
    {
      "topic": "BFS, DFS",
      "difficulty": "Medium",
      "question": "In BFS, what is the purpose of the \"visited\" array?",
      "options": [
        "To store vertex values",
        "To avoid processing a vertex more than once",
        "To calculate distances",
        "To find cycles"
      ],
      "answer": "B"
    },
    {
      "topic": "BFS, DFS",
      "difficulty": "Medium",
      "question": "In an undirected graph, what does a back edge during DFS indicate?",
      "options": [
        "A bridge",
        "A cycle",
        "A cross edge",
        "A tree edge"
      ],
      "answer": "B"
    },
    {
      "topic": "BFS, DFS",
      "difficulty": "Medium",
      "question": "Which of the following problems cannot be solved using DFS?",
      "options": [
        "Detecting cycles in a graph",
        "Finding connected components",
        "Finding shortest path in unweighted graph",
        "Topological sorting"
      ],
      "answer": "C"
    },
    {
      "topic": "BFS, DFS",
      "difficulty": "Medium",
      "question": "Which of the following problems cannot be solved using BFS?",
      "options": [
        "Detecting cycles in a graph",
        "Finding connected components",
        "Finding shortest path in unweighted graph",
        "None of these"
      ],
      "answer": "D"
    },
    {
      "topic": "BFS, DFS",
      "difficulty": "Medium",
      "question": "What is the space complexity of BFS in the worst case?",
      "options": [
        "O(V)",
        "O(E)",
        "O(V + E)",
        "O(log V)"
      ],
      "answer": "A"
    },
    {
      "topic": "BFS, DFS",
      "difficulty": "Medium",
      "question": "What is the space complexity of DFS in the worst case (recursive)?",
      "options": [
        "O(V)",
        "O(E)",
        "O(V + E)",
        "O(log V)"
      ],
      "answer": "A"
    },
    {
      "topic": "BFS, DFS",
      "difficulty": "Medium",
      "question": "In DFS of a graph with V vertices, what is the maximum depth of the recursion stack in the worst case?",
      "options": [
        "V",
        "V/2",
        "log V",
        "E"
      ],
      "answer": "A"
    },
    {
      "topic": "BFS, DFS",
      "difficulty": "Medium",
      "question": "For a complete graph (dense), what is the time complexity of BFS using adjacency matrix?",
      "options": [
        "O(V + E)",
        "O(V^2)",
        "O(V log V)",
        "O(E log V)"
      ],
      "answer": "B"
    },
    {
      "topic": "BFS, DFS",
      "difficulty": "Medium",
      "question": "Which traversal uses a queue and processes vertices in FIFO order?",
      "options": [
        "BFS",
        "DFS",
        "Both",
        "Neither"
      ],
      "answer": "A"
    },
    {
      "topic": "BFS, DFS",
      "difficulty": "Medium",
      "question": "Which traversal uses a stack and processes vertices in LIFO order?",
      "options": [
        "BFS",
        "DFS",
        "Both",
        "Neither"
      ],
      "answer": "B"
    },
    {
      "topic": "BFS, DFS",
      "difficulty": "Hard",
      "question": "In a directed acyclic graph (DAG), which traversal can be used to perform topological sorting?",
      "options": [
        "BFS only",
        "DFS only",
        "Both BFS and DFS",
        "Neither"
      ],
      "answer": "C"
    },
    {
      "topic": "BFS, DFS",
      "difficulty": "Hard",
      "question": "How can BFS be modified to find connected components in an undirected graph?",
      "options": [
        "Run BFS from each unvisited vertex",
        "Run BFS once",
        "Use a stack instead of queue",
        "Reverse the graph"
      ],
      "answer": "A"
    },
    {
      "topic": "BFS, DFS",
      "difficulty": "Hard",
      "question": "What is the main advantage of iterative DFS over recursive DFS?",
      "options": [
        "Lower time complexity",
        "Avoids stack overflow for deep graphs",
        "Uses less memory",
        "Faster traversal"
      ],
      "answer": "B"
    },
    {
      "topic": "BFS, DFS",
      "difficulty": "Hard",
      "question": "In BFS, if the graph is a tree, what is the relationship between BFS order and level order?",
      "options": [
        "They are identical",
        "They are opposite",
        "BFS includes more nodes",
        "No relation"
      ],
      "answer": "A"
    },
    {
      "topic": "BFS, DFS",
      "difficulty": "Hard",
      "question": "For finding if there is a path between two nodes, which algorithm is generally more space-efficient?",
      "options": [
        "BFS",
        "DFS",
        "Both are equally efficient",
        "Depends on graph structure"
      ],
      "answer": "B"
    },
    {
      "topic": "BFS, DFS",
      "difficulty": "Hard",
      "question": "In an infinite graph, which algorithm might fail to find a goal node if it exists?",
      "options": [
        "BFS",
        "DFS",
        "Both",
        "Neither"
      ],
      "answer": "B"
    },
    {
      "topic": "BFS, DFS",
      "difficulty": "Hard",
      "question": "What modification is needed in DFS to detect cycles in a directed graph?",
      "options": [
        "Track recursion stack in addition to visited",
        "Use a queue",
        "Use BFS instead",
        "No modification needed"
      ],
      "answer": "A"
    },
    {
      "topic": "BFS, DFS",
      "difficulty": "Hard",
      "question": "In BFS, if we replace the queue with a stack, what traversal do we get?",
      "options": [
        "DFS",
        "Another BFS",
        "Level order",
        "Reverse BFS"
      ],
      "answer": "A"
    },
    {
      "topic": "BFS, DFS",
      "difficulty": "Hard",
      "question": "For a graph represented as an adjacency list, what is the time complexity to find all vertices reachable from a source using BFS?",
      "options": [
        "O(V + E)",
        "O(V log V)",
        "O(E log V)",
        "O(V^2)"
      ],
      "answer": "A"
    },
    {
      "topic": "BFS, DFS",
      "difficulty": "Hard",
      "question": "Which of the following is NOT an application of DFS?",
      "options": [
        "Solving mazes",
        "Finding strongly connected components",
        "Finding shortest path in unweighted graph",
        "Path finding"
      ],
      "answer": "C"
    },
    {
      "topic": "Dial's Algorithm",
      "difficulty": "Easy",
      "question": "Dial's algorithm is an optimization of which classic shortest path algorithm?",
      "options": [
        "Bellman-Ford Algorithm",
        "Floyd-Warshall Algorithm",
        "Dijkstra's Algorithm",
        "A* Search Algorithm"
      ],
      "answer": "C"
    },
    {
      "topic": "Dial's Algorithm",
      "difficulty": "Easy",
      "question": "What specific constraint on edge weights makes Dial's algorithm most effective?",
      "options": [
        "Weights must be negative",
        "Weights must be floating point numbers",
        "Weights must be small integers",
        "Weights must be all equal"
      ],
      "answer": "C"
    },
    {
      "topic": "Dial's Algorithm",
      "difficulty": "Easy",
      "question": "What data structure does Dial's algorithm use instead of a priority queue?",
      "options": [
        "A stack",
        "An array of buckets",
        "A binary heap",
        "A Fibonacci heap"
      ],
      "answer": "B"
    },
    {
      "topic": "Dial's Algorithm",
      "difficulty": "Easy",
      "question": "In Dial's algorithm, what does each bucket represent?",
      "options": [
        "Vertices with the same distance from source",
        "Vertices with the same degree",
        "Vertices with the same color",
        "Edges with the same weight"
      ],
      "answer": "A"
    },
    {
      "topic": "Dial's Algorithm",
      "difficulty": "Easy",
      "question": "How does Dial's algorithm achieve better time complexity than standard Dijkstra for graphs with small integer weights?",
      "options": [
        "By using recursion",
        "By avoiding distance comparisons and using direct bucket access",
        "By preprocessing all paths",
        "By using dynamic programming"
      ],
      "answer": "B"
    },
    {
      "topic": "Dial's Algorithm",
      "difficulty": "Easy",
      "question": "What is the maximum weight of an edge typically denoted as in Dial's algorithm?",
      "options": [
        "V",
        "E",
        "W",
        "C"
      ],
      "answer": "C"
    },
    {
      "topic": "Dial's Algorithm",
      "difficulty": "Easy",
      "question": "Dial's algorithm was published in which year?",
      "options": [
        "1959.0",
        "1969.0",
        "1979.0",
        "1989.0"
      ],
      "answer": "B"
    },
    {
      "topic": "Dial's Algorithm",
      "difficulty": "Easy",
      "question": "Which of the following graphs is best suited for Dial's algorithm?",
      "options": [
        "Graph with weights: 1000, 2000, 3000",
        "Graph with weights: 1, 2, 3, 4, 5",
        "Graph with negative weights",
        "Graph with floating point weights"
      ],
      "answer": "B"
    },
    {
      "topic": "Dial's Algorithm",
      "difficulty": "Easy",
      "question": "In Dial's algorithm, what is the maximum number of buckets required?",
      "options": [
        "V",
        "E",
        "W * V",
        "V + E"
      ],
      "answer": "C"
    },
    {
      "topic": "Dial's Algorithm",
      "difficulty": "Easy",
      "question": "Dial's algorithm is also known as:",
      "options": [
        "Bucket-based Dijkstra",
        "Heap-based Dijkstra",
        "Fibonacci Dijkstra",
        "Binary Dijkstra"
      ],
      "answer": "A"
    },
    {
      "topic": "Dial's Algorithm",
      "difficulty": "Medium",
      "question": "What is the time complexity of Dial's algorithm?",
      "options": [
        "O(V log V)",
        "O(E + V log V)",
        "O(E + WV)",
        "O(VE)"
      ],
      "answer": "C"
    },
    {
      "topic": "Dial's Algorithm",
      "difficulty": "Medium",
      "question": "In the complexity O(E + WV), what does W represent?",
      "options": [
        "The number of vertices",
        "The number of edges",
        "The maximum edge weight",
        "The average edge weight"
      ],
      "answer": "C"
    },
    {
      "topic": "Dial's Algorithm",
      "difficulty": "Medium",
      "question": "What is the space complexity of Dial's algorithm?",
      "options": [
        "O(V)",
        "O(V + W)",
        "O(E + V)",
        "O(V log W)"
      ],
      "answer": "B"
    },
    {
      "topic": "Dial's Algorithm",
      "difficulty": "Medium",
      "question": "In Dial's algorithm, when a vertex's distance is updated, what must be done?",
      "options": [
        "Move it to a different bucket",
        "Delete it from the graph",
        "Run Dijkstra again",
        "Increase its priority"
      ],
      "answer": "A"
    },
    {
      "topic": "Dial's Algorithm",
      "difficulty": "Medium",
      "question": "How are buckets numbered in Dial's algorithm?",
      "options": [
        "0, 1, 2, ..., W*V",
        "0, 1, 2, ..., V",
        "0, 1, 2, ..., E",
        "0, 1, 2, ..., W"
      ],
      "answer": "A"
    },
    {
      "topic": "Dial's Algorithm",
      "difficulty": "Medium",
      "question": "In Dial's algorithm, buckets are processed in which order?",
      "options": [
        "Random order",
        "Increasing order (0 to W*V)",
        "Decreasing order (W*V to 0)",
        "Order of insertion"
      ],
      "answer": "B"
    },
    {
      "topic": "Dial's Algorithm",
      "difficulty": "Medium",
      "question": "When the current bucket being processed is empty, what does the algorithm do?",
      "options": [
        "Terminates",
        "Moves to the next non-empty bucket",
        "Doubles the bucket size",
        "Restarts from bucket 0"
      ],
      "answer": "B"
    },
    {
      "topic": "Dial's Algorithm",
      "difficulty": "Medium",
      "question": "What happens when the algorithm reaches the last bucket and there are still unprocessed vertices?",
      "options": [
        "Algorithm terminates",
        "Wrap around and continue from bucket 0",
        "Increase the number of buckets",
        "Report error"
      ],
      "answer": "B"
    },
    {
      "topic": "Dial's Algorithm",
      "difficulty": "Medium",
      "question": "Dial's algorithm requires that edge weights be:",
      "options": [
        "Negative integers",
        "Non-negative integers",
        "Positive real numbers",
        "Any real numbers"
      ],
      "answer": "B"
    },
    {
      "topic": "Dial's Algorithm",
      "difficulty": "Medium",
      "question": "Which of the following is a limitation of Dial's algorithm compared to standard Dijkstra?",
      "options": [
        "It cannot find shortest paths",
        "It has higher time complexity for large W",
        "It requires more memory in all cases",
        "It only works for trees"
      ],
      "answer": "B"
    },
    {
      "topic": "Dial's Algorithm",
      "difficulty": "Hard",
      "question": "If the maximum edge weight W is very large, Dial's algorithm becomes:",
      "options": [
        "More efficient than Dijkstra",
        "Less efficient than Dijkstra",
        "Unusable",
        "Identical to Dijkstra"
      ],
      "answer": "B"
    },
    {
      "topic": "Dial's Algorithm",
      "difficulty": "Hard",
      "question": "In Dial's algorithm, what is the purpose of using modulo arithmetic with buckets?",
      "options": [
        "To reduce the number of buckets needed",
        "To sort the vertices",
        "To handle negative weights",
        "To detect cycles"
      ],
      "answer": "A"
    },
    {
      "topic": "Dial's Algorithm",
      "difficulty": "Hard",
      "question": "How many buckets are needed if we use the modulo optimization with parameter W+1?",
      "options": [
        "W",
        "W+1",
        "V",
        "V+W"
      ],
      "answer": "B"
    },
    {
      "topic": "Dial's Algorithm",
      "difficulty": "Hard",
      "question": "What is the fundamental idea behind Dial's algorithm that enables linear time complexity in certain cases?",
      "options": [
        "Using a binary heap",
        "Using the fact that distances increase monotonically and within a bounded range",
        "Using recursion instead of iteration",
        "Using dynamic programming with memoization"
      ],
      "answer": "B"
    },
    {
      "topic": "Dial's Algorithm",
      "difficulty": "Hard",
      "question": "Dial's algorithm is most suitable for graphs where:",
      "options": [
        "W is O(1) or very small",
        "V is very large",
        "E is very large",
        "The graph is dense"
      ],
      "answer": "A"
    },
    {
      "topic": "Dial's Algorithm",
      "difficulty": "Hard",
      "question": "How does Dial's algorithm handle vertices with distances larger than W*V?",
      "options": [
        "It cannot handle them without modifications",
        "It uses a special overflow bucket",
        "It terminates",
        "It converts to standard Dijkstra"
      ],
      "answer": "A"
    },
    {
      "topic": "Dial's Algorithm",
      "difficulty": "Hard",
      "question": "The bucket data structure in Dial's algorithm needs to support which operations efficiently?",
      "options": [
        "Insert, delete, and decrease-key",
        "Push and pop only",
        "Search and sort",
        "Merge and split"
      ],
      "answer": "A"
    },
    {
      "topic": "Dial's Algorithm",
      "difficulty": "Hard",
      "question": "Dial's algorithm can be viewed as a special case of which broader class of algorithms?",
      "options": [
        "A* search algorithms",
        "Dynamic programming algorithms",
        "Monotone priority queue algorithms",
        "Divide and conquer algorithms"
      ],
      "answer": "C"
    },
    {
      "topic": "Dial's Algorithm",
      "difficulty": "Hard",
      "question": "What is the main advantage of Dial's algorithm over standard Dijkstra when W is small?",
      "options": [
        "It can handle negative weights",
        "It has better cache performance due to sequential bucket access",
        "It uses less code",
        "It works for all graph types"
      ],
      "answer": "B"
    },
    {
      "topic": "Dial's Algorithm",
      "difficulty": "Hard",
      "question": "Which algorithm is a generalization of Dial's algorithm that uses multiple levels of buckets?",
      "options": [
        "Radix heap",
        "Fibonacci heap",
        "Binomial heap",
        "Pairing heap"
      ],
      "answer": "A"
    },
    {
      "topic": "Bellman-Ford Algorithm",
      "difficulty": "Easy",
      "question": "What problem does the Bellman-Ford algorithm solve?",
      "options": [
        "Finding the minimum spanning tree",
        "Finding the shortest paths from a single source",
        "Finding all pairs shortest paths",
        "Finding the maximum flow"
      ],
      "answer": "B"
    },
    {
      "topic": "Bellman-Ford Algorithm",
      "difficulty": "Easy",
      "question": "What is the main advantage of Bellman-Ford over Dijkstra's algorithm?",
      "options": [
        "It is faster",
        "It handles negative edge weights",
        "It uses less memory",
        "It works for all graph types"
      ],
      "answer": "B"
    },
    {
      "topic": "Bellman-Ford Algorithm",
      "difficulty": "Easy",
      "question": "How many passes (iterations) does the Bellman-Ford algorithm make over all edges?",
      "options": [
        "V",
        "V-1",
        "E",
        "V+E"
      ],
      "answer": "B"
    },
    {
      "topic": "Bellman-Ford Algorithm",
      "difficulty": "Easy",
      "question": "What does Bellman-Ford do after V-1 iterations?",
      "options": [
        "Checks for negative cycles",
        "Terminates",
        "Runs V more iterations",
        "Doubles the iterations"
      ],
      "answer": "A"
    },
    {
      "topic": "Bellman-Ford Algorithm",
      "difficulty": "Easy",
      "question": "What does it indicate if distances can still be relaxed after V-1 iterations?",
      "options": [
        "The graph has a positive cycle",
        "The graph has a negative cycle",
        "The algorithm is correct",
        "The graph is disconnected"
      ],
      "answer": "B"
    },
    {
      "topic": "Bellman-Ford Algorithm",
      "difficulty": "Easy",
      "question": "What is the time complexity of the Bellman-Ford algorithm?",
      "options": [
        "O(V)",
        "O(E)",
        "O(V * E)",
        "O(V^2)"
      ],
      "answer": "C"
    },
    {
      "topic": "Bellman-Ford Algorithm",
      "difficulty": "Easy",
      "question": "What is the space complexity of the Bellman-Ford algorithm?",
      "options": [
        "O(V)",
        "O(E)",
        "O(V * E)",
        "O(V^2)"
      ],
      "answer": "A"
    },
    {
      "topic": "Bellman-Ford Algorithm",
      "difficulty": "Easy",
      "question": "In Bellman-Ford, what is the initialization step for the source vertex?",
      "options": [
        "distance[source] = 0",
        "distance[source] = infinity",
        "distance[source] = -1",
        "distance[source] = 1"
      ],
      "answer": "A"
    },
    {
      "topic": "Bellman-Ford Algorithm",
      "difficulty": "Easy",
      "question": "In Bellman-Ford, what is the initialization step for all other vertices?",
      "options": [
        "distance[v] = 0",
        "distance[v] = infinity",
        "distance[v] = -1",
        "distance[v] = 1"
      ],
      "answer": "B"
    },
    {
      "topic": "Bellman-Ford Algorithm",
      "difficulty": "Easy",
      "question": "Which of the following graphs cannot be handled by Bellman-Ford?",
      "options": [
        "Graph with positive edges",
        "Graph with negative edges",
        "Graph with negative cycles",
        "Graph with zero-weight edges"
      ],
      "answer": "C"
    },
    {
      "topic": "Bellman-Ford Algorithm",
      "difficulty": "Medium",
      "question": "In the presence of a negative cycle, what happens to shortest paths?",
      "options": [
        "They are well-defined",
        "They are not defined (negative infinity)",
        "They become positive",
        "They become zero"
      ],
      "answer": "B"
    },
    {
      "topic": "Bellman-Ford Algorithm",
      "difficulty": "Medium",
      "question": "How does Bellman-Ford detect a negative cycle?",
      "options": [
        "By running one extra relaxation iteration",
        "By counting edges",
        "By checking if all distances are finite",
        "By using a priority queue"
      ],
      "answer": "A"
    },
    {
      "topic": "Bellman-Ford Algorithm",
      "difficulty": "Medium",
      "question": "If a graph has V vertices and no negative cycles, what is the maximum path length from source to any vertex?",
      "options": [
        "V",
        "V-1",
        "E",
        "Infinity"
      ],
      "answer": "B"
    },
    {
      "topic": "Bellman-Ford Algorithm",
      "difficulty": "Medium",
      "question": "Why does Bellman-Ford need exactly V-1 iterations in the worst case?",
      "options": [
        "Because the longest simple path can have at most V-1 edges",
        "Because there are V vertices",
        "Because there are V-1 edges",
        "Because of mathematical induction"
      ],
      "answer": "A"
    },
    {
      "topic": "Bellman-Ford Algorithm",
      "difficulty": "Medium",
      "question": "Bellman-Ford works for graphs with negative edges but not for graphs with:",
      "options": [
        "Positive cycles",
        "Negative cycles",
        "Zero-weight edges",
        "Self-loops"
      ],
      "answer": "B"
    },
    {
      "topic": "Bellman-Ford Algorithm",
      "difficulty": "Medium",
      "question": "In Bellman-Ford, what is a \"relaxation\" of an edge (u, v)?",
      "options": [
        "if dist[u] + weight < dist[v], update dist[v]",
        "if dist[u] > dist[v], swap them",
        "Add weight to both vertices",
        "Remove the edge"
      ],
      "answer": "A"
    },
    {
      "topic": "Bellman-Ford Algorithm",
      "difficulty": "Medium",
      "question": "For a graph with V vertices and E edges, how many relaxations does Bellman-Ford perform?",
      "options": [
        "V",
        "E",
        "(V-1) * E",
        "V * E"
      ],
      "answer": "C"
    },
    {
      "topic": "Bellman-Ford Algorithm",
      "difficulty": "Medium",
      "question": "Which of the following algorithms can be used to detect negative cycles in a graph?",
      "options": [
        "Dijkstra",
        "Prim's",
        "Kruskal's",
        "Bellman-Ford"
      ],
      "answer": "D"
    },
    {
      "topic": "Bellman-Ford Algorithm",
      "difficulty": "Medium",
      "question": "Bellman-Ford is based on which algorithmic paradigm?",
      "options": [
        "Greedy",
        "Divide and Conquer",
        "Dynamic Programming",
        "Backtracking"
      ],
      "answer": "C"
    },
    {
      "topic": "Bellman-Ford Algorithm",
      "difficulty": "Medium",
      "question": "What happens if we run Bellman-Ford on a graph with a negative cycle reachable from the source?",
      "options": [
        "Algorithm terminates normally",
        "Algorithm detects the cycle and reports it",
        "Algorithm runs forever",
        "Distances become incorrect"
      ],
      "answer": "B"
    },
    {
      "topic": "Bellman-Ford Algorithm",
      "difficulty": "Hard",
      "question": "What modification is needed to find the actual shortest path (not just distance) using Bellman-Ford?",
      "options": [
        "Maintain a predecessor array",
        "Use a stack",
        "Use a queue",
        "Reverse the graph"
      ],
      "answer": "A"
    },
    {
      "topic": "Bellman-Ford Algorithm",
      "difficulty": "Hard",
      "question": "How can Bellman-Ford be optimized by early termination?",
      "options": [
        "Stop when no relaxation occurs in an iteration",
        "Stop after V/2 iterations",
        "Stop when all distances are finite",
        "Stop when source is reached"
      ],
      "answer": "A"
    },
    {
      "topic": "Bellman-Ford Algorithm",
      "difficulty": "Hard",
      "question": "What is the best-case time complexity of the optimized Bellman-Ford (with early termination)?",
      "options": [
        "O(V)",
        "O(E)",
        "O(V * E)",
        "O(V + E)"
      ],
      "answer": "B"
    },
    {
      "topic": "Bellman-Ford Algorithm",
      "difficulty": "Hard",
      "question": "For a complete graph (dense), how does Bellman-Ford's complexity compare to Dijkstra?",
      "options": [
        "Bellman-Ford is faster",
        "Dijkstra is faster",
        "Both are same",
        "Depends on edge weights"
      ],
      "answer": "B"
    },
    {
      "topic": "Bellman-Ford Algorithm",
      "difficulty": "Hard",
      "question": "In Bellman-Ford, if edges are relaxed in a specific order, how many iterations might be needed for a DAG?",
      "options": [
        "1.0",
        "V-1",
        "V/2",
        "log V"
      ],
      "answer": "A"
    },
    {
      "topic": "Bellman-Ford Algorithm",
      "difficulty": "Hard",
      "question": "The Bellman-Ford algorithm can be used for which of the following in a system of difference constraints?",
      "options": [
        "Finding a feasible solution",
        "Finding maximum flow",
        "Finding minimum cut",
        "Finding Eulerian path"
      ],
      "answer": "A"
    },
    {
      "topic": "Bellman-Ford Algorithm",
      "difficulty": "Hard",
      "question": "What is the relationship between Bellman-Ford and linear programming?",
      "options": [
        "Bellman-Ford solves a special case of linear programming",
        "They are unrelated",
        "Bellman-Ford is a linear programming algorithm",
        "Bellman-Ford uses linear programming"
      ],
      "answer": "A"
    },
    {
      "topic": "Bellman-Ford Algorithm",
      "difficulty": "Hard",
      "question": "If a graph has negative cycles, what does Bellman-Ford return for vertices reachable from the cycle?",
      "options": [
        "Correct distances",
        "Negative infinity (or error)",
        "Zero",
        "Positive infinity"
      ],
      "answer": "B"
    },
    {
      "topic": "Bellman-Ford Algorithm",
      "difficulty": "Hard",
      "question": "How would you modify Bellman-Ford to find the longest path in a graph?",
      "options": [
        "Negate all edge weights and run Bellman-Ford",
        "Reverse all edges",
        "Use > instead of < in relaxation",
        "Add all weights"
      ],
      "answer": "A"
    },
    {
      "topic": "Bellman-Ford Algorithm",
      "difficulty": "Hard",
      "question": "For a graph with V vertices and E edges, what is the memory requirement if we also need to store paths?",
      "options": [
        "O(V)",
        "O(E)",
        "O(V + E)",
        "O(V * E)"
      ],
      "answer": "C"
    },
    {
      "topic": "Topological Sort",
      "difficulty": "Easy",
      "question": "What is a topological sort of a directed graph?",
      "options": [
        "A linear ordering of vertices such that for every directed edge u->v, u comes after v",
        "A linear ordering of vertices such that for every directed edge u->v, u comes before v",
        "A sorting of vertices by their values",
        "A reverse ordering of vertices"
      ],
      "answer": "B"
    },
    {
      "topic": "Topological Sort",
      "difficulty": "Easy",
      "question": "On which type of graph can topological sort be applied?",
      "options": [
        "Any directed graph",
        "Any undirected graph",
        "Directed Acyclic Graph (DAG)",
        "Any connected graph"
      ],
      "answer": "C"
    },
    {
      "topic": "Topological Sort",
      "difficulty": "Easy",
      "question": "What happens if you try to perform topological sort on a graph with a cycle?",
      "options": [
        "It produces a valid ordering",
        "It produces a partial ordering",
        "It fails or detects a cycle",
        "It ignores the cycle"
      ],
      "answer": "C"
    },
    {
      "topic": "Topological Sort",
      "difficulty": "Easy",
      "question": "Which of the following is a common application of topological sort?",
      "options": [
        "Finding shortest path",
        "Finding minimum spanning tree",
        "Task scheduling with dependencies",
        "Finding connected components"
      ],
      "answer": "C"
    },
    {
      "topic": "Topological Sort",
      "difficulty": "Easy",
      "question": "What algorithm can be used to perform topological sort?",
      "options": [
        "Depth-First Search (DFS)",
        "Breadth-First Search (BFS)",
        "Both DFS and BFS-based (Kahn's) algorithms",
        "Neither"
      ],
      "answer": "C"
    },
    {
      "topic": "Topological Sort",
      "difficulty": "Easy",
      "question": "In Kahn's algorithm for topological sort, what data structure is used to store vertices with in-degree zero?",
      "options": [
        "Stack",
        "Queue",
        "Priority Queue",
        "Array"
      ],
      "answer": "B"
    },
    {
      "topic": "Topological Sort",
      "difficulty": "Easy",
      "question": "What is the time complexity of topological sort using Kahn's algorithm on a graph with V vertices and E edges?",
      "options": [
        "O(V)",
        "O(E)",
        "O(V + E)",
        "O(V * E)"
      ],
      "answer": "C"
    },
    {
      "topic": "Topological Sort",
      "difficulty": "Easy",
      "question": "What is the space complexity of topological sort?",
      "options": [
        "O(V)",
        "O(E)",
        "O(V + E)",
        "O(1)"
      ],
      "answer": "A"
    },
    {
      "topic": "Topological Sort",
      "difficulty": "Easy",
      "question": "In a DAG, how many topological orderings can exist?",
      "options": [
        "Always one",
        "At least one",
        "Exactly two",
        "Zero"
      ],
      "answer": "B"
    },
    {
      "topic": "Topological Sort",
      "difficulty": "Easy",
      "question": "In Kahn's algorithm, what does it indicate if the queue becomes empty before all vertices are processed?",
      "options": [
        "The graph has a cycle",
        "The graph is disconnected",
        "The algorithm is complete",
        "The graph has multiple sources"
      ],
      "answer": "A"
    },
    {
      "topic": "Topological Sort",
      "difficulty": "Medium",
      "question": "In DFS-based topological sort, when are vertices added to the ordering?",
      "options": [
        "When first visited",
        "Before exploring children",
        "After exploring all descendants (post-order)",
        "At the start of DFS"
      ],
      "answer": "C"
    },
    {
      "topic": "Topological Sort",
      "difficulty": "Medium",
      "question": "In DFS-based topological sort, what must be done to detect cycles?",
      "options": [
        "Track visited and recursion stack",
        "Track only visited",
        "Count vertices",
        "Use a queue"
      ],
      "answer": "A"
    },
    {
      "topic": "Topological Sort",
      "difficulty": "Medium",
      "question": "Which of the following is NOT a valid topological order of a DAG?",
      "options": [
        "An order where all dependencies are satisfied",
        "An order where a vertex appears before its predecessor",
        "An order where a vertex appears after all its successors",
        "Any permutation of vertices"
      ],
      "answer": "D"
    },
    {
      "topic": "Topological Sort",
      "difficulty": "Medium",
      "question": "Given edges: 1->3, 2->3, 3->4, which is a valid topological order?",
      "options": [
        "1,2,3,4",
        "4,3,2,1",
        "3,1,2,4",
        "2,1,4,3"
      ],
      "answer": "A"
    },
    {
      "topic": "Topological Sort",
      "difficulty": "Medium",
      "question": "Given edges: 1->2, 2->3, 1->3, which is a valid topological order?",
      "options": [
        "1,2,3",
        "1,3,2",
        "3,2,1",
        "Both A and B"
      ],
      "answer": "A"
    },
    {
      "topic": "Topological Sort",
      "difficulty": "Medium",
      "question": "In Kahn's algorithm, after removing a vertex u from the queue, what is updated?",
      "options": [
        "In-degrees of u's neighbors",
        "Out-degrees of u's neighbors",
        "Both in and out degrees",
        "Nothing"
      ],
      "answer": "A"
    },
    {
      "topic": "Topological Sort",
      "difficulty": "Medium",
      "question": "If a DAG has V vertices, what is the maximum number of topological orders possible?",
      "options": [
        "V",
        "V!",
        "2^V",
        "Depends on graph structure"
      ],
      "answer": "D"
    },
    {
      "topic": "Topological Sort",
      "difficulty": "Medium",
      "question": "Which type of graph always has a unique topological order?",
      "options": [
        "A complete DAG",
        "A DAG with a Hamiltonian path",
        "A DAG with no edges",
        "A DAG with multiple sources"
      ],
      "answer": "B"
    },
    {
      "topic": "Topological Sort",
      "difficulty": "Medium",
      "question": "Topological sort can be used to detect cycles in a directed graph. How?",
      "options": [
        "If result size < V, cycle exists",
        "If result size > V, cycle exists",
        "If any vertex has non-zero in-degree",
        "If queue size > 1"
      ],
      "answer": "A"
    },
    {
      "topic": "Topological Sort",
      "difficulty": "Medium",
      "question": "In the context of topological sort, what is a \"source\" vertex?",
      "options": [
        "A vertex with no outgoing edges",
        "A vertex with no incoming edges",
        "A vertex with maximum degree",
        "The first vertex in ordering"
      ],
      "answer": "B"
    },
    {
      "topic": "Topological Sort",
      "difficulty": "Hard",
      "question": "What is the minimum number of topological orders for a DAG with V vertices?",
      "options": [
        "",
        "1.0",
        "2.0",
        "V"
      ],
      "answer": "B"
    },
    {
      "topic": "Topological Sort",
      "difficulty": "Hard",
      "question": "In a DAG, if there is a directed path from u to v, what must be true in any topological order?",
      "options": [
        "u comes before v",
        "u comes after v",
        "u and v can be in any order",
        "u and v must be adjacent"
      ],
      "answer": "A"
    },
    {
      "topic": "Topological Sort",
      "difficulty": "Hard",
      "question": "How can topological sort be used to find the longest path in a DAG?",
      "options": [
        "Process vertices in topological order and relax edges",
        "Reverse the topological order",
        "Use DFS instead",
        "Use BFS instead"
      ],
      "answer": "A"
    },
    {
      "topic": "Topological Sort",
      "difficulty": "Hard",
      "question": "In Kahn's algorithm, what data structure can replace the queue to get a lexicographically smallest topological order?",
      "options": [
        "Stack",
        "Priority Queue (Min-Heap)",
        "Array",
        "Deque"
      ],
      "answer": "B"
    },
    {
      "topic": "Topological Sort",
      "difficulty": "Hard",
      "question": "For a DAG with V vertices, what is the condition for having a unique topological order?",
      "options": [
        "There is a Hamiltonian path",
        "There is exactly one source",
        "The graph is a tree",
        "The graph is complete"
      ],
      "answer": "A"
    },
    {
      "topic": "Topological Sort",
      "difficulty": "Hard",
      "question": "In the DFS-based approach, if we reverse the graph and then run DFS, what do we get?",
      "options": [
        "Topological order of original",
        "Topological order of reversed graph",
        "Strongly connected components",
        "Cycles"
      ],
      "answer": "B"
    },
    {
      "topic": "Topological Sort",
      "difficulty": "Hard",
      "question": "What is the relationship between topological sort and strongly connected components?",
      "options": [
        "A graph with SCCs cannot be topologically sorted",
        "Each SCC can be condensed into a node, then sorted",
        "Topological sort finds SCCs",
        "No relationship"
      ],
      "answer": "B"
    },
    {
      "topic": "Topological Sort",
      "difficulty": "Hard",
      "question": "How would you modify Kahn's algorithm to detect multiple valid topological orders?",
      "options": [
        "Count the number of times queue has size > 1",
        "Count total vertices processed",
        "Count edges processed",
        "Use a stack instead"
      ],
      "answer": "A"
    },
    {
      "topic": "Topological Sort",
      "difficulty": "Hard",
      "question": "In a DAG representing course prerequisites, what does a topological order represent?",
      "options": [
        "A valid course schedule",
        "The easiest courses first",
        "The hardest courses first",
        "The order of difficulty"
      ],
      "answer": "A"
    },
    {
      "topic": "Topological Sort",
      "difficulty": "Hard",
      "question": "What is the worst-case space complexity of the DFS-based topological sort (including recursion stack) for a dense graph?",
      "options": [
        "O(V)",
        "O(E)",
        "O(V + E)",
        "O(V^2)"
      ],
      "answer": "A"
    },
    {
      "topic": "Heap Sort",
      "difficulty": "Easy",
      "question": "What type of data structure is a heap?",
      "options": [
        "A linear data structure",
        "A tree-based data structure",
        "A graph-based data structure",
        "A hash-based data structure"
      ],
      "answer": "B"
    },
    {
      "topic": "Heap Sort",
      "difficulty": "Easy",
      "question": "In a max-heap, what is the relationship between parent and child nodes?",
      "options": [
        "Parent <= Child",
        "Parent >= Child",
        "Parent = Child",
        "No relationship"
      ],
      "answer": "B"
    },
    {
      "topic": "Heap Sort",
      "difficulty": "Easy",
      "question": "In a min-heap, what is the relationship between parent and child nodes?",
      "options": [
        "Parent <= Child",
        "Parent >= Child",
        "Parent = Child",
        "No relationship"
      ],
      "answer": "A"
    },
    {
      "topic": "Heap Sort",
      "difficulty": "Easy",
      "question": "What is the time complexity of building a heap from an array of n elements (heapify)?",
      "options": [
        "O(n)",
        "O(n log n)",
        "O(log n)",
        "O(n^2)"
      ],
      "answer": "A"
    },
    {
      "topic": "Heap Sort",
      "difficulty": "Easy",
      "question": "What is the time complexity of Heap Sort in all cases (best, average, worst)?",
      "options": [
        "O(n)",
        "O(n log n)",
        "O(n^2)",
        "O(log n)"
      ],
      "answer": "B"
    },
    {
      "topic": "Heap Sort",
      "difficulty": "Easy",
      "question": "What is the space complexity of Heap Sort (excluding input array)?",
      "options": [
        "O(1)",
        "O(n)",
        "O(log n)",
        "O(n log n)"
      ],
      "answer": "A"
    },
    {
      "topic": "Heap Sort",
      "difficulty": "Easy",
      "question": "Which of the following is a step in Heap Sort?",
      "options": [
        "Build heap from array",
        "Repeatedly extract root and heapify",
        "Both A and B",
        "Partition the array"
      ],
      "answer": "C"
    },
    {
      "topic": "Heap Sort",
      "difficulty": "Easy",
      "question": "After building a max-heap, where is the largest element?",
      "options": [
        "At the last index",
        "At the root (first index)",
        "In the middle",
        "At a leaf node"
      ],
      "answer": "B"
    },
    {
      "topic": "Heap Sort",
      "difficulty": "Easy",
      "question": "In Heap Sort, after swapping root with last element, what is done to the remaining heap?",
      "options": [
        "Nothing",
        "Heapify the root",
        "Rebuild entire heap",
        "Sort the remaining array"
      ],
      "answer": "B"
    },
    {
      "topic": "Heap Sort",
      "difficulty": "Easy",
      "question": "Is Heap Sort stable?",
      "options": [
        "Yes",
        "No",
        "Depends on implementation",
        "Only for integers"
      ],
      "answer": "B"
    },
    {
      "topic": "Heap Sort",
      "difficulty": "Medium",
      "question": "In an array-based heap, if a node is at index i, where is its left child?",
      "options": [
        "2i",
        "2i + 1",
        "2i + 2",
        "i/2"
      ],
      "answer": "B"
    },
    {
      "topic": "Heap Sort",
      "difficulty": "Medium",
      "question": "In an array-based heap, if a node is at index i, where is its right child?",
      "options": [
        "2i",
        "2i + 1",
        "2i + 2",
        "i/2"
      ],
      "answer": "C"
    },
    {
      "topic": "Heap Sort",
      "difficulty": "Medium",
      "question": "In an array-based heap, if a node is at index i, where is its parent?",
      "options": [
        "i/2 (floor division)",
        "2i",
        "2i + 1",
        "i - 1"
      ],
      "answer": "A"
    },
    {
      "topic": "Heap Sort",
      "difficulty": "Medium",
      "question": "What is the worst-case time complexity of Heapify operation for a single node?",
      "options": [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n log n)"
      ],
      "answer": "B"
    },
    {
      "topic": "Heap Sort",
      "difficulty": "Medium",
      "question": "In Heap Sort, after each extraction, the heap size:",
      "options": [
        "Increases by 1",
        "Decreases by 1",
        "Remains same",
        "Doubles"
      ],
      "answer": "B"
    },
    {
      "topic": "Heap Sort",
      "difficulty": "Medium",
      "question": "Which step in Heap Sort takes O(n) time?",
      "options": [
        "Building the heap",
        "Extracting elements",
        "Heapifying after extraction",
        "Swapping elements"
      ],
      "answer": "A"
    },
    {
      "topic": "Heap Sort",
      "difficulty": "Medium",
      "question": "Which step in Heap Sort takes O(log n) time per operation?",
      "options": [
        "Building the heap",
        "Extracting one element (including heapify)",
        "Swapping elements",
        "Initial array creation"
      ],
      "answer": "B"
    },
    {
      "topic": "Heap Sort",
      "difficulty": "Medium",
      "question": "How does Heap Sort compare to Quick Sort in terms of worst-case time complexity?",
      "options": [
        "Heap Sort is better (O(n log n) vs O(n^2))",
        "Quick Sort is better",
        "Both are O(n log n)",
        "Both are O(n^2)"
      ],
      "answer": "A"
    },
    {
      "topic": "Heap Sort",
      "difficulty": "Medium",
      "question": "How does Heap Sort compare to Merge Sort in terms of space complexity?",
      "options": [
        "Heap Sort is better (O(1) vs O(n))",
        "Merge Sort is better",
        "Both are O(1)",
        "Both are O(n)"
      ],
      "answer": "A"
    },
    {
      "topic": "Heap Sort",
      "difficulty": "Medium",
      "question": "For sorting an array in descending order, which heap should be built?",
      "options": [
        "Max-heap",
        "Min-heap",
        "Either works",
        "Neither"
      ],
      "answer": "B"
    },
    {
      "topic": "Heap Sort",
      "difficulty": "Hard",
      "question": "In the array representation of a heap with n elements, what is the range of indices that are leaf nodes?",
      "options": [
        "0 to n/2 - 1",
        "n/2 to n-1",
        "0 to n-1",
        "1 to n"
      ],
      "answer": "B"
    },
    {
      "topic": "Heap Sort",
      "difficulty": "Hard",
      "question": "Why is building a heap in O(n) possible even though heapify is O(log n) per node?",
      "options": [
        "Because heapify is called only on non-leaf nodes and analysis shows linear total",
        "Because heapify is O(1) for most nodes",
        "Because of parallel processing",
        "Because of caching"
      ],
      "answer": "A"
    },
    {
      "topic": "Heap Sort",
      "difficulty": "Hard",
      "question": "What is the maximum number of comparisons in Heap Sort for n elements?",
      "options": [
        "O(n)",
        "O(n log n)",
        "O(n^2)",
        "O(log n)"
      ],
      "answer": "B"
    },
    {
      "topic": "Heap Sort",
      "difficulty": "Hard",
      "question": "If all elements in the array are equal, what is the time complexity of Heap Sort?",
      "options": [
        "O(n)",
        "O(n log n)",
        "O(n^2)",
        "O(1)"
      ],
      "answer": "B"
    },
    {
      "topic": "Heap Sort",
      "difficulty": "Hard",
      "question": "How would you implement a stable version of Heap Sort?",
      "options": [
        "Use indices as tie-breakers",
        "Use a min-heap instead",
        "Use a max-heap instead",
        "Stable heap sort is impossible"
      ],
      "answer": "A"
    },
    {
      "topic": "Heap Sort",
      "difficulty": "Hard",
      "question": "In Heap Sort, after building the max-heap, the array is in which order?",
      "options": [
        "Sorted ascending",
        "Sorted descending",
        "Partially ordered (heap order)",
        "Random order"
      ],
      "answer": "C"
    },
    {
      "topic": "Heap Sort",
      "difficulty": "Hard",
      "question": "What is the advantage of Heap Sort over Quick Sort in terms of memory?",
      "options": [
        "In-place sorting (O(1) space)",
        "Better cache performance",
        "Handles duplicates better",
        "Easier to implement"
      ],
      "answer": "A"
    },
    {
      "topic": "Heap Sort",
      "difficulty": "Hard",
      "question": "What is the disadvantage of Heap Sort compared to Quick Sort in practice?",
      "options": [
        "Poor cache performance",
        "Higher time complexity",
        "Unstable",
        "Difficult to implement"
      ],
      "answer": "A"
    },
    {
      "topic": "Heap Sort",
      "difficulty": "Hard",
      "question": "For an array of size n, how many times is heapify called during the extraction phase?",
      "options": [
        "n",
        "n-1",
        "n/2",
        "log n"
      ],
      "answer": "B"
    },
    {
      "topic": "Heap Sort",
      "difficulty": "Hard",
      "question": "In a max-heap, where is the smallest element located?",
      "options": [
        "At the root",
        "At a leaf node",
        "At index n-1",
        "Cannot be determined"
      ],
      "answer": "B"
    }
  ]
};
