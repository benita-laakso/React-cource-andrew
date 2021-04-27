console.log(`App.js is comming`);

const app = {
    title: "Indecision App",
    subtitle: "text",
    options : []
}

const onFormSubmit = (e)=>{
    e.preventDefault();
    const option = e.target.elements.option.value;
    console.log(option)
    if(option){
        app.options.push(option);
        e.target.elements.option.value = " ";
        render();
    }
}

const onRemoveAll = ()=>{
     app.options = [];
     render();
}

const appRoot = document.getElementById(`app`)

const onMakeDecision = () =>{
  const randomNum = Math.floor(Math.random() * app.options.length);
 console.log(randomNum);
 const option = app.options[randomNum]
  alert(option);
};


const render = ()=>{

    const template = (
        <div>
           <h1>{app.title}</h1>
           {app.subtitle && <p>{app.subtitle}</p>}
           <p>{app.options.length > 0 ? "Here are your options" :" No options"}</p>
           <button  disabled ={app.options.length === 0} onClick={onMakeDecision}>What should I do</button>
           <button onClick={onRemoveAll}>Remove All</button>
           <ol>
          {app.options.map((option)=> <li key ={option}>{option}</li>)
          }
           </ol>
           <form onSubmit = {onFormSubmit}>
           <input type="text" name="option"></input>
           <button>Add option</button>
           
           </form>
        </div>
        );
        ReactDOM.render(template, appRoot);
};
render();