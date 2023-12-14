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

## Example Metadata File (ro-crate-metadata.json) 
Below is an example of a complete RO-Crate metadata for a software repository.

${exampleEntities('main')}


### Specifying software & hardware dependencies for an execution environment
This profile references machine-readable files in the repository to specify the software and hardware requirements for 
the repo rather than encapsulating them in the RO-Crate

#### Software dependencies

Below is a sample ```environment.yml``` file used by BinderHub to specify Conda Python software dependencies for a 
custom environment. It can be created using the command ```conda env export```. There are other language-dependent 
files which can be used to specify environments, including ```runtime.txt```, ```install.R```, or ```dockerfile```, 
and these files should be referenced in the ```softwareRequirements``` section of the RO-Crate. Further information can be 
found at https://mybinder.readthedocs.io/en/latest/using/config_files.html.

${exampleEntities('software-env', ['./', 'environment.yml'])}

#### Hardware resource requirements

Below is a sample ```resources.yml``` file used to specify minimum hardware requirements for the repository's 
execution environment. This file can include storage, memory, CPU count, CPU architecture and GPU requirements, and 
anything unspecified is treated as "don't care".
This file will be used by ATAP portal to filter known BinderHub installations by resource levels to ensure successful execution.
The labels and values used in ```resources.yaml``` are derived from JupyterHub configuration YAML which specifies resources for Kubernetes pods.
The ```resources.yaml``` file is currently referenced in the repo’s RO-crate in the schema.org ```availableOnDevice``` property.

${exampleEntities('hardware-env', ['./', 'resources.yml'])}

## Requirements 

${rules.RootDataEntity}

${rules.RootDataEntityProperties}

${rules.allClasses}


