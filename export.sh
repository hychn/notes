#!/bin/bash

for org_file in algebra.org; do
  html_file="${org_file%.org}.html"
  emacs -batch "$org_file" -f org-html-export-to-html --kill
  mv "${org_file%.org}.html" "html/${html_file}"
  echo "Exported $org_file to $html_file"
done

#wkhtmltopdf
