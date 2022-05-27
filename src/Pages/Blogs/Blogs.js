import React from 'react';
import PageTitle from '../Shared/PageTitle';

const Blogs = () => {
  return (
    <div class='flex flex-col w-full my-5'>
      <PageTitle title='Blogs'></PageTitle>
      <div class='divider'>Question-01</div>
      <div class='grid card px-12 rounded-box place-items-center'>
        <h2 className='text-2xl fw-bold'>
          Q1: How will you improve the performance of a React Application?
        </h2>
        <p>
          Ans: There are five important ways to optimize the performance of a
          React application: <br /> 1. Keeping component state local where
          necessary.
          <br />
          2. Memorizing React components to prevent unnecessary re-renders.
          <br /> 3. Code-splitting in React using dynamic import().
          <br /> 4. Windowing or list virtualization in React.
          <br /> 5. Lazy loading images in React.
          <br />
        </p>
      </div>
      <div class='divider'>Question-02</div>
      <div class='grid px-12 card rounded-box place-items-center'>
        <h2 className='text-2xl fw-bold'>
          Q2: What are the different ways to manage a state in a React
          application?
        </h2>
        <p>
          Ans: The ways are: <br />
          1. Local State. <br />
          2. Global State. <br />
          3. Server State. <br />
          4. URL State. <br />
        </p>
      </div>
      <div class='divider'>Question-03</div>
      <div class='grid px-12 card rounded-box place-items-center'>
        <h2 className='text-2xl fw-bold'>
          Q3: How does prototypical inheritance work?
        </h2>
        <p>
          Ans: Every object with its methods and properties contains an internal
          and hidden property known as [[Prototype]]. The Prototypal Inheritance
          is a feature in javascript used to add methods and properties to
          objects. It is a method by which an object can inherit the properties
          and methods of another object. Traditionally, in order to get and set
          the [[Prototype]] of an object, we use Object.getPrototypeOf and
          Object.setPrototypeOf.
        </p>
      </div>
      <div class='divider'>Question-04</div>
      <div class='grid px-12 card rounded-box place-items-center'>
        <h2 className='text-2xl fw-bold'>
          Q4: Why you do not set the state directly in React. For example, if
          you have `const [products, setProducts] = useState([])`. Why you do
          not set `products = [...]` instead, you use the `setProducts`
        </h2>
        <p>
          Ans: The state update using the updater provided by useState hook is
          asynchronous, and will not be reflected immediately. Also, the main
          issue here is not just the asynchronous nature but the fact that state
          values are used by functions based on their current closures, and
          state updates will reflect in the next re-render by which the existing
          closures are not affected, but new ones are created.
        </p>
      </div>
      <div class='divider'>Question-05</div>
      <div class='grid px-12 card rounded-box place-items-center'>
        <h2 className='text-2xl fw-bold'>
          Q5: You have an array of products. Each object has a name, price,
          description, etc. How will you implement a search to find products by
          name?
        </h2>
        <p>
          Ans: First of all, I will destructing it and then I will write query
          find one product with the condition of arrayname.find and the
          products.name because its a specific product. If we want to find all
          product then we have to use filter.
        </p>
      </div>
      <div class='divider'>Question-06</div>
      <div class='grid px-12 card rounded-box place-items-center'>
        <h2 className='text-2xl fw-bold'>
          Q6: What is a unit test? Why should write unit tests?
        </h2>
        <p>
          Ans: Unit test: Unit testing is a type of software testing where
          individual units or components of a software are tested. We should
          write it because it isolate a function, class or method and only test
          that piece of code
        </p>
      </div>
      <div class='divider'>The End</div>
    </div>
  );
};

export default Blogs;
