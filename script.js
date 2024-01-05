import React from "react"; //React is coming from react which is in my node_modules folder. we'Re importing our react module.
import ReactDOM from "react-dom/client";

//JSX ?? JavaScript XML
//This is JSX

//JSX => React.createElement => Object => Html(DOM)
//This is React Elemnet
//this is not html . this is html like syntax
//this is called jsx expression
const heading2 = (
	<h1 id="title" key="h1" className="head">
		Shruti Garg
	</h1>
);

//React Component
//1. Functional Component => new way of writing code
//2. Class baased component => old way

//Functional Component => it is nothing but a function
//Name of component starts with capital letter - not mandatroy but it is good practice
const Title = () => {
	return <h1>Shruti</h1>;
};
// const ContainerComponent = function () {
// 	return (
// 		<div>
// 			<h1>Hello</h1>
// 			<h2>World</h2>
// 		</div>
// 	);
// };
//return htado phir bhi same bcoz this is arrow function
const ContainerComponent3 = () => (
	<div>
		<h1 id="title" key="h1" className="head">
			Shruti Garg
		</h1>

		<h2>Hello</h2>
		<h2>World</h2>
	</div>
);
// const ContainerComponent2 = () => (
// 	<div>
// 		{heading2}

// 		<h2>Hello</h2>
// 		<h2>World</h2>
// 	</div>
// );
// const ContainerComponent2 = () => (
// 	<div>
// 		<Title />

// 		<h2>Hello</h2>
// 		<h2>World</h2>
// 	</div>
// );
// const ContainerComponent2 = () => (
// 	<div>
// 		{Title()}

// 		<h2>Hello</h2>
// 		<h2>World</h2>
// 	</div>
// );
var a = 10; // the one in parenthesis wil work this is any piece of javacript
// const ContainerComponent2 = () => (
// 	<div>
// 		{a}

// 		<h2>Hello</h2>
// 		<h2>World</h2>
// 	</div>
// );
const ContainerComponent2 = () => (
	<div>
		{/* {console.log(a)} */ 1 + 2}

		<h2>Hello</h2>
		<h2>World</h2> 
	</div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(ContainerComponent());
root.render(<ContainerComponent2 />); //both same
