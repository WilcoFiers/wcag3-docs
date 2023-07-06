---
subtitle: Code Snippets
---

### Passed

#### Passed Example 1

This image resource referenced by the `img` element does not contain text.

```html
<img src="/test-assets/shared/fireworks.jpg" alt="fireworks going off behind the Eiffel tower at night" />
```

#### Passed Example 2

This image resource referenced by the `input` element does not contain text.

```html
<input type="image" src="/test-assets/shared/file.svg" alt="New file" />
```

### Failed

#### Failed Example 1

This image resource referenced by the `img` element contains text for which the particular presentation is not essential.

```html
<img
	src="/test-assets/0va7u6/textimage.jpg"
	alt="The Accessibility Conformance Testing (ACT) Rules Format 1.0 defines a format for writing accessibility test rules."
/>
```

#### Failed Example 2

This image resource referenced by the `input` element in the [Image Button](https://html.spec.whatwg.org/multipage/input.html#image-button-state-(type=image)) contains text for which the particular presentation is not essential.

```html
<input type="image" src="/test-assets/0va7u6/button.jpg" alt="Press me" />
```

### Inapplicable

#### Inapplicable Example 1

The resource referenced by the `object` element does not have [visible pixels](https://www.w3.org/WAI/standards-guidelines/act/rules/0va7u6/proposed/#visible "Definition of visible").

```html
<object date="/test-assets/0va7u6/textimage.jpg" style="display: none"></object>
```

#### Inapplicable Example 2

This `svg` element does not have `image` element descendants.

```html
<svg xmlns="http://www.w3.org/2000/svg">
	<text x="20" y="35">My</text>
	<text x="45" y="35">cat</text>
	<text x="55" y="55">is</text>
	<text x="70" y="55">Grumpy!</text>
</svg>
```
