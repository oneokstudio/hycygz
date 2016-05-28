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
      <div slot="head">在招职位：</div>
      <div slot="body">
        暂无职位招聘，敬请期待！
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