FROM python:3.10-slim-buster

WORKDIR /python-docker

RUN pip3 install flask

COPY . .

CMD [ "python3", "-m" , "flask", "--app", "devops", "run", "--host=0.0.0.0"]

EXPOSE 5000
