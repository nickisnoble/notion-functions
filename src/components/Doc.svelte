<script>
  export let doc;
</script>

<article id={doc.title}>
  <header>
    <h2>{doc.title}</h2>
    <p>{doc.description}</p>
  </header>

  {#if (doc.syntax) }
  <section class="syntax">
    <h4>Syntax</h4>
    <pre><code lang="js">{doc.syntax}</code></pre>
  </section>
  {/if}

  {#if (doc.examples) }
  <section class="examples">
    <h4>Examples</h4>
    <pre><code lang="js">{doc.examples}</code></pre>
  </section>
  {/if}
</article>

<style lang="scss">
  article {
    margin: 0 auto;
    max-width: 80ch;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20ch, 1fr));
    grid-template-areas: "header header"
                         "syntax examples";
    grid-gap: 1em;
  }

  article header {
    grid-area: header;
  }

  .syntax {
    grid-area: syntax;
  }

  .examples {
    grid-area: examples;
  }

  pre {
    margin-top: 0.25em;
    overflow-x: auto;
  }
</style>
