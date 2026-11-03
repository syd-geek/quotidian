+++
date = '{{ .Date }}'
draft = true
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
id = '{{ .Date.Format "20060102" }}1'
# Increment the sequence for each additional note created on the same day.
links = []
+++
