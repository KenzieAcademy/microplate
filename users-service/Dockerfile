FROM python:3.6.1

# set working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# add requirements (to leverage Docker cache)
ADD ./requirements.txt /usr/src/app/requirements.txt

# install requirements
RUN pip install -r requirements.txt
RUN pip install flask-script==2.0.5

# add app
ADD . /usr/src/app

# run server
CMD python manage.py runserver -h 0.0.0.0
# ENTRYPOINT ["/bin/bash", "/usr/src/app/startup.sh"]
