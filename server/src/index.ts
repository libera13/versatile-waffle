import { MikroORM } from "@mikro-orm/core"
import {PROD} from "./constants";
import {Post} from "./entities/Post";


const main = async () => {
    const orm = await MikroORM.init({
        entities: [Post],
        dbName: 'versatile',
        type : 'postgresql',
        debug: !PROD,
        user: 'postgres',
        password: 'postgres'

    })



    const post = orm.em.create(Post, {title: 'my first post'})

    await  orm.em.persistAndFlush(post)
}


main().catch(err => {
    console.error(err)
})
console.log('Hahajja')
// const a = 2;
