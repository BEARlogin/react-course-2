## TASKS for the React Advanced course ##

The starting code are:
1) Frontend (npm i, then **npm run start** in the **react** folder): http://localhost:3000 
2) Backend (npm i, then **npm run start** in the **root** folder, the server starts on port 7000).


A CSV checklist of completed tasks must be attached to the solution
(http://localhost:7000/checklist.html).
Recommended to use GitHub classroom to share the solutions.

### TASKS ###

1. Optimize component redrawing using memoization (React.memo, React.callback, etc.)	
2. Use the saga to get information about books, with the ability to change the requested book, stop downloading from the server, handle the error, if the server is unavailable	
3. Use epic to get information about book selections, with the ability to change the requested book, stop downloading from the server, handle the error, if the server is unavailable	
4. Use formik to enter and validate book information	
5. Use react-hook-form to enter and validate books selection information
6. Integration test for 1 component (with server and async) using @testing-library/react	
7. Component test with Server mocking	
8. Component test with Redux mocking	
9. Saga test
10. Epic test
11. Test for a reducer (at least one, not the easiest one)
12. Test for the Redux Store - the whole process of adding/deleting/viewing a book and book list (use redux-dev-tools for generation)
13. E2E test for adding / deleting a book (also take screenshots), use puppeteer or similar tool	
14. E2E test for adding / deleting a selection of the books 
16. Split project into 2 subprojects (BOOKS and SELECTIONS),
    combining projects in monorepo,
    using lerna or rush	
17. Create a Dockerfile to package the entire solution to docker	
