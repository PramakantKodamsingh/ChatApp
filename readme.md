learn abaout get vs post: get doesnot have req.body but manually we can add req.something because Using req.me allows you to pass the user information to the next middleware or route handler, as the req object is shared throughout the request-response cycle.

USESTATE VS USEREF:-

The key differences between useState and useRef in React are related to how they handle state and re-rendering:

1. Purpose:
   useState: Used to manage reactive state in a component. When the state changes, the component re-renders.
   useRef: Used to create a mutable object that persists between renders, but does not trigger a re-render when the value is updated.
2. Re-rendering:
   useState: Changing the value of a useState variable causes the component to re-render.
   useRef: Updating the .current property of a useRef object does not trigger a re-render.
3. Initial Value:
   useState: Takes an initial value and returns the current state and a function to update it.
   useRef: Takes an initial value and returns a ref object with a .current property that you can manually update.
4. Usage Example:
   useState:

jsx
Copy code
const [count, setCount] = useState(0);

return (

  <div>
    <p>{count}</p>
    <button onClick={() => setCount(count + 1)}>Increment</button>
  </div>
);
The component will re-render every time setCount is called.
useRef:

jsx
Copy code
const countRef = useRef(0);

const handleClick = () => {
countRef.current += 1;
};

return (

  <div>
    <p>{countRef.current}</p>
    <button onClick={handleClick}>Increment</button>
  </div>
);
The component will not re-render when countRef.current is updated.
5. When to Use:
useState: When you need to track state that affects rendering (like form inputs, counters, etc.).
useRef: When you need to persist values without causing re-renders (like accessing DOM elements, keeping track of timers, or storing mutable values).
In summary, use useState when you need reactivity and useRef when you need to store a value that persists without re-rendering.
