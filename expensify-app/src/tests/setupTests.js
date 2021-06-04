import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({
    adapter : new Adapter()
});


// ///jest.config.json with comments
// {
//     "setupFiles":[
//     "raf/pollyfill" ,// this is where you can grabb the JS file that is going to add the pollyfill in
//     "<rootDir>/src/tests/setupTests.js"//setting upthe file that we specifyed
//     //when we are adding files into jest.config.json we have to start of our relative paths with <rootDir>
// ]
// }


// //setupFiles commes from the documentation and hence has to be exact
// //1. we set it equal to an array of paths, the first one is the animation frame pollyfill, the second one is the JS file that we created
// //