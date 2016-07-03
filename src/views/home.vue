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
      <div slot="head">关于我们</div>
      <div slot="body">
        广州市鸿裕餐饮有限公司成立于2015年7月，注册资金人民币108万元，公司涵盖酒店管理、中西餐饮管理、团体供膳、茶馆服务经营四大板块，总部位于广州市增城区。
        <br/>
        公司技术力量雄厚，营养师、川湘粤厨师、面点师、烧腊师、风味档师傅等合理配置。为众多的食堂和快餐连锁分店等终端提供了强有力的技术保障。
      </div>
    </detail-panel>

    <detail-panel>
      <div slot="head">公司剪影</div>
      <div slot="body">
        <ul class="photos">
          <li><img src="../assets/img/intro/1.jpg" alt=""></li>
          <li><img src="../assets/img/intro/2.jpg" alt=""></li>
          <li><img src="../assets/img/intro/3.jpg" alt=""></li>
          <li><img src="../assets/img/intro/24.pic.jpg" alt=""></li>
          <li><img src="../assets/img/intro/27.pic.jpg" alt=""></li>
          <li><img src="../assets/img/intro/28.pic.jpg" alt=""></li>
          <li><img src="../assets/img/intro/31.pic.jpg" alt=""></li>
          <li><img src="../assets/img/intro/34.pic.jpg" alt=""></li>
          <li><img src="../assets/img/intro/44.pic.jpg" alt=""></li>
          <li><img src="../assets/img/intro/46.pic.jpg" alt=""></li>
          <li><img src="../assets/img/intro/61.pic.jpg" alt=""></li>
          <li><img src="../assets/img/intro/73.pic.jpg" alt=""></li>
          <li><img src="../assets/img/intro/77.pic.jpg" alt=""></li>
        </ul>
      </div>
    </detail-panel>

    <detail-panel>
      <div slot="head">资质荣誉</div>
      <div slot="body">
        <div class="credit-list">
          <img src="../assets/img/credit-2.jpg" alt="">
          <img src="../assets/img/credit-1.jpg" alt="" style="width: 400px;padding-top: 45px;">
        </div>
        <img src="../assets/img/25.pic.png" alt="" style="width: 628px;margin-top: 30px;">
      </div>
    </detail-panel>

    <detail-panel>
      <div slot="head">新闻中心</div>
      <div slot="body">
        <ul class="channel-list">
          <li><a v-link="{ name: 'news', params: { id: 0 }}">广州鸿裕餐饮公司，告诉您一次性发泡塑料餐具“重出江湖”，市民顾虑饮食安全。</a></li>
          <li><a v-link="{ name: 'news', params: { id: 1 }}">掌握这些家庭生活常识，居家更简单</a></li>
          <li><a v-link="{ name: 'news', params: { id: 2 }}">饮食之道，要注意以下方面</a></li>
          <li><a v-link="{ name: 'news', params: { id: 3 }}">普通人不可不知的养生秘诀</a></li>
        </ul>
      </div>
    </detail-panel>
  </div>
</template>

<style lang="less" rel="stylesheet/less">
  .photos {
    overflow: hidden;
    li {
      width: 33.3%;
      float: left;
      padding-right: 20px;
      margin-bottom: 20px;

      img {
        width: 100%;
      }
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
