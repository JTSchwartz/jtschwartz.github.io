$(function () {
    $('body').prepend(' <header>\n' +
        '        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">\n' +
        '            <div class="navbar-brand"><strong>Jacob Schwartz</strong></div>\n' +
        '            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">\n' +
        '                <span class="navbar-toggler-icon"></span>\n' +
        '            </button>\n' +
        '            <div class="collapse navbar-collapse" id="navbarNavDropdown">\n' +
        '                <ul class="navbar-nav mr-auto">\n' +
        '                    <li class="nav-item" id="home">\n' +
        '                        <a class="nav-link" href="https://jtschwartz.com">Home<span class="sr-only">(current)</span></a>\n' +
        '                    </li>\n' +
        '                    <li class="nav-item" id="resume">\n' +
        '                        <a target="_blank" class="nav-link" href="https://jtschwartz.com/resume/Resume.pdf">Re&sacute;ume</a>\n' +
        '                    </li>\n' +
        '                    <li class="nav-item dropdown">\n' +
        '                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownCurrent" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Current Projects</a>\n' +
        '                        <div class="dropdown-menu" aria-labelledby="navbarDropdownCurrent">\n' +
        '                            <a id="emptyCur" class="dropdown-item disabled d-none" href="#">Creating a To Do List...</a>\n' +
        '                        </div>\n' +
        '                    </li>\n' +
        '                    <li class="nav-item dropdown">\n' +
        '                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownPast" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Past Projects</a>\n' +
        '                        <div class="dropdown-menu" aria-labelledby="navbarDropdownPast">\n' +
        '                            <a class="dropdown-item" href="https://jtschwartz.com/3x3-Puzzle-Solver/">3x3 Grid Puzzle Solver</a>\n' +
        '                            <a class="dropdown-item" href="https://jtschwartz.com/C-Projects/">C Programs</a>\n' +
        '                            <a class="dropdown-item" href="https://jtschwartz.com/SiteCrawler/">Site Crawler</a>\n' +
        '                        </div>\n' +
        '                    </li>\n' +
        '                </ul>\n' +
        '                <ul class="navbar-nav d-none d-md-flex ml-auto">\n' +
        '                    <li class="nav-item">\n' +
        '                        <a target="_blank" class="nav-link" href="mailto:jacob@jtschwartz.com"><i class="fas fa-envelope-square fa-2x"></i></a>\n' +
        '                    </li>\n' +
        '                    <li class="nav-item">\n' +
        '                        <a target="_blank" class="nav-link" href="https://www.linkedin.com/in/jacob-t-schwartz"><i class="fab fa-linkedin fa-2x"></i></a>\n' +
        '                    </li>\n' +
        '                    <li class="nav-item">\n' +
        '                        <a target="_blank" class="nav-link" href="https://github.com/JTSchwartz/"><i class="fab fa-github-square fa-2x"></i></a>\n' +
        '                    </li>\n' +
        '                </ul>\n' +
        '                <ul class="navbar-nav d-md-none">\n' +
        '                    <li class="nav-item">\n' +
        '                        <hr/>\n' +
        '                        <a target="_blank" class="nav-link pr-2" style="display: inline-block !important;" href="mailto:jacob@jtschwartz.com"><i class="fas fa-envelope-square fa-2x"></i></a>\n' +
        '                        <a target="_blank" class="nav-link px-2" style="display: inline-block !important;" href="https://www.linkedin.com/in/jacob-t-schwartz"><i class="fab fa-linkedin fa-2x"></i></a>\n' +
        '                        <a target="_blank" class="nav-link px-2" style="display: inline-block !important;" href="https://github.com/JTSchwartz/"><i class="fab fa-github-square fa-2x"></i></a>\n' +
        '                    </li>\n' +
        '                </ul>\n' +
        '            </div>\n' +
        '        </nav>\n' +
        '    </header>');

    var active = $('meta[name=activepage]').attr("content");

    if (active == "home") {
        $('#home').addClass("active");
    } else if (active == "current") {
        $('#navbarDropdownCurrent').addClass("active");
    } else if (active == "past") {
        $('#navbarDropdownPast').addClass("active");
    }

    if($('[aria-labelledby=navbarDropdownCurrent] a:first').attr("id") == "emptyCur") {
        $('#emptyCur').removeClass("d-none");
    }
});