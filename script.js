 const questions = [
  // ARRAYS (10)
  { topic: "Arrays", question: "What is the best time complexity to find duplicate elements in an array?", options: ["O(n²)", "O(n log n)", "O(n)", "O(1)"], answer: "O(n)", explanation: "Using a HashMap, duplicates can be found in a single pass - O(n) time." },
  { topic: "Arrays", question: "What is the optimal approach for the Two Sum problem?", options: ["Brute force O(n²)", "HashMap O(n)", "Binary search O(n log n)", "Sorting O(n log n)"], answer: "HashMap O(n)", explanation: "Store complement in HashMap - find target sum in one pass O(n)." },
  { topic: "Arrays", question: "What is Kadane's Algorithm used for?", options: ["Sorting an array", "Finding maximum subarray sum", "Binary search", "Rotating an array"], answer: "Finding maximum subarray sum", explanation: "Kadane's Algorithm finds the maximum subarray sum in O(n) time." },
  { topic: "Arrays", question: "How many pointers are used in the Sort Colors (Dutch National Flag) problem?", options: ["1", "2", "3", "4"], answer: "3", explanation: "Three pointers - low, mid, high - are used to sort 0s, 1s, and 2s." },
  { topic: "Arrays", question: "What is the optimal space complexity for rotating an array by K positions?", options: ["O(n)", "O(k)", "O(1)", "O(n+k)"], answer: "O(1)", explanation: "Using the reversal algorithm, array can be rotated with O(1) extra space." },
  { topic: "Arrays", question: "What is the best approach to find maximum profit in Best Time to Buy and Sell Stock?", options: ["Sliding window", "Dynamic programming", "One pass - track minimum price", "Two pointer"], answer: "One pass - track minimum price", explanation: "Track the minimum price in one pass and compute max profit at each step." },
  { topic: "Arrays", question: "What is the formula to find the missing number in array (1 to n)?", options: ["n*(n+1)/2 - actual sum", "Sort then traverse", "XOR approach", "Binary search"], answer: "n*(n+1)/2 - actual sum", explanation: "Expected sum minus actual sum gives the missing number. O(n) time O(1) space." },
  { topic: "Arrays", question: "Which algorithm finds the majority element (appears more than n/2 times) in O(n) time and O(1) space?", options: ["Quicksort", "Boyer-Moore Voting Algorithm", "Kadane's Algorithm", "Dutch National Flag"], answer: "Boyer-Moore Voting Algorithm", explanation: "Boyer-Moore Voting Algorithm finds the majority element in O(n) time and O(1) space." },
  { topic: "Arrays", question: "What is the best approach for the Subarray Sum Equals K problem?", options: ["Brute force O(n²)", "Prefix sum + HashMap O(n)", "Sliding window", "Two pointer"], answer: "Prefix sum + HashMap O(n)", explanation: "Store prefix sums in a HashMap - gives O(n) solution." },
  { topic: "Arrays", question: "What type of array is required for Binary Search?", options: ["Unsorted", "Sorted", "Partially sorted", "Randomly arranged"], answer: "Sorted", explanation: "Binary search only works on a sorted array." },

  // LINKED LIST (10)
  { topic: "Linked List", question: "What is the optimal approach to reverse a Linked List?", options: ["Use extra array", "Recursion", "3 pointers - prev, curr, next", "Use a stack"], answer: "3 pointers - prev, curr, next", explanation: "Using prev, curr, next pointers gives O(n) time and O(1) space." },
  { topic: "Linked List", question: "Which algorithm is used to detect a cycle in a Linked List?", options: ["Extra HashSet", "Floyd's Cycle Detection (Slow-Fast pointer)", "Count nodes", "Reverse and check"], answer: "Floyd's Cycle Detection (Slow-Fast pointer)", explanation: "Slow pointer moves 1 step, fast moves 2 steps - if they meet, cycle exists." },
  { topic: "Linked List", question: "What is the best approach to find the middle node of a Linked List?", options: ["Count length first", "Slow-Fast pointer", "Copy to array", "Use a stack"], answer: "Slow-Fast pointer", explanation: "Slow moves 1 step, fast moves 2 steps - when fast reaches end, slow is at middle." },
  { topic: "Linked List", question: "What is the approach to find the Nth node from the end of a Linked List?", options: ["Count length then traverse", "Two pointer with gap of N", "Use a stack", "Copy to array"], answer: "Two pointer with gap of N", explanation: "Move first pointer N steps ahead, then move both - when first reaches end, second is at Nth from end." },
  { topic: "Linked List", question: "What is the time complexity to merge two sorted linked lists?", options: ["O(n²)", "O(n log n)", "O(n+m)", "O(n*m)"], answer: "O(n+m)", explanation: "Traverse both lists simultaneously - O(n+m) time and O(1) space." },
  { topic: "Linked List", question: "What is the O(1) space approach to check Palindrome Linked List?", options: ["Copy to extra array", "Use a stack", "Find middle, reverse second half, compare", "Recursion"], answer: "Find middle, reverse second half, compare", explanation: "Find middle, reverse second half, then compare both halves." },
  { topic: "Linked List", question: "What is the time complexity to access the previous node in a Singly Linked List?", options: ["O(1)", "O(log n)", "O(n)", "O(n²)"], answer: "O(n)", explanation: "Singly linked list has only next pointer, so we must traverse from head to find previous." },
  { topic: "Linked List", question: "What is the difference between Doubly and Singly Linked List?", options: ["Size difference", "Doubly has both prev and next pointers", "Doubly stores only integers", "No difference"], answer: "Doubly has both prev and next pointers", explanation: "In a Doubly Linked List, each node has both prev and next pointers." },
  { topic: "Linked List", question: "Which sorting algorithm is best suited for Linked Lists?", options: ["Bubble sort", "Merge sort", "Quick sort", "Insertion sort"], answer: "Merge sort", explanation: "Merge sort is best for linked lists - O(n log n) and no random access needed." },
  { topic: "Linked List", question: "What is the time complexity to insert a node at the beginning of a Linked List?", options: ["O(n)", "O(log n)", "O(1)", "O(n²)"], answer: "O(1)", explanation: "Inserting at the head only requires updating the head pointer - O(1)." },

  // STACK (10)
  { topic: "Stack", question: "What principle does a Stack follow?", options: ["FIFO", "LIFO", "Random access", "Priority based"], answer: "LIFO", explanation: "Stack follows Last In First Out (LIFO) principle." },
  { topic: "Stack", question: "What do we push onto the stack in the Valid Parentheses problem?", options: ["Closing brackets", "Opening brackets", "Both", "Numbers only"], answer: "Opening brackets", explanation: "Push opening brackets; when a closing bracket appears, pop and check for a match." },
  { topic: "Stack", question: "How do we retrieve the minimum element in O(1) in a Min Stack?", options: ["Linear search", "Maintain an extra min stack", "Sort elements", "Use a linked list"], answer: "Maintain an extra min stack", explanation: "An auxiliary stack tracks the current minimum at every state." },
  { topic: "Stack", question: "What is the optimal approach to find the Next Greater Element?", options: ["Brute force O(n²)", "Monotonic Stack O(n)", "Sorting", "Binary search"], answer: "Monotonic Stack O(n)", explanation: "A monotonic decreasing stack gives the next greater element in O(n)." },
  { topic: "Stack", question: "When implementing a Stack using Queues, which operation is O(n)?", options: ["Push O(n), Pop O(1)", "Push O(1), Pop O(n)", "Both O(n)", "Both O(1)"], answer: "Push O(n), Pop O(1)", explanation: "During push, elements are rotated so the top element is always at the front." },
  { topic: "Stack", question: "Which data structure is used to evaluate a Postfix expression?", options: ["Queue", "Stack", "Array", "LinkedList"], answer: "Stack", explanation: "Operands are pushed; when an operator appears, pop and compute, then push result." },
  { topic: "Stack", question: "What do we store in the stack for the Daily Temperatures problem?", options: ["Temperatures", "Indices", "Differences", "Day count"], answer: "Indices", explanation: "Store indices so we can compute the number of days until a warmer temperature." },
  { topic: "Stack", question: "When does a Stack Overflow occur?", options: ["Stack becomes empty", "Push on a full stack", "Pop from empty stack", "String stored in stack"], answer: "Push on a full stack", explanation: "Stack overflow occurs when we try to push onto a stack that has reached its capacity." },
  { topic: "Stack", question: "Which data structure does Recursion internally use?", options: ["Queue", "Stack", "Array", "Tree"], answer: "Stack", explanation: "Function calls are stored on the call stack and executed in LIFO order." },
  { topic: "Stack", question: "What is the time complexity to check balanced brackets using a Stack?", options: ["O(n²)", "O(n log n)", "O(n)", "O(1)"], answer: "O(n)", explanation: "One pass through the string - O(n) time and O(n) space." },

  // QUEUE (10)
  { topic: "Queue", question: "What principle does a Queue follow?", options: ["LIFO", "FIFO", "Random access", "Priority based"], answer: "FIFO", explanation: "Queue follows First In First Out (FIFO) principle." },
  { topic: "Queue", question: "When implementing a Queue using Stacks, which operation is O(n)?", options: ["Enqueue O(1), Dequeue O(n)", "Enqueue O(n), Dequeue O(1)", "Both O(1)", "Both O(n)"], answer: "Enqueue O(1), Dequeue O(n)", explanation: "Enqueue is O(1); for dequeue, all elements are transferred to the second stack." },
  { topic: "Queue", question: "What is the advantage of a Circular Queue over a normal Queue?", options: ["Stores more elements", "No memory wastage", "Faster access", "Sorted elements"], answer: "No memory wastage", explanation: "In a circular queue, the space freed by dequeue operations is reused." },
  { topic: "Queue", question: "Which data structure is best for the Sliding Window Maximum problem?", options: ["Stack", "Simple Queue", "Deque (Monotonic)", "Priority Queue"], answer: "Deque (Monotonic)", explanation: "A Monotonic Deque solves sliding window maximum in O(n) time." },
  { topic: "Queue", question: "Which data structures are used to implement an LRU Cache?", options: ["Only HashMap", "Only Doubly Linked List", "HashMap + Doubly Linked List", "Stack + Queue"], answer: "HashMap + Doubly Linked List", explanation: "HashMap gives O(1) lookup; Doubly Linked List gives O(1) insert and delete." },
  { topic: "Queue", question: "Which data structure is used in BFS (Breadth First Search)?", options: ["Stack", "Queue", "Array", "Heap"], answer: "Queue", explanation: "BFS traverses level by level - Queue maintains the FIFO order required." },
  { topic: "Queue", question: "What data structures are used to find the First Non-Repeating Character in a Stream?", options: ["Stack", "Queue + HashMap", "Array", "Sorting"], answer: "Queue + HashMap", explanation: "Queue maintains insertion order; HashMap tracks character frequency." },
  { topic: "Queue", question: "Where is the minimum element located in a Priority Queue (Min Heap)?", options: ["At the end", "In the middle", "At the root (top)", "At a random position"], answer: "At the root (top)", explanation: "In a Min Heap, the minimum element is always at the root - O(1) access." },
  { topic: "Queue", question: "How do we reverse the first K elements of a Queue?", options: ["Use an extra array", "Use a Stack", "Two pointer", "Sorting"], answer: "Use a Stack", explanation: "Push K elements onto a stack, pop them back into the queue, then rotate the remaining elements." },
  { topic: "Queue", question: "From where can insertion and deletion happen in a Deque (Double Ended Queue)?", options: ["Only from front", "Only from rear", "From both front and rear", "From the middle"], answer: "From both front and rear", explanation: "A Deque supports insert and delete operations from both ends." },

  // TREE (10)
  { topic: "Tree", question: "What is the approach to find the Maximum Depth of a Binary Tree?", options: ["BFS", "Recursive DFS - 1 + max(left, right)", "Iterative with stack", "Level order traversal"], answer: "Recursive DFS - 1 + max(left, right)", explanation: "Recursively compute height of left and right subtrees and return the maximum." },
  { topic: "Tree", question: "What is the order of Inorder Traversal?", options: ["Root, Left, Right", "Left, Root, Right", "Left, Right, Root", "Right, Root, Left"], answer: "Left, Root, Right", explanation: "Inorder: left subtree first, then root, then right subtree - gives sorted output for BST." },
  { topic: "Tree", question: "What is the Diameter of a Binary Tree?", options: ["Height of the tree", "Total node count", "Longest path between any two nodes", "Path from root to leaf"], answer: "Longest path between any two nodes", explanation: "Diameter is the length of the longest path between any two nodes in the tree." },
  { topic: "Tree", question: "What is the approach to check if a Binary Tree is Symmetric?", options: ["Check inorder traversal", "Check if left and right subtrees are mirrors", "BFS level comparison", "Check heights"], answer: "Check if left and right subtrees are mirrors", explanation: "Recursively check: left.left == right.right and left.right == right.left." },
  { topic: "Tree", question: "Which data structure is used in Level Order Traversal?", options: ["Stack", "Queue", "Array", "LinkedList"], answer: "Queue", explanation: "A Queue is used for BFS - processes nodes level by level." },
  { topic: "Tree", question: "What is the condition for a Balanced Binary Tree?", options: ["All leaves at same level", "Height difference of left and right subtree is at most 1", "Root is always the middle value", "Must be sorted"], answer: "Height difference of left and right subtree is at most 1", explanation: "AVL tree condition - the height difference between subtrees must not exceed 1." },
  { topic: "Tree", question: "What is the average time complexity to search in a BST?", options: ["O(n)", "O(n log n)", "O(log n)", "O(1)"], answer: "O(log n)", explanation: "In a balanced BST, half the nodes are eliminated at each step - O(log n)." },
  { topic: "Tree", question: "Where is Postorder Traversal commonly used?", options: ["Sorted output", "Deleting a tree", "Printing levels", "Searching"], answer: "Deleting a tree", explanation: "In postorder, children are deleted before the parent - ensures safe deletion." },
  { topic: "Tree", question: "What is the time complexity to count all nodes in a Binary Tree?", options: ["O(log n)", "O(n log n)", "O(n)", "O(1)"], answer: "O(n)", explanation: "Every node is visited exactly once - O(n) time complexity." },
  { topic: "Tree", question: "What is the order of Preorder Traversal?", options: ["Left, Root, Right", "Left, Right, Root", "Root, Left, Right", "Right, Left, Root"], answer: "Root, Left, Right", explanation: "Preorder: root first, then left subtree, then right subtree." }
];

