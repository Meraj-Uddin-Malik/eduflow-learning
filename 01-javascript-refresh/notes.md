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
