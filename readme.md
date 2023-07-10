# WCAG 3 docs wire frames



## Creating a new outcome

1. Copy `_template/` in `outcomes/`. Use lower case letters and dashes (-) only for the directory name. This will be the **slug** which will be needed later.

2. In your new directory, rename `_template.11tydata.js` to `new-dir-name.11ty.data.js` where `new-dir-name` is whatever you called the directory.

3. in `outcomes.json` set the `title` to be the short name of the outcome. Examples: `Non-text content`, `Error notification`, etc. Add a 3 - 4 sentence description to `description`. The `index` is a number to help sort outcomes in order. Leave at `0` if you do not know what this should be.

4. Fill out the `.md` files in your new directory

## Create a new method

1. ...