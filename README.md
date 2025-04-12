## 🔰 What is `useReducer`?
`useReducer` is a **React Hook** that’s used to manage **more complex state logic** in a component — especially when:

- The **state depends on previous state**
- Multiple **actions** can update the state
- You want to **centralize your state logic**, like in Redux, but without using Redux
---

## 🚀 Beginner: `useReducer` vs `useState` 
### 🤔 When to use `useState`?
- Simple states: toggles, inputs, flags, counters
```
const [count, setCount] = useState(0);
```
### 🤔 When to use `useReducer`?
- Complex states (like objects or multiple related values)
- When you have **multiple types of actions**
- State changes depend on **previous state**
## ✅ Basic Syntax
```js
const [state, dispatch] = useReducer(reducer, initialState);
```
### 🔹 Components:
- `state` : current state
- `dispatch` : function to send an action
- `reducer` : function to update the state
- `initialState` : starting value

## ⚙️ Intermediate: Manage Complex States
```js
const initialState = {
  name: '',
  email: '',
  isLoggedIn: false,
};
```
## 🧠 Advanced: Replacing Redux in Localized Components
You can use `useReducer` in big projects **in place of Redux** if:

- The state is **only needed inside one component or a component tree**
- You don’t want the overhead of Redux for local state
- You want predictable state updates like Redux, but without global store
---

## 📦 useReducer with `Context API` → Global State (Alternative to Redux)
-```js
// GlobalState.js
```
## 🚀 Why & When to Use `useReducer` in Big Projects
| Situation | <p>Choose </p><p> When…</p> |
| ----- | ----- |
| Local state management | <p>You want Redux-like behavior but </p><p>**only locally**</p><p> inside a component</p> |
| State depends on previous | Like undo/redo, toggling, or step-based wizards |
| Multiple actions | <p>Too many </p><p> calls cluttering your component</p> |
| You don’t want Redux overhead | Small/medium projects where Redux is too much |
| Complex forms | With dynamic inputs, nested updates, validation flags |
---

## ⚔️ `useReducer` vs Redux vs `useState` 
| Feature | useState | useReducer | Redux Toolkit |
| ----- | ----- | ----- | ----- |
| Simplicity | ✅ Best | ⚠️ Medium | ❌ Complex |
| Complex logic | ❌ Not great | ✅ Good | ✅ Best |
| Global state | ❌ No | ✅ With Context | ✅ Built-in |
| Async handling | ❌ No | ❌ Manual | ✅ Built-in |
---

## 📌 Summary
| Level | What to Learn |
| ----- | ----- |
| Beginner | Understand reducer functions, dispatch, and simple examples |
| Intermediate | Use with objects, multiple actions |
| Advanced | Use with Context API for global state, replace Redux for small apps |

Give you a useReducer + Context API project template?🤔



.

---

## 📦 Project Structure
```
src/
├── context/
│   └── GlobalState.js
├── components/
│   ├── Login.js
│   └── UserInfo.js
├── App.js
└── index.js
```
## ✅ What This Template Gives You
- Global state without Redux
- Central `dispatch()`  like Redux
- Easy to scale: add more actions, handle loading, errors, etc.
- Works in both small and medium-large apps


Show how useReducer and Redux Toolkit can work side-by-side in large apps?

Great ask, Ankit! 🤝 In **large-scale apps**, you can use **Redux Toolkit (RTK)** for global app-wide state and `**useReducer**` for **component-level localized state**.

This **hybrid model** gives you:

- 🧠 Centralized power of Redux for core data (auth, user, cart, etc.)
- 💡 Lightweight `useReducer`  for isolated, reusable components
---

## 🧠 Use Case Example
Let’s say you’re building an **eCommerce App**.

| Feature | State Scope | Tool to Use |
| ----- | ----- | ----- |
| User login/logout | App-wide (global) | **Redux Toolkit** |
| Product filters (price, brand) | Component-level |  |
| Cart items | Global | **Redux Toolkit** |
| Modal toggles / Wizards | Local to UI components |  |
---

## 🔧 1. Project Setup
```bash
npm install @reduxjs/toolkit react-redux
```
### 🗂 Structure
```
src/
├── app/
│   └── store.js
├── features/
│   ├── userSlice.js
│   └── cartSlice.js
├── components/
│   ├── FilterPanel.js (uses useReducer)
│   └── ProductList.js (uses Redux)
└── App.js
```


