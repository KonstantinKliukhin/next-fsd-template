This is a template repository, we're using for all NextJS project.

It uses:

1. [NextJS](https://nextjs.org/)
2. [Tailwind](https://tailwindcss.com/)
3. [Shadcn/ui](https://ui.shadcn.com/)
4. Prettier
5. Eslint
6. [Commit Linter](https://commitlint.js.org/#/)
7. Autoprefixer
8. Next-auth

### [Architecture FSD](https://feature-sliced.design/docs)


### [For cross imports](https://github.com/feature-sliced/documentation/discussions/390#discussioncomment-5570073)
Use it as few as possible, and it is mostly for entities types


### To generate slices:

page:
```shell
npm run gen pages home-page
```
widget:

```shell
npm run gen pages home-page
```

feature (form):

```shell
npm run gen features edit-user form
```

entity:

```shell
npm run gen entities country
```
