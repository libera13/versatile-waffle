import { MikroORM } from "@mikro-orm/core"
import {PROD} from "./constants";


const main = async () => {
    const orm = await MikroORM.init({
        entities: [],
        dbName: 'versatile',
        type : 'postgresql',
        debug: !PROD,
        user: 'postgres',
        password: ''
    })

}


main()
console.log('Hahajja')
// const a = 2;
