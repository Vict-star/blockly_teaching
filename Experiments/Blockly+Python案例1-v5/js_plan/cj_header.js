function load_header(div_header) {
  var html_header = "<nav class='navbar navbar-expand-md bg-dark navbar-dark' style='background-color:black!important;'>\
    <a class='navbar-brand' href='index.html'>HOME</a> \
    <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#collapsibleNavbar'>\
    <span class='navbar-toggler-icon'></span>\
    </button>\
    <div class='collapse navbar-collapse cj-navbar' id = 'collapsibleNavbar'>\
      <ul class='navbar-nav'> \
        <li class='nav-item' ><a href='plan1.html'  title='感性理解算法流程，复习循环的用法'>Plan1</a></li>\
        <li class='nav-item' ><a href='plan2.html'  title='了解字典'>Plan2</a></li>\
        <li class='dropdown'>\
          <a href='#' class='dropdown-toggle' data-toggle='dropdown'>Plan_dict <b class='caret'></b></a>\
          <ul class='dropdown-menu' style='background-color:black!important;'>\
            <li class='nav-item' ><a href='plan2-after1.html'  title='了解字典的创建'>Plan2_1</a></li>\
            <li class='nav-item' ><a href='plan2-after2.html'  title='了解字典值的获取'>Plan2_2</a></li>\
            <li class='nav-item' ><a href='plan2-after3.html'  title='了解字典的插入与修改'>Plan2_3</a></li>\
            <li class='nav-item' ><a href='plan2-after4.html'  title='了解字典中元素的删除'>Plan2_4</a></li>\
          </ul>\
        </li>\
        <li class='nav-item' ><a href='plan3.html'  title='完成本次实验中列表部分的内容'>Plan3</a></li>\
        <li class='dropdown'>\
          <a href='#' class='dropdown-toggle' data-toggle='dropdown'>Plan_list <b class='caret'></b></a>\
          <ul class='dropdown-menu' style='background-color:black!important;'>\
            <li class='nav-item' ><a href='plan3-after1.html'  title='了解列表的创建'>Plan3_1</a></li>\
            <li class='nav-item' ><a href='plan3-after2.html'  title='了解列表值的获取'>Plan3_2</a></li>\
            <li class='nav-item' ><a href='plan3-after3.html'  title='了解列表的插入与修改'>Plan3_3</a></li>\
          </ul>\
        </li>\
        <li class='dropdown'>\
          <a href='#' class='dropdown-toggle' data-toggle='dropdown'>Answer <b class='caret'></b></a>\
          <ul class='dropdown-menu' style='background-color:black!important;'>\
            <li><a href='plan1_ans.html'>Plan1</a></li>\
            <li><a href='plan2_ans.html'>Plan2</a></li>\
            <li><a href='plan3_ans.html'>Plan3</a></li>\
          </ul>\
        </li>\
      </ul>\
      <li class='nav-item' ><a href='summary.html'  title='总结'>Summary</a></li>\
    </div>\
  </nav>"

  document.getElementById(div_header).innerHTML = html_header
}