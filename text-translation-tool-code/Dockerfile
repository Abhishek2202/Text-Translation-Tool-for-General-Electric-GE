# getting base image ubuntu
FROM ubuntu

MAINTAINER ENZHE <lulujoe1996@gmail.com>

RUN apt-get update

RUN apt-get install -y python3-pip

RUN DEBIAN_FRONTEND=noninteractive \
    apt-get -y install default-jre-headless && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

COPY ./requirements.txt /app/requirements.txt

COPY . /app

WORKDIR /app

RUN pip3 install -r requirements.txt

ENTRYPOINT [ "python3" ]

CMD [ "src/routes.py" ]
