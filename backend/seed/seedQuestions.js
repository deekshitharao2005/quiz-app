const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Question = require("../models/Question");

dotenv.config();

const questions = [
  // OS - 20
  {
    topic: "OS",
    question: "Which of the following is the core of an operating system?",
    options: ["Compiler", "Kernel", "Assembler", "Shell"],
    correctAnswer: "Kernel",
  },
  {
    topic: "OS",
    question: "Which scheduling algorithm gives minimum average waiting time in ideal cases?",
    options: ["FCFS", "Round Robin", "Shortest Job First", "Priority"],
    correctAnswer: "Shortest Job First",
  },
  {
    topic: "OS",
    question: "Which of the following is not a function of an operating system?",
    options: ["Memory management", "Process management", "Web designing", "File management"],
    correctAnswer: "Web designing",
  },
  {
    topic: "OS",
    question: "A deadlock occurs when processes are:",
    options: ["Running quickly", "Waiting indefinitely for resources", "Sharing CPU equally", "Using cache memory"],
    correctAnswer: "Waiting indefinitely for resources",
  },
  {
    topic: "OS",
    question: "Which memory is volatile?",
    options: ["ROM", "Hard Disk", "RAM", "SSD"],
    correctAnswer: "RAM",
  },
  {
    topic: "OS",
    question: "The smallest unit of CPU scheduling is called:",
    options: ["Program", "Process", "File", "Semaphore"],
    correctAnswer: "Process",
  },
  {
    topic: "OS",
    question: "Round Robin scheduling mainly uses:",
    options: ["Time quantum", "Priority number", "Stack", "Paging"],
    correctAnswer: "Time quantum",
  },
  {
    topic: "OS",
    question: "Paging is used for:",
    options: ["CPU scheduling", "Memory management", "Disk formatting", "Compilation"],
    correctAnswer: "Memory management",
  },
  {
    topic: "OS",
    question: "Which one is a non-preemptive scheduling algorithm?",
    options: ["FCFS", "Round Robin", "SRTF", "Preemptive Priority"],
    correctAnswer: "FCFS",
  },
  {
    topic: "OS",
    question: "Thrashing is related to:",
    options: ["Network failure", "Memory overuse", "Compiler error", "File deletion"],
    correctAnswer: "Memory overuse",
  },
  {
    topic: "OS",
    question: "Which of the following is used for process synchronization?",
    options: ["Semaphore", "Compiler", "Loader", "Interpreter"],
    correctAnswer: "Semaphore",
  },
  {
    topic: "OS",
    question: "Context switching means saving the:",
    options: ["Keyboard input", "Process state", "File name", "Browser history"],
    correctAnswer: "Process state",
  },
  {
    topic: "OS",
    question: "The main purpose of virtual memory is to:",
    options: ["Increase CPU speed", "Increase memory size logically", "Reduce files", "Delete cache"],
    correctAnswer: "Increase memory size logically",
  },
  {
    topic: "OS",
    question: "Which state comes after ready state when CPU is assigned?",
    options: ["Waiting", "Terminated", "Running", "Blocked"],
    correctAnswer: "Running",
  },
  {
    topic: "OS",
    question: "Mutual exclusion is needed to avoid:",
    options: ["Syntax errors", "Race conditions", "Dead pixels", "Fragmentation"],
    correctAnswer: "Race conditions",
  },
  {
    topic: "OS",
    question: "Which of the following is an example of an operating system?",
    options: ["MS Word", "Linux", "Python", "Oracle"],
    correctAnswer: "Linux",
  },
  {
    topic: "OS",
    question: "FIFO page replacement may suffer from:",
    options: ["Belady’s anomaly", "Deadlock", "Starvation only", "No issue"],
    correctAnswer: "Belady’s anomaly",
  },
  {
    topic: "OS",
    question: "In OS, a thread is:",
    options: ["Heavyweight process", "Lightweight process", "File structure", "Disk block"],
    correctAnswer: "Lightweight process",
  },
  {
    topic: "OS",
    question: "Banker’s algorithm is used for:",
    options: ["CPU scheduling", "Deadlock avoidance", "File allocation", "Disk formatting"],
    correctAnswer: "Deadlock avoidance",
  },
  {
    topic: "OS",
    question: "Which of these is a CPU scheduling criterion?",
    options: ["Turnaround time", "Font size", "Brightness", "Resolution"],
    correctAnswer: "Turnaround time",
  },

  // DBMS - 20
  {
    topic: "DBMS",
    question: "A DBMS is used to:",
    options: ["Design websites", "Manage data efficiently", "Compile programs", "Run operating systems"],
    correctAnswer: "Manage data efficiently",
  },
  {
    topic: "DBMS",
    question: "Which key uniquely identifies a record in a table?",
    options: ["Foreign key", "Primary key", "Candidate key", "Composite key"],
    correctAnswer: "Primary key",
  },
  {
    topic: "DBMS",
    question: "Which normal form removes partial dependency?",
    options: ["1NF", "2NF", "3NF", "BCNF"],
    correctAnswer: "2NF",
  },
  {
    topic: "DBMS",
    question: "A foreign key is used to:",
    options: ["Delete tables", "Link two tables", "Sort records", "Create views"],
    correctAnswer: "Link two tables",
  },
  {
    topic: "DBMS",
    question: "Which language is used to interact with relational databases?",
    options: ["HTML", "SQL", "CSS", "C"],
    correctAnswer: "SQL",
  },
  {
    topic: "DBMS",
    question: "Redundancy in databases leads to:",
    options: ["Better security", "Data inconsistency", "Normalization", "Indexing"],
    correctAnswer: "Data inconsistency",
  },
  {
    topic: "DBMS",
    question: "The ACID property that ensures all or nothing is:",
    options: ["Consistency", "Isolation", "Atomicity", "Durability"],
    correctAnswer: "Atomicity",
  },
  {
    topic: "DBMS",
    question: "Which command is used to remove all rows but keep the table?",
    options: ["DROP", "DELETE", "TRUNCATE", "REMOVE"],
    correctAnswer: "TRUNCATE",
  },
  {
    topic: "DBMS",
    question: "An ER model is mainly used for:",
    options: ["Data storage", "Conceptual design", "Query optimization", "Networking"],
    correctAnswer: "Conceptual design",
  },
  {
    topic: "DBMS",
    question: "Which of the following is not a DBMS?",
    options: ["MySQL", "Oracle", "MongoDB", "Windows"],
    correctAnswer: "Windows",
  },
  {
    topic: "DBMS",
    question: "A tuple in DBMS means:",
    options: ["Column", "Row", "Database", "Schema"],
    correctAnswer: "Row",
  },
  {
    topic: "DBMS",
    question: "A relation in relational DBMS is called:",
    options: ["Table", "Index", "Schema", "View only"],
    correctAnswer: "Table",
  },
  {
    topic: "DBMS",
    question: "Which normal form removes transitive dependency?",
    options: ["1NF", "2NF", "3NF", "4NF"],
    correctAnswer: "3NF",
  },
  {
    topic: "DBMS",
    question: "Which operation combines rows from two tables based on related columns?",
    options: ["Union", "Join", "Projection", "Selection"],
    correctAnswer: "Join",
  },
  {
    topic: "DBMS",
    question: "Database schema means:",
    options: ["Actual data", "Logical structure of database", "Backup copy", "A query"],
    correctAnswer: "Logical structure of database",
  },
  {
    topic: "DBMS",
    question: "Which property ensures committed data is not lost?",
    options: ["Atomicity", "Durability", "Isolation", "Consistency"],
    correctAnswer: "Durability",
  },
  {
    topic: "DBMS",
    question: "A candidate key is:",
    options: ["Always foreign key", "One of the possible primary keys", "A duplicate key", "A null key"],
    correctAnswer: "One of the possible primary keys",
  },
  {
    topic: "DBMS",
    question: "Functional dependency is used in:",
    options: ["Normalization", "Networking", "OS scheduling", "Compilation"],
    correctAnswer: "Normalization",
  },
  {
    topic: "DBMS",
    question: "Which of the following is a NoSQL database?",
    options: ["PostgreSQL", "Oracle", "MongoDB", "MySQL"],
    correctAnswer: "MongoDB",
  },
  {
    topic: "DBMS",
    question: "Which command removes a table completely?",
    options: ["DELETE", "REMOVE", "DROP", "TRUNCATE"],
    correctAnswer: "DROP",
  },

  // OOPS - 20
  {
    topic: "OOPS",
    question: "Which concept bundles data and methods together?",
    options: ["Inheritance", "Encapsulation", "Polymorphism", "Abstraction"],
    correctAnswer: "Encapsulation",
  },
  {
    topic: "OOPS",
    question: "Which OOP concept means one name, many forms?",
    options: ["Abstraction", "Polymorphism", "Inheritance", "Compilation"],
    correctAnswer: "Polymorphism",
  },
  {
    topic: "OOPS",
    question: "The ability of a class to derive properties from another class is:",
    options: ["Abstraction", "Inheritance", "Binding", "Overriding"],
    correctAnswer: "Inheritance",
  },
  {
    topic: "OOPS",
    question: "Hiding implementation details and showing only essentials is:",
    options: ["Inheritance", "Encapsulation", "Abstraction", "Object creation"],
    correctAnswer: "Abstraction",
  },
  {
    topic: "OOPS",
    question: "An object is an instance of a:",
    options: ["Function", "Class", "Method", "Package"],
    correctAnswer: "Class",
  },
  {
    topic: "OOPS",
    question: "Which method has the same name as the class in many OOP languages?",
    options: ["Destructor", "Constructor", "Mutator", "Accessor"],
    correctAnswer: "Constructor",
  },
  {
    topic: "OOPS",
    question: "Function overloading is an example of:",
    options: ["Runtime polymorphism", "Compile-time polymorphism", "Inheritance", "Abstraction"],
    correctAnswer: "Compile-time polymorphism",
  },
  {
    topic: "OOPS",
    question: "Method overriding is an example of:",
    options: ["Compile-time polymorphism", "Runtime polymorphism", "Encapsulation", "Aggregation"],
    correctAnswer: "Runtime polymorphism",
  },
  {
    topic: "OOPS",
    question: "Which access specifier makes members accessible only within the class?",
    options: ["Public", "Protected", "Private", "Global"],
    correctAnswer: "Private",
  },
  {
    topic: "OOPS",
    question: "Which keyword is commonly used to refer to the current object?",
    options: ["that", "this", "super", "object"],
    correctAnswer: "this",
  },
  {
    topic: "OOPS",
    question: "Inheritance where one class inherits from another single class is:",
    options: ["Multiple", "Hierarchical", "Single", "Hybrid"],
    correctAnswer: "Single",
  },
  {
    topic: "OOPS",
    question: "A class with at least one abstract method is called:",
    options: ["Normal class", "Static class", "Abstract class", "Friend class"],
    correctAnswer: "Abstract class",
  },
  {
    topic: "OOPS",
    question: "The process of creating an object is called:",
    options: ["Instantiation", "Inheritance", "Compilation", "Encapsulation"],
    correctAnswer: "Instantiation",
  },
  {
    topic: "OOPS",
    question: "Which relationship represents 'has-a'?",
    options: ["Inheritance", "Aggregation", "Polymorphism", "Binding"],
    correctAnswer: "Aggregation",
  },
  {
    topic: "OOPS",
    question: "Data hiding is mainly achieved using:",
    options: ["Loops", "Access specifiers", "Inheritance", "Arrays"],
    correctAnswer: "Access specifiers",
  },
  {
    topic: "OOPS",
    question: "Which feature improves code reusability?",
    options: ["Inheritance", "Deleting objects", "Syntax highlighting", "Compilation"],
    correctAnswer: "Inheritance",
  },
  {
    topic: "OOPS",
    question: "A blueprint for creating objects is called:",
    options: ["Class", "Method", "Variable", "Package"],
    correctAnswer: "Class",
  },
  {
    topic: "OOPS",
    question: "Which of the following is not a pillar of OOP?",
    options: ["Encapsulation", "Abstraction", "Inheritance", "Linking"],
    correctAnswer: "Linking",
  },
  {
    topic: "OOPS",
    question: "When child class provides its own version of parent method, it is called:",
    options: ["Overloading", "Overriding", "Encapsulation", "Instantiation"],
    correctAnswer: "Overriding",
  },
  {
    topic: "OOPS",
    question: "Which mechanism allows calling the same function with different argument lists?",
    options: ["Overloading", "Overriding", "Inheritance", "Abstraction"],
    correctAnswer: "Overloading",
  },

  // SQL - 20
  {
    topic: "SQL",
    question: "Which statement is used to retrieve data from a table?",
    options: ["GET", "SELECT", "FETCH", "OPEN"],
    correctAnswer: "SELECT",
  },
  {
    topic: "SQL",
    question: "Which clause is used to filter rows?",
    options: ["ORDER BY", "WHERE", "GROUP BY", "HAVING"],
    correctAnswer: "WHERE",
  },
  {
    topic: "SQL",
    question: "Which command is used to insert new data?",
    options: ["ADD", "PUT", "INSERT", "APPEND"],
    correctAnswer: "INSERT",
  },
  {
    topic: "SQL",
    question: "Which command updates existing rows?",
    options: ["MODIFY", "UPDATE", "CHANGE", "SETROW"],
    correctAnswer: "UPDATE",
  },
  {
    topic: "SQL",
    question: "Which command removes a table completely?",
    options: ["DELETE", "REMOVE", "DROP", "TRUNCATE"],
    correctAnswer: "DROP",
  },
  {
    topic: "SQL",
    question: "Which keyword sorts the result set?",
    options: ["SORT", "ORDER BY", "GROUP BY", "ALIGN BY"],
    correctAnswer: "ORDER BY",
  },
  {
    topic: "SQL",
    question: "Which aggregate function counts rows?",
    options: ["SUM()", "COUNT()", "AVG()", "TOTAL()"],
    correctAnswer: "COUNT()",
  },
  {
    topic: "SQL",
    question: "Which SQL clause groups rows with same values?",
    options: ["WHERE", "GROUP BY", "ORDER BY", "DISTINCT"],
    correctAnswer: "GROUP BY",
  },
  {
    topic: "SQL",
    question: "Which clause is used to filter groups?",
    options: ["WHERE", "HAVING", "ORDER BY", "LIMIT"],
    correctAnswer: "HAVING",
  },
  {
    topic: "SQL",
    question: "Which operator is used for pattern matching?",
    options: ["IN", "BETWEEN", "LIKE", "MATCHES"],
    correctAnswer: "LIKE",
  },
  {
    topic: "SQL",
    question: "Which keyword removes duplicate values from output?",
    options: ["UNIQUE", "DISTINCT", "DIFFERENT", "SINGLE"],
    correctAnswer: "DISTINCT",
  },
  {
    topic: "SQL",
    question: "Which join returns matching rows from both tables?",
    options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL JOIN"],
    correctAnswer: "INNER JOIN",
  },
  {
    topic: "SQL",
    question: "Which join returns all rows from left table and matching rows from right?",
    options: ["RIGHT JOIN", "LEFT JOIN", "INNER JOIN", "CROSS JOIN"],
    correctAnswer: "LEFT JOIN",
  },
  {
    topic: "SQL",
    question: "Which command is used to create a new table?",
    options: ["BUILD TABLE", "NEW TABLE", "CREATE TABLE", "MAKE TABLE"],
    correctAnswer: "CREATE TABLE",
  },
  {
    topic: "SQL",
    question: "Which constraint prevents null values?",
    options: ["UNIQUE", "NOT NULL", "CHECK", "DEFAULT"],
    correctAnswer: "NOT NULL",
  },
  {
    topic: "SQL",
    question: "Which constraint ensures all values are unique?",
    options: ["PRIMARY", "UNIQUE", "DEFAULT", "CHECK"],
    correctAnswer: "UNIQUE",
  },
  {
    topic: "SQL",
    question: "Which keyword is used to rename a column or table output temporarily?",
    options: ["AS", "TO", "INTO", "RENAME"],
    correctAnswer: "AS",
  },
  {
    topic: "SQL",
    question: "Which query returns all columns from Student table?",
    options: ["SELECT ALL FROM Student", "SELECT * FROM Student", "GET * Student", "SHOW Student"],
    correctAnswer: "SELECT * FROM Student",
  },
  {
    topic: "SQL",
    question: "Which command deletes specific rows from a table?",
    options: ["DROP", "DELETE", "TRUNCATE", "REMOVE TABLE"],
    correctAnswer: "DELETE",
  },
  {
    topic: "SQL",
    question: "Which clause limits the number of rows returned in many SQL databases?",
    options: ["TOPIC", "LIMIT", "BOUND", "ROWS"],
    correctAnswer: "LIMIT",
  },
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected for seeding");

    await Question.deleteMany();
    await Question.insertMany(questions);

    console.log("Questions seeded successfully");
    process.exit();
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
};

seedDB();