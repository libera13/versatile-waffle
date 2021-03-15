import {Post} from "./entities/Post";
import {PROD} from "./constants";
import {MikroORM} from "@mikro-orm/core"
import path from "path";

export default  {
    migrations: {
        path: path.join(__dirname, './migrations'), // path to the folder with migrations
        pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
    },
    entities: [Post],
    dbName: 'versatile',
    type : 'postgresql',
    debug: !PROD,
    user: 'postgres',
    password: 'postgres'
} as Parameters<typeof MikroORM.init>[0];
