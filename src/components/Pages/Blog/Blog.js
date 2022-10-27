import React from 'react';

const Blog = () => {
    return (


		
        <div className='mt-16'>

			

<section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className="text-2xl font-semibold sm:text-4xl mb-6">Frequently Asked Questions</h2>
		
		<div className="space-y-4">
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400"> what is cors?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing
				 the Access-Control-Allow-Origin headers, which specify which origins can access the API. </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Why are you using firebase? What other options do you have to implement authentication?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
				It allows real-time database connection, which means multiple users can see the 
				changes in the data when the data gets created or edited. Data transmission is handled with web sockets so you don't have to send requests to get new data, you only need to subscribe once. What other options do you have to implement authentication without Firebase? Auth0, MongoDB, Passport, Okta, and Firebase 
				are the most popular alternatives and competitors to Firebase Authentication.
 </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">How does the private route work?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">PrivateRoute component is the blueprint for all private routes in the application. I
				f the user is logged in, go on and display the component in question; otherwise, redirect the user to sign-in page.
				 Additionally, we can define the logic of isLogin utility function separately in utils folder. </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What is Node? How does Node work?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Node. js (Node) is an open source development platform for executing JavaScript 
				code server-side. Node is useful for developing applications that require a persistent connection from the browser to the server and is often used for real-time applications such as chat, news feeds and web push notifications It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into 
				machine code, it is highly scalable, lightweight, fast, and data-intensive </p>
			</details>
		</div>
	</div>
</section>
            
        </div>
    );
};

export default Blog;