<!DOCTYPE html>
<html lang="ru">
	<head>
		<meta charset="UTF-8" />
		<title>
			Online Code Editor
		</title>
		<link rel="stylesheet" href="assets/plugins/bootstrap/css/bootstrap.min.css">
		<link rel="stylesheet" href="assets/plugins/fontawesome/css/all.css" />
		<link rel="stylesheet" href="assets/plugins/notifications/css/lobibox.min.css"/>
		<link rel="stylesheet" href="assets/css/style.css" />
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	</head>
	<body>
		<nav class="navbar navbar-expand navbar-dark bg-dark">
			<a class="navbar-brand" href="">
			<img src="assets/img/logo.png" width="30" height="30" alt="">
			</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon">
				</span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNavDropdown">
				<ul class="navbar-nav">
					<li class="nav-item">
						<a class="nav-link" href="#" onclick="runCode();return false;"><span class="fa fa-play-circle"></span></a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#" onclick="saveCode();return false;"><span class="fa fa-save"></span></a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#" onclick="return false;"><span class="fa fa-download"></span></a>
					</li>
				</ul>
			</div>
			<div class="collapse navbar-collapse">
				<ul class="navbar-nav navbar-right ">
					<li class="nav-item">
						<a class="nav-link" href="#" onclick="return false;"><span class="fa fa-sliders-h"></span></a>
					</li>
				</ul>
			</div>
		</nav>
		<div class="container-fluid px-0">
			<div class="row mx-0">
				<div class="col px-0">
					<h4 class="px-2">
						HTML
					</h4>
					<div id="htmlEditor" class="editors">
					</div>
				</div>
				<div class="col px-0">
					<h4>
						CSS
					</h4>
					<div id="cssEditor" class="editors">
					</div>
				</div>
				<div class="col px-0">
					<h4>
						JS
					</h4>
					<div id="jsEditor" class="editors">
					</div>
				</div>
			</div>
			<div class="row mt-1">
			</div>
			<div class="row mx-0">
				<div class="col-12 mx-0 px-0">
					<iframe id="result" class="resultFrame" frameborder="0" src="blank.html">
					</iframe>
				</div>
			</div>
		</div>
		<script src="assets/plugins/jquery/jquery.min.js">
		</script>
		<script src="assets/plugins/bootstrap/js/bootstrap.min.js">
		</script>
		<script src="assets/plugins/notifications/js/lobibox.min.js">
		</script>
		<script src="assets/plugins/ace/src/ace.js" type="text/javascript">
		</script>
		<script src="assets/js/app.js">
		</script>
	</body>

</html>