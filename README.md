# instrument-resellers

```
UNDER CONSTRUCTION
```
A project that demonstrates multi-tenancy architectures using Kubernetes namespaces.

# Warning!

**DO NOT USE THIS PROJECT'S CODE IN PRODUCTION!**

There are high severity security issues with the some of the `npm` libraries.

This code is provided for demonstration purposes only.

# Project Dependencies

The project requires a working Kubernetes cluster. Running the cluster under OpenShift provides the added benefit of making access to the application a bit easier. OpenShift provides a special Kubernetes resource named `Route`. The `Route` resource published a public URL that enables access the application. Using route is a bit easier than having to go through the effort of setting up public access  the application by configuring a Kubernetes ingress. 

The application also require a MongoDB database for each intended reseller running within the cluster or accessible from the cluster.

# Understanding the structure of the project.

This project is divided into to parts. The first part is the data seeder which populates random data into the particular reseller's database according to the reseller type. For example a clarinet reseller will be clarinet data, a brass reseller will get brass data and a saxophone reseller will get saxophone data.

The reason for populating data particular to the reseller type is to make is to that the API published by the Reseller application presents data that easy to conceptualize as belonging to a particular reseller, thus avoiding confusion.

The second part of the project is the actual reseller application that publishes the API that particular to the reseller.

The setup process for the project is to first install and run the Data Seeder for each reseller and then deploy the API application for each reseller.


# Installing and running the Instrument Reseller Data Seeder

## Environment variables

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

## Creating the Container Image for Instrument Reseller Data Seeding

```
# Ignore for now
docker build -t instrumentresellerseeder ./Seederfile

docker tag instrumentresellerseeder 192.168.86.34:5000/instrumentresellerseeder

docker push 192.168.86.34:5000/instrumentresellerseeder
```

## Running the Linux container for data seeding

```
docker run -d -e SEEDER_INSTRUMENT="clarinet" \
-e SEEDER_COUNT=10 \
-e RESELLER_DB_NAME="clarinets" \
-e MONGODB_URL="mongodb://my-user:mypassword@remotehost:8001/clarinets?authMechanism=SCRAM-SHA-256&authSource=admin"
--name reseller_seeder \
quay.io/reselbob/instrumentresellerseeder:v.01
```

# Installing and running the Instrument Reseller Web Application

## Environment variables with sample data

**Example:**
```
SERVER_PORT=8088
SERVER_HOST="http://localhost"
SEEDER_INSTRUMENT="saxophone"
VENDOR_NAME="Sidney's Saxophones"
MONGODB_URL="mongodb+srv://my-user:mypassword@example-mongodb-svc.mongodb.svc.cluster.local?authMechanism=SCRAM-SHA-256&authSource=admin"
RESELLER_DB_NAME="saxophones"
MONGODB_SERVICE=""
```

## Creating the Container Image for Instrument Reseller

```
# Ignore for now
docker build -t instrumentreseller ./Resellerfile

docker tag instrumentreseller 192.168.86.34:5000/instrumentreseller

docker push 192.168.86.34:5000/instrumentreseller
```
## Running a Reseller's website as a container

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

# Optional stuff

## Create Postgres DB in a Linux container

Upcoming version of Instrument reseller will support data seeding. So, you will need a Postgres container up and running to support backend data storage.

This is a future feature. You do not need to have Postgres running now.

```
docker run --name posty -p 5432:5432 -v postgres-volume:/var/lib/postgresql/data -e POSTGRES_PASSWORD=mypassword -d postgres
```