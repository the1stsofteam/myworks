<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title><?= $page_title; ?></title>
  <meta name="description" content="<?= $description; ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <meta property="og:title" content="<?= $page_title; ?>">
  <meta property="og:type" content="website">
  <meta property="og:url" content="<?= "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]"; ?>">
  <!-- <meta property="og:image" content=""> -->

  <!-- <link rel="manifest" href="site.webmanifest"> -->
  <!-- <link rel="apple-touch-icon" href="icon.png"> -->
  <!-- Place favicon.ico in the root directory -->

  <link rel="stylesheet" href="<?= assets('main.css'); ?>" type="text/css" media="screen" charset="utf-8" />
</head>

<body>
<header>
  <h1><?= SITE_TITLE ?></h1>
</header>
<main>