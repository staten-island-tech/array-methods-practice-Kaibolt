const students = [
  { name: "Alice", age: 20, grade: 85 },
  { name: "Bob", age: 22, grade: 90 },
  { name: "Charlie", age: 21, grade: 78 },
  { name: "Diana", age: 23, grade: 95 },
];
const products = [
  { name: "Laptop", price: 1200, category: "Electronics", rating: 4.5 },
  { name: "Phone", price: 800, category: "Electronics", rating: 4.7 },
  { name: "Headphones", price: 150, category: "Accessories", rating: 4.3 },
  { name: "Monitor", price: 300, category: "Electronics", rating: 4.6 },
  { name: "Keyboard", price: 100, category: "Accessories", rating: 4.1 },
  { name: "Chair", price: 250, category: "Furniture", rating: 4.0 },
  { name: "Desk", price: 450, category: "Furniture", rating: 4.8 },
];

// 1. Log each student’s name and grade
students.forEach((student) => console.log(student.name, student.grade));
const topStudents = students.filter((student) => student.grade > 80);
console.log(topStudents);
const youngStudents = students.filter((student) => student.age <= 21);
console.log(youngStudents);
topStudents.forEach((student) => console.log(student.name));
youngStudents.forEach((student) => console.log(student.name));

console.log(" ");

products.forEach((product) => console.log(product.name, product.price));
console.log(" ");
products.forEach((product) => console.log(product.name, product.price * 1.1));
