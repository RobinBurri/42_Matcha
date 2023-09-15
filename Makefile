CONTAINER_REACT = react-dev
CONTAINER_NODE = node-express
NGINX_PORT = 8080

env:
	@if [ ! -e .env ]; then \
		printf "$(GREEN)Generate environment variables\n$(DEFAULT)"; \
		sh create-env.sh; \
	fi


start: env
	docker compose -f docker-compose-dev.yml up

start2: env
	docker-compose -f docker-compose-dev.yml build --no-cache
	docker compose -f docker-compose-dev.yml up

stop:
	docker compose -f docker-compose-dev.yml down

startprod: env
	docker compose -f docker-compose-prod.yml up

stopprod:
	docker compose -f docker-compose-prod.yml down

build:
	docker build -f Dockerfile.prod -t nginx-image .

deploy: build
	docker run -d -p $(NGINX_PORT):80 --name nginx-containers nginx-image

load:
	rm -rf ./frontend/node_modules ./backend/node_modules
	docker cp $(CONTAINER_REACT):/app/node_modules ./frontend/
	docker cp $(CONTAINER_NODE):/app/node_modules ./backend/

shell-front:
	docker exec -it $(CONTAINER_REACT) sh

shell-back:
	docker exec -it $(CONTAINER_NODE) sh

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
	rm -rf ./frontend/node_modules ./backend/node_modules
