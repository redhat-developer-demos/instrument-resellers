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

![basic image](./images/basic-process.png)


# Installing and running the Instrument Reseller Data Seeder

## Environment variables

The data seeder requires that the following environment variables are present in the process in which the application is running.

**Format:**

```text
RESELLER_INSTRUMENT="<instrument_type>" #choose from clarinet, brass or saxophone
SEEDER_COUNT=<number_acquisitions_refurbishments_and_purchases_to_create>
RESELLER_DB_NAME="<reseller_database_name>"
MONGODB_URL=mongodb+srv://<username>:<password>@<host_name>:<port_where_applicable>
```

**Example:**

```text
RESELLER_INSTRUMENT="clarinet"
SEEDER_COUNT=10
RESELLER_DB_NAME="clarinets"
MONGODB_URL=mongodb+srv://my-user:mypassword@my-user:mypassword@remotehost:8001?authMechanism=SCRAM-SHA-256&authSource=admin>
```

## Running the data seeder application from source

`npm install`

`npm run seed`

## Creating the Container Image for Instrument Reseller Data Seeding

The following will build and push the data seeder container image to a private container registry running at host `192.168.86.34:5000`

```bash
docker build -t instrumentresellerseeder ./Seederfile

docker tag instrumentresellerseeder 192.168.86.34:5000/instrumentresellerseeder:v.09

docker push 192.168.86.34:5000/instrumentresellerseeder
```

## Running the Linux container for data seeding

```bash
docker run -d -e RESELLER_INSTRUMENT="clarinet" \
-e SEEDER_COUNT=10 \
-e RESELLER_DB_NAME="clarinets" \
-e MONGODB_URL="mongodb://my-user:mypassword@remotehost:8001" \
--name reseller_seeder \
quay.io/reselbob/instrumentresellerseeder:v.01
```

# Installing and running the Instrument Reseller Web Application

## Environment variables with sample data

The application requires that the following environment variables are present in the process in which the application is running.

**Format:**

```text
SERVER_PORT=8088
SERVER_HOST=http://<DNS_NAME>
RESELLER_INSTRUMENT="<instrument_type>" #choose from clarinet, brass or saxophone
RESELLER_NAME="<BUSINESS_NAME_OF_VENDOR>"
RESELLER_DB_NAME="<reseller_database_name>"
MONGODB_URL=mongodb+srv://<username>:<password>@<host_name>:<port_where_applicable>
```


**Example:**
```text
SERVER_PORT=8088
SERVER_HOST="http://localhost"
RESELLER_INSTRUMENT="saxophone"
RESELLER_NAME="Sidney's Saxophones"
RESELLER_DB_NAME="saxophones"
MONGODB_URL="mongodb+srv://my-user:mypassword@example-mongodb-svc.mongodb.svc.cluster.local?authMechanism=SCRAM-SHA-256&authSource=admin"

```

## Running a Reseller's application from source

`npm install`

`npm start`


## Creating the Container Image for the Instrument Reseller application

The following will build and push the Instrument Reseller container image to a private container registry running at host `192.168.86.34:5000`

```bash
docker build -t instrumentreseller ./Resellerfile

docker tag instrumentreseller 192.168.86.34:5000/instrumentreseller:v.09

docker push 192.168.86.34:5000/instrumentreseller
```
## Running a Reseller's application as a container

```bash
docker run -d -e SERVER_PORT="8088" \
-e SERVER_HOST="http://localhost" \
-e RESELLER_INSTRUMENT="CLARINET" \
-e RESELLER_NAME="Clyde's Clarinets" \
-e MONGODB_URL="mongodb+srv://my-user:mypassword@example-mongodb-svc.mongodb.svc.cluster.local" \
-p 8088:8088 \
--name my_instrument_reseller \
quay.io/reselbob/instrumentreseller:v.03
```