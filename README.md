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

# Create Instrument Reseller in as Linux containers

## Seeding a Reseller's data using a Linux container

### "Environment variables"

**Format:**

```text
SEEDER_INSTRUMENT="<instrument_type>" #choose from clarinet, brass or saxophone
SEEDER_COUNT=<number_acquisitions_refurbishments_and_purchases_to_create>
RESELLER_DB_NAME="<reseller_database_name>"
MONGODB_URL=mongodb+srv://<username>:<password>@<host_name>:<port_where_applicable>
```

**Example:**

```text
SEEDER_INSTRUMENT="clarinet"
SEEDER_COUNT=10
RESELLER_DB_NAME="clarinets"
MONGODB_URL=mongodb+srv://my-user:mypassword@my-user:mypassword@remotehost:8001?authMechanism=SCRAM-SHA-256&authSource=admin>
```

### "Running the Linux container

```
docker run -d -e SEEDER_INSTRUMENT="clarinet" \
-e SEEDER_COUNT=10 \
-e RESELLER_DB_NAME="clarinets" \
-e MONGODB_URL="mongodb://my-user:mypassword@remotehost:8001/clarinets?authMechanism=SCRAM-SHA-256&authSource=admin"
--name reseller_seeder \
quay.io/reselbob/instrumentresellerseeder:v.01
```

## Running a Reseller's website



```
docker run -d -e SERVER_PORT="8088" \
-e SERVER_HOST="http://localhost" \
-e SEEDER_INSTRUMENT="CLARINET" \
-e VENDOR_NAME="Clyde's Clarinets" \
-e MONGODB_URL="mongodb+srv://my-user:mypassword@example-mongodb-svc.mongodb.svc.cluster.local?authMechanism=SCRAM-SHA-256&authSource=admin"
-p 8088:8088 \
--name my_instrument_reseller \
quay.io/reselbob/instrumentreseller:v.03
```