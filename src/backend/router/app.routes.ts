import { createRouter } from '../createRouter';
import * as trpc from '@trpc/server';
import {Context} from '../createContext';
import {userRouter} from './user.router'
import {postRouter} from './post.router'

export const appRouter = createRouter()
    .merge('users.', userRouter)
    // .merge('posts.', postRouter)

export type AppRouter = typeof appRouter;