let current = 0, score = 0, answered = false;
let timerInterval, timeLeft = 30;
let history = JSON.parse(localStorage.getItem("dsaQuizHistory")) || [];

function loadQuestion() {
  answered = false;
  timeLeft = 30;
  clearInterval(timerInterval);
  startTimer();

  const q = questions[current];
  document.getElementById("question").textContent = q.question;
  document.getElementById("question-counter").textContent = `Question ${current + 1}/${questions.length}`;
  document.getElementById("current-score").textContent = `Score: ${score}`;
  document.getElementById("progress").style.width = `${((current) / questions.length) * 100}%`;
  document.getElementById("topic-badge").textContent = q.topic;
  document.getElementById("explanation").style.display = "none";
  document.getElementById("explanation").textContent = "";

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  document.getElementById("next-btn").style.display = "none";

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.classList.add("option-btn");
    btn.onclick = () => checkAnswer(btn, opt);
    optionsDiv.appendChild(btn);
  });
}

function startTimer() {
  const timerEl = document.getElementById("timer");
  timerEl.classList.remove("danger");
  timerEl.textContent = `⏱️ ${timeLeft}s`;

  timerInterval = setInterval(() => {
    timeLeft--;
    timerEl.textContent = `⏱️ ${timeLeft}s`;
    if (timeLeft <= 10) timerEl.classList.add("danger");
    if (timeLeft <= 0) { clearInterval(timerInterval); timeUp(); }
  }, 1000);
}

