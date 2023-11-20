// MongoDB에 연결
const { connectDB } = require("./dababase");

// 'Pro' 데이터베이스에 연결
const db = (await connectDB).db('Pro');

// 'post' 컬렉션에서 모든 데이터를 가져옴
let dbResult = await db.collection('post').find().toArray();

// "_id"를 문자열로 변환하여 가공
dbResult = dbResult.map(item => {
    return {
        ...item,
        _id: item._id.toString() // ObjectId를 문자열로 변환
    };
});

// 가공된 데이터 반환
export default dbResult;