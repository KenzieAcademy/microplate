# microplate
Example code for a collection of services working together in a docker base dev env

To get started ....

#Build the docker images
In the project directory
```
> docker-compose build
```

If you make a change to just one service and one to only rebuild that service
```
> docker-compose build [service-name]  # e.g. docker-compose build products-service
```

# Spin up the services
```
> docker-compose up -d
```

Check the logs via
```
> docker-compose logs
```

or to check logs for a single service

```
> docker-compose logs [service name]  # e.g. docker-compose logs products-service
```

After spinning up you will need to seed the users-db
```
> docker-compose run users-service python manage.py recreate_db
> docker-compose run users-service python manage.py seed_db
```

# Try it out
You can view and interact directly with the products-service api via this link:
http://127.0.0.1:5000/docs/

You can interact with the react webapp here
http://127.0.0.1/
