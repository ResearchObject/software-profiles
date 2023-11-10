# Software Source Code Profiles

This repository is for maintaining RO-Crate profiles for Software source code.

This uses RO-Crate-Editor profiles maintained by the Language Data Commons of Australia

## To maintain the profile(s)

Edit the RO-Crate Editor Profile here: https://github.com/Language-Research-Technology/ro-crate-editor-profiles/blob/main/profiles/software-profile.json 

Edit the SOURCE documents for the spec in `src/profiles/0.1` (Where 0.1 is the version number)

This profile specifies the structure of the RO-Crate including what the conformsTo property should be, the types of the Root Data Entity and what properties and classes are expected.

## Install

Install this by typing:

```
npm install

```

To build the current single profile:

```
npm run build

```

Running the above command compiles the profile(s) and writes them to `/docs/profiles/0.1/`
