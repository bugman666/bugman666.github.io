var posts=["2026/04/25/入站必看/","2026/04/26/关于节点/","2026/04/26/galgame推荐及获取方法/","2026/04/26/动漫推荐/","2026/04/26/逝去的历史-花简空间/","2026/04/25/不知道多少次测试/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };