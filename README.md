# Frontend template

## Architecture: Feature-Sliced Design (FSD)

The template is structured following the **Feature-Sliced Design (FSD)** methodology, a modern approach to organizing frontend applications. This architecture helps to create scalable, maintainable, and testable projects by emphasizing a clear separation of concerns and a domain-centric focus.





* * *



### Feature-Sliced Design Principles

*   **Separation of Concerns**: Each layer has a clearly defined responsibility, reducing interdependencies and improving code readability.
*   **Domain First**: Emphasis is placed on dividing functionality by features rather than technical concerns, enabling easier scalability.
*   **Reusability and Encapsulation**: Components, features, and logic are encapsulated within their respective layers and slices, ensuring reusability without unintended side effects.
*   **Flexibility**: The absence of the **processes layer** simplifies the structure while retaining the flexibility of Feature-Sliced Design for most applications.



* * *



### Advantages[​](https://feature-sliced.design/docs/get-started/overview#advantages)

*   **Uniformity**
*   Since the structure is standardized, projects become more uniform, which makes onboarding new members easier for the team.
*   **Stability in face of changes and refactoring**
*   A module on one layer cannot use other modules on the same layer, or the layers above.
*   This allows you to make isolated modifications without unforeseen consequences to the rest of the app.
*   **Controlled reuse of logic**
*   Depending on the layer, you can make code very reusable or very local.
*   This keeps a balance between following the **DRY** principle and practicality.
*   **Orientation to business and users needs**
*   The app is split into business domains and usage of the business language is encouraged in naming, so that you can do useful product work without fully understanding all other unrelated parts of the project.



* * *



### Layer Communication

*   Lower layers (like `shared` or `entities`) are agnostic to higher-level concerns and provide foundational resources.
*   Higher layers (like `pages` and `app`) orchestrate and assemble components from lower layers into a cohesive application.
*   Features interact through well-defined interfaces, reducing coupling and improving testability.

By following this architectural structure, the template promotes best practices that will ensure your applications remain robust and future-proof.





* * *



### Concepts

Layers, slices, and segments form a hierarchy like this:

## ![](https://t9014283635.p.clickup-attachments.com/t9014283635/ccb287c1-a50e-4ac7-847c-1408c8d2ac93/image.png)

_Pictured above: three pillars, labeled left to right as "Layers", "Slices", and "Segments" respectively._

_The "Layers" pillar contains seven divisions arranged top to bottom and labeled "app", "processes", "pages", "widgets", "features", "entities", and "shared". The "processes" division is crossed out. The "entities" division is connected to the second pillar "Slices" in a way that conveys that the second pillar is the content of "entities"._

_The "Slices" pillar contains three divisions arranged top to bottom and labeled "user", "post", and "comment". The "post" division is connected to the third pillar "Segments" in the same way such that it's the content of "post"._

_The "Segments" pillar contains three divisions, arranged top to bottom and labeled "ui", "model", and "api"._





* * *



### Layers

Layers are standardized across all FSD projects. You don't have to use all of the layers, but their names are important. There are currently seven of them (from top to bottom):

1. **App Layer**
  *   Contains global-level configurations and setups.
  *   Includes the application's root components, theming, localization, and initialization logic.
  *   Focus: Provide the foundational structure for the application.
2. **Pages Layer**
  *   Represents complete application pages that are accessible via routes.
  *   Combines features and UI components to deliver a cohesive user experience for a specific route.
  *   This layer can use all of other layers except other pages and "app" folder logic
  *   You can create page specific components right next to the page in case that components aren't used in other places.
  *   Focus: Assemble and configure features and widgets for a specific route.
3. **Widgets Layer**
  *   Large self-contained chunks of functionality or UI, usually delivering an entire use case
  *   Widgets is layer to compose components from layers below(shared, entities, features) and create reusable functionality/components for pages.
  *   Focus: Compose and reuse.
4. **Features Layer**
  *   _Reused_ implementations of entire product features, i.e. actions that bring business value to the user
  *   Each feature represents a distinct capability of the application, such as authentication, forms, or specific interactions e.g. like post.
  *   Focus: Encapsulate logic and UI specific to a business or domain feature.
