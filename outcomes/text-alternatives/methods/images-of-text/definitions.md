---
subtitle: Technical Definitions
---

### Attribute value

The attribute value of a content attribute set on an HTML element is the value that the attribute gets after being parsed and computed according to specifications. It may differ from the value that is actually written in the HTML code due to trimming whitespace or non-digits characters, default values, or case-insensitivity.

Some notable case of attribute value, among others:

- For [enumerated attributes](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute "HTML Specification of Enumerated Attribute"), the attribute value is either the state of the attribute, or the keyword that maps to it; even for the default states. Thus `<input type="image" />` has an attribute value of either `Image Button` (the state) or `image` (the keyword mapping to it), both formulations having the same meaning; similarly, “an input element with a `type` _attribute value_ of `Text`” can be either `<input type="text" />`, `<input />` (missing value default), or `<input type="invalid" />` (invalid value default).
- For [boolean attributes](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes "HTML Specification of Boolean Attribute"), the attribute value is `true` when the attribute is present and `false` otherwise. Thus `<button disabled>`, `<button disabled="disabled">` and `<button disabled="">` all have a `disabled` _attribute value_ of `true`.
- For attributes whose value is used in a case-insensitive context, the attribute value is the lowercase version of the value written in the HTML code.
- For attributes that accept [numbers](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#numbers "HTML Specification of Number Parsing"), the attribute value is the result of parsing the value written in the HTML code according to the rules for parsing this kind of number.
- For attributes that accept sets of tokens, whether [space separated](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#space-separated-tokens "HTML Specification of Space Separated Tokens") or [comma separated](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#comma-separated-tokens "HTML Specification of Comma Separated Tokens"), the attribute value is the set of tokens obtained after parsing the set and, depending on the case, converting its items to lowercase (if the set is used in a case-insensitive context).
- For `aria-*` attributes, the attribute value is computed as indicated in the [WAI-ARIA specification](https://www.w3.org/TR/wai-aria-1.1/#propcharacteristic_value "WAI-ARIA Specification of States and Properties Value") and the [HTML Accessibility API Mappings](https://www.w3.org/TR/html-aam-1.0/#html-attribute-state-and-property-mappings "Specification of HTML attributes value mapping to ARIA states and properties").

This list is not exhaustive, and only serves as an illustration for some of the most common cases.

The attribute value of an [IDL attribute](https://heycam.github.io/webidl/#idl-attributes "Definition of Web IDL Attribute (Editor's Draft)") is the value returned on getting it. Note that when an [IDL attribute](https://heycam.github.io/webidl/#idl-attributes "Definition of Web IDL Attribute (Editor's Draft)") [reflects](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflecting-content-attributes-in-idl-attributes "HTML specification of Reflecting Content Attributes in IDL Attributes") a content attribute, they have the same attribute value.

### Embedded Image

An element presents an _embedded image_ when any of the following is true:

- the element is an `img` element with a non-empty [source set](https://html.spec.whatwg.org/multipage/images.html#source-set); or
- the element is an `input` element with a `type` [attribute value](https://www.w3.org/WAI/standards-guidelines/act/rules/0va7u6/proposed/#attribute-value "Definition of Attribute Value") of `image` and its `src` [attribute value](https://www.w3.org/WAI/standards-guidelines/act/rules/0va7u6/proposed/#attribute-value "Definition of Attribute Value") is not empty; or
- the element is an `object` element with a `data` [attribute value](https://www.w3.org/WAI/standards-guidelines/act/rules/0va7u6/proposed/#attribute-value "Definition of Attribute Value") referencing a resource with an [image MIME type](https://mimesniff.spec.whatwg.org/#image-mime-type); or
- the element is an `svg` element having one or more `image` [descendants](https://dom.spec.whatwg.org/#concept-tree-descendant) with a non-empty `href` [attribute value](https://www.w3.org/WAI/standards-guidelines/act/rules/0va7u6/proposed/#attribute-value "Definition of Attribute Value"); or
- the element has a [computed](https://www.w3.org/TR/css-cascade-4/#computed "CSS Cascading and Inheritance Level 4 (Working draft) - Computed Values") [`background-image`](https://drafts.csswg.org/css-backgrounds-3/#background-image) CSS property with at least one [`image`](https://www.w3.org/TR/css-images-3/#typedef-image) that is a [url reference](https://www.w3.org/TR/css-images-3/#url-notation).

### Outcome

An _outcome_ is a conclusion that comes from evaluating an ACT Rule on a [test subject](https://www.w3.org/TR/act-rules-format/#test-subject) or one of its constituent [test target](https://www.w3.org/TR/act-rules-format/#test-target). An outcome can be one of the three following types:

- **Inapplicable:** No part of the test subject matches the applicability
- **Passed:** A [test target](https://www.w3.org/TR/act-rules-format/#test-target) meets all expectations
- **Failed:** A [test target](https://www.w3.org/TR/act-rules-format/#test-target) does not meet all expectations

**Note:** A rule has one `passed` or `failed` outcome for every [test target](https://www.w3.org/TR/act-rules-format/#test-target). When there are no test targets the rule has one `inapplicable` outcome. This means that each [test subject](https://www.w3.org/TR/act-rules-format/#test-subject) will have one or more outcomes.

**Note:** Implementations using the [EARL10-Schema](https://www.w3.org/TR/EARL10-Schema/) can express the outcome with the [outcome property](https://www.w3.org/TR/EARL10-Schema/#outcome). In addition to `passed`, `failed` and `inapplicable`, EARL 1.0 also defined an `incomplete` outcome. While this cannot be the outcome of an ACT Rule when applied in its entirety, it often happens that rules are only partially evaluated. For example, when applicability was automated, but the expectations have to be evaluated manually. Such “interim” results can be expressed with the `incomplete` outcome.

### Rendered Image Resource

A _rendered image resource_ in a [web page](https://www.w3.org/WAI/standards-guidelines/act/rules/0va7u6/proposed/#web-page-html "Definition of web page (HTML)") is any resource with [visible pixels](https://www.w3.org/WAI/standards-guidelines/act/rules/0va7u6/proposed/#visible "Definition of visible") that has been specified in the list of [image sources](https://html.spec.whatwg.org/multipage/images.html#image-source) of an [embedded image](https://www.w3.org/WAI/standards-guidelines/act/rules/0va7u6/proposed/#embedded-image "Definition of Embedded Image").

### Visible

Content perceivable through sight.

Content is considered _visible_ if making it fully transparent would result in a difference in the pixels rendered for any part of the document that is currently within the viewport or can be brought into the viewport via scrolling.

[Content is defined in WCAG](https://www.w3.org/TR/WCAG21/#dfn-content).

For more details, see [examples of visible](https://act-rules.github.io/pages/examples/visible/).

### Web page (HTML)

An _HTML [web page](https://www.w3.org/TR/WCAG21/#dfn-web-page-s)_ is the set of all [fully active](https://html.spec.whatwg.org/#fully-active) [documents](https://dom.spec.whatwg.org/#concept-document) which share the same [top-level browsing context](https://html.spec.whatwg.org/#top-level-browsing-context).

**Note:** Nesting of browsing context mostly happens with `iframe` and `object`. Thus a web page will most of the time be a “top-level” document and all its `iframe` and `object` (recursively).

**Note:** [Web pages](https://www.w3.org/TR/WCAG21/#dfn-web-page-s) as defined by WCAG are not restricted to the HTML technology but can also include, _e.g._, PDF or DOCX documents.

**Note:** Although web pages as defined here are sets of [documents](https://dom.spec.whatwg.org/#concept-document) (and do not contain other kind of nodes), one can abusively write that any node is “in a web page” if it is a [shadow-including descendant](https://dom.spec.whatwg.org/#concept-shadow-including-descendant) of a [document](https://dom.spec.whatwg.org/#concept-document) that is part of that web page.