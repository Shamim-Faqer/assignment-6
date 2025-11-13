### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?  

Answer: getElementById uses CSS class for once, One id for one element.
getElementsByClassName uses css class of an element. these class can be used as unlimited defination of an element
querySelector uses the first matching element of dom 
querySelectorAll uses all matching class of that section

2. How do you **create and insert a new element into the DOM**? take adress by using dom and then use, 
createElement()
then .textContent use kore element e value deta pari
and last, parentElement.appendChild() use kore finally declare korte pari

3. What is **Event Bubbling** and how does it work?

Answer: event Bubbling is a process of event trigarring. Such as, when click event triggered, then it goes to its parent for event and complete it, then it goes for grandparent for event. in that way its run like water bubble towards its document. untill we stop these process by code
it will run continiously

4. What is **Event Delegation** in JavaScript? Why is it useful?
for not reapeating the same event in diffrent places, we use a single event and use it in different places.
skipping too much event handerlers in diffrent element is event deligation.
it saves memory, looks code clean and easy etc

5. What is the difference between **preventDefault() and stopPropagation()** methods?
preventDefault() use for preventing browsers default behaviour
on the other hand , stopPropagation() use for stop event bubbling.