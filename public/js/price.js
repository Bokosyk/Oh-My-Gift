$(document).ready(function () {
    console.log('login.js loaded');
    let anyBtn = $(".btn-success");
  
    anyBtn.on("click", function (e) {
      e.preventDefault();
      console.log("Clickeed");
      var fired_button = this.id;
      console.log(fired_button);
      queryTest(fired_button);
    });
  
    //need to fix this
    function queryTest(category) {
      $.get("/api/omgTest", {
        Category: category
  
      }).then(function (data) {
        console.log(data, "Query test");
  
      })
    }
  }); 