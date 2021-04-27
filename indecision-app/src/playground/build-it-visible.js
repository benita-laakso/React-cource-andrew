
class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleVisability = this.handleToggleVisability.bind(this);
        this.state= {
           visability : false
        }
    }
    
    handleToggleVisability(){
       this.setState((prevState)=>{
           return{
               visibility : !prevState.visibility

           };

       });
    }

    render(){
        return(<div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleToggleVisability}>
            {this.state.visibility? "Hide details": "Show details" }
            </button>
            {this.state.visibility && (
                <div>
                <p>Hey</p>
                </div>
                )}
            </div>
            );
    }
}

ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'));

// let visibility = false;

// const toggleVisablity = ()=>{
//  visibility = !visibility;
//  render();
// }

// const render = ()=>{
//     const jsx = (
//     <div>
//     <h1>Visibility toggle</h1>
//    <button onClick={toggleVisablity}>{visibility ? "Hide"  : "Show options" }</button>
//    {visibility && <p>Here are your opptions</p> }
//     </div>
//     );
//     ReactDOM.render(jsx, document.getElementById(`app`));    
// };
// render();