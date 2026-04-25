var posts=["2026/04/25/不知道多少次测试/","2026/04/25/我的第一篇/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };