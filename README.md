# Pragmatic Versioning 0.0.1

[Hacker News Discussion](https://news.ycombinator.com/item?id=38513501) · [Edit on Github](https://github.com/seveibar/pragmaticversioning) · [Website](https://pragmaticversioning.com)

## Summary

Pragmatic versioning optimizes for communicating changes to a package to package consumers,
while retaining simple semantics for package maintainers.

Given a version number BIGRELEASE.ANNOUNCE.INCREMENT, increment the:

1. BIGRELEASE version whenever a major milestone, periodic version cut (e.g.
   a yearly release) or other marketed version change occurs, a BIGRELEASE
   is often accompanied with a maintanence period.
2. ANNOUNCE version whenever you have made an substantial incompatible API change,
   introduced a new set of features, or any change that an end user using the software
   normally may notice and should accompany an announcement.
3. INCREMENT version for any new project contribution.

## Introduction, Motivation

Effective package authors must maintain old versions of software as well as release new versions,
while efficiently communicating expectations and changes to their package consuemrs. Existing
versioning schemes like [semver](https://semver.org/spec/v2.0.0.html) are excellent at informing end users
on how to upgrade software, but do not allow package authors to efficiently communicate what will
be maintained, how to get the most appropriate version for the end user, and automatically release
software without worrying about explicitly labeling each change.

Pragmatic versioning looks at the issues that package authors face and addresses these first:

- By default, pragmatic versioning increases the INCREMENT version for every contribution.
- BIGRELEASES are completely controlled by the package author when they would like to introduce
  a maintanence period or show a substantial milestone to their community.
- Package maintainers can now clearly indicate what BIGRELEASEs will continue to receive updates

## Definitions

- `BIGRELEASE` - This is a "brand" number, meaning it is mostly used for marketing purposes. It indicates
  a substantial release that can be accompanied with a maintenance period.
- `ANNOUNCE` - Major feature(s) or changes in behavior that may facilitate an announcement. This can be done
  on a scheduled basis (e.g. weekly) or after a substantial number of contributions are made that indicate
  it's time to release a changelog to package consumers.
- `INCREMENT` - Any contribution will increment by default.

## Where Semantic Versioning Fails

- In Semantic Versioning, there is no way to release or communicate a LTS/"long term support" version
  of a package. In Pragmatic Versioning, this is solved with a BIGRELEASE version, which has meaning
  that can be controlled by the package author.
  - For example, the author may choose to have long term support on version 1 while
- In Semantic Versioning, each change must carry meaning, there is no version number for small patches
  or changes that have not been evaluated for meaning. Pragmatic versioning solves this by always
  interpreting a contribution as an INCREMENT by default

## Tagged Versions and Computed Version

Package consumers can still have the majority of the benefits of semantic versioning through the usage
of tagged or computed versions. For example, `npm add somepackage@lts`, `npm add somepackage@latest-unstable`, `npm add somepackage@canary` more accurately represents the intent of the user.

These tagged releases can be also be computed using commit analysis or explicit cutting. In this way,
package authors have the flexibility to serve users with different risk and upgrade tolerances.

### Automatic Upgrading

In practice, package consumers want to stay up to date/compatible with the latest BIGRELEASE, consuming
some breaking changes in their upgrade process. _It is necessary for package consumers to take some
breaking changes as part of their upgrade process, because in practice only large releases are best
maintained for security_.

Furthermore, the introduction of static analysis tools to many previously

### Fundamental Issues with Semantic Versioning

- The most fundamental issue with Semantic Versioning is the lack of a "brand" or BIGRELEASE version.
  Organizations want to be able to choose when they are going to maintain a substantial subset of features and give assurances for that release.
- Frequent semantic releases begin to take on a negative meaning for announcements because they are associated with breaking changes, where before semantic versioning and in many software applications they were meant for major positive developments.
- Major rewrites or improvements have no version number to encapsulate them in Semantic Versioning.[[

## Pragmatic Versioning in the wild

### NodeJS

NodeJS has created a timed release versioning system as described below:

> Major Node.js versions enter Current release status for six months, which gives library authors time to add support for them. After six months, odd-numbered releases (9, 11, etc.) become unsupported, and even-numbered releases (10, 12, etc.) move to Active LTS status and are ready for general use. LTS release status is "long-term support", which typically guarantees that critical bugs will be fixed for a total of 30 months. Production applications should only use Active LTS or Maintenance LTS releases.

This mode of versioning gives great expectations to their users and is compatible with a
Pragmatic Versioning system, but incompatible with Semantic Versioning.

### Canary-tagged Pragmatic Versioning (NextJS)

NextJS uses pragmatic versioning scheme in combination with a semantic release scheme.

- A MAJOR semantic version for NextJS is the same a pragmatic versioning BIGRELEASE version
- A MINOR semantic version for NextJS is the same as a pragmatic versioning ANNOUNCE version
- A PATCH semantic version for NextJS is a combination of fixes and features
- A tagged canary version is released for each INCREMENT e.g. `v14.0.4-canary.27`

## Future Work

- [ ] Formally define terminology
- [ ] Find more real world examples [(issue)](https://github.com/seveibar/pragmaticversioning/issues/1)
- [ ] Execute real-world examples show-casing the method
- [ ] Examine issues with pragmatic versioning
- [ ] Recommend tooling or conventions
