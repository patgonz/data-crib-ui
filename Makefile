build: install
	npm run build

install:
	npm install

run-client:
	npm run start

run-server:
	json-server --watch db.json --port 9000