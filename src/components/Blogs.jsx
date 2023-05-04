/* eslint-disable no-unused-vars */
import React from 'react';

const Blogs = () => {
    return (
        <div className='my-container'>
            <div className="collapse my-4">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-orange-400 text-white peer-checked:bg-secondary peer-checked:text-secondary-content">
                    1.Tell us the differences between uncontrolled and controlled components.
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>
                        In React, controlled components refer to the components that are controlled by React state, meaning their state is updated by React. On the other hand, uncontrolled components refer to the components that handle their own state internally and do not rely on React to update their state. The key difference between the two is that with controlled components, React handles the state, while with uncontrolled components, the component handles its own state. This makes controlled components more predictable and easier to test, while uncontrolled components provide more flexibility and require less code.</p>
                </div>
            </div>
            <div className="collapse my-4">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-orange-400 text-white peer-checked:bg-secondary peer-checked:text-secondary-content">
                    2.How to validate React props using PropTypes?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>React provides a built-in library called PropTypes that allows developers to validate the props being passed to a component. PropTypes provides a way to check the type, presence, and shape of the props being passed. To use PropTypes, we need to import the library and specify the propTypes object on the component. The propTypes object should contain a key for each prop that we want to validate and the value of that key specifies the validation rule. If the validation rule fails, a warning will be logged to the console. Using PropTypes can help catch bugs early and make the code more maintainable.</p>
                </div>
            </div>
            <div className="collapse my-4">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-orange-400 text-white peer-checked:bg-secondary peer-checked:text-secondary-content">
                    3.Tell us the difference between nodejs and express js.
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>Node.js is a JavaScript runtime environment that allows developers to run JavaScript code outside of a web browser. It is designed to be used for building scalable network applications.

                        Express.js is a web application framework built on top of Node.js. It provides a simple and flexible way to create web applications and APIs by providing features such as routing, middleware, and templates.

                        In other words, Node.js is the runtime environment for JavaScript code to run on the server-side, while Express.js is a framework built on top of Node.js to simplify building web applications and APIs.</p>
                </div>
            </div>
            <div className="collapse my-4">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-orange-400 text-white peer-checked:bg-secondary peer-checked:text-secondary-content">
                    4.What is a custom hook, and why will you create a custom hook?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>In React, a custom hook is a JavaScript function that starts with the prefix use and allows you to extract logic from a component and share it across multiple components. Its a way to reuse stateful logic and share functionality between components without the need for higher-order components or render props.

                        Custom hooks can be used to encapsulate complex logic and improve code organization. For example, you can create a custom hook to handle form validation, API calls, or even to manage the state of a component. By creating a custom hook, you can easily share the functionality across multiple components and avoid duplication of code.</p>
                </div>
            </div>

        </div>
    );
};

export default Blogs;