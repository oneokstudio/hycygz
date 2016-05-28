<template>
  <div class="sidebar">
    <panel>
      <div slot="head">服务项目</div>
      <div slot="body">
        <ul class="channel-list">
          <li><a href="javascript:;">★★★酒店管理★★★</a></li>
          <li><a href="javascript:;">★★★中西餐饮管理★★★</a></li>
          <li><a href="javascript:;">★★★团体供膳★★★</a></li>
          <li><a href="javascript:;">★★★茶馆服务经营★★★</a></li>
        </ul>
      </div>
    </panel>
  </div>

  <div class="content">
    <detail-panel>
      <div slot="head">联系我们：</div>
      <div slot="body">
        <p>王裕文经理电话：13632327736</p>
        <p>公司座机：020-82737806</p>
        <p>公司地址：广东省广州市增城区荔城街增城大道69号4幢707号</p>
        <p>顾客反馈电话：18820031319</p>
      </div>
    </detail-panel>
  </div>
</template>

<script>
  import panel from '../components/panel.vue'
  import detailPanel from '../components/detail-panel.vue'

  export default {
    props: [],
    components: {
      panel,
      detailPanel
    }
  }
</script>