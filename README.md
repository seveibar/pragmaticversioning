# Pragmatic Versioning 0.0.1

## Summary

Pragmatic versioning optimizes for communicating major changes to a package.

Given a version number BIGRELEASE.MAJOR.MINOR, increment the:

1. BIGRELEASE version whenever a major milestone, periodic version cut (e.g.
   a yearly release) or other marketed version change occurs.
2. MAJOR version whenever you have made an substantial incompatible API change,
   introduced a new set of features, or any change that an end user using the software
   normally may notice and should accompany an announcement.
3. MINOR version for any new project contribution.
   
## Introduction, Motivation

Effective package authors must maintain old versions of software as well as release new versions,
while efficiently communicating expectations and changes to their package consuemrs. Existing
versioning schemes like [semver](https://semver.org/spec/v2.0.0.html) are excellent at informing end users
on how to upgrade software, but do not allow package authors to efficiently communicate what will
be maintained, how to get the most appropriate version for the end user, and automatically release
software without worrying about explicitly labeling each change.

Pragmatic versioning looks at the issues that package authors face and addresses these first:
- By default, pragmatic versioning increases the MINOR version for every contribution.

## Where Semantic Versioning Fails

- In Semantic Versioning, there is no way to release or communicate a LTS/"long term support" version
  of a package. In Pragmatic Versioning, this is solved with a BIGRELEASE version, which has meaning
  that can be controlled by the package author.
  - For example, the author may choose to have long term support on version 1 while 
- In Semantic Versioning, each change must carry meaning, there is no version number for small patches
  or changes that have not been evaluated for meaning. Pragmatic versioning solves this by 

## Tagged Versions and Computed Version

Package consumers can still have the majority of the benefits of semantic versioning through the usage
of tagged or computed versions. For example, `npm add somepackage@lts` or `npm add somepackage@latest-unstable`
more accurately represents the intent of the user.

These tagged releases can be also be computed using commit analysis or explicit cutting. In this way,
package authors have the flexibility to serve users with different risk and upgrade tolerances.

### Automatic Upgrading

In practice, package consumers want to stay up to date/compatible with the latest BIGRELEASE, consuming
some breaking changes in their upgrade process. _It is necessary for package consumers to take some
breaking changes as part of their upgrade process, because in practice only large releases are best
maintained for security_.

Furthermore, the introduction of static analysis tools to many previously 

### Fundamental Issues with Semantic Versioning

The most fundamental issue with Semantic Versioning is the lack of a "brand" or BIGRELEASE version.
Organizations want to be able to choose when they are going to maintain a substantial subset of features

## Pragmatic Versioning in the wild

### NextJS



### NodeJS

NodeJS has created a timed release version
