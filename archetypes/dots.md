---
date: '{{ .Date.Format "2006-01-02" }}'
draft: true
title: '{{ replace .File.ContentBaseName "-" " " | title }}'
---

Add one focused idea. Link to another note using Markdown links, for example
[Margin of Safety](margin-of-safety.md). Obsidian follows these links too.
