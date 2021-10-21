FROM python:3.9.7-alpine

# The environment variable ensures that the python output is set straight
# to the terminal with out buffering it first
ENV PYTHONUNBUFFERED 1

# Work Directory
WORKDIR /usr/src/app

# Copy requirements.txt
COPY ./requirements.txt ./

# Install any needed packages specified in requirements.txt
RUN pip install -r requirements.txt

# Copy source code
COPY . .

# It will run in port 8000
EXPOSE 8000

RUN ln -s /dev/stdout ./app-access.log

CMD python manage.py runserver 0.0.0.0:8000

