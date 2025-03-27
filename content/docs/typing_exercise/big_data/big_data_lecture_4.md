# Getting Started with Apache Hadoop

> __Hadoop + Spark__ practice the most practical machine learning algorithms,
> __Algorithms + Software__ to create the core characteristics of competitiveness.

## Introducing Apache Hadoop

1. Hadoop is an open source software framework from the Apache Foundation
    - Enables distributed processing on large clusters with thousands of nodes and petabytes of data
    - For avoiding significant network I/O, Hadoop uses the move computation to the data approach
    - Developments only need to focus on business logic rather than doing the heavy lifting of distributing data, distributing code for parallel processing, and handling failures
2. Java-based software framework for distributed processing of data
3. The version of Apache Hadoop is divided into two generations, the first generation is called Hadoop 1.0 and the second generation is called Hadoop 2.0. The second generation, consisting of 2 versions 0.23.x and 2.x, is completely different from Hadoop 1.0, and is a new set of architecture.

![Evolution of Apache Hadoop](evolution-of-apache-hadoop.png)

### Four parts of Apache Hadoop

- Hadoop Common: provides public applications
- Hadoop Distributed File System(HDFS): used to store data
- Yet Another Resource Negotiator(YARN): used to manage the resources of the clusters
- MapReduce: provides a parallel computing framework for processing data

![Structure of Hadoop](structure-of-hadoop.png)

### Typical characteristics of Apache Hadoop

- Commodity
- Robust
- Scalable
- Simple
- Data locality

## Hadoop Distributed File System

- HDFS is a distributed filesystem that provided high scalability and reliability on large clusters of commodity hardware
- HDFS are divided into large blocks that are typically 128MB in size and distributed across the cluster
- Each block is replicated (typically 3 times) to handle hardware failures and block placement exposed by NameNode so that computation can be moved to data with MapReduce framework.

![Structure of HDFS](structure-of-hdfs.png)
