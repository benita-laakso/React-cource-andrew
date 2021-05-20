Librarys that are used in this course 

moment.js
A time library
https://momentjs.com/

import moment from 'moment';

const now = moment();
console.log(now);

//In console we can sea the moment object, in the object under -protp- we can finde a lot of methods to be used.
console.log(now.format());
//we can call format with no arguments at all
// prints 2021-05-11T13:08:24+03:00
console.log(now.format('MMM'));
//May
console.log(now.format('Do'));
//11th
console.log(now.format('Do MMM YYYY'));
//11th May 2021


airbnb react dates
Includes Components you can use to drop a calender into your application
https://github.com/airbnb/react-dates

ex.
import {SingleDatePicker} from 'react-dates';

WE need to provide these 4 props
 <SingleDatePicker
  date={this.state.date} // momentPropTypes.momentObj or null
  onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
  focused={this.state.focused} // PropTypes.bool
  onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
  id="your_unique_id" // PropTypes.string.isRequired,
/>
Optional props:
numberOfMonths ={1}
isOutsideRange = {()=> false }    
//Over riding the code and alowing user to pik date in the past 
// You can pass in day so if only sertain dates ar available isOutsideRange = {(day)=>{}}
          

Live Playgroud including documentation:
http://airbnb.io/react-dates/?path=/story/daterangepicker-drp--default



http://airbnb.io/react-dates/?path=/story/singledatepicker-sdp--default

react-dates requires a nother pure dependensy that we have to install, it is used internaly by react-dates library:
react-addons-shallow-compare
