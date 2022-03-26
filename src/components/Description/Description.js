import React from 'react';
import { Accordion } from 'react-bootstrap';

const Description = () => {
    return (
        <div>
            <Accordion>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>
                    <h3>How react works?</h3>
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>React is used for making dynamic web pages.When we intercet with web pages, react creates a virtual DOM .Then it compares with real DOM.When react found any differences between virtual DOM and real DOM on a portion,it make change on that portion by using hooks.And finallyreact update the real DOM .In this way react works</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>
                        <h3>Props vs state</h3>
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                        We use props is a react component for passing data from one component to another.For sending data we send data as an attribute from one component and received data from another component by using props.On the other hand state is a thingthat is changed.Anything on the website that could change is called state . If a user take  any action than state will be changed otherwise state will not change. In short state change by user interaction.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>
                       <h3>How useState works?</h3>
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                        useState stores state variable in functional component. useState receives default parameter in bracket. useState has two elements. We use useState hook in react to set the loaded data from the API in state variable. useState returns a value by destructure system and return a function. Function make update the value.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Description;