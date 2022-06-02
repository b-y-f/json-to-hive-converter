# json-to-hive-converter

>Source code from [here](https://github.com/quux00/hive-json-schema)

Sample app that convert json to hive schema which is used in athena to crawl json and create table.

Just upload json file and hive schema will be returned as txt.

## Deploy to herokuapp

```bash
docker build . --platform linux/amd64  -t json-to-hive

docker tag json-to-hive registry.heroku.com/json-to-hive-schema-convertor/web

docker push registry.heroku.com/json-to-hive-schema-convertor/web

heroku container:release web -a json-to-hive-schema-convertor
```