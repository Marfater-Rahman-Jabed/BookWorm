import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-5xl text-blue-500 text-center my-4 font-bold'>Here the answer your query</h1>
            <div className='my-10 border-4 p-4 bg-slate-300'>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-2">
                    <div className="collapse-title text-xl font-medium text-orange-400">
                        (1.) What are the different ways to manage a state in a React application?
                    </div>
                    <div className="collapse-content">
                        <ul>
                            <li>1.useState.</li><br />
                            <li>2.useReducer.</li><br />
                            <li>3.useMemo & useCallback.</li><br />
                            <li>4.useEffect.</li><br />
                            <li>5.useRef.</li><br />
                            <li>6.Context and Custom Hooks.</li><br />
                            <li>7.React Query & React Location.</li>
                        </ul>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-2">
                    <div className="collapse-title text-xl font-medium text-orange-400">
                        (2.)How does prototypical inheritance work?
                    </div>
                    <div className="collapse-content">
                        <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-2">
                    <div className="collapse-title text-xl font-medium text-orange-400">
                        (3.)What is a unit test? Why should we write unit tests?
                    </div>
                    <div className="collapse-content">
                        <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-2">
                    <div className="collapse-title text-xl font-medium text-orange-400">
                        (4.)React vs. Angular vs. Vue?
                    </div>
                    <div className="collapse-content">
                        <p>A simple difference between these three is that React is a UI library, and Vue is a progressive framework. However, Angular is a full-fledged front-end framework. As per StackOverflow Survey 2022, React is the favorite framework of 40.14% of developers, Angular with 22.96%, and Vue with 18.97% of developers.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;