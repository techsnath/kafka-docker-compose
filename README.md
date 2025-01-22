#Run Kafka docker
docker compose up

#create topic
docker compose exec kafka kafka-topics.sh --create --topic topic1 --partitions 1 --replication-factor 1 --bootstrap-server kafka:9092

#create producer
docker compose exec kafka kafka-console-consumer.sh --topic topic1 --from-beginning --bootstrap-server kafka:9092

#create consumer
docker compose exec kafka kafka-console-producer.sh --topic topic1 --broker-list kafka:9092

