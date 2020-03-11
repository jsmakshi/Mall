//index.js
//获取应用实例
const app = getApp()
import util from "../../utils/util.js";
Page({
  data: {
    menuNavIndex:0,
    menuNav:[
      {
        id:1,
        name:"当季新品",
        icon:"../../images/nav1.png"
      },
      {
        id: 2,
        name: "热卖推荐",
        icon: "../../images/nav2.png"
      },
      {
        id: 3,
        name: "现烤面包",
        icon: "../../images/nav3.png"
      },
      {
        id: 4,
        name: "大师咖啡",
        icon: "../../images/nav4.png"
      },
      {
        id: 5,
        name: "臻选茶饮",
        icon: "../../images/nav5.png"
      },
      {
        id: 6,
        name: "当季新品",
        icon: "../../images/nav6.png"
      },
      {
        id: 7,
        name: "当季新品1",
        icon: "../../images/nav6.png"
      },
      {
        id: 8,
        name: "当季新品2",
        icon: "../../images/nav6.png"
      },
      {
        id: 9,
        name: "当季新品3",
        icon: "../../images/nav6.png"
      },
      {
        id: 10,
        name: "当季新品4",
        icon: "../../images/nav6.png"
      },
    ],
    banner: ["../../images/banner.png", "../../images/banner.png", "../../images/banner.png", "../../images/banner.png"],
    list:[
      {
        title:"当季新品",
        id:1,
        items:[
          {
            pic:"../../images/item.png",
            name:"麋鹿姜饼拿铁",
            desc:"很有艺术感的麋鹿蛋糕，鹿角用巧克力做的果酱淋在上面",
            price:"58",
            id: 1
          },
          {
            pic: "../../images/item.png",
            name: "麋鹿姜饼拿铁",
            desc: "很有艺术感的麋鹿蛋糕，鹿角用巧克力做的果酱淋在上面",
            price: "58",
            id: 2
          },
          {
            pic: "../../images/item.png",
            name: "麋鹿姜饼拿铁",
            desc: "很有艺术感的麋鹿蛋糕，鹿角用巧克力做的果酱淋在上面",
            price: "58",
            id: 3
          },
          {
            pic: "../../images/item.png",
            name: "麋鹿姜饼拿铁",
            desc: "很有艺术感的麋鹿蛋糕，鹿角用巧克力做的果酱淋在上面",
            price: "58",
            id: 4
          },
          {
            pic: "../../images/item.png",
            name: "麋鹿姜饼拿铁",
            desc: "很有艺术感的麋鹿蛋糕，鹿角用巧克力做的果酱淋在上面",
            price: "58",
            id: 5
          },
          {
            pic: "../../images/item.png",
            name: "麋鹿姜饼拿铁",
            desc: "很有艺术感的麋鹿蛋糕，鹿角用巧克力做的果酱淋在上面",
            price: "58",
            id: 6
          }
        ]
      },
      {
        title: "热卖推荐",
        id: 2,
        items: [
          {
            pic: "../../images/item.png",
            name: "麋鹿姜饼拿铁",
            desc: "很有艺术感的麋鹿蛋糕，鹿角用巧克力做的果酱淋在上面",
            price: "58",
            id: 1
          },
          {
            pic: "../../images/item.png",
            name: "麋鹿姜饼拿铁",
            desc: "很有艺术感的麋鹿蛋糕，鹿角用巧克力做的果酱淋在上面",
            price: "58",
            id: 2
          },
          {
            pic: "../../images/item.png",
            name: "麋鹿姜饼拿铁",
            desc: "很有艺术感的麋鹿蛋糕，鹿角用巧克力做的果酱淋在上面",
            price: "58",
            id: 3
          },
          {
            pic: "../../images/item.png",
            name: "麋鹿姜饼拿铁",
            desc: "很有艺术感的麋鹿蛋糕，鹿角用巧克力做的果酱淋在上面",
            price: "58",
            id: 4
          }
        ]
      },
      {
        title: "现烤面包",
        id: 3,
        items: [
          {
            pic: "../../images/item.png",
            name: "麋鹿姜饼拿铁",
            desc: "很有艺术感的麋鹿蛋糕，鹿角用巧克力做的果酱淋在上面",
            price: "58",
            id: 1
          },
          {
            pic: "../../images/item.png",
            name: "麋鹿姜饼拿铁",
            desc: "很有艺术感的麋鹿蛋糕，鹿角用巧克力做的果酱淋在上面",
            price: "58",
            id: 2
          },
          {
            pic: "../../images/item.png",
            name: "麋鹿姜饼拿铁",
            desc: "很有艺术感的麋鹿蛋糕，鹿角用巧克力做的果酱淋在上面",
            price: "58",
            id: 3
          },
          {
            pic: "../../images/item.png",
            name: "麋鹿姜饼拿铁",
            desc: "很有艺术感的麋鹿蛋糕，鹿角用巧克力做的果酱淋在上面",
            price: "58",
            id: 4
          }
        ]
      },
      {
        title: "大师咖啡",
        id: 4,
        items: [
          {
            pic: "../../images/item.png",
            name: "麋鹿姜饼拿铁",
            desc: "很有艺术感的麋鹿蛋糕，鹿角用巧克力做的果酱淋在上面",
            price: "58",
            id: 1
          },
          {
            pic: "../../images/item.png",
            name: "麋鹿姜饼拿铁",
            desc: "很有艺术感的麋鹿蛋糕，鹿角用巧克力做的果酱淋在上面",
            price: "58",
            id: 2
          },
          {
            pic: "../../images/item.png",
            name: "麋鹿姜饼拿铁",
            desc: "很有艺术感的麋鹿蛋糕，鹿角用巧克力做的果酱淋在上面",
            price: "58",
            id: 3
          },
          {
            pic: "../../images/item.png",
            name: "麋鹿姜饼拿铁",
            desc: "很有艺术感的麋鹿蛋糕，鹿角用巧克力做的果酱淋在上面",
            price: "58",
            id: 4
          }
        ]
      },
      {
        title: "臻选茶饮",
        id: 5,
        items: [
          {
            pic: "../../images/item.png",
            name: "麋鹿姜饼拿铁",
            desc: "很有艺术感的麋鹿蛋糕，鹿角用巧克力做的果酱淋在上面",
            price: "58",
            id: 1
          },
          {
            pic: "../../images/item.png",
            name: "麋鹿姜饼拿铁",
            desc: "很有艺术感的麋鹿蛋糕，鹿角用巧克力做的果酱淋在上面",
            price: "58",
            id: 2
          },
          {
            pic: "../../images/item.png",
            name: "麋鹿姜饼拿铁",
            desc: "很有艺术感的麋鹿蛋糕，鹿角用巧克力做的果酱淋在上面",
            price: "58",
            id: 3
          },
          {
            pic: "../../images/item.png",
            name: "麋鹿姜饼拿铁",
            desc: "很有艺术感的麋鹿蛋糕，鹿角用巧克力做的果酱淋在上面",
            price: "58",
            id: 4
          }
        ]
      },
      {
        title: "臻选茶饮",
        id: 6,
        items: [
          {
            pic: "../../images/item.png",
            name: "麋鹿姜饼拿铁",
            desc: "很有艺术感的麋鹿蛋糕，鹿角用巧克力做的果酱淋在上面",
            price: "58",
            id: 1
          },
          {
            pic: "../../images/item.png",
            name: "麋鹿姜饼拿铁",
            desc: "很有艺术感的麋鹿蛋糕，鹿角用巧克力做的果酱淋在上面",
            price: "58",
            id: 2
          },
          {
            pic: "../../images/item.png",
            name: "麋鹿姜饼拿铁",
            desc: "很有艺术感的麋鹿蛋糕，鹿角用巧克力做的果酱淋在上面",
            price: "58",
            id: 3
          },
          {
            pic: "../../images/item.png",
            name: "麋鹿姜饼拿铁",
            desc: "很有艺术感的麋鹿蛋糕，鹿角用巧克力做的果酱淋在上面",
            price: "58",
            id: 4
          }
        ]
      },
      {
        title: "当季新品1",
        id: 7,
        items: [
          {
            pic: "../../images/item.png",
            name: "麋鹿姜饼拿铁",
            desc: "很有艺术感的麋鹿蛋糕，鹿角用巧克力做的果酱淋在上面",
            price: "58",
            id: 1
          },
          {
            pic: "../../images/item.png",
            name: "麋鹿姜饼拿铁",
            desc: "很有艺术感的麋鹿蛋糕，鹿角用巧克力做的果酱淋在上面",
            price: "58",
            id: 2
          },
          {
            pic: "../../images/item.png",
            name: "麋鹿姜饼拿铁",
            desc: "很有艺术感的麋鹿蛋糕，鹿角用巧克力做的果酱淋在上面",
            price: "58",
            id: 3
          },
          {
            pic: "../../images/item.png",
            name: "麋鹿姜饼拿铁",
            desc: "很有艺术感的麋鹿蛋糕，鹿角用巧克力做的果酱淋在上面",
            price: "58",
            id: 4
          }
        ]
      },
      {
        title: "当季新品2",
        id: 8,
        items: [
          {
            pic: "../../images/item.png",
            name: "麋鹿姜饼拿铁",
            desc: "很有艺术感的麋鹿蛋糕，鹿角用巧克力做的果酱淋在上面",
            price: "58",
            id: 1
          },
          {
            pic: "../../images/item.png",
            name: "麋鹿姜饼拿铁",
            desc: "很有艺术感的麋鹿蛋糕，鹿角用巧克力做的果酱淋在上面",
            price: "58",
            id: 2
          },
          {
            pic: "../../images/item.png",
            name: "麋鹿姜饼拿铁",
            desc: "很有艺术感的麋鹿蛋糕，鹿角用巧克力做的果酱淋在上面",
            price: "58",
            id: 3
          },
          {
            pic: "../../images/item.png",
            name: "麋鹿姜饼拿铁",
            desc: "很有艺术感的麋鹿蛋糕，鹿角用巧克力做的果酱淋在上面",
            price: "58",
            id: 4
          }
        ]
      },
      {
        title: "当季新品3",
        id: 9,
        items: [
          {
            pic: "../../images/item.png",
            name: "麋鹿姜饼拿铁",
            desc: "很有艺术感的麋鹿蛋糕，鹿角用巧克力做的果酱淋在上面",
            price: "58",
            id: 1
          },
          {
            pic: "../../images/item.png",
            name: "麋鹿姜饼拿铁",
            desc: "很有艺术感的麋鹿蛋糕，鹿角用巧克力做的果酱淋在上面",
            price: "58",
            id: 2
          },
          {
            pic: "../../images/item.png",
            name: "麋鹿姜饼拿铁",
            desc: "很有艺术感的麋鹿蛋糕，鹿角用巧克力做的果酱淋在上面",
            price: "58",
            id: 3
          },
          {
            pic: "../../images/item.png",
            name: "麋鹿姜饼拿铁",
            desc: "很有艺术感的麋鹿蛋糕，鹿角用巧克力做的果酱淋在上面",
            price: "58",
            id: 4
          }
        ]
      },
      {
        title: "当季新品4",
        id: 10,
        items: [
          {
            pic: "../../images/item.png",
            name: "麋鹿姜饼拿铁",
            desc: "很有艺术感的麋鹿蛋糕，鹿角用巧克力做的果酱淋在上面",
            price: "58",
            id: 1
          },
          {
            pic: "../../images/item.png",
            name: "麋鹿姜饼拿铁",
            desc: "很有艺术感的麋鹿蛋糕，鹿角用巧克力做的果酱淋在上面",
            price: "58",
            id: 2
          },
          {
            pic: "../../images/item.png",
            name: "麋鹿姜饼拿铁",
            desc: "很有艺术感的麋鹿蛋糕，鹿角用巧克力做的果酱淋在上面",
            price: "58",
            id: 3
          },
          {
            pic: "../../images/item.png",
            name: "麋鹿姜饼拿铁",
            desc: "很有艺术感的麋鹿蛋糕，鹿角用巧克力做的果酱淋在上面",
            price: "58",
            id: 4
          }
        ]
      },
    ],
    toView:"",
    toNavView:"",
    scrollTop:0
  },
  behaviors:[],
  onLoad: function () {
    const query = wx.createSelectorQuery();
    this.data.list.forEach((item,index,list) => {
      query.select("#mai" + index).boundingClientRect((res) => {
        item.offsetTop = res.top+4;
        item.height = res.height;
        if (index === list.length - 1) {
          this.setData({
            list: this.data.list
          });
        }
        // console.log(res)
      }).exec()
      console.log(item)
    });
  },
  scrollList(e){
    this.gotoUnlock(e);
  },
  gotoUnlock: util.debounce(function (e) {
    let scrollTop = e[0].detail.scrollTop;
    this.data.list.forEach((item,index) => {
      if (scrollTop >= (item.offsetTop - 157.5) && scrollTop <= (item.offsetTop - 157.5 + item.height)) {
        console.log((item.offsetTop - 210), (item.offsetTop - 210 + item.height))
        this.setData({
          menuNavIndex: index,
          toNavView:"nav"+index
        },_ => {
          if (index == 0) {
            this.setData({
              scrollTop: 0
            });
          }
        });
      }
    })
  },0),
  menuClick(e){
    let index = e.currentTarget.dataset.index;
    console.log(e,'index')
    this.setData({
      menuNavIndex:index,
      toView:"mai"+index
    })
    console.log(this.data.menuNavIndex)
    console.log(e)
  }
})
