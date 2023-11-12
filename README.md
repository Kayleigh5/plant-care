# Plant Care

This is a full stack Angular 17 + Spring Boot 3 application, using a file based persistent H2 database. 
- Each Plant has an id, title, description and tasks.
- We can create, retrieve, update, and delete Plants. 
- We can find Plants by title.

To run the backend & frontend, only docker needs to be installed. Then run from the root folder (where `compose.yaml` is located):
```
docker compose up --build
```

Then visit [http://localhost:4200](http://localhost:4200) in the browser to use the app.


## Future Work
- Form validation
- Unit tests
- Distinct error handling & error messages
- User accounts & login
- Accessibility
- Pagination