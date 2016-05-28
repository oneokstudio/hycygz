<template>
  <div class="col-sm-3 col-md-2 sidebar">
    <template v-for="menu in subMenus">
      <h4><i class="{{menu.icon}}"></i> {{menu.text}}</h4>
      <ul class="nav-sidebar">
        <li v-for="item in menu.items"><a v-link="{path: item.path}"><i class="fa fa-angle-right"></i> {{item.text}}</a></li>
      </ul>
    </template>
  </div>
</template>

<script>
module.exports = {
  props: [],
  data() {
    return {
      subMenus: [{
        icon: 'fa fa-user',
        text: '用户中心',
        items:[
          {
            path: '/user/list',
            text: '用户列表'
          },
          {
            path: '/user/add',
            text: '添加用户'
          },
          {
            path: '/111',
            text: '编辑模板'
          }
        ]
      }]
    }
  }
}
</script>
