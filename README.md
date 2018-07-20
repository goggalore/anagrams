Hi! When looking to apply for a software dev position at your company, I saw this (https://jsbin.com/zutoquv/edit?html,js,output) piece of code that a typical dev should be able to improve on the first day. 
Thought it was a good opportunity to demonstrate how I would approach such a problem, so I quickly wrote some code as to how I might improve the code.

Major changes:
1. Segregate HTML from Javascript script. Rather than referencing the "onInput" function within the HTML, made all Javascript function references within only Javascript. 
    -Add src folder to contain ts, public folder to contain html (and css if we want)

2. Remove any global constants and scope variables by way of function wrapping and modular files. 

3. Generalize load and sort functions. The load function is utilized by dicts, so that one can easily change what txt dictionary we are using if we so desire, simply by adding a dict module and passing a new url. Sort accepts a word (string) and an array of words (array of strings) (in this case, from our dict modules), and sees if there is an anagram from our chosen dict that matches it.

4. Use Typescript (compiles to Javascript).

5. Add gulpfile to bundle to accommodate modules

Of course this is overkill for such a small project, though this project has the ability to grow and one can easily add features, dictionaries, etc. and is how I would format larger projects. I.e. modular files that contain very specific funtionality with generalized functions to make it easier to change resources, such as where we get our dictionary words from.


To build this project: 
In the command line, run.. 
1. npm install
2. tsc
3. gulp 