# micronPHP
A simple lightweight framework for building apps and APIs in PHP

## Folder Structure
- app
    - controllers
    - includes
        - db.php
        - functions.php
        - user_functions.php
    - views
    - routes.php
- public
    - assets
    - images
- index.php
- loader.php
- config.example.php

## Instructions

First, copy micronPHP to your project root and rename `config.example.php` to `config.php`.

Each web page of your app should have a controller and/or a view. That's it!

Write your controllers inside app/controllers folder, and write the view inside app/views folder. Match the file names within each folder to associate them together. Set global variables in a controller to use them in the view. 

When you visit http://yourmicronsiteurl/pagename, the controller named pagename.php and view named pagename.php will be executed.

You can also create virtual routes that can point to a controller/view with route parameters specified. Routes are defined in app/routes.php file, and route parameters are accessed via the global `$routeParams` variable (as an associative array).

### Database Setup

Optionally, you can set up your `config.php` with details for database access, which can be accessed via the global `$db` variable, and that enables using a `magicInsert()` function, which can be used to quickly insert arbitrary values from forms or other sources to database tables (just be sure you process the values before putting them in).

### User Input

The loader automatically sanitizes GET and POST variables in two different ways that can be helpful:

- `$getVariables` and `$postVariables` provide the user input with any HTML tags stripped (using PHP's `strip_tags()` method)
- `$_GETRequest` and `$_POSTRequest` provide the user input with all sensitive characters converted to their HTML entity values (using PHP's `htmlentities()` method)

You can do whatever you want with that information.

## Helper Functions

### Link Builder
**route('pagename', ["parameter" => "value"])**

Example
``` <a href="<?php echo route('admin/products',array('a' => 'add'))?>" class="btn btn-primary">Add Product</a> ```

### Redirect
**redirectRoute('pagename', ["parameter" => "value"])**

Example
``` redirectRoute('admin/divisions',array('successMessage' => 'Division Added')); ```

### Generating Asset Links
**echo assets('path to css file inside public/assets folder')**

Example
``` <link rel="stylesheet" href="<?php echo assets('pretty/css/prettyPhoto.css')?>" type="text/css" media="screen" charset="utf-8" /> ```

### Generating Image Links
**echo images('path to css file inside public/images folder')**

Example
``` <img src="<?php echo images('cool/dog.jpg')?>" alt="dog in sunglasses" /> ```

### Including a view inside another view
**loadView('viewName',[array of data to be passed])**

Example
``` loadView('header',["title" => 'Sample Title']) ```


### Form Required Fields Validation
**validateRequired($userInput, $requiredFields)**

Example
```
$requiredFields = ['title','subject']; 
validateRequired($_POST,$requriedFields)
```

### Save Form to Database
**magicInsert('tableName',$_POST)**
Unset any unwanted parameters using unset() function before using magicInsert()

Example
```
magicInsert('users',$_POST);
```
