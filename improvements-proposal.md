# Question 1: 

If the blogs data will be got from the API instead, we should send a request like axios in the BlogList component to get the data after the page is mounted. 

We can use useEffect hook to fetch data, the reason is that we can request data only after the page is mounted by setting the second parameter of useEffect to []. In order to reduce traffic cost, we should only get API data one time and store it as state, unless in some cases we want to get the latest updated data of the remote API.

Other than that, we should set the loading state to indicate to the users that the component is trying to load data, because getting data from the api will be affected by network conditions. And also, we should handle exceptions to asynchronous requests and set error boundaries at necessary components.


# Question 2:


React uses a diff algorithm to compare the new and old virtual DOM after data updates, and decide which parts to be re-rendered based on it. This can cause some problems if we don't generate unique keys but use other one such as index of array.
    
Case 1: If the data is added in reverse order, deleted in reverse order, etc., which will destroy the order of the data, it will cause unnecessary real DOM updates, which is inefficient.

Case 2: If the structure also contains the DOM of the input class, such as input, an incorrect DOM update will occur. In this case, it may directly cause the rendering error of the page data. For example, the data corresponding to the A object should be displayed. It becomes the data corresponding to the B object.