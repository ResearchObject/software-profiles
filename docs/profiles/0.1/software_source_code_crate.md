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

```json
{
  "@id": "./",
  "@type": [
    "Dataset",
    "SoftwareSourceCode",
    "SoftwareApplication"
  ],
  "conformsTo": {
    "@id": "https://purl.archive.org/language-data-commons/profile#Software"
  },
  "hasPart": {
    "@id": "resources.yml"
  },
  "name": "Example crate with a hardware environment",
  "description": "Illustrates how to link a software application to the virtualised environment used to execute it",
  "datePublished": "2023-11-28"
}
```
```json
{
  "@id": "resources.yml",
  "@type": "File",
  "name": "Example hardware resources specification file",
  "description": "This file describes the attributes of a virtual machine such as how many CPUs it has and how much RAM. The values in file should follow the format used by Binder to allocate resources in Kubernetes."
}
```
[source](../example/hardware-env/README.md)




## Example Metadata File (ro-crate-metadata.json) 

```json
{
  "@context": [
    "https://w3id.org/ro/crate/1.1/context",
    {
      "@vocab": "http://schema.org/"
    }
  ],
  "@graph": [
    {
      "@id": "./",
      "@type": [
        "Dataset",
        "SoftwareSourceCode",
        "SoftwareApplication"
      ],
      "conformsTo": {
        "@id": "https://purl.archive.org/language-data-commons/profile#Software"
      },
      "name": "Liskov_example",
      "description": "Liskov Substitution Principle example. Demonstrates an issue with inherited functions as per https://web.archive.org/web/20151128004108/http://www.objectmentor.com/resources/articles/lsp.pdf",
      "datePublished": "2020-10-12",
      "license": {
        "@id": "https://spdx.org/licenses/Apache-2.0.html"
      },
      "hasPart": [
        {
          "@id": "README.md"
        },
        {
          "@id": "Liskov_substitution_demo.ipynb"
        },
        {
          "@id": "liskov_conformance/__main__.py"
        },
        {
          "@id": "liskov_conformance/polygon.py"
        },
        {
          "@id": "liskov_conformance/rectangle.py"
        },
        {
          "@id": "liskov_conformance/square.py"
        },
        {
          "@id": "liskov_conformance/__init__.py"
        },
        {
          "@id": "liskov_badness/__main__.py"
        },
        {
          "@id": "liskov_badness/rectangle.py"
        },
        {
          "@id": "liskov_badness/square.py"
        },
        {
          "@id": "liskov_badness/__init__.py"
        }
      ],
      "usageInfo": "README.md",
      "mainEntity": {
        "@id": "Liskov_substitution_demo.ipynb"
      },
      "creator": {
        "@id": "https://orcid.org/0000-0001-8937-8904"
      },
      "funder": {
        "@id": "https://ror.org/03j2gem75"
      },
      "codeRepository": "https://github.com/alex-ip/Liskov_example",
      "identifier": "https://github.com/alex-ip/Liskov_example",
      "releaseNotes": {
        "@id": "README.md"
      },
      "runtime": "Python 3.X",
      "softwareVersion": "0.0.1",
      "programmingLanguage": {
        "@id": "https://www.python.org/"
      },
      "downloadUrl": "https://github.com/alex-ip/Liskov_example/archive/refs/heads/main.zip",
      "softwareHelp": {
        "@id": "README.md"
      }
    },
    {
      "@id": "https://spdx.org/licenses/Apache-2.0.html",
      "@type": "CreativeWork",
      "name": "Apache 2.0 License",
      "datePublished": "January 2004"
    },
    {
      "@id": "README.md",
      "@type": "File"
    },
    {
      "@id": "Liskov_substitution_demo.ipynb",
      "@type": "File",
      "description": "A Jupyter notebook demonstrating the Liskov substitution principle"
    },
    {
      "@id": "liskov_conformance/__main__.py",
      "@type": "File"
    },
    {
      "@id": "liskov_conformance/polygon.py",
      "@type": "File"
    },
    {
      "@id": "liskov_conformance/rectangle.py",
      "@type": "File"
    },
    {
      "@id": "liskov_conformance/square.py",
      "@type": "File"
    },
    {
      "@id": "liskov_conformance/__init__.py",
      "@type": "File"
    },
    {
      "@id": "liskov_badness/__main__.py",
      "@type": "File"
    },
    {
      "@id": "liskov_badness/rectangle.py",
      "@type": "File"
    },
    {
      "@id": "liskov_badness/square.py",
      "@type": "File"
    },
    {
      "@id": "liskov_badness/__init__.py",
      "@type": "File"
    },
    {
      "@id": "https://orcid.org/0000-0001-8937-8904",
      "@type": "Person",
      "name": "Alex Ip"
    },
    {
      "@id": "https://ror.org/03j2gem75",
      "@type": "Organization",
      "name": "AARNet Pty Ltd"
    },
    {
      "@id": "https://www.python.org/",
      "@type": "ComputerLanguage",
      "name": "Python 3.X"
    },
    {
      "@id": "ro-crate-metadata.json",
      "@type": "CreativeWork",
      "identifier": "ro-crate-metadata.json",
      "about": {
        "@id": "./"
      }
    }
  ]
}
```



