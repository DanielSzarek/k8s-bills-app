FROM python:3.9
MAINTAINER Daniel Szarek

WORKDIR /backend

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
ENV DEBUG 1
ENV DJANGO_ALLOWED_HOSTS *

COPY ./requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8080

ENTRYPOINT ["bash", "entrypoint.sh"]
