FROM php:8.0-fpm

RUN apt-get update -y \
	&& apt-get install -y libmcrypt-dev openssl openssh-client git zip unzip \
	&& apt-get clean \
	&& rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN pecl install mcrypt-1.0.4 
RUN docker-php-ext-enable mcrypt
RUN docker-php-ext-install mysqli pdo_mysql

ARG working_dir=/var/www/laravel-app/
RUN useradd --uid 1000 --user-group -ms /bin/bash www
#RUN mkdir $working_dir && chown -R www:www $working_dir

WORKDIR /tmp
ADD https://github.com/laravel/laravel/archive/refs/tags/v9.0.0.tar.gz .
RUN tar -xzvf v9.0.0.tar.gz && mv laravel-9.0.0 $working_dir

RUN chown -R www:www $working_dir
WORKDIR $working_dir
USER www

RUN composer config disable-tls true && \
	composer install --no-dev --no-scripts --ignore-platform-reqs && \
	composer dump-autoload && \
	composer clear-cache && \
	rm -rf ~/.composer/cache*

RUN composer require laravel/breeze --dev

RUN php artisan breeze:install api 

CMD php artisan migrate && php artisan serve --host=0.0.0.0 --port=8000
