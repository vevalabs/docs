---
title: Installation
description: ''
position: 101
category: 'Getting started'
---

## Prerequsites

* VevaLabs subscription. [Contact us](mailto:sales@vevalabs.com) if you want to subscribe.
* At least one [gitlab.com](https://gitlab.com/vevalabs) account belonging to your organization or employees
* A GNU/Linux operating system with `glibc>=2.17` and `python>=3.6`. 

## Install VevaLabs framework

Currently VevaLabs framework is available as a Python package for Linux environments. The package can be obtained via `pip` using our private package registry as follows:

<code-group>
  <code-block label="Python" active>

  ```bash
  python3 -m pip install vevalabs \
    --index-url https://<name>:<token>@gitlab.com/api/v4/groups/<group_id>/-/packages/pypi/simple 
  ```

  </code-block>
</code-group>

In this command:

* `<name>` is the name of your access token you have created on GitLab.
* `<token>` is your access token you have created on GitLab.
* `<group_id>` is the group identifier we assign to your organization on GitLab.

After installation you can import `vevalabs` package from Python or use the `ryctl` utility to perform tasks from the command line.

## Install VevaLabs license

In order to use VevaLabs framework legally, you need a valid license certificate installed on your environment. If you have further questions on licensing terms, please [contact us](mailto:sales@vevalabs.com).

VevaLabs licenses are [X.509](https://en.wikipedia.org/wiki/X.509) certificates issued for your development teams and signed by our root certificate. The validity period of VevaLabs license certificates matches the subscription period of your organization.

VevaLabs framework expects the certificate placed in `\opt\vevalabs\license.pem` on your environment by default. This location can be configured in `vevalabs.config.json`.