5. **Entities Layer**
  *   Represents the application's domain model, including essential business objects and their interactions.
  *   Typically includes domain-specific models, types, utility functions and CRUD requests.
  *   Focus: Maintain consistency in handling and transforming business entities across the app.
6. **Shared Layer**
  *   Holds reusable, app-wide resources such as utilities, constants, styles, and generic components.
  *   No business or domain logic is included here!!!
  *   Focus: Provide foundational building blocks for other layers.



_\* — these layers,_ **_App_** _and_ **_Shared_**_, unlike the other layers, don't have slices, and are made up of segments directly._

The trick with layers is that modules on one layer can only know about and import from modules from the layers strictly below.





* * *



### Slices[​](https://feature-sliced.design/docs/get-started/overview#slices)

Next up are slices, which partition the code by business domain. You're free to choose any names for them, and create as many as you wish. Slices make your codebase easier to navigate by keeping logically related modules close together.

Slices cannot use other slices on the same layer, and that helps with high cohesion and low coupling.





* * *



### Segments[​](https://feature-sliced.design/docs/get-started/overview#segments)

Slices, as well as layers App and Shared, consist of segments, and segments group your code by its purpose. Segment names are not constrained by the standard, but there are several conventional names for the most common purposes:

*   `ui` — everything related to UI display: UI components, date formatters, styles, etc.
*   `api` — backend interactions: request functions, data types, mappers, etc.
*   `model` — the data model: schemas, interfaces, stores, and business logic.
*   `lib` — library code that other modules on this slice need.
*   `config` — configuration files and feature flags.

Usually these segments are enough for most layers, you would only create your own segments in Shared or App, but this is not a rule.





* * *



### Cross imports

Here is "How to solve cross imports problem". Use it only for entities and widgets and only when it is no other way!

https://github.com/feature-sliced/documentation/discussions/390#discussioncomment-5570073



* * *



### Landings

For landing pages you don't need all layers as you need for a web-app, so you can remove feature and entities folders. Your layers will fill such roles:

*   **shared** - still reusable components and utilities with some configuration such as APP\_ROUTES object
*   **widgets** - reusable sections across pages
*   **pages** - pages components with their specific sections



* * *



### FSD links

