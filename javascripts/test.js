angular.module('app',[])
.controller('testB', ['$scope', function($scope) {
    /**
     * scrool window!!!!!!!!!!!!!
     */
    $scope.datas = [
      {
        text: "內容內容內容內容內容內容內容內容內容內容內容內容內容內容"
      },
      {
        text: "內容內容內容內容內容內容內容內容內容內容內容內容內容內容"
      },
      {
        text: "內容內容內容內容內容內容內容內容內容內容內容內容內容內容"
      },
      {
        text: "內容內容內容內容內容內容內容內容內容內容內容內容內容內容"
      },
      {
        text: "內容內容內容內容內容內容內容內容內容內容內容內容內容內容"
      },
      {
        text: "內容內容內容內容內容內容內容內容內容內容內容內容內容內容"
      },
      {
        text: "內容內容內容內容內容內容內容內容內容內容內容內容內容內容"
      },
      {
        text: "內容內容內容內容內容內容內容內容內容內容內容內容內容內容"
      },
      {
        text: "內容內容內容內容內容內容內容內容內容內容內容內容內容內容"
      },
      {
        text: "內容內容內容內容內容內容內容內容內容內容內容內容內容內容"
      }
    ];
    
    $(window).scroll( function(e) {
      scrollHeight = document.body.scrollHeight  //內文總高
      scrollTop = $(this).scrollTop();  //"被捲去"的高
      innerHeight = $(this).innerHeight();  //目前畫面上的高
      // console.log(scrollHeight);
      // console.log(scrollTop);
      // console.log(innerHeight);
      if(scrollHeight - scrollTop  == innerHeight){
        addData();
      }
    });

    function addData(){
      var newData = [{text: "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"}];
      $scope.datas = $scope.datas.concat(newData);
      $scope.$apply();
    }


    /**
     * scroll contain element
     */
    
    var lists = $('.lists');
    $('.active').click(function(){
      lists.toggleClass('lists-active');
    })

    lists.scrollLock();
    var count = 0;
    lists.scroll( function(e) {
      console.log($(this));
      scrollHeight = $(this)[0].scrollHeight;  //內文總高
      scrollTop = $(this).scrollTop();  //"被捲去"的高
      innerHeight = $(this).innerHeight();  //目前畫面上的高
      console.log(scrollHeight);
      console.log(scrollTop);
      console.log(innerHeight);
      if(scrollHeight - scrollTop  == innerHeight){
        count++ ;
        $(this).append('<div class="list"><img src="./images/avatar92.jpg" alt=""><p>NEW'+count+'文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字</p></div>');
      }
    });
  }
])

