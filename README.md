**Travlr Getaways MEAN Full Stack Application**

**_Architecture_**

Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
Why did the backend use a NoSQL MongoDB database?

We started with developing Express HTML code for our site, which involved using some JavaScript, which obviously was a natural choice for this full-stack project since it can be used for front and backend.  This site is more of a traditional multi-page application, whereas later we started working with Angular to create the SPA portion, which was the Admin site.  This portion was quite different, since it consisted of generating components and then working with those components to create the design.  It was really helpful to experience both parts so that I could see differences in performance, directories, how they were routed, and more.

MongoDB was a perfect fit for this application since we didn't need normalized data like you would see with SQL.  The NoSQL approach allowed us to have flexible schemas for our data, which made it very easy to get started by using structured or unstructured data.  Since this data is stored as BSON in MongoDB, which can then be retrieved as JSON, which our application uses - it made it a very obvious fit for the database powering our application.

**_Functionality_**

How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

JSON is a syntax for serializing objects, arrays, numbers, strings, booleans, and null. It is based upon JavaScript syntax, but is distinct from JavaScript: most of JavaScript is not JSON.  It does, howevever, make it very easy for JavaScript to take data and turn it into objects, which facilitates use on both front and backend.  We can store the object on the backend as JSON data and then the front-end can grab it and use it as needed for different purposes - such as displaying all trips as our listing page, or then returning only one trip's information in a form when editing said trip. 

A specific example of our refactoring occurred when we took static trip data and turned it into JSON data.  This made it possible for us to manipulate this data and add more more easily in the future.  It also helped us work templating through Handlebars to again improve efficiency.  Reusing UI components like this creates a better user experience, faster page loads, and allows for the application to be updated more easily.  

**_Testing_**

Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

Using different methods (such as GET, POST, PUT, DELETE) with specific endpoints, such as /api/trips, is essentially how we allow clients to interact with servers in order to have the rich experience you expect with a web application - being able to obtain trip information, update trips, add trips - the CRUD experience.  Adding in security adds another wrinkle, because we just have to make sure that we only allow authorized users to perform these actions - in our application, only admins should be able to add, edit, and delete trips.  Primarily, testing for this is done with Postman to see how API requests are working (or not working).  It is also valuable to monitor the terminal to see what calls are being made to help troubleshoot any issues.

**_Reflection_**

How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

It was a fantastic experience to get to develop a full-stack application from start to finish - the problem-solving it forced me to do was really valuable to experience what a day in the life (or weeks in the life!) were actually like, at least to some extent.  Ownership of a large project like this was a great experience and I hope to do more of that in a career working on full-stack applications.  I think it's a great experience to showcase and highlight the project, as well as honing skills in a variety of areas: JavaScript, TypeScript, ExpressJS, NodeJS, MongoDB, Angular, CLI, problem-solving and collaboration with classmates, and research finding answers and debugging code.