function timeUp() {
  if (answered) return;
  answered = true;
  document.querySelectorAll(".option-btn").forEach(b => {
    b.disabled = true;
    if (b.textContent === questions[current].answer) b.classList.add("correct");
  });
  const exp = document.getElementById("explanation");
  exp.textContent = "⏰ Time Up! " + questions[current].explanation;
  exp.style.display = "block";
  document.getElementById("next-btn").style.display = "inline-block";
}

function checkAnswer(btn, selected) {
  if (answered) return;
  answered = true;
  clearInterval(timerInterval);

  const correct = questions[current].answer;
  document.querySelectorAll(".option-btn").forEach(b => {
    b.disabled = true;
    if (b.textContent === correct) b.classList.add("correct");
  });

  const exp = document.getElementById("explanation");
  if (selected === correct) {
    score++;
    exp.textContent = "✅ Sahi! " + questions[current].explanation;
  } else {
    btn.classList.add("wrong");
    exp.textContent = "❌ Galat! " + questions[current].explanation;
  }
  exp.style.display = "block";
  document.getElementById("current-score").textContent = `Score: ${score}`;
  document.getElementById("next-btn").style.display = "inline-block";
}

function nextQuestion() {
  current++;
  if (current < questions.length) { loadQuestion(); }
  else { showResult(); }
}

