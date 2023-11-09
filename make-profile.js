const {Profile} = require('ro-crate-editor-profiles');
const fs = require("fs")

profile = require('ro-crate-editor-profiles/profiles/software-profile.json')
fs.writeFileSync("docs/profiles/0.1/software_source_code_crate.md", Profile.generateSpec(profile, "src/profiles/0.1/software_source_code_crate.md", "docs/examples" ));



