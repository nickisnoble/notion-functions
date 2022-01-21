<slot />

<style global lang="scss">
  :root {
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 1rem;

  --foreground: #2f3437;
  --background: #f9fafb;

  @media (prefers-color-scheme: dark) {
    --background: #2f3437;
    --foreground: rgba(255, 255, 255, 0.9);
  }
}

* {
  box-sizing: border-box;
  margin: 0;
  &::selection {
    background: rgba(45, 170, 219, 0.3);
  }
}

body {
  width: 100%;
  min-height: 100vh;
  background: var(--background);
  color: var(--foreground);
}

h1, h2, h3, p {
  padding: 3px 2px; // Match Notion's odd spacing scheme
}

h1,
h2,
h3 {
  font-weight: 600;
  line-height: 1.3;
}

h1 {
  margin-top: 2em;
  margin-bottom: 4px;
  font-size: 1.875em;
}

h2 {
  margin-top: 1.4em;
  margin-bottom: 3px;
  font-size: 1.5em;
}

h3 {
  margin-top: 1em;
  margin-bottom: 3px;
  font-size: 1.25em;
}

h4,
p {
  margin-top: 1px;
  margin-bottom: 1px;
  font-size: 1rem;
}

pre {
  margin-top: 1em;
  padding: 8px;
  border-radius: 4px;
  background: rgba(255,255,255,0.1)
}


/*
# Notion Syntax Highlighting
foreground 	#37352F
background 	#F7F6F3
selectionBackground 	#DDEBF1
comment 	#708090
orange 	#FFA344
pink 	#E255A1
blue 	#529CCA
purple 	#9A6DD7
green 	#4DAB9A
grey 	#979A9B

*/
</style>