## Requirements 

The Root Data Entity:
-  MUST have at least the following types: ["SoftwareSourceCode","SoftwareApplication","Dataset"]
-  MUST have a conformsTo propery with least the following values [{"@id":"https://purl.archive.org/language-data-commons/profile#Software"}]

<table>
<tr><td><strong>Property</strong></td><td><strong>Required?</strong></td><td>Expected value range</strong></td><td><strong>Descriptions</strong></td></tr>
<tr><td>name</td><td>MUST</td><td>Text</td><td>The name of the item.</td></tr>
<tr><td>description</td><td>MUST</td><td>Text</td><td>A description of the item.</td></tr>
<tr><td>datePublished</td><td>MUST</td><td>Text</td><td>Date of first broadcast/publication.</td></tr>
<tr><td>license</td><td>MUST</td><td><a href="#type-CreativeWork">CreativeWork</a></td><td>A license document that applies to this content, typically indicated by URL.</td></tr>
<tr><td>mainEntity</td><td>MUST</td><td><a href="#type-File">File</a></td><td>Indicates the primary entity described in some page or other CreativeWork.</td></tr>
<tr><td>creator</td><td>MAY</td><td><a href="#type-Person">Person</a></td><td>The creator/author of this CreativeWork. This is the same as the Author property for CreativeWork.</td></tr>
<tr><td>publisher</td><td>MAY</td><td><a href="#type-Organization">Organization</a></td><td>The publisher of the creative work.</td></tr>
<tr><td>downloadUrl</td><td>MAY</td><td>Text</td><td>If the file can be downloaded, URL to download the binary.</td></tr>
<tr><td>installUrl</td><td>MAY</td><td>Text</td><td>URL at which the app may be installed, if different from the URL of the item.</td></tr>
<tr><td>releaseNotes</td><td>MAY</td><td><a href="#type-File">File</a></td><td>Description of what changed in this version.</td></tr>
<tr><td>screenshot</td><td>MAY</td><td>ImageObject, <a href="#type-File">File</a></td><td>A link to a screenshot image of the app.</td></tr>
<tr><td>softwareVersion</td><td>MAY</td><td>Text</td><td>Version of the software instance.</td></tr>
<tr><td>softwareRequirements</td><td>MAY</td><td><a href="#type-File">File</a></td><td>Component dependency requirements for application. This includes runtime environments and shared libraries that are not included in the application distribution package, but required to run the application (examples: DirectX, Java or .NET runtime).</td></tr>
<tr><td>programmingLanguage</td><td>MAY</td><td><a href="#type-ComputerLanguage">ComputerLanguage</a></td><td>The computer programming language.</td></tr>
<tr><td>codeRepository</td><td>MAY</td><td>Text</td><td>Link to the repository where the un-compiled, human readable code and related code is located (SVN, GitHub, CodePlex).</td></tr>
<tr><td>funder</td><td>MAY</td><td><a href="#type-Organization">Organization</a></td><td>A person or organization that supports (sponsors) something through some kind of financial contribution.</td></tr>
<tr><td>citation</td><td>MAY</td><td><a href="#type-CreativeWork">CreativeWork</a></td><td>A citation or reference to another creative work, such as another publication, web page, scholarly article, etc.</td></tr>
<tr><td>usageInfo</td><td>MAY</td><td>Text</td><td>The schema.org [[usageInfo]] property indicates further information about a [[CreativeWork]]. This property is applicable both to works that are freely available and to those that require payment or other transactions. It can reference additional information, e.g. community expectations on preferred linking and citation conventions, as well as purchasing details. For something that can be commercially licensed, usageInfo can provide detailed, resource-specific information about licensing options.

