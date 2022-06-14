# instrument-resellers
A project that demonstrates multi-tenancy architectures using Kubernetes namespaces.

# Warning!

**DO NOT USE THIS PROJECT'S CODE IN PRODUCTION!**

There are high severity security issues with the some of the `npm` libraries.

This code is provided for demonstration purposes only.

# Create Postgres DB in a Linux container

Upcoming version of Instrument reseller will support data seeding. So, you will need a Postgres container up and running to support backend data storage.

This is a future feature. You do not need to have Postgres running now.

```
docker run --name posty -p 5432:5432 -v postgres-volume:/var/lib/postgresql/data -e POSTGRES_PASSWORD=mypassword -d postgres
```

# Creating the Docker Image for Instrument Reseller

```
# Ignore for now
docker build -t instrumentreseller .

docker tag instrument_reseller 192.168.86.34:5000/instrumentreseller

docker push 192.168.86.34:5000/instrumentreseller
```

# Create Instrument Reseller in a Linux container

```
docker run -d -e SERVER_PORT="8088" \
-e SERVER_HOST="http://localhost" \
-e SEEDER_INSTRUMENT="CLARINET" \
-e VENDOR_NAME="Clyde's Clarinets" \
-p 8088:8088 \
--name my_instrument_reseller \
quay.io/reselbob/instrumentreseller:v.03
```