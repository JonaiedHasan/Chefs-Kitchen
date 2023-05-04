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
            

        </div>
    );
};

export default Blogs;