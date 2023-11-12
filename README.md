# Full stack Plant Care web app

To run the backend go to the /backend folder and run: 
`docker build -t backend . && docker run -p 8080:8080 --mount source=demodb,target=/data/db backend`