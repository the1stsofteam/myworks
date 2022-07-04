<?php loadView('includes/header', [ 'page_title' => 'Home Page', 'description' => 'An example page.']); ?>

<h1> Hello <?= $name; ?></h1>
<h2>Welcome to Micron PHP. The simple framework for making simple web apps</h2>

<?php loadView('includes/footer'); ?>
