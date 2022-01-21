<Global>

  <header>
    <h1>Notion Functions</h1>
  </header>

  <div class="layout">
    <nav>
      {#each docs as doc}
        <a href="#{doc.title}">{doc.title}</a>
      {/each}
    </nav>

    <main>
      {#each docs as doc}
        <Doc doc={doc} />
      {/each}
    </main>
  </div>

</Global>


<script context="module">
  export const prerender = true;
  import Global from '../components/Global.svelte';

  import docs from '$lib/data/docs.json';
  import Doc from '../components/Doc.svelte';
</script>

<style lang="scss">

  header {
    padding: 4rem 2rem;
  }

  // sidebar layout

  .layout {
    display: flex;
  }

  nav {
    position: sticky;
    top: 0;
    width: 256px;
    height: 100vh;
    overflow-x: scroll;
    display: block;
    padding: 1rem 0;
    background: var(--foreground);
  }

  nav a {
    display: block;
    font-size: 1.2rem;
    padding: 0.5rem 2rem;
    text-decoration: none;
    color: var(--background);
    transition: all 0.2s;

    &:hover {
      background: rgba(0,0,0,0.1);
    }
  }

  main {
    flex: 1;
    padding: 1rem;
  }


</style>
