# Job Application Tracker
**Project Live Link:** [[Job-Application-Tracker](https://ziaul-hoque4820.github.io/Job-Application-Tracker/)]
---
### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

- getElementById, getElementsByClassName এবং querySelector এগুলো সব HTML element সিলেক্ট করার মেথড। কিন্তু প্রতিটি মেথডের কাজের ধরন আলাদা।
- getElementById: HTML element এর মধ্যে কোনো আইডি থাকলে এই মেথড দিয়ে ঐ HTML element কে ধরা যায়। এই মেথডটি কেবল আইডি আছে এমন HTML element কে রিড করে।
- getElementsByClassName: নির্দিষ্ট কোনো ক্লাসকে সিলেক্ট করার মাধ্যমে ঐ ক্লাসের HTML element কে ধরা যাবে। এছাড়াও getElementsByClassName এর বিশেষত্য হলো একই ক্লাস নেম যদি কয়েকটি HTML element এর উপর থাকে তাহলে সবগুলো HTML element কে একসাথে ধরা যাবে। এই মেথড টি ক্লাস আছে এমন সব ইলিমেন্টকে রিড করে।
- querySelector: এই মেথডের মাধ্যমে HTML element এর মধ্যে আইডি বা ক্লাস দুইটাকেই রিড করে HTML element কে ধরা যায়। তবে আইডি ধরার জন্য ("#acb") এবং ক্লাস ধরার জন্য (".acb") এভাবে লিখতে হবে।
- querySelectorAll: এইটা querySelector মেথডের মতই কাজ করে তবে এক্ষেত্রে সেম ক্লাস থাকা সবগুলো HTML element ধরা যায়।
.
---
### 2. How do you create and insert a new element into the DOM?
- একটা নতুন element কে DOM এর মধ্যে এড করা যায় কয়েক ধাপে:- createElement() এর মাধ্যমে একটি HTML ইলিমেন্ট তৈরি করা যায়। যেমন: 
- const newDiv = document.createElement('div');
- এবার কোনো একটা টেক্সটকে newDiv এর মধ্যে রাখা যায় textContent বা innerHTML মেথডের মাধ্যমে। যেমন:
- newDiv.textContent = 'Hello World!';
- এবার নতুন element কে DOM এর মধ্যে এড করার appendChild() মেথড ব্যবহার করতে পারি। যেমন:
- document.body.appendChild(newDiv);
.
---
### 3. What is Event Bubbling? And how does it work?
- কোনো একটা HTML element এর মধ্যে ইভেন্ট ঘটলে (যেমন: Click) সেই ইভেন্ট সেখানেই থেমে থাকেনা বরং সেটি পানির বুদবুদের মতো উপরে উঠতে থাকে অর্থাৎ যে HTML element এর মধ্যে ইভেন্ট ঘটেছে সেটি তার পেরেন্ট ইলিমেন্টগুলোকেও ট্রিগার করে। এটাই হলো ইভেন্ট বাবলিং।
- ধরি একটি div এর মধ্যে একটি h1 পরে একটি p এবং সবশেষে একটি button টেগ রয়েছে। এখন যদি কেউ বাটন টেগে ক্লিক ইভেন্ট চালায় তাহলে ইভেন্টটি কেবল বাটনে থেমে না থেকে বাটনের উপর p টেগে থাকা কোনো ইভেন্ট থাকলে সেটাও রান করে দিবে তারপর h1 বা বাটনের পেরেন্ট element যে div টি রয়েছে সেখানেও কোনো ইভেন্ট থাকলে সেটাকেও রান করে দিবে। বিষয়টা একটা চেইন রিয়াকশনের মতো কাজ করে আর এটাই ইভেন্ট বাবলিং।
.
---
### 4. What is Event Delegation in JavaScript? Why is it useful?
- সহজ কথায়, অনেকগুলো আলাদা আলাদা চাইল্ড এলিমেন্টে (যেমন ১০০টি li) আলাদাভাবে ইভেন্ট লিসেনার না বসিয়ে, তাদের কমন Parent এলিমেন্টে একটি মাত্র ইভেন্ট লিসেনার বসানোর কৌশলকেই Event Delegation বলে। এটি মূলত Event Bubbling-এর সুবিধা নিয়ে কাজ করে.
.
---
# What is the difference between preventDefault() and stopPropagation() methods?
- preventDefault() ব্রাউজারের ডিফল্ট কাজ বন্ধ করে যেমন কোনো ফরম পূরন করে সেন্ড করতে চাইলে ব্রাউজার অটোমেটিক পেজ রিলোড দিয়ে দেয়। তাই preventDefault() ব্যবহার করা হয়।
- stopPropagation() ইভেন্টের উপরে ওঠা বা বাবলিংক বন্ধ করতে ব্যবহার করা হয়।
.
---