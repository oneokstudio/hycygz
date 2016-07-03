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
        <ul class="jobs">
          <li>
            <h4>食堂经理：1名</h4>
            <p>30-45岁，身体健康，责任心强，3年以上大中型餐饮的厨房管理经验，对食堂的食品安全、生产安全、消防安全、出品监督、团队建设、成本控制、员工评估和激励及行政管理有一定的能力。</p>
          </li>
          <li>
            <h4>中餐厨师</h4>
            <p>28岁以上，身体健康，责任心强，3年以上大中型餐饮的厨房工作经验，擅长粤菜制作，对厨房的食品安全、卫生清洁等有独特的见解。</p>
          </li>
        </ul>
      </div>
    </detail-panel>
  </div>
</template>

<style lang="less" rel="stylesheet/less">
  .jobs {
    li {
      margin-bottom: 30px;
    }
  }
</style>

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