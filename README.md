# GRPC-node-example

## start
```javascript
npm install
node server.js
```

```javascript
node client.js
```

Python
sudo python3 -m pip install grpcio
sudo python3 -m pip install grpcio-tools

python3 -m grpc_tools.protoc -I./  --python_out=. --grpc_python_out=. ./article.proto


python3 -m grpc_tools.protoc \
    --include_imports \
    --include_source_info \
    --proto_path=. \
    --descriptor_set_out=api_descriptor.pb \
    --python_out=generated_pb2 \
    --grpc_python_out=generated_pb2 \
    article.proto



brew install protobuf
protoc --include_imports --include_source_info --descriptor_set_out article.pb article.proto

gcloud endpoints services deploy article.pb api_config.yaml

gcloud container clusters get-credentials cluster-1 --zone us-central1-c


kubectl create -f grpc-article.yaml

# docker build  -t gcr.io/identiy-grpc-iota/node-grpc-article-server:1.0 -f Dockerfile .
# gcloud docker -- push gcr.io/identiy-grpc-iota/node-grpc-article-server:1.0

## docker run --detach --name=article gcr.io/identiy-grpc-iota/node-grpc-article-server:1.0