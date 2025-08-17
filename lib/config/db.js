import mongoose from "mongoose";

export const ConnectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://TalkBoard:SzEg9vwZcH7cZhrB@cluster0.hm729vm.mongodb.net/TalkBoard?retryWrites=true&w=majority&appName=Cluster0`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  }
  //   await mongoose.connect(`mongodb+srv://TalkBoard:SzEg9vwZcH7cZhrB@cluster0.hm729vm.mongodb.net/TalkBoard`);
  //   console.log("db connected")
};
ConnectDB();
