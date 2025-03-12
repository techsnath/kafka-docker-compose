# Run Kafka docker
docker compose up

# create topic
docker compose exec kafka kafka-topics.sh --create --topic topic1 --partitions 1 --replication-factor 1 --bootstrap-server kafka:9092

# create producer
docker compose exec kafka kafka-console-producer.sh --topic topic1 --broker-list kafka:9092

# create consumer
docker compose exec kafka kafka-console-consumer.sh --topic topic1 --from-beginning --bootstrap-server kafka:9092

## Two partitions would receive the same messages from a producer consume  

docker compose exec kafka kafka-topics.sh --create --topic topic1 --partitions 2 --replication-factor 1 --bootstrap-server kafka:9092

docker compose exec kafka kafka-console-producer.sh --topic topic2 --broker-list kafka:9092

docker compose exec kafka kafka-console-consumer.sh --topic topic2 --from-beginning --bootstrap-server kafka:9092
docker compose exec kafka kafka-console-consumer.sh --topic topic2 --from-beginning --bootstrap-server kafka:9092


## SASL Auth

sudo docker exec -it kafka kafka-consumer-groups --bootstrap-server localhost:9093 --list --command-config /etc/kafka/kafka_server_jaas.conf
 
sudo docker exec -it kafka kafka-topics --create --topic snd  --bootstrap-server kafka:9093 --partitions 1 --replication-factor 1  --command-config /etc/kafka/kafka_server_jaas.conf

 
sudo docker exec -it kafka kafka-topics --list  --bootstrap-server localhost:9093   --command-config /etc/kafka/kafka_server_jaas.conf
 
sudo docker exec -it kafka kafka-topics --create --bootstrap-server localhost:9093 --topic my-topic  --partitions 3  --replication-factor 1  --command-config /etc/kafka/kafka_server_jaas.conf
 
sudo docker exec -it kafka kafka-topics --create --bootstrap-server localhost:9093 --topic test-topic  --partitions 3  --replication-factor 1  --command-config /etc/kafka/kafka_server_jaas.conf
 
sudo docker exec -it kafka kafka-topics --list --bootstrap-server localhost:9093 command-config /etc/kafka/kafka_server_jaas.conf

 
sudo docker exec -it kafka kafka-consumer-groups   --bootstrap-server localhost:9093   --list  --command-config /etc/kafka/kafka_server_jaas.conf
 
sudo docker exec -it kafka kafka-consumer-groups  --bootstrap-server localhost:9093   --group my-group   --reset-offsets --to-earliest   --execute   --command-config /etc/kafka/kafka_server_jaas.conf
 
sudo docker exec -it kafka kafka-consumer-groups --bootstrap-server localhost:9093   --list  --command-config /etc/kafka/kafka_server_jaas.conf
 
sudo docker exec -it kafka kafka-consumer-groups --bootstrap-server localhost:9093  --group my-group  --reset-offsets --to-earliest  --execute --command-config /etc/kafka/kafka_server_jaas.conf
 
sudo docker exec -it kafka kafka-topics --create --topic ECC_DEV_REQ  --bootstrap-server localhost:9093 --partitions 1 --replication-factor 1  --command-config /etc/kafka/kafka_server_jaas.conf
 
sudo docker exec -it kafka kafka-topics --create --topic ECC_DEV_RES  --bootstrap-server localhost:9093 --partitions 1 --replication-factor 1  --command-config /etc/kafka/kafka_server_jaas.conf
 
sudo docker exec -it kafka kafka-topics --create --topic ECC_DEV  --bootstrap-server localhost:9093 --partitions 1 --replication-factor 1  --command-config /etc/kafka/kafka_server_jaas.conf
 
 
sudo docker exec -it kafka kafka-topics --create --topic notify  --bootstrap-server localhost:9093 --partitions 1 --replication-factor 1  --command-config /etc/kafka/kafka_server_jaas.conf
 
