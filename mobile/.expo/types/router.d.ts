/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(root)` | `/(root)/` | `/(root)/(tabs)` | `/(root)/(tabs)/` | `/(root)/(tabs)/sign-out` | `/(root)/(tabs)/user-ads` | `/(root)/sign-out` | `/(root)/user-ad/create` | `/(root)/user-ad/edit` | `/(root)/user-ads` | `/(tabs)` | `/(tabs)/` | `/(tabs)/sign-out` | `/(tabs)/user-ads` | `/_sitemap` | `/auth` | `/auth/sign-in` | `/auth/sign-up` | `/sign-out` | `/user-ad/create` | `/user-ad/edit` | `/user-ads`;
      DynamicRoutes: `/${Router.SingleRoutePart<T>}` | `/(root)/${Router.SingleRoutePart<T>}` | `/(root)/user-ad/${Router.SingleRoutePart<T>}` | `/user-ad/${Router.SingleRoutePart<T>}`;
      DynamicRouteTemplate: `/(root)/[product-id]` | `/(root)/user-ad/[id]` | `/[product-id]` | `/user-ad/[id]`;
    }
  }
}