function getGrade(s, total) {
  const p = (s / total) * 100;
  if (p === 100) return "🏆 Perfect! DSA Master Ho Aap!";
  if (p >= 80) return "🌟 Bahut Badhiya! Ek dum mast!";
  if (p >= 60) return "👍 Achha Kiya! Thodi aur practice karo.";
  if (p >= 40) return "😊 Theek Hai, Concepts revise karo!";
  return "💪 Koi Baat Nahi, Aur practice karo!";
}

function showResult() {
  clearInterval(timerInterval);
  document.getElementById("progress").style.width = "100%";
  document.getElementById("quiz-box").style.display = "none";
  document.getElementById("result").style.display = "block";
  document.getElementById("score-text").textContent = `Aapka Score: ${score} / ${questions.length}`;
  document.getElementById("grade").textContent = getGrade(score, questions.length);

  const now = new Date().toLocaleString("hi-IN");
  history.unshift({ score, total: questions.length, date: now });
  if (history.length > 5) history.pop();
  localStorage.setItem("dsaQuizHistory", JSON.stringify(history));
  showHistory();
}

function showHistory() {
  const list = document.getElementById("history-list");
  list.innerHTML = "";
  if (history.length === 0) { list.innerHTML = "<li>Koi history nahi hai</li>"; return; }
  history.forEach((h, i) => {
    const li = document.createElement("li");
    li.textContent = `#${i + 1} — Score: ${h.score}/${h.total} — ${h.date}`;
    list.appendChild(li);
  });
}

function restartQuiz() {
  current = 0; score = 0;
  document.getElementById("quiz-box").style.display = "block";
  document.getElementById("result").style.display = "none";
  loadQuestion();
}

loadQuestion();