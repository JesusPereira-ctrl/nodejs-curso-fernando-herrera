import mongoose from 'mongoose';
import { MongoDatabase } from './init';

describe('initi MongoDB', () => {
  afterAll(() => {
    mongoose.connection.close();
  });

  test('should connect to MongoDB', async () => {
    console.log(process.env.MONGO_URL, process.env.MONGO_DB_NAME);

    const connected = await MongoDatabase.connect({
      dbName: process.env.MOGNO_DB_NAME!,
      mongoUrl: process.env.MONGO_URL!,
    });

    expect(connected).toBe(true);
  });

  test('should throw an error', async () => {
    try {
      const connected = await MongoDatabase.connect({
        dbName: process.env.MOGNO_DB_NAME!,
        mongoUrl: 'mongodb://jesus:123456@localsadsad:27017',
      });
    } catch (error) {}
  });
});
