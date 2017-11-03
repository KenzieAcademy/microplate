docker exec -ti $(docker ps -aqf "name=users-db") psql -U postgres
