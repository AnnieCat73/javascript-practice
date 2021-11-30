const output = document.getElementById("output");
let content = "";

for (let i = 0; i < 10; i++) {
  content += `<div class="post">This is post ${i}</div>`;
}

output.innerHTML = content;

for (let i = 0; i < 10; i++) {
  console.log(`Let's count from: ${i}`);
}

const div = document.getElementById("div");
let numbers = "";
for (let i = 1; i < 101; i++) {
  numbers += i;
  div.innerHTML = numbers;
}