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
      <div slot="head">公司简介</div>
      <div slot="body" class="about-content">
        <p>
          <strong><img alt="" src="../assets/img/about-cover.jpeg" style="width: 389px; float: right; height: 243px; margin-left: 5px; margin-right: 5px">&nbsp;&nbsp;&nbsp; 广州市鸿裕餐饮有限公司</strong>成立于2015年7月，注册资金人民币108万元，公司涵盖酒店管理、中西餐饮管理、团体供膳、茶馆服务经营四大板块，总部位于广州市增城区。<br>
          <br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 公司注重员工思想觉悟的提高和道德品质的培养，在设有工会、互助基金会等群众社团的前提下，更建立了党支部和团支部。<br>
          <br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 公司技术力量雄厚，营养师、川湘粤厨师、面点师、烧腊师、风味档师傅等合理配置。为众多的食堂和快餐连锁分店等终端提供了强有力的技术保障。<br>
          <br>
          <strong>团体供膳：<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </strong>公司先后在多地开辟了市场。目前，公司拥有小学、初中、高中、技校、大学以及工厂等多家食堂的经营管理权，并拥有高、中级食品安全管理员、公共营养师、各菜系厨师、点心师等300多名专业的服务团队。<br>
          &nbsp;<br>
          <strong>快餐连锁：<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </strong>主要以中式快餐为主，并为顾客提供一个休闲的特殊就餐环境。随着国家经济建设的发展，人民生活水平的提高及生活节奏的加快，人们开始注重营养健康食品，要求享受速度快捷、环境优雅的就餐过程。基于这一理念，公司在“低消费、快速度、多样化、精出品”上大做文章，坚持“百分百顾客满意”的服务目标，不断的完善职工队伍建设，以中国传统饮食文化为基础，由此推动新的经济环境中的饮食服务模式，力争成为现代餐饮服务品牌。在连锁快餐配套环节中，环环相扣，既在现代快餐食品中强化了绿色观念，又为食品加工的安全卫生提供了可靠的保证。连锁快餐一体化经营，合理利用了品牌资源也优化了成本结构。<br>
          　　<br>
          <strong>团体送餐：<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </strong>鸿裕餐饮团体送餐重点承榄写字楼大厦、企业工厂送餐（配餐）业务。不断探索现代化快餐道路，逐渐实现了由传统快餐向现代快餐的转变。威士丁团体送餐重视食品卫生管理和饭菜质量管理，始终在、色、香、味、形上下功夫，在清洁卫生上用力气，在饭菜创新上做文章，做到始终以卫生安全为首、饭菜质量为主、就餐者满意为本，靠食品卫生保证，靠饭菜质量立足、靠不断创新取胜、靠品种花样调剂、靠风味特点补充，从而以创造优良、放心品质为企业责任，为广大消费者提供质优放心的产品。<br>
          <br>
          <div class="about-list">
            <img src="../assets/img/about-1.jpg" alt="">
            <img src="../assets/img/about-2.jpg" alt="">
            <img src="../assets/img/about-3.jpg" alt="">
          </div>
          <br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 公司设置有专门的物流配送系统，通过GPS定位，随时掌握每辆车以及每份菜的位置，为各企事业单位提供快捷、免费的物流配送服务，保证产品及相关物料安全、及时送达各指定地点。<br>
          <br>
          <strong>顾客第一、服务第一、质量第一、安全第一，鸿裕饮食有限公司辛勤磨砺，博采众长，已成为您生活中值得信赖的餐饮品牌。</strong><br>
          &nbsp;</p>
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
