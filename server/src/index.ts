// import { MikroORM } from "@mikro-orm/core"
// import microConfig from "./mikro-orm.config";
// import {Post} from "./entities/Post";
import "reflect-metadata";

import express from "express"
import {ApolloServer} from "apollo-server-express";
import {buildSchema} from "type-graphql";
import {HelloResolver} from "./resolvers/hello";

const main = async () => {
    // const orm = await MikroORM.init(microConfig)
    // await orm.getMigrator().up()

    // # creating post
    // const post = orm.em.create(Post, {title: 'my first post'})
    // await orm.em.persistAndFlush(post)

    // # finding post
    // const posts = await orm.em.find(Post, {})
    // console.log(posts)

    const app = express();

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [HelloResolver],
            validate: false
        })
    });

    apolloServer.applyMiddleware({app})
    app.get('/', (_, res) => {
      res.send("hello world")
    });
    app.listen(4000, () => {
        console.log('server started at localhost:4000')
    } )
}


main().catch(err => {
    console.error(err)
})
console.log('Hahajja')
// const a = 2;
