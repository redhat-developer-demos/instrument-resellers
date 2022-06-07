# instrument-resellers
A project that demonstrates multi-tenancy architectures using Kubernetes namespaces.

# Warning!

**DO NOT USE THIS PROJECT'S CODE IN PRODUCTION!**

There are high severity security issues with the some of the `npm` libraries.

This code is provided for demonstration purposes only.

# Create Postgres DB in a Linux container

```
docker run --name posty -p 5432:5432 -v postgres-volume:/var/lib/postgresql/data -e POSTGRES_PASSWORD=mypassword -d postgres
```
