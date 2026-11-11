---
date: '{{ .Date.Format "2006-01-02" }}'
draft: true
title: '{{ replace .File.ContentBaseName "-" " " | title }}'
type: dots
---

Add one focused idea. Use standard Markdown links so links work in both Obsidian
and Hugo, for example [Margin of Safety](margin-of-safety.md). Avoid Obsidian
wiki-link syntax (`[[Margin of Safety]]`), which Hugo does not render as a link.
