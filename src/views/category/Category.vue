<template>
  <!-- <div>分类</div> -->
  <div class="wrapper" ref="wrapper">
    <ul class="content">
      <div @click="btnClick">按钮</div>
      <li>商品数据1</li>
      <li>商品数据2</li>
      <li>商品数据3</li>
      <li>商品数据4</li>
      <li>商品数据5</li>
      <li>商品数据6</li>
      <li>商品数据7</li>
      <li>商品数据8</li>
      <li>商品数据9</li>
      <li>商品数据10</li>
      <li>商品数据11</li>
      <li>商品数据12</li>
      <li>商品数据13</li>
      <li>商品数据14</li>
      <li>商品数据15</li>
      <li>商品数据16</li>
      <li>商品数据17</li>
      <li>商品数据18</li>
      <li>商品数据19</li>
      <li>商品数据20</li>
      <li>商品数据21</li>
      <li>商品数据22</li>
      <li>商品数据23</li>
      <li>商品数据24</li>
      <li>商品数据25</li>
      <li>商品数据26</li>
      <li>商品数据27</li>
      <li>商品数据28</li>
      <li>商品数据29</li>
      <li>商品数据30</li>
      <li>商品数据31</li>
      <li>商品数据32</li>
      <li>商品数据33</li>
      <li>商品数据34</li>
      <li>商品数据35</li>
      <li>商品数据36</li>
      <li>商品数据37</li>
      <li>商品数据38</li>
      <li>商品数据39</li>
      <li>商品数据40</li>
      <li>商品数据41</li>
      <li>商品数据42</li>
      <li>商品数据43</li>
      <li>商品数据44</li>
      <li>商品数据45</li>
      <li>商品数据46</li>
      <li>商品数据47</li>
      <li>商品数据48</li>
      <li>商品数据49</li>
      <li>商品数据50</li>
      <li>商品数据51</li>
      <li>商品数据52</li>
      <li>商品数据53</li>
      <li>商品数据54</li>
      <li>商品数据55</li>
      <li>商品数据56</li>
      <li>商品数据57</li>
      <li>商品数据58</li>
      <li>商品数据59</li>
      <li>商品数据60</li>
      <li>商品数据61</li>
      <li>商品数据62</li>
      <li>商品数据63</li>
      <li>商品数据64</li>
      <li>商品数据65</li>
      <li>商品数据66</li>
      <li>商品数据67</li>
      <li>商品数据68</li>
      <li>商品数据69</li>
      <li>商品数据70</li>
      <li>商品数据71</li>
      <li>商品数据72</li>
      <li>商品数据73</li>
      <li>商品数据74</li>
      <li>商品数据75</li>
      <li>商品数据76</li>
      <li>商品数据77</li>
      <li>商品数据78</li>
      <li>商品数据79</li>
      <li>商品数据80</li>
      <li>商品数据81</li>
      <li>商品数据82</li>
      <li>商品数据83</li>
      <li>商品数据84</li>
      <li>商品数据85</li>
      <li>商品数据86</li>
      <li>商品数据87</li>
      <li>商品数据88</li>
      <li>商品数据89</li>
      <li>商品数据90</li>
      <li>商品数据91</li>
      <li>商品数据92</li>
      <li>商品数据93</li>
      <li>商品数据94</li>
      <li>商品数据95</li>
      <li>商品数据96</li>
      <li>商品数据97</li>
      <li>商品数据98</li>
      <li>商品数据99</li>
      <li>商品数据100</li>
    </ul>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Category",
    mounted() {
      console.log(this.$refs.wrapper);
      const bs = new BScroll(this.$refs.wrapper, {
        probeType: 2,
        pullUpLoad: true,
        click: true
      });
      // bs.on('scroll', pos => {
      //   console.log(pos);
      // })
      bs.on('pullingUp', () => {
        console.log('上拉加载更多');
        bs.finishPullUp();
      })
    },
    methods: {
      btnClick() {
        console.log('btnClick');
      }
    }
  };
</script>

<style scoped>
  .wrapper {
    height: 200px;
    background-color: pink;
    overflow: hidden;
  }
</style>
