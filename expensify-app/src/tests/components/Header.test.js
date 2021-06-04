// We need to figure out how we can virtualy render our component
//WE need to figure out what JSX comes back
//
import React from 'react';
import ReactShalloRenderer from 'react-test-renderer/shallow'; //alows us to render our components inside of jus regulare js code, then we can assert somthing about what got renderd
import Header from '../../components/Header';

test('should render header correctly', ()=>{
    const renderer = new ReactShalloRenderer();
    renderer.render(<Header/>);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});
//The first time we run this testcase it is always going to pass
//The second time we run this test case, it is going to compare it with the existing one
//if they are the same the test will pass, if it is not the test is going to fail    