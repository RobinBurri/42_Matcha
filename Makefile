DOCKER_APP_NAME = 42_MATCHA_docker-react-app-dev-1
NGINX_PORT = 8080


startdev:
	docker compose -f docker-compose-dev.yml up

stopdev:
	docker compose -f docker-compose-dev.yml down

startprod:
	docker compose -f docker-compose-prod.yml up

stopprod:
	docker compose -f docker-compose-prod.yml down

build:
	docker build -f Dockerfile.prod -t nginx-image .

deploy: build
	docker run -d -p $(NGINX_PORT):80 --name nginx-containers nginx-image

load:
	docker cp $(DOCKER_APP_NAME):/app/node_modules .

shell:
	docker exec -it $(DOCKER_APP_NAME) sh

stop-containers:
	@docker stop $$(docker ps -aq) 2>/dev/null || true
	@docker rm $$(docker ps -aq) 2>/dev/null || true

remove-images:
	@docker rmi -f $$(docker images -aq) 2>/dev/null  || true

remove-networks:
	@docker network prune -f

remove-volumes:
	@docker volume prune -fa

clean: stop-containers remove-images remove-networks remove-volumes
	rm -rf node_modules
