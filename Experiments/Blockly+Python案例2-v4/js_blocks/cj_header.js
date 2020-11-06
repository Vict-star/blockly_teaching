function load_header(div_header) {
  var html_header = "<nav class='navbar navbar-expand-md bg-dark navbar-dark' style='background-color:black!important;'>\
    <a class='navbar-brand' href='index.html'>HOME</a> \
    <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#collapsibleNavbar'>\
    <span class='navbar-toggler-icon'></span>\
    </button>\
    <div class='collapse navbar-collapse cj-navbar' id = 'collapsibleNavbar'>\
      <ul class='navbar-nav'> \
        <li class='nav-item' ><a href='pro1_variables.html'  title='复习变量的用法'>补充变量</a></li>\
        <li class='nav-item' ><a href='pro2_condition.html'  title='探索循环条件'>循环条件</a></li>\
        <li class='nav-item' ><a href='pro3_loopSent.html'  title='探索循环体'>循环内容</a></li>\
        <li class='nav-item' ><a href='pro4_output.html'  title='探索输出'>输出</a></li>\
        <li class='nav-item' ><a href='pro5_input.html'  title='探索输入'>输入</a></li>\
        <li class='nav-item' ><a href='pro6_answer.html'  title='参考程序'>参考程序</a></li>\
      </ul>\
    </div>\
  </nav>"

  document.getElementById(div_header).innerHTML = html_header
}