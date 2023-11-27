---
title: Software Source Code
---


# Software Source Code RO-Crate Profile

* Version: 0.1
* Permalink: <https://w3id.org/ro/profiles/software/source-code/0.1>
* Authors: Language Data Commons of Australia (LDaCA) RO-Crate working group
* Copyright: University of Queensland

This profile uses terminology from the [RO-Crate 1.1 specification](https://w3id.org/ro/crate/1.1).


## Overview

This profile is based on the [RO-Crate Metadata Specification 1.1](https://www.researchobject.org/ro-crate/1.1/), and
it used to describe a collection of software source code files (as in a git repository) using terms from the 
schema.org "Dataset", "SoftwareSourceCode", and "SoftwareApplication" types.
It is intended to be 100% semantically interoperable with the Codemeta project (https://codemeta.github.io/index.html).



### Specifying an execution environment

TODO: Provide an environment.yml files (per Conda) 

TODO: Include an example of the .yml file inline

TODO: include an example SoftwareSourceCode entity with a link to the YML file with ${exampleEntities('execution-environment', ['./', 'environment.yml'])}


## Example Metadata File (ro-crate-metadata.json) 

${exampleEntities('main')}


## Requirements 

${rules.RootDataEntity}

${rules.RootDataEntityProperties}

${rules.allClasses}


