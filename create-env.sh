#!/bin/sh

alias pwgen="docker run \
	--rm \
	--interactive \
	backplane/pwgen \
	--ambiguous \
	--capitalize \
	--secure 20 1"


generate_all_variables () {
	POSTGRES_USER=$(whoami)
	POSTGRES_PASSWORD=$(pwgen)
	POSTGRES_NAME="postgres-data"
}


create_the_environment_file () {
	cat > .env <<- environment_file
	# Matcha
	# File created the $(date +"%Y.%m.%d") by $(whoami)

	# PostgreSQL
	POSTGRES_USER=${POSTGRES_USER}
	POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
	POSTGRES_DB=${POSTGRES_NAME}

	environment_file

}

main () {
	generate_all_variables
	create_the_environment_file
}

main
