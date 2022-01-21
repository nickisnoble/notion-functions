import { Marked } from 'https://deno.land/x/markdown@v2.0.0/mod.ts';
import { html } from "https://deno.land/x/html/mod.ts";
import { open } from "https://deno.land/x/opener/mod.ts";

// Get markdown files in content directory
const files = Deno.readDirSync("./contents");

interface NotionDoc {
  meta?: Record<string, string>;
  title: string;
  description?: string;
  syntax: string;
  examples: string;
}

const docs: NotionDoc[] = [];


// Parse markdown files
for( const file of files ) {
  const fileName = file.name;
  const filePath = `./contents/${fileName}`;
  const content = Deno.readTextFileSync(filePath);

  const title = content
    .split("---")[2]
    .split("\n")
    .filter( line => line.trim() )[0]
    .replace("# ", "");

  const description = (function() {
    const r = new RegExp(/^[-\n\w: ]*# \w*([\s\S]*?)#### Syntax/gm),
          m = r.exec(content);
    return m ? m[1] : "none";
  })().trim();

  const syntax = content
    .split("#### Syntax")[1]
    .split("#### Examples")[0]
    .split("```")[1]
    .trim();

  const examples = content
    .split("#### Examples")[1]
    .split("```")[1]
    .trim();

  docs.push({
    meta: parseYaml( content ),
    title,
    description, //: sanitize(description),
    syntax, //: sanitize(syntax),
    examples, //: sanitize(examples)
  })
}

await Deno.writeTextFile("./docs.json", JSON.stringify( docs ));

// LIBRARY

// Parse yaml front matter
function parseYaml (content: string): Record<string, string> {
  const yaml = content.split("---")[1];

  return yaml
    .split("\n")
    .reduce<Record<string, string>>(( all, current ) => {
      if( !current ) return all;
      const [key, value] = current.split(":");
      all[ key.trim() ] = value.trim();
      return all;
    }, {});
}

// sanitize string for html
function sanitize(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/\n/g, "&#10;&#13;");
}
