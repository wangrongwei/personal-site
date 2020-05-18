# personal-site

A simple personal site, based on Jekyll.
> This source code reference to "ananthamapod.github.io"

This template is very nice, so I plan to build a personal site base on it. 

## nodejs

```bash
browerify mian.js > compiled.js
```

In this project, main.js file was written based on Jekyll, and it need to insert below codes when switch this file into compiled.js:

```html
<script type="text/javascript" src="compiled.js"></script>
```

## index.html

```html
    <footer class="row">
        <div class="large-12 columns">
            <div class="row">
                <div class="large-6 columns">
                    <p>© Evan 2019-2020</p>
                </div>
                <div class="large-6 columns">
                    <ul class="inline-list right">
                        <!--<li><a href="#">Suscribe</a></li>-->
                    </ul>
                </div>
            </div>
        </div>
    </footer>   
```

## TODO

#### arch

- combine with jekyll (Y);
- day/night (background switch);
- support markdown file (Y);
- support word file (write blog or article in office);
- make this site modularization;
- blog-template: using the default template of cnblog;

#### tools

- copy-site-to.sh

## Reference

- https://jekyllrb.com/docs/step-by-step/

## HOW TO USE THIS SITE

If you want to using this site to build personal site, testing 'copy-site-to'
which @tools directory.

## TEST

- bundle exec jekyll build
- bundle exec jekyll serve




