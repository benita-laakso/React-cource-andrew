import{setStartDate,setEndDate,setTextFilter,sortByDate,sortByAmount} from '../../actions/filters';
import moment from 'moment';

test('should generate set start date action object', ()=>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate:moment(0)
    });
});

test('should generate set end date action object', ()=>{
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate:moment(0)
    });
});

test('shoud generate set text filter object with text value', () => {
    const text ='something in';
 const action = setTextFilter(text);  // the data Somthing in gets passed to the action generator setTextFilter, which meens we are getting or action object back
 expect(action).toEqual({
     type:'SET_TEXT_FILTER',
     text:text
 })
 });

 test('shoud generate set text filter object with default', ()=>{
     const action = setTextFilter();
     expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:''
     })
 });

 test('should generate action object for sort by date', ()=>{
      expect(sortByDate()).toEqual({type: 'SORT_BY_DATE'})
 });
 

test('should generate action object for sort by amount', ()=>{
     expect(sortByAmount()).toEqual({type: 'SORT_BY_AMOUNT'});
}); 