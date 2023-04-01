import React from 'react';

const Blog = () => {
    return (
        <div className='border p-3 card'>
            <h1 className='text-center'>Question and Answer</h1>
            <div className='card p-2 mb-2'>
                <h2>1. Props vs State</h2>
                <p><span className='text-danger fw-bold text-decoration-underline'>Props: </span>Props are known as properties it can be used to pass data from one component to another. Props cannot be modified, read-only, and Immutable.</p>
                <p><span className='text-danger fw-bold text-decoration-underline'>State: </span>The state represents parts of an Application that can change. Each component can have its State. The state is Mutable and It is local to the component only.</p>
            </div>
            <div className='card p-2 mb-2'>
                <h2>2. How does usestate work?</h2>
                <p><span className='text-danger fw-bold text-decoration-underline'>useState: </span> useState is React Hook that allows to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.</p>
                <p>Example: const [state, setState] = useState(initialValue);</p>
            </div>
            <div className='card p-2 mb-2'>
                <h2>3. Purpose of useeffect other then fetching data.</h2>
                <p><span className='text-danger fw-bold text-decoration-underline'>UseEffect: </span> UseEffect provides us a safe place to write impure code. When want to perform an action once, especially when the app loads or mounts, we can use useEffect to do it. In this case, we are triggering a fetch() GET request when the app is mounted, using an empty array as useEffect dependency.</p>
            </div>
            <div className='card p-2 '>
                <h2>4. How does react work?</h2>
                <p><span className='text-danger fw-bold text-decoration-underline'>React: </span>React divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props.
                    Returned React elements determine how the UI will look. </p>
            </div>
        </div>
    );
};

export default Blog;
// thanks