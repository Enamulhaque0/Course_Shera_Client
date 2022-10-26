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
Firebase provides detailed documentation and cross-platform SDKs to help you build and ship apps on Android, iOS, the web, C++, and Unity.
Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular 
federated identity providers like Google, Facebook and Twitter, and more.
 </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">How does the private route work?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">JThe private route component is similar to the public r
				oute, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user 
				can only access the authenticated routes If he is authenticated </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What is Node? How does Node work?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript 
				code into machine code, it is highly scalable, lightweight, fast, and data-intensive. </p>
			</details>
		</div>
	</div>
</section>
            
        </div>
    );
};

export default Blog;