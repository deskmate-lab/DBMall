<template>
  <div class="wrapper" ref="wrapper">
    <ul class="content">
      <li>购物车商品1</li>
      <li>购物车商品2</li>
      <li>购物车商品3</li>
      <li>购物车商品4</li>
      <li>购物车商品5</li>
      <li>购物车商品6</li>
      <li>购物车商品7</li>
      <li>购物车商品8</li>
      <li>购物车商品9</li>
      <li>购物车商品10</li>
      <li>购物车商品11</li>
      <li>购物车商品12</li>
      <li>购物车商品13</li>
      <li>购物车商品14</li>
      <li>购物车商品15</li>
      <li>购物车商品16</li>
      <li>购物车商品17</li>
      <li>购物车商品18</li>
      <li>购物车商品19</li>
      <li>购物车商品20</li>
      <li>购物车商品21</li>
      <li>购物车商品22</li>
      <li>购物车商品23</li>
      <li>购物车商品24</li>
      <li>购物车商品25</li>
      <li>购物车商品26</li>
      <li>购物车商品27</li>
      <li>购物车商品28</li>
      <li>购物车商品29</li>
      <li>购物车商品30</li>
      <li>购物车商品31</li>
      <li>购物车商品32</li>
      <li>购物车商品33</li>
      <li>购物车商品34</li>
      <li>购物车商品35</li>
      <li>购物车商品36</li>
      <li>购物车商品37</li>
      <li>购物车商品38</li>
      <li>购物车商品39</li>
      <li>购物车商品40</li>
      <li>购物车商品41</li>
      <li>购物车商品42</li>
      <li>购物车商品43</li>
      <li>购物车商品44</li>
      <li>购物车商品45</li>
      <li>购物车商品46</li>
      <li>购物车商品47</li>
      <li>购物车商品48</li>
      <li>购物车商品49</li>
      <li>购物车商品50</li>
    </ul>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Cart",
    mounted() {
      const bs = new BScroll(this.$refs.wrapper, {
        probeType: 3,
        pullUpLoad: true
      });
      // bs.on('scroll', pos => {
      //   console.log(pos);
      // })
      bs.on('pullingUp', () => {
        console.log('上拉加载更多');
        bs.finishPullUp()
      })
    }
  };
</script>

<style scoped>
  .wrapper {
    height: 200px;
    background-color: #6cf;
    overflow: hidden;
  }
</style>
