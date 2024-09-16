#!/bin/bash
set -eu

/usr/bin/supervisord -c /etc/supervisord.conf

php-fpm83 -F
