const firstLi = document.querySelector('li');

// Log its parent element
console.log('Parent of first <li>:', firstLi.parentElement);

// Log the next sibling and previous sibling
console.log('Next sibling of first <li>:', firstLi.nextElementSibling);
console.log('Previous sibling of first <li>:', firstLi.previousElementSibling);

// Log all children of a <ul> element
const ul = document.querySelector('ul');
console.log('All children of <ul>:', ul.children);

// Check if a <div> has any child nodes
const div = document.querySelector('div');
console.log('Does <div> have child nodes?', div.hasChildNodes());

// Check if a <ul> contains a particular <li> element
const specificLi = document.querySelector('ul li:nth-child(2)');
console.log('Does <ul> contain the specific <li>?', ul.contains(specificLi));
