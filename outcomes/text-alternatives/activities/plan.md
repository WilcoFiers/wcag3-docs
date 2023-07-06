---
subtitle: Plan
---

## Planning responsibilities

- Ensure that text alternatives are equivalents for non-text content.

- Text alternatives must convey the purpose of an image or function to provide an equivalent user experience. For instance, an appropriate text alternative for a search button would be “search” rather than “magnifying lens”.

- For every image, write alternative text that provides the information or function of the image. For purely decorative images, there is no need to write alternative text but the images need to be hidden correctly from assistive technology.

## Tips for collaboration

- Designers, Editors and/or Content Managers know what non-text contents convey.
Developers use semantic attributes/properties to provide text alternatives.

- QA testers know to test for appropriate text alternatives, including semantic code evaluation.

- Search Engine Optimizers (SEO) know how to maximize the increase in search engine visibility provided by text alternatives. However, the ability to leverage this increase cannot cause any text alternative guidelines to be broken.

## Planning for each stage

### How to get started early

- Providing text alternatives will help all users and maximize potentials by making non-text content machine-readable.
    - Early project meetings need to discuss accessibility and the importance of improving the usability of the site for people with disabilities. This should include training on how to create good quality text alternatives.
    - Decide who will create text alternatives for images and who will review and approve it.

- Appropriate alternative text is not an exact science. Some people prefer most images to have more detailed description; and others prefer much less description.
    - Consider conducting usability testing on existing or similar products to better understand people's preferences.

### How to remediate

- You don't usually see the alt text on a web page, it is in the web page markup.

- Every image should include text alternative in the code.
    - If an image conveys information useful for interacting with or understanding the web page content, then it needs alternative text.
    - If an image is just decorative and people don't need to know about the image, then it should be implemented so that assistive technologies will ignore it.

- Automated tests can tell you if alt is missing.

- To determine if the alternative text is appropriate, you need to see the image and judge it in context.
    - The text needs to convey the same meaning as the image. That is, if someone cannot see the image, they get the important information from the image in the alternative text.
    - Alternative text depends on context. For example, for an image of a dog on a kennel club website, the alt text might include the breed of the dog; however, the same image on a dog park website may be there just to make the page more attractive, and the image might not need any alt text (and should have null alt). One way to help think about appropriate alt text is: if you were helping someone read and interact with the web page and they cannot see it, what would you say about the image?
    - Images that are functional — for example, images that initiate actions (like submit buttons) and linked images (like in navigation) — need alt text that is the functional equivalent.
    - If there is text in the image — for example, in a logo — that text needs to be included in the alt text.
    - If the image has complex information — such as charts or graphs — the image should have a short alt text to identify the image, and then the detailed description of the information should be provided elsewhere (for example, in a data table).
