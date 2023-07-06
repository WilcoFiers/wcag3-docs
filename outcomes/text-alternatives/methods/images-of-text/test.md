---
subtitle: Test
---

This rule checks that images of text are not used

### Applicability

This rule applies to any [rendered image resources](https://www.w3.org/WAI/standards-guidelines/act/rules/0va7u6/proposed/#rendered-image-resource "Definition of rendered image resource") in a [web page](https://www.w3.org/WAI/standards-guidelines/act/rules/0va7u6/proposed/#web-page-html "Definition of web page (HTML)").

### Expectation

For each test target, its [visible pixels](https://www.w3.org/WAI/standards-guidelines/act/rules/0va7u6/proposed/#visible "Definition of visible") do not contain text expressing anything in a [human language](https://www.w3.org/WAI/WCAG21/Understanding/images-of-text.html#dfn-human-language "WCAG 2.1, Definition of human language"), except if at least one of the following is true:

- **essential**: the [visible pixels](https://www.w3.org/WAI/standards-guidelines/act/rules/0va7u6/proposed/#visible "Definition of visible") of the test target contain text for which its presentation is [essential](https://www.w3.org/WAI/WCAG21/Understanding/images-of-text.html#dfn-essential "WCAG 2.1, Definition of essential"); or
- **not significant**: the [visible pixels](https://www.w3.org/WAI/standards-guidelines/act/rules/0va7u6/proposed/#visible "Definition of visible") of the test target contain text and the text is not a significant part of the visible part of the image or
- **decoration**: the test target belongs to an [embedded image](https://www.w3.org/WAI/standards-guidelines/act/rules/0va7u6/proposed/#embedded-image "Definition of Embedded Image") that is [purely decorative](https://www.w3.org/TR/WCAG21/#dfn-pure-decoration "WCAG 2.1, Purely decorative").