This property can be used alongside the license property which indicates license(s) applicable to some piece of content. The usageInfo property can provide information about other licensing options, e.g. acquiring commercial usage rights for an image that is also available under non-commercial creative commons licenses.</td></tr>
<tr><td>hasPart</td><td>MAY</td><td><a href="#type-File">File</a></td><td>Indicates an item or CreativeWork that is part of this item, or CreativeWork (in some sense).</td></tr>
<tr><td>supportingData</td><td>MAY</td><td><a href="#type-Dataset">Dataset</a></td><td>Supporting data for a SoftwareApplication.</td></tr>
<tr><td>runtime</td><td>MAY</td><td>Text</td><td>Runtime platform or script interpreter dependencies (example: Java v1, Python 2.3, .NET Framework 3.0).</td></tr>
<tr><td>availableOnDevice</td><td>MAY</td><td><a href="#type-File">File</a></td><td>Device required to run the application. Used in cases where a specific make/model is required to run the application.</td></tr>
<tr><td>identifier</td><td>MAY</td><td>Text</td><td>The identifier property represents any kind of identifier for any kind of [[Thing]], such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as textual strings or as URL (URI) links. See [background notes](/docs/datamodel.html#identifierBg) for more details.
        </td></tr>
<tr><td>about</td><td>MAY</td><td><a href="#type-Dataset">Dataset</a>, <a href="#type-SoftwareApplication">SoftwareApplication</a>, <a href="#type-SoftwareSourceCode">SoftwareSourceCode</a></td><td>The subject matter of the content.</td></tr>
</table>



## Requirements for all classes

<a name='type-Dataset'/>

###  Type: Dataset



<table>
<tr><td><strong>Property</strong></td><td><strong>Required?</strong></td><td>Expected value range</strong></td><td><strong>Descriptions</strong></td></tr>
<tr><td>name</td><td>MUST</td><td>Text</td><td>The name of the Dataset</td></tr>
<tr><td>description</td><td>MUST</td><td>Text</td><td>A description of the dataset.</td></tr>
<tr><td>datePublished</td><td>MUST</td><td>Text</td><td>Date of first broadcast/publication.</td></tr>
<tr><td>license</td><td>MUST</td><td><a href="#type-CreativeWork">CreativeWork</a></td><td>A license document that applies to this content this should be included in the RO-Crate as a CreativeWork</td></tr>
<tr><td>mainEntity</td><td>MUST</td><td><a href="#type-File">File</a></td><td>Indicates the primary entry point for this dataset </td></tr>
<tr><td>funder</td><td>MAY</td><td><a href="#type-Organization">Organization</a></td><td>A person or organization that supports (sponsors) something through some kind of financial contribution.</td></tr>
<tr><td>citation</td><td>MAY</td><td><a href="#type-CreativeWork">CreativeWork</a></td><td>A citation or reference to another creative work, such as another publication, web page, scholarly article, etc.</td></tr>
<tr><td>usageInfo</td><td>MAY</td><td>Text</td><td>The schema.org [[usageInfo]] property indicates further information about a [[CreativeWork]]. This property is applicable both to works that are freely available and to those that require payment or other transactions. It can reference additional information, e.g. community expectations on preferred linking and citation conventions, as well as purchasing details. For something that can be commercially licensed, usageInfo can provide detailed, resource-specific information about licensing options.

This property can be used alongside the license property which indicates license(s) applicable to some piece of content. The usageInfo property can provide information about other licensing options, e.g. acquiring commercial usage rights for an image that is also available under non-commercial creative commons licenses.</td></tr>
<tr><td>hasPart</td><td>MAY</td><td><a href="#type-File">File</a></td><td>Indicates an item or CreativeWork that is part of this item, or CreativeWork (in some sense).</td></tr>
</table>

<a name='type-CreativeWork'/>

###  Type: CreativeWork



<table>
<tr><td><strong>Property</strong></td><td><strong>Required?</strong></td><td>Expected value range</strong></td><td><strong>Descriptions</strong></td></tr>
<tr><td>datePublished</td><td>MAY</td><td>Text</td><td>Date of first broadcast/publication.</td></tr>
<tr><td>license</td><td>MAY</td><td><a href="#type-CreativeWork">CreativeWork</a></td><td>A license document that applies to this content, typically indicated by URL.</td></tr>
<tr><td>creator</td><td>MAY</td><td><a href="#type-Person">Person</a></td><td>The creator/author of this CreativeWork. This is the same as the Author property for CreativeWork.</td></tr>
<tr><td>publisher</td><td>MAY</td><td><a href="#type-Organization">Organization</a></td><td>The publisher of the creative work.</td></tr>
<tr><td>funder</td><td>MAY</td><td><a href="#type-Organization">Organization</a></td><td>A person or organization that supports (sponsors) something through some kind of financial contribution.</td></tr>
<tr><td>citation</td><td>MAY</td><td><a href="#type-CreativeWork">CreativeWork</a></td><td>A citation or reference to another creative work, such as another publication, web page, scholarly article, etc.</td></tr>
<tr><td>usageInfo</td><td>MAY</td><td>Text</td><td>The schema.org [[usageInfo]] property indicates further information about a [[CreativeWork]]. This property is applicable both to works that are freely available and to those that require payment or other transactions. It can reference additional information, e.g. community expectations on preferred linking and citation conventions, as well as purchasing details. For something that can be commercially licensed, usageInfo can provide detailed, resource-specific information about licensing options.

This property can be used alongside the license property which indicates license(s) applicable to some piece of content. The usageInfo property can provide information about other licensing options, e.g. acquiring commercial usage rights for an image that is also available under non-commercial creative commons licenses.</td></tr>
<tr><td>hasPart</td><td>MAY</td><td><a href="#type-File">File</a></td><td>Indicates an item or CreativeWork that is part of this item, or CreativeWork (in some sense).</td></tr>
<tr><td>name</td><td>MAY</td><td>Text</td><td>The name of the item software may include a version number or other designation if this is commonly used to distinguish it from other version of the software, eg  'My Widget 22' or 'My Widget Pro'</td></tr>
<tr><td>identifier</td><td>MAY</td><td>Text</td><td>The identifier property represents any kind of identifier for any kind of [[Thing]], such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as textual strings or as URL (URI) links. See [background notes](/docs/datamodel.html#identifierBg) for more details.
        </td></tr>
</table>

<a name='type-SoftwareApplication'/>

###  Type: SoftwareApplication



<table>
<tr><td><strong>Property</strong></td><td><strong>Required?</strong></td><td>Expected value range</strong></td><td><strong>Descriptions</strong></td></tr>
<tr><td>name</td><td>MAY</td><td>Text</td><td>The name of the item.</td></tr>
<tr><td>description</td><td>MAY</td><td>Text</td><td>A description of the item.</td></tr>
<tr><td>datePublished</td><td>MAY</td><td>Text</td><td>Date of first broadcast/publication.</td></tr>
<tr><td>license</td><td>MAY</td><td><a href="#type-CreativeWork">CreativeWork</a></td><td>A license document that applies to this content, typically indicated by URL.</td></tr>
<tr><td>mainEntity</td><td>MAY</td><td><a href="#type-File">File</a></td><td>Indicates the primary entity described in some page or other CreativeWork.</td></tr>
<tr><td>creator</td><td>MAY</td><td><a href="#type-Person">Person</a></td><td>The creator/author of this CreativeWork. This is the same as the Author property for CreativeWork.</td></tr>
<tr><td>publisher</td><td>MAY</td><td><a href="#type-Organization">Organization</a></td><td>The publisher of the creative work.</td></tr>
<tr><td>downloadUrl</td><td>MAY</td><td>Text</td><td>If the file can be downloaded, URL to download the binary.</td></tr>
<tr><td>installUrl</td><td>MAY</td><td>Text</td><td>URL at which the app may be installed, if different from the URL of the item.</td></tr>
<tr><td>releaseNotes</td><td>MAY</td><td><a href="#type-File">File</a></td><td>Description of what changed in this version.</td></tr>
<tr><td>screenshot</td><td>MAY</td><td>ImageObject, <a href="#type-File">File</a></td><td>A link to a screenshot image of the app.</td></tr>
<tr><td>softwareVersion</td><td>MAY</td><td>Text</td><td>Version of the software instance.</td></tr>
<tr><td>softwareRequirements</td><td>MAY</td><td><a href="#type-File">File</a></td><td>Component dependency requirements for application. This includes runtime environments and shared libraries that are not included in the application distribution package, but required to run the application (examples: DirectX, Java or .NET runtime).</td></tr>
<tr><td>programmingLanguage</td><td>MAY</td><td><a href="#type-ComputerLanguage">ComputerLanguage</a></td><td>The computer programming language.</td></tr>
<tr><td>codeRepository</td><td>MAY</td><td>Text</td><td>Link to the repository where the un-compiled, human readable code and related code is located (SVN, GitHub, CodePlex).</td></tr>
<tr><td>funder</td><td>MAY</td><td><a href="#type-Organization">Organization</a></td><td>A person or organization that supports (sponsors) something through some kind of financial contribution.</td></tr>
<tr><td>citation</td><td>MAY</td><td><a href="#type-CreativeWork">CreativeWork</a></td><td>A citation or reference to another creative work, such as another publication, web page, scholarly article, etc.</td></tr>
<tr><td>usageInfo</td><td>MAY</td><td>Text</td><td>The schema.org [[usageInfo]] property indicates further information about a [[CreativeWork]]. This property is applicable both to works that are freely available and to those that require payment or other transactions. It can reference additional information, e.g. community expectations on preferred linking and citation conventions, as well as purchasing details. For something that can be commercially licensed, usageInfo can provide detailed, resource-specific information about licensing options.

This property can be used alongside the license property which indicates license(s) applicable to some piece of content. The usageInfo property can provide information about other licensing options, e.g. acquiring commercial usage rights for an image that is also available under non-commercial creative commons licenses.</td></tr>
<tr><td>hasPart</td><td>MAY</td><td><a href="#type-File">File</a></td><td>Indicates an item or CreativeWork that is part of this item, or CreativeWork (in some sense).</td></tr>
<tr><td>supportingData</td><td>MAY</td><td><a href="#type-Dataset">Dataset</a></td><td>Supporting data for a SoftwareApplication.</td></tr>
<tr><td>runtime</td><td>MAY</td><td>Text</td><td>Runtime platform or script interpreter dependencies (example: Java v1, Python 2.3, .NET Framework 3.0).</td></tr>
<tr><td>availableOnDevice</td><td>MAY</td><td><a href="#type-File">File</a></td><td>Device required to run the application. Used in cases where a specific make/model is required to run the application.</td></tr>
<tr><td>identifier</td><td>MAY</td><td>Text</td><td>The identifier property represents any kind of identifier for any kind of [[Thing]], such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as textual strings or as URL (URI) links. See [background notes](/docs/datamodel.html#identifierBg) for more details.
        </td></tr>
<tr><td>about</td><td>MAY</td><td><a href="#type-Dataset">Dataset</a>, <a href="#type-SoftwareApplication">SoftwareApplication</a>, <a href="#type-SoftwareSourceCode">SoftwareSourceCode</a></td><td>The subject matter of the content.</td></tr>
</table>

<a name='type-SoftwareSourceCode'/>

###  Type: SoftwareSourceCode



<table>
<tr><td><strong>Property</strong></td><td><strong>Required?</strong></td><td>Expected value range</strong></td><td><strong>Descriptions</strong></td></tr>
<tr><td>name</td><td>MAY</td><td>Text</td><td>The name of the item.</td></tr>
<tr><td>description</td><td>MAY</td><td>Text</td><td>A description of the item.</td></tr>
<tr><td>datePublished</td><td>MAY</td><td>Text</td><td>Date of first broadcast/publication.</td></tr>
<tr><td>license</td><td>MAY</td><td><a href="#type-CreativeWork">CreativeWork</a></td><td>A license document that applies to this content, typically indicated by URL.</td></tr>
<tr><td>mainEntity</td><td>MAY</td><td><a href="#type-File">File</a></td><td>Indicates the primary entity described in some page or other CreativeWork.</td></tr>
<tr><td>creator</td><td>MAY</td><td><a href="#type-Person">Person</a></td><td>The creator/author of this CreativeWork. This is the same as the Author property for CreativeWork.</td></tr>
<tr><td>publisher</td><td>MAY</td><td><a href="#type-Organization">Organization</a></td><td>The publisher of the creative work.</td></tr>
<tr><td>downloadUrl</td><td>MAY</td><td>Text</td><td>If the file can be downloaded, URL to download the binary.</td></tr>
<tr><td>installUrl</td><td>MAY</td><td>Text</td><td>URL at which the app may be installed, if different from the URL of the item.</td></tr>
<tr><td>releaseNotes</td><td>MAY</td><td><a href="#type-File">File</a></td><td>Description of what changed in this version.</td></tr>
<tr><td>screenshot</td><td>MAY</td><td>ImageObject, <a href="#type-File">File</a></td><td>A link to a screenshot image of the app.</td></tr>
<tr><td>softwareVersion</td><td>MAY</td><td>Text</td><td>Version of the software instance.</td></tr>
<tr><td>softwareRequirements</td><td>MAY</td><td><a href="#type-File">File</a></td><td>Component dependency requirements for application. This includes runtime environments and shared libraries that are not included in the application distribution package, but required to run the application (examples: DirectX, Java or .NET runtime).</td></tr>
<tr><td>programmingLanguage</td><td>MAY</td><td><a href="#type-ComputerLanguage">ComputerLanguage</a></td><td>The computer programming language.</td></tr>
<tr><td>codeRepository</td><td>MAY</td><td>Text</td><td>Link to the repository where the un-compiled, human readable code and related code is located (SVN, GitHub, CodePlex).</td></tr>
<tr><td>funder</td><td>MAY</td><td><a href="#type-Organization">Organization</a></td><td>A person or organization that supports (sponsors) something through some kind of financial contribution.</td></tr>
<tr><td>citation</td><td>MAY</td><td><a href="#type-CreativeWork">CreativeWork</a></td><td>A citation or reference to another creative work, such as another publication, web page, scholarly article, etc.</td></tr>
<tr><td>usageInfo</td><td>MAY</td><td>Text</td><td>The schema.org [[usageInfo]] property indicates further information about a [[CreativeWork]]. This property is applicable both to works that are freely available and to those that require payment or other transactions. It can reference additional information, e.g. community expectations on preferred linking and citation conventions, as well as purchasing details. For something that can be commercially licensed, usageInfo can provide detailed, resource-specific information about licensing options.

This property can be used alongside the license property which indicates license(s) applicable to some piece of content. The usageInfo property can provide information about other licensing options, e.g. acquiring commercial usage rights for an image that is also available under non-commercial creative commons licenses.</td></tr>
<tr><td>hasPart</td><td>MAY</td><td><a href="#type-File">File</a></td><td>Indicates an item or CreativeWork that is part of this item, or CreativeWork (in some sense).</td></tr>
<tr><td>supportingData</td><td>MAY</td><td><a href="#type-Dataset">Dataset</a></td><td>Supporting data for a SoftwareApplication.</td></tr>
<tr><td>runtime</td><td>MAY</td><td>Text</td><td>Runtime platform or script interpreter dependencies (example: Java v1, Python 2.3, .NET Framework 3.0).</td></tr>
<tr><td>availableOnDevice</td><td>MAY</td><td><a href="#type-File">File</a></td><td>Device required to run the application. Used in cases where a specific make/model is required to run the application.</td></tr>
<tr><td>identifier</td><td>MAY</td><td>Text</td><td>The identifier property represents any kind of identifier for any kind of [[Thing]], such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as textual strings or as URL (URI) links. See [background notes](/docs/datamodel.html#identifierBg) for more details.
        </td></tr>
<tr><td>about</td><td>MAY</td><td><a href="#type-Dataset">Dataset</a>, <a href="#type-SoftwareApplication">SoftwareApplication</a>, <a href="#type-SoftwareSourceCode">SoftwareSourceCode</a></td><td>The subject matter of the content.</td></tr>
</table>

<a name='type-File'/>

###  Type: File



<table>
<tr><td><strong>Property</strong></td><td><strong>Required?</strong></td><td>Expected value range</strong></td><td><strong>Descriptions</strong></td></tr>
<tr><td>name</td><td>MAY</td><td>Text</td><td>The name of the item.</td></tr>
<tr><td>description</td><td>MAY</td><td>Text</td><td>A description of the item.</td></tr>
<tr><td>datePublished</td><td>MAY</td><td>Text</td><td>Date of first broadcast/publication.</td></tr>
<tr><td>license</td><td>MAY</td><td><a href="#type-CreativeWork">CreativeWork</a></td><td>A license document that applies to this content, typically indicated by URL.</td></tr>
<tr><td>mainEntity</td><td>MAY</td><td><a href="#type-File">File</a></td><td>Indicates the primary entity described in some page or other CreativeWork.</td></tr>
<tr><td>creator</td><td>MAY</td><td><a href="#type-Person">Person</a></td><td>The creator/author of this CreativeWork. This is the same as the Author property for CreativeWork.</td></tr>
<tr><td>publisher</td><td>MAY</td><td><a href="#type-Organization">Organization</a></td><td>The publisher of the creative work.</td></tr>
<tr><td>funder</td><td>MAY</td><td><a href="#type-Organization">Organization</a></td><td>A person or organization that supports (sponsors) something through some kind of financial contribution.</td></tr>
<tr><td>citation</td><td>MAY</td><td><a href="#type-CreativeWork">CreativeWork</a></td><td>A citation or reference to another creative work, such as another publication, web page, scholarly article, etc.</td></tr>
<tr><td>usageInfo</td><td>MAY</td><td>Text</td><td>The schema.org [[usageInfo]] property indicates further information about a [[CreativeWork]]. This property is applicable both to works that are freely available and to those that require payment or other transactions. It can reference additional information, e.g. community expectations on preferred linking and citation conventions, as well as purchasing details. For something that can be commercially licensed, usageInfo can provide detailed, resource-specific information about licensing options.

This property can be used alongside the license property which indicates license(s) applicable to some piece of content. The usageInfo property can provide information about other licensing options, e.g. acquiring commercial usage rights for an image that is also available under non-commercial creative commons licenses.</td></tr>
<tr><td>hasPart</td><td>MAY</td><td><a href="#type-File">File</a></td><td>Indicates an item or CreativeWork that is part of this item, or CreativeWork (in some sense).</td></tr>
<tr><td>identifier</td><td>MAY</td><td>Text</td><td>The identifier property represents any kind of identifier for any kind of [[Thing]], such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as textual strings or as URL (URI) links. See [background notes](/docs/datamodel.html#identifierBg) for more details.
        </td></tr>
<tr><td>about</td><td>MAY</td><td><a href="#type-Dataset">Dataset</a>, <a href="#type-SoftwareApplication">SoftwareApplication</a>, <a href="#type-SoftwareSourceCode">SoftwareSourceCode</a></td><td>The subject matter of the content.</td></tr>
</table>

<a name='type-Person'/>

###  Type: Person



<table>
<tr><td><strong>Property</strong></td><td><strong>Required?</strong></td><td>Expected value range</strong></td><td><strong>Descriptions</strong></td></tr>
<tr><td>funder</td><td>MAY</td><td><a href="#type-Organization">Organization</a></td><td>A person or organization that supports (sponsors) something through some kind of financial contribution.</td></tr>
<tr><td>name</td><td>MAY</td><td>Text</td><td>The name of the item.</td></tr>
<tr><td>description</td><td>MAY</td><td>Text</td><td>A description of the item.</td></tr>
</table>

<a name='type-Organization'/>

###  Type: Organization



<table>
<tr><td><strong>Property</strong></td><td><strong>Required?</strong></td><td>Expected value range</strong></td><td><strong>Descriptions</strong></td></tr>
<tr><td>funder</td><td>MAY</td><td><a href="#type-Organization">Organization</a></td><td>A person or organization that supports (sponsors) something through some kind of financial contribution.</td></tr>
<tr><td>name</td><td>MAY</td><td>Text</td><td>The name of the item.</td></tr>
<tr><td>description</td><td>MAY</td><td>Text</td><td>A description of the item.</td></tr>
</table>

<a name='type-ComputerLanguage'/>

###  Type: ComputerLanguage



<table>
<tr><td><strong>Property</strong></td><td><strong>Required?</strong></td><td>Expected value range</strong></td><td><strong>Descriptions</strong></td></tr>
<tr><td>name</td><td>MAY</td><td>Text</td><td>The name of the item.</td></tr>
</table>




