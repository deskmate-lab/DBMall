<template>
  <div class="comment">
    <div class="comment-header">
      <span class="title">用户评价 ({{commentInfo.cRate}})</span>
      <span class="more">更多</span>
    </div>
    <!-- 如果用户评价数cRate为0，则.comment-content不用渲染出来 -->
    <div class="comment-content" v-if="commentInfo.cRate !== 0">
      <img :src="commentInfo.list[0].user.avatar" />
      <span>{{commentInfo.list[0].user.uname}}</span>
      <p>{{commentInfo.list[0].content}}</p>
      <div>
        <span class="created-time">{{createdTime}}</span>
        <span class="style">{{commentInfo.list[0].style}}</span>
        <div class="images">
          <img :src="item" v-for="(item, index) in commentInfo.list[0].images" :key="index" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {formatDate} from 'common/utils'
  
  export default {
    name: 'DetailComment',
    props: {
      commentInfo: {
        type: Object
      }
    },
    computed: {
      createdTime() {
        // 本后台返回的时间戳，数据类型为Number，单位为s
        return formatDate(this.commentInfo.list[0].created * 1000, 'yyyy-MM-dd')
      }
    }
  }
</script>

<style scoped>
  .comment {
    padding: 20px 12px;
    border-bottom: 5px solid rgb(150, 150, 150, .12);
  }

  .comment-header {
    border-bottom: 1px solid rgb(150, 150, 150, .3);
    height: 40px;
    line-height: 30px;
  }

  .title {
    color: #333;
    font-size: 16px;
  }

  .more {
    float: right;
    position: relative;
    right: 20px;
  }

  .more::after {
    content: '';
    width: 20px;
    height: 20px;
    background: url('~assets/img/detail/more.png') 0 0/20px 20px ;
    /* 伪元素必须有定位或者转换成inline-block才能显示背景图片 */
    /* display: inline-block; */
    position: absolute;
    top: 5px;
    right: -20px;
  }

  .comment-content {
    line-height: 1.5;
    margin: 10px 0;
    
  }

  .comment-content>img {
    width: 34px;
    height: 34px;
    margin-right: 10px;
    margin-bottom: 10px;
    border-radius: 50%;
    vertical-align: middle;
  }

  .comment-content p {
    text-align: justify;
    text-justify: distribute-all-lines;
  }

  .comment-content>span {
    color: #333;
    font-size: 16px;
  }

  .created-time,
  .style {
    color: #999;
    font-size: 12px;
    margin-right: 8px;
  }

  .images img {
    width: 28vw;
    height: 28vw;
    margin: 5px 5px 0 0;
}
</style>
