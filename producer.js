const { Kafka } = require("kafkajs");

const kafka = new Kafka({


  clientId: "my-app",
   brokers: ["localhost:9093"], // Ensure this matches your Kafka setup
   ssl: false,
  sasl: {
  mechanism: "PLAIN", // SASL/PLAIN Authentication
    username: "admin",
    password: "admin-password",
  },
});

const producer = kafka.producer();

const sendMessage = async () => {
  try {
    await producer.connect();
    console.log("✅ Producer connected");

    const topic = "notify";
    const data = {
      "flowId": "edbae4be6e7fc888",
      "data": [
        "{\"id\":13,\"age\":24,\"name\":\"sam\",\"country\":\"US\"}",
        "{\"id\":13,\"age\":24,\"name\":\"sam\",\"country\":\"US\"}",
        "{\"id\":12,\"age\":22,\"name\":\"rahul\",\"country\":\"India\"}",
        "{\"id\":12,\"age\":22,\"name\":\"rahul\",\"country\":\"India\"}",
        "{\"id\":11,\"age\":24,\"name\":\"akhil\",\"country\":\"India\"}",
        "{\"id\":11,\"age\":24,\"name\":\"akhil\",\"country\":\"India\"}",
        "{\"id\":10,\"age\":26,\"name\":\"stephan\",\"country\":\"UK\"}",
        "{\"id\":10,\"age\":26,\"name\":\"stephan\",\"country\":\"UK\"}",
        "{\"id\":9,\"age\":24,\"name\":\"sibel\",\"country\":\"US\"}",
        "{\"id\":9,\"age\":24,\"name\":\"sibel\",\"country\":\"US\"}"
      ],
      "messageKey": "1741331375000"
    };

    await producer.send({
      topic: topic,
      messages: [{ key: "key1", value: JSON.stringify(data)}],
    });

    console.log(`📨 Message sent to topic: ${topic}`);
    await producer.disconnect();
  } catch (error) {
    console.error("❌ Error sending message:", error);
  }
};

sendMessage();
