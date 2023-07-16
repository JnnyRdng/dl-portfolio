# Portfolio Site

## Getting started
You'll need [Git](https://git-scm.com/) and [Node.js](https://nodejs.org/en) installed to get started.

First time: download this git repository:
```base
git clone 'this repo url'
cd portfolio
npm i
```

Then run `npm run dev` to boot up the development site. Navigate to [localhost:3000](http://localhost:3000) to view.

## Adding images
Add images to `public/static/images`. It's best to nest related stuff within folders. Images will be optimised automatically so you don't need to worry about resizing stuff, but it's best to avoid putting in anything too large.

## Markdown
Add content by adding a new markdown file to `src/content/work`. The filename will end up as the URL for the page, e.g. `red-bull-doodle.md` will map to `danlester.com/work/red-bull-doodle`. Use hyphens to separate words or your URLs will look messy.

Start each markdown file with _frontmatter_. This is data that will be used to present a link to the page on the homepage. It should look like:
```md
---
title: Doodle Art Promo
subTitle: Red Bull
date: 2023-07-16
hero: red-bull-doodle/hero-pic.jpg

---
```
`date` is used to sort the items in descending order. `hero` is the image used, and maps to `public/static/images/red-bull-doodle/hero-pic.jpg`

After the frontmatter, add the page content. This is written in Markdown, which adds simple syntax to text to style it. Think `_italic text_` _to make text italic_, `**bold text**` **to make text bold**. [Check out the syntax here](https://www.markdownguide.org/basic-syntax/).

There's some additional features I've built in you can use to inject specific content:

## Images
> - {widthxheight} e.g. {640x320}. Keep sizes as small as reasonable for quicker loading
> - {priority} - optional - only include this for images that will be at the top of the page
> - {caption: Some text} - optional - Adds a caption beneath the image
```md
![Image alt text {widthxheight}{priority}{caption: Some text as a caption}](/static/images/folder_name/image_name.jpg 'Image title')
```

## Youtube embed
```md
:::youtube{videoid=abcdefg}
:::
```

## Vimeo embed
```md
:::vimeo{videoid=abcdefg}
:::
```

## Crew list
> Takes the input and presents a formatted list.  
Use the syntax `leftside: rightside` - (the colon is important!). leftside will be italicised, rightside will be bolded.
```md
:::crew
A role: A name
Another role: Another name, More names
:::
```

## Image grid
> Renders images in a grid. Specify the number of columns in the grid. Bear in mind at small screen sized (mobile) this is be forced to 2, so aim for an _even number of images_
```md
:::imageGrid{cols=2}
![Image alt text {200x200}](/static/images/folder_name/image1.jpg)
![Image alt text {200x200}](/static/images/folder_name/image2.jpg)
![Image alt text {200x200}](/static/images/folder_name/image3.jpg)
![Image alt text {200x200}](/static/images/folder_name/image4.jpg)
:::
```