Official website: [https://feature-sliced.design/docs/get-started/overview](https://feature-sliced.design/docs/get-started/overview)

Examples of projects: [https://feature-sliced.design/examples](https://feature-sliced.design/examples)

TG chat: [https://t.me/feature\_sliced/75380](https://t.me/feature_sliced/75380)

TG AI: [https://t.me/feature\_sliced/92691](https://t.me/feature_sliced/92691)

A good video explaining why FSD, but not some other architecture:

[https://www.youtube.com/watch?v=c3JGBdxfYcU](https://www.youtube.com/watch?v=c3JGBdxfYcU)



* * *



# Configuration

This section will explain all components of the configuration such as:

*   Framework
*   Eslint
*   Prettier
*   Scripts
*   Env
*   Styles
*   Tests
*   Storybook



### Framework

Framework we commonly use is **NextJs.**

It is powerful framework that hides from us configurations complexity and brings us underhood optimizations. The most important part is that it allows us to combine SSR, ISR, CSR and SSG approaches in the app and event for the one page. Check out this [Dev Talk](https://app.clickup.com/t/86b2a6rau) for more information.

There is a minimalistic configuration for the NextJs in the template. It configures what formats of static images we want to see, what sizes of images we should have and how long browser should cache images. Also there we are importing env file to validate it on build stage.





* * *



### Eslint

Eslint helps us to write consistent code and automates refactoring. Also it simplifies code review by reducing things reviewer should look at.

Currently rules are set up like this:

*   import/order - sorts import in this order: libraries, shared/\*, entities/\*, features/\*, widgets/\*, pages-layer/\*, app/\*, relative imports (e.g. "../model/transform-user"). Inside one group imports are sorted alphabetically
*   unused-imports/no-unused-imports - restricts unused imports and auto-removes them
*   id-length - restricts having variables less than 2 symbols. You should write "event" instead of "e" and "error" instead of "e", **it is not hard**, really!
*   next-fsd - is rule wrote by my own. It helps to automate refactoring of FSD imports. Documentation for this rule you can find here: [https://www.npmjs.com/package/eslint-plugin-next-fsd](https://www.npmjs.com/package/eslint-plugin-next-fsd)
*   @typescript-eslint/naming-convention - allows to naming convention for specific AST nodes. For now used only to camelCase enum members.

Also we extend our config from:

![](https://t9014283635.p.clickup-attachments.com/t9014283635/05773021-1c8f-435a-90a0-94deecf56462/image.png)

All of them are recommended plugins for appropriate tools.





* * *



### Prettier

We use simple `prettierrc.js` config

*   endOfLine: "lf" - makes end of lines to be unix way
*   semi: true - adds semicolons
*   singleQuote: false - says that we should use double quotes for strings in all applicable places
*   tabWidth: 2 - makes tab to convert into 2 spaces
*   printWidth: 90 - makes maximum code line length of 90 characters

Also we use tailwind prettier plugin which is recommended for tailwind projects.





* * *



### Scripts

`npm run build` - building your app, but it doesn't start it.

`npm run start` - starting your app if you run build previously. You should use `npm run build` and then `npm run start`

`npm run dev` - running your application in dev mode. Use it for development

`npm run format` - formatting entire codebase with prettier

`npm run lint` - running eslint for entire codebase and outputs errors and warning in console if found. It doesn't fix anything, but only outputs logs to the console

`npm run lint:fix` - running eslint for entire codebase and fixes problems where it can do this.

`npm run lint:types` - running type check for entire codebase and outputs errors to the console. Really useful while refactoring, also it is used in pre-commit hook.

`npm run test` - runes unit and integration tests

`npm run storybook` - runes storybook in dev mode

`npm run build-storybook` - builds storybook

`npm run postinstall` - is command which automatically runs after installing npm modules, it clears harmful cache.

`npm run precommit` command runs every time your are trying to commit something. It runs eslint, type-check and tests

`npm run gen {layer-name} {slice-name}` - this codegen aimed to make development a bit faster. It allows to create a template for new entity or feature-form or widget or page. Just try it by yourself





* * *



### Env

Project have .env.example file which should always show example of how real env should look like. Variable which you need to be accessible on client side you should prefix with `NEXT_PUBLIC_` .



Currently template has 3 env variables:

```plain
NEXT_PUBLIC_APP_API_URL - url of backend api
NEXT_PUBLIC_APP_URL - url of current app. E.g. http://localhost:3000 if you running frontend on localhost:3000
NEXT_PUBLIC_ENVIRONMENT - one of local | dev | prod . Helps to make some things only for particular environment. We have `AppEnvironment` enum for it. Fill free to extend depending on your environments list
```



Also we have env variables validation implemented with zod library. It is placed in `src/shared/config/env`





* * *



### Styles

The most common styling case is setup for the template. It is `tailwind` and `shadcn/ui` .



#### Base CSS

In the `src/app/styles` folder we have configuration for all styles variables we have and we should keep color tokens only there because it will really help in case in some day your customer comes to you and asks for new color theme for the app. In this case you can just add new classname for the document root and rewrite colors for variables. Also you should call colors by the destination, but not their names, e.g. "primary" instead of "orange" or "border" instead of "gray-300".



#### Tailwind config

In tailwind config we have configured screens variables that allow us to make adaptive design. E.g. `block 1024:flex` className will make element to have `display: block` style for mobile and tablet, but from devices with width more than 1024px it will be `display:flex` .



Then we have color mappings that maps colors from css variables to tailwind.

Documentation of all other fields you can find on the official tialwind website: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)



#### Shadcn/ui

It is a headless UI library built on top of `RadixUI` and some other libraries. All of components you bring from it or any other UI library should be only in `shared/ui` folder and they **must NOT** have any business-related logic.



* * *



### Tests

`Jest` library is used for test in the template. It uses default jest config for nextJs projects.

It allows to tests everything: functions, react hooks and components. Examples you can find in `shared/lib` folder. It is highly recommended to write tests for general utils places in `shared/lib` and in `app` folder. However, the decision whether to write unit tests or not is always on the shoulders of the teamlead.

Sometimes functionality we write is really complicated and it is not enough to have just comment above a function. Tests can help write better documentation with showcases and ensure that no one gonna break this functionality. For this case you may consider writing tests even if they have not been written in the project before at all.



* * *



### Storybook

Storybook is a frontend workshop for building UI components and pages in isolation. It helps you develop and share hard-to-reach states and edge cases without needing to run your whole app.

The default setting of the storybook with NextJs is used for the template.

It is most often used on a project when FE developers start writing a UI kit and need to show it to the customer or QAs.



To make it available by `https://your-app-dev.com/storybook/index.html` adjust build script on your hosting to be `npm run build-storybook && npm run build` . It will generate bundle of storybook into public folder and this bundle will be exposed by hosting.





* * *



## Code



This section is about main concepts used in the template and how to write new features.

Topics of the section:

*   API
*   Storage
*   State
*   Server side
*   Auth



* * *



### API



#### Axios Instances

There are 2 axios instances in the app:

*   `mainApi` - is instance used for the unauthenticated requests and authenticated requests on the client side and only for unauthenticated requests on the server side.
*   `ssrMainApiInstance` - is instance used only for authenticated requests on server side.



Both instances are called `main` because they aimed to use for the main backend app has. Backend url for these instances is taken from environment variable `NEXT_PUBLIC_APP_API_URL`



To make any request with axios you must use `getApi` function placed in `shared/api/api.ts` .

It decides what instance you need for your case. Also you must always pass `{ auth: true }` parameter there if request is only for autheticated users.



#### Simple request example and explanation

Now lets consider example of `/me` request.

This function is placed in `/entities/user/api/services.ts`

```typescript jsx
export async function getCurrentUser(): Promise<User> {
  const api = await getApi({ auth: true });
  const response = await api.get(API_ROUTES.ME);

  const dto = USER_DTO_SCHEMA.parse(response.data);

  return mapUser(dto);
}
```



on the first line we see `const api = await getApi({ auth: true });` . It gets api instance which we can use further. It passes `{ auth: true }` because this request should be made only by authenticated user.



Then it makes request `const response = await api.get(API_ROUTES.ME);`

Here it uses retrieved axios instance to make request and `API_ROUTES` object to specify route.

`API_ROUTES` object is placed in `shared/config.api-rotes.ts` . It is object with values of string or function returning string. Example of function route:

``{..., PRODUCT_BY_ID: (id: string) => `/products/${id}`, ...}``



Then we see this line: `const dto = USER_DTO_SCHEMA.parse(response.data);`

It validates data from API. Let's take a look what `USER_DTO_SCHEMA` is.

In the `api` folder of user slice we have `dto` folder which contains dtos validation schemas and inferred types. Our dto file looks like:

```typescript jsx
import { z } from "zod";

import { UserRoles } from "../../model/constants";

export const USER_DTO_SCHEMA = z.object({
  email: z.string(),
  id: z.string(),
  role: z.nativeEnum(UserRoles),
});

export type UserDto = z.infer<typeof USER_DTO_SCHEMA>;
```

Only after this line we can proceed with API data, because now we sure that we got what we expected to get.



The last line is `return mapUser(dto);` . Last action we need to do is to transform our DTO to the FE user entity. `mapUser` function is placed in `entities/api/mappers/map-user.ts` and it looks like:

```typescript jsx
import type { User } from "../../model/types";
import type { UserDto } from "../dto/user.dto";

export function mapUser(dto: UserDto): User {
  return {
    id: dto.id,
    email: dto.email,
    role: dto.role,
  };
}
```

In this example you may think that it does nothing, but these "mappers" aimed to decouple FE models from BE models and it increases code maintainability.



The last thing about this request I want to show you is query-hook made with tanstack-query. It is placed in same folder as service function, but in file `query-hooks` . Always prefer to place query-hooks in such files rather than writing it in-place, because it allows to ensure consistency across requests and their keys, also it is just more convenient.

```typescript jsx
export function useGetCurrentUser() {
  return useQuery({
    queryKey: [QUERY_KEYS.CURRENT_USER],
    queryFn: getCurrentUser,
  });
}
```

What is interesting here is `QUERY_KEYS` object. It is placed in `shared/config/query-keys` and it represents all static query keys you have in the app.



#### Pagination request example and explanation

Here is example of request using pagination



```typescript jsx
export async function getUsers(
  params: PaginationParams
): Promise<PaginationResponse<User>> {
  const api = await getApi();
  const response = await api.get(API_ROUTES.USERS, { params });

  const dto = getPaginationResponseSchema(USER_DTO_SCHEMA).parse(response.data);

  return mapPaginationData(dto, mapUser);
}
```



Lets start with the types.



PaginationParams type is placed in `shared/types/api.types.ts` and looks like:

```typescript jsx
export type PaginationParams<T = {}> = {
  page: number;
  take?: number;
} & T;
```

You can change this type depending on what parameters your API accepts for pagination.



PaginationResponse type is placed in same file and looks like:

```typescript jsx
export type PaginationResponse<T> = {
  meta: {
    readonly page: number;
    readonly take: number;
    readonly total: number;
    readonly hasPreviousPage: boolean;
    readonly hasNextPage: boolean;
  };
  data: T[];
};
```

Same as for PaginationParams you can change this type depending on what parameters your API returns for pagination.



I think this to lines of function are pretty similar to what we saw in simple request example

```typescript jsx
const api = await getApi();
const response = await api.get(API_ROUTES.USERS, { params });
```



So, lets move to the next one:

```typescript jsx
const dto = getPagtyinationResponseSchema(USER_DTO_SCHEMA).parse(response.data);
```

Here we pass `USER_DTO_SCHEMA` to getPaginationResponseSchema function. This function is a helper that is imported form `shared/lib/utils/validation-schema` and it looks like this:

```typescript jsx
export const getPaginationResponseSchema = <T extends z.ZodObject<any>>(
  dataSchema: T
) => {
  return z.object({
    meta: z.object({
      page: z.number(),
      take: z.number(),
      total: z.number(),
      hasPreviousPage: z.boolean(),
      hasNextPage: z.boolean(),
    }),
    data: z.array(dataSchema),
  });
};
```

So it helps to validate whole pagination response when needs only entity validation schema, it is a pretty convenient function.



Then we use mapPaginationData function to map DTO of response to PaginationData<User> which is FE type of pagination.

```plain
return mapPaginationData(dto, mapUser);
```



Then we use this function in query-hooks like:

```typescript jsx
type GetInfiniteUsersParams = {
  take: number;
};

export const getInfiniteUsersQueryOptions = (params: GetInfiniteUsersParams) => {
  return infiniteQueryOptions({
    initialPageParam: 0,
    queryKey: [QUERY_KEYS.USERS_LIST, params],
    queryFn: ({ pageParam }) => getUsers({ page: pageParam, take: params.take }),
    getNextPageParam,
  });
};

export function useGetInfiniteUsers(params: GetInfiniteUsersParams) {
  return useInfiniteQuery(getInfiniteUsersQueryOptions(params));
}
```



Here you see 1 function to create config of `useInfiniteQuery` and then we use that function inside `useGetInfiniteUsers` function. We need it to ensure consistency between queries configuration for server calls and client queries, more about this in "Server Side" section.

Also here you see `getNextPageParam` which is placed in `shared/lib/api/get-next-page-param` . It is just a simple utility function that calculates next page depending on last request.

Pay attention to how we specify queryKey, we pass there static query key and also we pass params object, because we need to be sure that cache applies only for api calls with the same params.



Thats it for client side API interaction part. Server side of it will be explained in "Server Side" section.



### Storage

For any key-value storage you have you should create file in `shared/config` storage for keys in that storage, so all keys of 1 storage are in one place. In template you can see `shared/config/local-storage-keys.ts` file which is `Record<string, string>` .

```typescript jsx
export const LOCAL_STORAGE_KEYS = {
  AUTH_STORAGE: "auth-storage",
} satisfies Record<string, string>;
```



### State

Technology you use can depend on your project. For NextJs projects you should use `zustand` . Zustand is really lightweight library which allows to reuse modular state, it have a lot of useful builtins and extensions so I've never felt like something I want there is missing.

The second library you can use is Redux Toolkit. It is old-fashioned way to handle state management in the app. It has more builtin features, it is more popular than zustand and it has more builtin features. However it weights much more that zustand and it doesn't suit NextJs app. So, use redux only with React and only if you have real reason to do this. In all other cases I highly recommend using zustand.



Creating zustand store just follow this guide [https://zustand.docs.pmnd.rs/guides/nextjs](https://zustand.docs.pmnd.rs/guides/nextjs)

You can find example of usage in template in the folder `/entities/auth/model/auth-store.ts` Here you also can find usage of persisting state in local-storage.



### Server Side

In this part I assuming that you already read NextJs documentation and have some experience with server side fetching, also I remind you about DevTalk here: Private ([https://app.clickup.com/t/86b2a6rau](https://app.clickup.com/t/86b2a6rau)).



The hardest to understand part here is how to tie server side fetching with `tanstack-query` .

We have 3 main utility functions for this.



First one is `getQueryClient` it returns new `QueryClient` instance for each call, so you should use it only 1 time for the page



The second one is `fetchQueryServer` which is placed in `shared/lib/api/fetch-query.server.ts` .

Here it is

```typescript jsx
export async function fetchQueryServer<
  TQueryFnData = unknown,
  TError = DefaultError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  queryClient: QueryClient,
  options: FetchQueryOptions<TQueryFnData, TError, TData, TQueryKey>
): Promise<TData> {
  await queryClient.prefetchQuery<TQueryFnData, TError, TData, TQueryKey>(options);

  return queryClient.getQueryData(options.queryKey) as TData;
}
```



It accepts queryClient which you got from the `getQueryClient` function and query options, it is the same options you pass to `useQuery` hook. It also returns data got from api call.



The second one is `fetchInfiniteQueryServer` which is placed in `shared/lib/api/fetch-infinite-query.server.ts`. It looks almost same but with types of infinite query.



Lets look at an example:

I will use this request with pagination to show more hard case

```typescript jsx
export async function getUsers(params: PaginationParams): Promise<PaginationData<User>> {
  const api = await getApi();
  const response = await api.get(API_ROUTES.USERS, { params });

  const dto = getPaginationResponseSchema(USER_DTO_SCHEMA).parse(response.data);

  return mapPaginationData(dto, mapUser);
}
```



Lets go to the query hooks and see how it looks there

```typescript jsx
export const getInfiniteUsersQueryOptions = (params: GetInfiniteUsersParams) => {
  return infiniteQueryOptions({
    initialPageParam: 0,
    queryKey: [QUERY_KEYS.USERS_LIST, params],
    queryFn: ({ pageParam }) => getUsers({ page: pageParam, take: params.take }),
    getNextPageParam,
  });
};

export function useGetInfiniteUsers(params: GetInfiniteUsersParams) {
  return useInfiniteQuery(getInfiniteUsersQueryOptions(params));
}
```



Here we use a spacial function from `tanstack-query` called `infiniteQueryOptions` . It is designed to create query infinite query options separately from the query call. Why do we need it? Because then we want to use exactly same options in server side request which will be done with `fetchInfiniteQueryServer` function.

And now lets look at page component:

```typescript jsx
export const DashboardPage: FC = async () => {
  const queryClient = getQueryClient();

  await Promise.allSettled([
    fetchInfiniteQueryServer(queryClient, getInfiniteUsersQueryOptions({ take: 10 })),
  ]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <UserInfoCard />

      <UsersListCard />
    </HydrationBoundary>
  );
};
```

Here we get `queryClient` then we call `fetchInfiniteQueryServer` with `queryClient` and with options got from `getInfiniteUsersQueryOptions` function.

Then we need to wrap all page content inside `HydrationBoundary` component which is imported from `tantask-query` and pass there dehydrated state. Here we dehydrate cache which is saved into queryClient after server side api calls. `dehydrate` function is also imported from `tanstack-query` .



Then we show data inside UsersListCard just same as we always do it.

```typescript jsx
export const UsersListCard: FC = () => {
  const {
    data: usersData,
    isFetching,
    fetchNextPage,
  } = useGetInfiniteUsers({ take: 10 });

  const users = useMemo(() => flatPages(usersData), [usersData]);

  return (
    <div className="space-y-2 bg-card px-2 py-3">
      {users.map((user) => (
        <div key={user.id} className="border-t border-t-card-foreground px-1 py-1.5">
          {user.email}
        </div>
      ))}

      <Button onClick={() => fetchNextPage()} disabled={isFetching}>
        Load more
      </Button>
    </div>
  );
};
```



Lets break by steps what is going on here:

1. On build phase we request first 10 users.
2. 10 users are already in cache when page render starts on server side so `useInfiniteQuery` hook returns them in `UsersListCard` and UsersListCard renders this first 10 items on server side.
3. NextJs caches pre-rendered HTML with first 10 users
4. When any user request page he got HTML with first 10 users
5. Then JS bundle hydrates to client side and our "Show more" button becomes interactive
6. useInfiniteQuery hook continues to work as usually

All things works almost the same with simple queries.



### Auth

Before we dive into a code I want you to understand the main conception.

We use common access-token + refresh-token approach, but via cookies. Most of developers used to save tokens inside state manager or local-storage, but it is completely unsafe approach we don't want to follow. Cookies is much more safe because of browser's security measures. We don't even need to write saving tokens logic because server kindly saves cookies to our client side by itself. We don't need to write refresh token logic because server gonna read our cookies for each request and in case our access token is invalid, but refresh token is valid it will set us new tokens. The only one new endpoint we will need is `/is-authenticated` endpoint which will tell us if user is authenticated and that is it.



#### Configuration

Different browsers have different policies of handling cookies, but all of them need cookies setter of cookies(our server) to be on same domain as our client side application. It is not a problem on our remote environments but it is a problem for our local environment. To solve it you need some additional configuration of your PC



```markdown
**Windows**
1. Navigate to C:\Windows\System32\drivers\etc.
2. Open the hosts file and add the following line below.
3. Insert `127.0.0.1 local.your-app-domain.com`
4. Save.

**macOS**
1. Open terminal and run the command: `sudo nano /etc/hosts`
2. Insert `127.0.0.1 local.your-app-domain.com`
3. Save.

**Linux**
1. Open terminal and run the command: `sudo nano /etc/hosts`
2. Insert `127.0.0.1 local.your-app-domain.com`
3. Save.
```

Don't forget to change "your-app-domain" to domain of your app.

Now you can access your localhost on `http://local.your-app-domain.com` .

Congratulations!!! Your are all set.



#### Code

In the `entities` layer we have `auth` slice.

In auth slice we have api folder which have only one request `/is-authenticated` and it just returns if user is authenticated or not. In the model folder we have auth store which is aimed to store only one value `isAuthenticated` and it has only one action `setIsAuthenticated` . It is pretty simple as you see. The second thing inside the model folder is auth-provider. It is common provider of store, but it also makes one-time `/is-authenticated` request on mount to revalidate state of authentication when app starts.



Now lets jump to sign-in feature.

Sign-in feature has sign-in service function to make sing-in request to our server. In model folder it contains form-schema and form type for sign-in. In "ui" segment it has only form component. Now we are interested in `onSubmit` function. It is very simple, it makes api call and then sets `isAuthenticated` to `true` so now app knows that user is authenticated, and finally it navigates user to dashboard page.



Sign-out feature works in similar to this one, but it has hook, than returns sign-out callback. `signOut` callback makes api call, then it sets `isAuthenticated` to `false` , then it clears `tanstack-query` storage and finally redirects user to sign-in page.



The last thing I want to show is axios instances and interceptor.

As I mention in API section we have 2 instances. First one is used for client side and unauthenticated requests on server side and second one only for authenticated server side api calls.

Here is the first one:

```cpp
export const mainApi = axios.create({
  baseURL: env.NEXT_PUBLIC_APP_API_URL,
});
```

And here is the second one:

```verilog
const ssrMainApiInstance = axios.create({
  baseURL: env.NEXT_PUBLIC_APP_API_URL,
});

ssrMainApiInstance.interceptors.request.use((config) => {
  config.headers["Cookie"] = cookies().toString();

  return config;
});

export { ssrMainApiInstance };
```

The only difference here is that in the second axios instance we need to get cookies of client and pass them to the request. We need it because cookies are only included in client request because browser has that cookies, but our server doesn't.



In widgets layer we have `api-interceptors` slice which has `ApiInterceptor` component.

This component is placed in model folder because it doesn't return any UI, it only does logic.

It setups a very simple response interceptor so for every request interceptor checks if status of request is 401 and if it is interceptor function is signing user out. That's it.



* * *



## Code Style



Most part of the code style is described in the eslint config and architecture rules, here I am going to list only additional rules that can't be covered with eslint and aren't covered in the FSD documentation.

1. Exported constants as well as standalone constants used in same file should be written in uppercase with underscore.

Examples: `export const HAS_SPACES_REG_EXP = /^\S*$/;`

`const ANIMATION_START_TIMEOUT_IN_MS = 5_000`

2. All enums and their properties should be written in pascal case.

Example:

```typescript jsx
export enum UserRoles {
  Admin = "admin",
  User = "user",
}
```

1. All enums should be treated as constants and never written in types files.

Example: enum above is placed in file `/entities/user/model/constants.ts`

2. All types should be written in pascal case.

Example: `type SortOrder = "ASC" | "DESC";`

3. All component files and folders should be named with pascal case

Example: `shared/ui/`**`Label`**`/`**`Label.tsx`**

4. All other components should be named with kebab case.

Examples

`src/shared/lib/state/use-debounced-state/use-debounced-state.ts`

`src/shared/lib/form/pich-changed/pick-changed.ts`

`src/shared/config/api-routes.ts`

5. Only named exports should be used across the app, except NextJs pages which are required to be default exported.

Example:

In `src/pages-layer/sign-up/ui/SignUpPage.tsx`

```typescript jsx
export const SignUpPage: FC = () => (
  <AuthLayout
    title="Sign Up"
    subtitle="Enter your email below to create your account"
    form={<SignUpForm />}
  />
);
```

But in `app/(auth)/sign-up/page.tsx`

```typescript jsx
export { SignUpPage as default } from "@/pages-layer/sign-up";
```

6. If single file contains constants, types and function(e.g. react component file) they should be written in the next order:

1\. types

2\. constants

3\. functions

1. Don't ever place more than 1 component in 1 file.
2. Always use braces for if statements, except for exiting function. Example:

`if (!getIsClient()) return;`



```typescript jsx
if (!storeRef.current) {
  storeRef.current = createAuthStore(initAuthStore());
}
```



```typescript jsx
if (something) {
  return true;
}
```

3. Always extract props on the first line of component. Example:

```typescript jsx
export const AuthStoreProvider: FC<PropsWithChildren> = (props) => {
  const { children } = props;
}
```

4. There are 2 ways of writing component depending on your case.

1. Common functional component

```typescript jsx
type AuthLayoutProps = {
  form: ReactNode;
  title: string;
  subtitle: string;
};

export const AuthLayout: FC<AuthLayoutProps> = (props) => {
  return (
    <>
      ...
    </>
  );
};
```

2. Generic functional component

```typescript jsx jsx
export const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: ControllerProps<TFieldValues, TName>
): ReactNode => {
  const { name } = props;

  return (
    <FormFieldProvider name={name}>
      <Controller {...props} />
    </FormFieldProvider>
  );
};
```
