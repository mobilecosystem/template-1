# MobileCosystem Skeleton Template `#1`
### Installation
Create a dotEnvironment `.env.php` for production or `.env.local.php` for local environment with:


    <?php

    return array(
        'database_db' => 'theDatabaseName',
        'database_un' => 'userName',
        'database_pw' => 'userPassword',
        'debug' => true
    );


Better change permission of the storage directory by running `chmod -R 777 app/storage`

### /!\ DEPENDENCIES /!\

- NodeJS `>=10.28`
- PHP `>=5.4`
- MCrypt PHP Extension
- Bower `>=1.3`
- Gulp `>=3.8`

* * *
### Technology
* [Laravel 4](http://laravel.com/)
* [GulpJS](http://gulpjs.com/)
* [Bower](http://bower.io/)
* [NodeJS](http://nodejs.org)
* [Less](http://lesscss.org/)
* [CoffeeScript](http://coffeescript.org/)

### License (MIT License)
Copyright (C) 2014 MobileCosystem, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
