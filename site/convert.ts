// Run this file with "deno run --allow-all ./convert.ts"

import { readFileSync, writeFileSync } from "node:fs"

// Function to convert Markdown to HTML using GitHub API
async function markdownToHtml(markdown: string): Promise<string> {
  const response = await fetch("https://api.github.com/markdown", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "User-Agent": "Deno Markdown to HTML",
    },
    body: JSON.stringify({
      text: markdown,
      mode: "gfm",
      context: "github/gollum",
    }),
  })

  if (!response.ok) {
    throw new Error(`GitHub API responded with status: ${response.status}`)
  }

  return response.text()
}

// Function to read Markdown from the parent directory's README.md
async function readMarkdownFile(): Promise<string> {
  return await readFileSync("../README.md", "utf8")
}

// Main function
async function main() {
  try {
    const markdown = await readMarkdownFile()
    const html = await markdownToHtml(markdown)
    const styledHtml = `
    <html>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/github-markdown-css/github-markdown.css">
      </head>
      <body>
        <article class="markdown-body">
            ${html}
        </article>
      </body>
    </html>`

    await writeFileSync("index.html", styledHtml)
    console.log("index.html has been created.")
  } catch (error) {
    console.error("Error:", error.message)
  }
}

await main()
