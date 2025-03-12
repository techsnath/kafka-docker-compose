const { Kafka } = require("kafkajs");

const kafka = new Kafka({ 
    // clientId: "my-app",
    brokers: ["localhost:9093"], // Ensure this matches your Kafka setup
    ssl: false,
    sasl: {
      mechanism: "PLAIN", // SASL/PLAIN Authentication
      username: "admin",
      password: "admin-password",
    },
  });
const consumer = kafka.consumer({ groupId: "my-group" });

const run = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: "notify", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ message }) => {
      console.log("Received:", message.value.toString());
    },
  });
};

run().catch(console.error);
