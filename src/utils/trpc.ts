//this is tRPC hook, we will use it to make api calls
import type { ServerRouter } from '@/server/router';
import { createReactQueryHooks } from '@trpc/react';

export const trpc = createReactQueryHooks<ServerRouter>();
