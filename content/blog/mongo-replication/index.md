---
title: "MongoDB Replication"
date: "2020-07-09T00:00:00.000Z"
description: "Fields notes on MongoDB replication"
draft: true
---
MongoDB replicates data across multiple nodes to overcome failure, ensuring
that data is available at all times. This is called "availability". A group
of duplicated nodes is called a "replica set". All date is handled by a single
node called the "primary", other "secondary" nodes copy data from the primary.

To keep data consistent an the event the primary becomes unavailable, a
secondary node is "voted" to become the primary. This is called "failover".

Replication can be managed by one of two processes, either "binary replication"
or "statement-based replication".

In binary replication, a binary log is created from differences in data files
and is shared from the primary to secondary nodes. It contains the memory
locations and data that needs to be written. Binary replications assumes
strict technical consistencies, such as OS, CPU architecture and DB version.

In statement-based replication, write statements are written to an "operation
log". This is shared from the primary to secondary nodes. Secondary nodes will
run the statements. However, before the statements are run, they are
transformed for "idempotence", meaning that the statements can be run multiple
times and still achieve the same end result. For example, increment statements
are transformed to achieve the final number. Technical restraints are relaxed.

MongoDB uses statement based replication.

To be able to read from a secondary node, it must be explicitly set to be able
to do so. Write's will never be allowed to be done on a secondary node. This
is to ensure data consistency.

If there are not enough secondaries to reach a "majority", the remaining
node's will become a secondary. You won't be able to write data in this
instance.
