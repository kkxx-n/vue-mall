<template>
  <div class="wrapper">
    <ul class="content">
      <li>betterScorrl1</li>
      <li>betterScorrl2</li>
      <li>betterScorrl3</li>
      <li>betterScorrl4</li>
      <li>betterScorrl5</li>
      <li>betterScorrl6</li>
      <li>betterScorrl7</li>
      <li>betterScorrl8</li>
      <li>betterScorrl9</li>
      <li>betterScorrl10</li>
      <li>betterScorrl11</li>
      <li>betterScorrl12</li>
      <li>betterScorrl13</li>
      <li>betterScorrl14</li>
      <li>betterScorrl15</li>
      <li>betterScorrl16</li>
      <li>betterScorrl17</li>
      <li>betterScorrl18</li>
      <li>betterScorrl19</li>
      <li>betterScorrl20</li>
      <li>betterScorrl21</li>
      <li>betterScorrl22</li>
      <li>betterScorrl23</li>
      <li>betterScorrl24</li>
      <li>betterScorrl25</li>
      <li>betterScorrl26</li>
      <li>betterScorrl27</li>
      <li>betterScorrl28</li>
      <li>betterScorrl29</li>
      <li>betterScorrl30</li>
      <li>betterScorrl31</li>
      <li>betterScorrl32</li>
      <li>betterScorrl33</li>
      <li>betterScorrl34</li>
      <li>betterScorrl35</li>
      <li>betterScorrl36</li>
      <li>betterScorrl37</li>
      <li>betterScorrl38</li>
      <li>betterScorrl39</li>
      <li>betterScorrl40</li>
      <li>betterScorrl41</li>
      <li>betterScorrl42</li>
      <li>betterScorrl43</li>
      <li>betterScorrl44</li>
      <li>betterScorrl45</li>
      <li>betterScorrl46</li>
      <li>betterScorrl47</li>
      <li>betterScorrl48</li>
      <li>betterScorrl49</li>
      <li>betterScorrl50</li>
      <li>betterScorrl51</li>
      <li>betterScorrl52</li>
      <li>betterScorrl53</li>
      <li>betterScorrl54</li>
      <li>betterScorrl55</li>
      <li>betterScorrl56</li>
      <li>betterScorrl57</li>
      <li>betterScorrl58</li>
      <li>betterScorrl59</li>
      <li>betterScorrl60</li>
      <li>betterScorrl61</li>
      <li>betterScorrl62</li>
      <li>betterScorrl63</li>
      <li>betterScorrl64</li>
      <li>betterScorrl65</li>
      <li>betterScorrl66</li>
      <li>betterScorrl67</li>
      <li>betterScorrl68</li>
      <li>betterScorrl69</li>
      <li>betterScorrl70</li>
      <li>betterScorrl71</li>
      <li>betterScorrl72</li>
      <li>betterScorrl73</li>
      <li>betterScorrl74</li>
      <li>betterScorrl75</li>
      <li>betterScorrl76</li>
      <li>betterScorrl77</li>
      <li>betterScorrl78</li>
      <li>betterScorrl79</li>
      <li>betterScorrl80</li>
      <li>betterScorrl81</li>
      <li>betterScorrl82</li>
      <li>betterScorrl83</li>
      <li>betterScorrl84</li>
      <li>betterScorrl85</li>
      <li>betterScorrl86</li>
      <li>betterScorrl87</li>
      <li>betterScorrl88</li>
      <li>betterScorrl89</li>
      <li>betterScorrl90</li>
      <li>betterScorrl91</li>
      <li>betterScorrl92</li>
      <li>betterScorrl93</li>
      <li>betterScorrl94</li>
      <li>betterScorrl95</li>
      <li>betterScorrl96</li>
      <li>betterScorrl97</li>
      <li>betterScorrl98</li>
      <li>betterScorrl99</li>
      <li>betterScorrl100</li>
    </ul>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";

BScroll.use(Pullup);

export default {
  name: "Category",
  data() {
    return {
      srcoll: null
    };
  },
  created() {},
  mounted() {
    this.srcoll = new BScroll(document.querySelector(".wrapper"), {
      probeType: 3,
      pullUpLoad: true
    })
    // this.srcoll.on("scroll", position => {
    //   console.log(position);
    // })
    this.srcoll.on('pullingUp',() =>{
      console.log('上拉加载更多')
    })
  }
};
</script>

<style scoped>
.wrapper {
  height: 200px;
  background-color: red;
  /* overflow: hidden; */
}
</style>
