# Technical challenges for Software Engineer position

> Please create a Git Repository for this challenge and commit all answers to it. Please keep this organised and commit with clear messages. Share the link with us once complete.

## Basics

> These questions have multiple correct answers. They are meant to test your knowledge.

1. What is "N + 1" problem in REST APIs and how would you solve it?

    **Answers:** "N + 1" problem in REST APIs is that when you call a rest API to fetch N of items,
    we are also required to call N number of times to fetch its related child elements.
    For instance, if we call the API to fetch 100 Facebook post which will return 100 post items.
    Now to get the comments also we will be required
    to call 100 times to get comments of all the post items.
    `This problem can be solved by using GraphQl and send a query 
    to the server such that it also includes the related child elements.`
    
2. When do you stop writing unit tests?
    
    **Answers:**
    - When a module is complex and can't be easily quantified to write unit test cases.
    - When there is a requirement of integration testing and unit testing would be unnecessary.
3. Why would one use monorepos?
    
    **Answers:** 
    - It's easy to maintain for a small team.
    - It's easy to deploy code.
    - Synchronization of the code is easy since we don't have to commit changes to all repositories.
4. What is Liskov substitution principle?

    **Answers:**  The principle defines that objects of a parent class can be replaced
     with objects of its child class without breaking the code.
5. How do you avoid race conditions?

    **Answers:** Race conditions can be avoided by using queuing service to queue 
    up the tasks so that each task get execute synchronously.
 
6. What is the first thing you do when you encounter a bug?
    
    **Answers:** See the log.

## "Why would anyone do drugs when they can just mow a lawn?"

> For this challenge, user authentication is **not** required. There is no time limit. Assume that the frontend is handled by another developer.

- **Language**: _JavaScript_ (TypeScript is preferrable, but not required)
- **Framework**: _NestJS_
- **Database**: _MongoDB_

Hank likes to mow the lawn. Back in the day, he would offer his services to his neighbors for a fee. Now, he wishes to start a company around this.
As his friend, he asked if you can help him digitize the business. Users would register on the website, then book visits from their dashboard. 
One of the requirements he specified is to have scalable pricing; 
To mow 1 square metre, the client will have to pay £1. 
If the area is bigger than 15 square metres, a discount of 10% will be applied. 
If the area is bigger than 25 square metres, a discount of 15% will be applied. 
To acquire new clients, Billy wants to have a coupon system in place as well.

## Future of lawn mowing endeavours

> This section has no correct answers. Albeit optional, your answers will help us understand your thinking process.

1. What other features would you like to add?
2. How would you handle user authentication?
3. How would you deploy the solution in an enterprise environment?
