# 🟨 JavaScript Notes

## 🟢 Variables

### Simple Meaning

Variable ek **named box** hota hai jisme hum data store karte hain.

### Example

```js
const schoolName = "EduFlow AI";
```

### Breakdown

* `const` → variable banane ke liye
* `schoolName` → variable ka naam
* `=` → value assign karta hai
* `"EduFlow AI"` → stored value

### 🧠 Remember

```text
Variable = Name + Stored Value
```

Example:

```text
schoolName → "EduFlow AI"
```

### 🏫 EduFlow Example

Future mein hum variables mein values store karenge jaise:

```js
const schoolName = "EduFlow AI";
const totalStudents = 500;
```

---

## 🔵 `const` vs `let`

### `const`

Jab value ko baad mein **reassign/change nahi karna ho**.

```js
const schoolName = "EduFlow AI";
```

Agar hum dobara new value assign karein:

```js
schoolName = "EduFlow Academy";
```

to error aayega:

```text
TypeError: Assignment to constant variable.
```

### `let`

Jab value future mein **change ho sakti ho**.

```js
let totalStudents = 100;

totalStudents = 120;
```

Ab `totalStudents` ki value:

```text
120
```

### 🧠 Remember

```text
const → value reassign nahi hoti
let   → value reassign ho sakti hai
```

Normally pehle `const` use karo.

Agar value ko baad mein change karna ho, tab `let` use karo.

---

## 🏫 EduFlow Practical Example

```js
const schoolName = "EduFlow AI";

let totalStudents = 100;

totalStudents = 120;

console.log(schoolName);
console.log(totalStudents);
```

Output:

```text
EduFlow AI
120
```

### Final Rule

```text
Value fixed rahe → const
Value change ho → let
```

## 🟣 Arrays

### Simple Meaning

Array ek **list** hoti hai jisme hum multiple values ek hi variable mein store karte hain.

```js
const classes = [
  "Early Stages 1",
  "Early Stages 2",
  "Primary 1",
  "Primary 2"
];
```

---

### Array Index

Array ki counting `0` se start hoti hai.

```js
console.log(classes[0]);
console.log(classes[2]);
```

```text
index 0 → first item
index 1 → second item
index 2 → third item
```

---

### `.length`

Array mein total kitne items hain:

```js
console.log(classes.length);
```

---

### `.push()`

Array ke **end** mein item add karta hai.

```js
classes.push("Primary 3");
```

---

### `.pop()`

Array ka **last item remove** karta hai.

```js
classes.pop();
```

---

### `.unshift()`

Array ke **start** mein item add karta hai.

```js
classes.unshift("Foundation");
```

---

### `.shift()`

Array ka **first item remove** karta hai.

```js
classes.shift();
```

---

### `.includes()`

Check karta hai item array mein hai ya nahi.

```js
classes.includes("Primary 2");
```

Output:

```text
true
```

Agar item nahi ho:

```text
false
```

---

### `.indexOf()`

Item kis index par hai, ye batata hai.

```js
classes.indexOf("Primary 2");
```

Agar item nahi mile:

```text
-1
```

### 🧠 Remember

```text
indexOf() item mile → index number
indexOf() na mile   → -1
```

---

### Item Update by Index

```js
classes[3] = "Primary Three";
```

Index `3` wali value replace ho jayegi.

---

### `.slice()`

Array ka ek part **copy** karta hai.

```js
const selectedClasses = classes.slice(3, 6);
```

Rule:

```text
slice(start, end)

start → included
end   → excluded
```

`.slice()` original array ko change nahi karta.

---

### `.splice()`

Original array ko directly change karta hai.

```js
classes.splice(3, 1);
```

Meaning:

```text
3 → kis index se start karna hai
1 → kitne items remove karne hain
```

### Difference

```text
slice()  → copy, original safe
splice() → original array change
```

---

### `.join()`

Array ke items ko ek single string mein convert karta hai.

```js
console.log(classes.join(", "));
```

Example output:

```text
Primary 1, Primary 2, Primary 3
```

---

## 🧠 Arrays Quick Revision

```text
[0]       → item access
.length   → total items
.push()   → end mein add
.pop()    → end se remove
.unshift()→ start mein add
.shift()  → start se remove
.includes() → item exists?
.indexOf()  → item ka index
slice()   → copy
splice()  → original modify
join()    → array to string
```
