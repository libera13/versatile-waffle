### Prerequisites
- Installed postgres. [How to on Ubuntu 18.04](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-18-04)

### How to run

1. ```sudo -u postgres createdb versatile```

Creating postgres db versatile



2. (optional) ```npx mikro-orm migrations:create```
   
Do it if src/migrations folder is empty do


3. ```yarn watch```
   
Compile ts / create dist folder (is necessary for mikro-orm to find migrations in dist folder)


4. ```yarn dev```

ŁAŁ your app is now running. I hope so ;)

###Possible errors and fixes:

* _Error during connection to database_

```   
[info] MikroORM failed to connect to database versatile on postgresql://postgres:*****@127.0.0.1:5432
{ error: password authentication failed for user "postgres" 
```

_How to fix_: 
1. check postgres logs
   
   ```cat /var/log/postgresql/postgresql-12-main.log```


2. If the lasts errors are:
```
2021-03-14 11:49:54.100 CET [11001] postgres@versatile FATAL:  password authentication failed for user "postgres"
2021-03-14 11:49:54.100 CET [11001] postgres@versatile DETAIL:  User "postgres" has no password assigned.
```
3. There is solution: [How to assign DB password for user postgres](https://stackoverflow.com/questions/7695962/postgresql-password-authentication-failed-for-user-postgres)
 
    quick fix:
   ```
    sudo -u postgres psql
    ALTER USER postgres PASSWORD 'postgres';
    ```
