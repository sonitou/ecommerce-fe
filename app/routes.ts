// import { type RouteConfig, index } from "@react-router/dev/routes";

// export default [index("routes/home.tsx")] satisfies RouteConfig;

// app/routes.ts
import { route } from '@react-router/dev/routes'

export default [
  // Route cha dùng layout chung
  route('/', 'routes/_layout.tsx', [
    // "/" => app/routes/_index.tsx
    route('/', 'routes/_index.tsx'),

    // "/about" => app/routes/about.tsx
    route('about', 'routes/about.tsx'),

    // "/products" và "/products/:id"
    route('products', 'routes/products/_index.tsx'),
    route('products/:id', 'routes/products/$id.tsx')
  ])
]
