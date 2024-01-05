import { MongoClient } from 'mongodb'

const url = 'mongodb+srv://admin:ghwn2399@cluster0.xf4raeg.mongodb.net/?retryWrites=true&w=majority'
let connectDB;

if (process.env.NODE_ENV === 'development') {
    if (!global._mongo) {
        global._mongo = new MongoClient(url).connect();
    }
    connectDB = global._mongo;
} else {
    // 프로덕션 환경에서는 항상 새로운 MongoClient 생성
    connectDB = new MongoClient(url).connect();
}

export {connectDB} 