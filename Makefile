.PHONY: e2e
build: 
	docker compose build 

start:
	docker compose up

stop: 
	docker compose down

test-api: 
	docker compose run consensus-api npm run test $(file)

test-app:
	docker compose run consensus-app npm run test $(file)
	
test:
	docker compose run consensus-api npm run test
	docker compose run consensus-app npm run test

e2e:
	docker compose run consensus-e2e npm run test

lint:
	docker-compose exec consensus-app npm run lint

fix:
	docker-compose exec consensus-app npm run lint-fix