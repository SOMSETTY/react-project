
const heading = React.createElement("h1",
{id : "heading",xyz:"  abc "},
"hello world from React!"
);
/**
 * 
 * <div id = "parent">
 *    <div id ="child"
 *     <h1> iam h1 tag </h1>
 *     <h1> iam h2 tag </h1>
 *     </div>
 * </div>
 *  
 */

const parent = React.createElement("div",{id:"parent"}, [
  React.createElement("div",{id:"child"},[
     React.createElement("h1",{},"i am h1 tag"),
     React.createElement("h2",{},"i am h2 tag"),   
]), 
React.createElement("div",{id:"child2"},[
     React.createElement("h1",{},"i am h1 tag"),
     React.createElement("h2",{},"i am h2 tag"),   
]),
]);

console.log(parent)  //object






const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
