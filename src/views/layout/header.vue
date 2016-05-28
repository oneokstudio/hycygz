<template>
  <header>
    <div class="title">
      <h2>广州市鸿裕餐饮有限公司</h2>
    </div>

    <div class="nav-container">
      <ul class="nav nav-pills">
        <li v-for="menu in menus" role="presentation">
          <a v-link="{path: '/' + menu.name }">{{menu.text}}</a>
        </li>
      </ul>
    </div>

  </header>
</template>

<script>
module.exports = {
  props: [],
  data() {
    return {
      menus: [{
        name: 'home',
        text: '网站首页'
      }, {
        name: 'about',
        text: '公司简介'
      },
      {
        name: 'news/0',
        text: '新闻中心'
      },
      {
        name: 'hire',
        text: '人才招聘'
      },
      {
        name: 'contact',
        text: '联系我们'
      }
    ]
    }
  }
}
</script>
