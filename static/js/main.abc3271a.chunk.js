(this["webpackJsonpcssg-edu-team"]=this["webpackJsonpcssg-edu-team"]||[]).push([[0],{134:function(e,t,o){},135:function(e,t,o){"use strict";o.r(t);var n=o(1),a=(o(0),o(49)),i=o.n(a),s=o(22),r=o(2),l=function(){return Object(n.jsx)("header",{className:"masthead",children:Object(n.jsx)("div",{children:Object(n.jsx)("div",{children:Object(n.jsx)(s.b,{to:"/",children:Object(n.jsx)("h1",{className:"site-title",children:"CSSG Education Team"})})})})})},c=function(){return Object(n.jsx)("div",{className:"footer",children:Object(n.jsxs)("footer",{children:["\xa9 ",(new Date).getFullYear()," - Chiazo & Ron"]})})},h=o(35),u=o.n(h),d=function(){return Object(n.jsx)("div",{className:"home",children:Object(n.jsxs)("div",{id:"content",children:[Object(n.jsx)(u.a,{source:"# Lesson 2: Build a To Do App\n\nWelcome to week 2! The goals for you are as follows:\n\n- build a simple to do app ([here is the finished product](https://cssg-edu-team.github.io/todo-app/))\n- start learning about components and props\n- figure out how to use a CSS framework (Bootstrap)\n- begin learning about React Hooks (useState) & event handling\n\n## Setting up your repo\n\n1. Navigate to [this link](https://github.com/cssg-edu-team/todo-app) to access the todo app's repo and click the **fork** button in the top right corner.\n2. Choose your personal github account as the destination for the repo.\n3. Once done, click the **code** tab button and then click the green **code** button. Make sure the https option is selected and click the clipboard icon to copy the repository link.\n4. Open visual studio code (or any code editor you have), click **View** in the top menu bar, then click **Command Palette**. In the pop up, search for **Git: Clone** and paste the link to the repo that you copied. Press enter on your keyboard and choose a location on your computer to store the repository locally. Once you're done, open the repo in a new window!\n\n## Setting up the app\n\n1. Inside the repo, click **View** in the top menu bar again, but this time select **terminal** (or you can press COMMAND + j)\n2. VERY IMPORTANT: enter the following command and paste your copied url at the end: **git remote add myrepo _url_**. For example, I would enter: **git remote add myrepo https://github.com/chiazo/todo-app**\n3. run the following command: **npm run install**\n4. next, open the **package.json** file. Change the line saying **homepage** & replace **cssg-edu-team** with your github username. For example, mine would look like this: \"homepage\": \"http://chiazo.github.io/todo-app\" because **chiazo** is my github username! :)\n5. follow the commented instructions in the code!\n\n## Background Info + Resources\n### Class Components\nReact is all about functions inside of functions. For this todo app, we have two class components.\n1. **App** -> this will contain the input field to add tasks & is essentially our home page\n2. **Task** -> this will contain information about each individual task & will be contained within our App component\n\nA common theme you will see is that some of our functions and data will be defined in the parent class component (App) and passed down to the child component (Task). Most importantly, this will allow you to handle data at the top level, in one spot instead of inside each separate child class.\n\nIn our case, you will define two functions in the App class:\n1. **handleInput**: takes in an **event** parameter & saves event.target.value as currTask\n2. **addTask**: takes in no parameters and adds the task typed in to the existing array of tasks\n\nFind more info [here](https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html)!\n\n### Props & Event Handling\nBecause Class Components are essentially functions, you can pass them parameters. These parameters are known as **props**.\nEvery prop you pass will be stored in object of **prop**erties, that you can access inside the class itself. Here's an example:\n\n**<Task name=\"Clean my room\"/>** corresponds to\n **const Task = ({ name }) => {}**\n\nWhen you add the curly braces around parameters, you can instantly treat the object properties as variables. In this case I could easily write this inside the Task class:\n**console.log(name)** which would print **Clean my room** in Chrome's console.\n\nYou can pass direct values, variables or functions as props. In the case of variables or functions, you'd pass them like so, using curly braces:\n**<Task name={my_name}/>** \n\nA special prop for elements like **<Button>** is _**onClick**_. Any function passed to  _**onClick**_ will run every time a button is clicked, which is helpful for us! ex: **<Button onClick={() => {console.log(\"HI\")}}>Click Me</Button>** will print *HI* everytime you click this button.\n\n### CSS Frameworks (Boostrap)\nSo while doing your own CSS from scratch is fun, it can be tedious. Luckily CSS frameworks are prebuilt, stylish components that you can insert into your code directly.\n\nWe'll be using [Boostrap React](https://react-bootstrap.github.io/components/alerts/) components. Follow the examples in the code to import different elements; you'll notice that instead of normal html like **<button></button>**\nyou'll be capitalizing the name of these elements like so: **<Button></Button>**.\n\n### React Hooks\nLast but not least, we're on to a key part of handling data in React, [hooks](https://reactjs.org/docs/hooks-intro.html). We'll start off with the most basic hook, **useState**.\nReact stores local information in it's _state_. This allows it to keep track of data that may change so it can update only the parts of your app related to this info, instead of updating the entire page.\n\nIf I wanted to keep track of a string called **name**, the convention is as follows:\n**const [name, setName] = useState(\"\")**. This creates a variable called **name** and a function that can update this value called **setName**. On the right of the equal sign, the value passed to useState is an empty string, which becomes **name**'s default value. This default value could be anything: **null**, a string, an object or even an array.\n\nIf I wanted to update name, I would insert this line of code somewhere in my App: **setName(\"chiazo\")**. If I wanted to display name's value on my page, I could do this:\n**return (<div>{name}</div>)**. As you can see, inside our return function, we wrap variables with curly braces!\n\n## Deploy your Todo App!\n\n1. enter **git status** in your terminal to see any changes you made.\n2. enter **git add .**\n3. now enter **git commit -m** and in the blank space leave a brief message explaining what you changed in quotation marks.\n4. now we're going to upload our changes to github. enter the command **git push myrepo master**.\n5. The final step!!! Run the command **npm run deploy**. This will publish your website to github pages. Check it out using the following link: https://[your-github-username].github.io/todo-app\n\n# What's next?\n\nIn the following week, make the todo app your own! At minimum, you should be able to click the Add button and see a new task be added to the list. Look at the Bootstrap documentation to figure out how to add elements like Buttons!\n\nIf you want a challenge:\n\n- Add the ability to delete a task (using a delete button)\n- Add the ability to edit a task (using an edit button)\n- Implement two other elements from Bootstrap (ex: Cards, Alerts, etc)"}),Object(n.jsx)("hr",{}),Object(n.jsx)(u.a,{source:"# Lesson 1: Deploy Your Own React Site + Learn Git\n\nWelcome to your first week on the CSSG education team! We're super excited to have you here :)\nThe goals for you this week are as follows:\n\n- set up your own website on github pages using react\n- get comfortable with git\n- play around with customizing your site (font, css, info, etc)\n\n## Setting up your repo\n\nRequirements:\n\n- npm\n- [git](https://git-scm.com/)\n- [visual studio code](https://code.visualstudio.com/) or any code editor your comfortable with\n\nFor those of you who didn't know, github allows you to host a website and all your projects for free. For example, [my personal site](https://chiazo.github.io) is completely handled through Github & runs on [Jekyll](https://jekyllrb.com/). Our goal here is for you to fork this repo and deploy it on your own github.\n\n1. Create a github account & log in!\n2. Navigate to [this link](https://github.com/cssg-edu-team/cssg-edu-team.github.io) to access this site's repo and click the **fork** button in the top right corner. Forking is a way of copying a github repo while still being able to receive any updates made to it.\n3. Choose your personal github account as the destination for the repo.\n4. You will be redirected to the new repo on your account. Click the **settings** tab button and rename the repository name as follows: **[insert-your-github-username].github.io**. For example, my repository name will become: **chiazo.github.io** because **chiazo** is my username on github!\n5. Once done, click the **code** tab button and then click the green **code** button. Make sure the https option is selected and click the clipboard icon to copy the repository link.\n6. Open visual studio code (or any code editor you have), click **View** in the top menu bar, then click **Command Palette**. In the pop up, search for **Git: Clone** and paste the link to the repo that you copied. Press enter on your keyboard and choose a location on your computer to store the repository locally. Once you're done, open the repo in a new window!\n\n## Setting up the app\n\n1. Inside the repo, click **View** in the top menu bar again, but this time select **terminal** (or you can press COMMAND + j)\n2. VERY IMPORTANT: enter the following command and paste your copied url at the end: **git remote add myrepo _url_**. For example, I would enter: **git remote add myrepo https://github.com/chiazo/chiazo.github.io.git**\n3. run the following command: **npm run install**\n4. next, open the **package.json** file. This is a super important file for web developers. Here is where you'll define some basics about the app and also see all the commands you can run in the **scripts** section. But first, change the line saying **homepage** & replace **cssg-edu-team** with your github username. For example, mine would look like this: \"homepage\": \"http://chiazo.github.io/\" because (again) **chiazo** is my github username! :)\n5. from there, you can also change the line saying \"name\" to be something other than **cssg-edu-team**. Once you're done, open your terminal so we can begin checking out some git commands!!!\n\n## Git Basics + Deploying!\n\nHere are a couple git commands I use all the time & that you'll soon be familiar with:\n\n- git pull origin master\n- git status\n- git add .\n- git commit -m \"[insert message here]\"\n- git log\n- git checkout -b [insert_branch_name]\n\nGit is basically a tool to see any changes you made, make copies of your work so you can go back if you make a mistake, and save changes you made on your computer so they're online and safe. For now, our goal is to save the changes you made (to your package.json file) and upload it to github.\n\n1. enter in **git status** in your terminal to see any new changes you made.\n2. enter either **git add .** (this will add every single change you've made to the \"stage\" so it can be ready to be uploaded) or type **git add package.json** to specifically add this 1 file to the stage\n3. now enter **git commit -m** and in the blank space leave a brief message explaining what you changed in quotation marks. Here's an example: git commit -m \"renamed app in package.json file\"\n4. now we're going to upload our changes to github. enter the command **git push myrepo master**. This is saying _upload my locally saved files from the **master** branch to the online repo nicknamed **myrepo**_. If you'll remember from above, we nicknamed our repo **myrepo**! Always use this command to upload your changes (writing only git push will probably be denied)\n5. The final step!!! Run the command **npm run deploy**. This will publish your website to github pages. Check it out using the following link: https://[your-github-username].github.io\n\n# What's next?\n\nIn the following week, make the website you're own! Change the css + add information about you and come to optional office hours to learn more about the app's setup.\n\nYour tasks:\n\n- Edit at least 2 files and upload those changes to github\n- Find 2 personal sites with super cool designs (in your opinion) from software engineers / designers / people in the tech world. We'll be using this as inspo to learn about CSS in the future!\n"})]})})},p=(o(134),function(){return Object(n.jsx)("div",{className:"main",children:Object(n.jsxs)(s.a,{children:[Object(n.jsx)(l,{}),Object(n.jsx)("div",{children:Object(n.jsx)(r.a,{path:"/",component:d})}),Object(n.jsx)(c,{})]})})});i.a.render(Object(n.jsx)(p,{}),document.getElementById("root"))}},[[135,1,2]]]);
//# sourceMappingURL=main.abc3271a.chunk.js.map