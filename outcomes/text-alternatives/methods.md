---
title: Methods for Text Alternatives
breadcrumb: Methods
---

{%- for method in methods %}
  {%- assign href = '/outcomes/' | append: outcome.slug | append: '/methods/' | append: method.slug %}
  {%-
    include 'card.html',
    title: method.title,
    content: method.description,
    href: href
  %}
{%- endfor %}
