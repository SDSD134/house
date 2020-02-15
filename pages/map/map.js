Page({
  data: {
    iconList: [{
      icon: 'cardboardfill',
      color: 'red',
      name: '公交'
    }, {
      icon: 'recordfill',
      color: 'orange',
      name: '学校'
    }, {
      icon: 'picfill',
      color: 'yellow',
      name: '餐饮'
    }, {
      icon: 'noticefill',
      color: 'olive',
      name: '购物'
    }, {
      icon: 'upstagefill',
      color: 'cyan',
      name: '医院'
    }],
    gridCol: 5,
    skin: true,
    
  },
  onLoad: function () {
    var self = this;
    this.mapCtx = wx.createMapContext('myMap');
    wx.getLocation({
      type: 'gcj02',
      success(res) {
        self.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          markers: [{
            id: 1,
            latitude: res.latitude,
            longitude: res.longitude,
            // iconPath: '/image/post.png',
          }
          ],
        });
      }
    })
  },
  onTabsItemTap: function (event) {
    let index = event.currentTarget.dataset.index;
    // this.setData({
    //   currentTabIndex: index
    // })
    if(index==0){
        var self = this;
        this.mapCtx = wx.createMapContext('myMap');
        wx.getLocation({
          type: 'gcj02',
          success(res) {
            self.setData({
              latitude: res.latitude,
              longitude: res.longitude,
              markers: [{
                id: 1,
                latitude: res.latitude,
                longitude: res.longitude,
                // iconPath: '/image/post3.png',
              },
              {
                id: 2,
                latitude: res.latitude,
                longitude: res.longitude + 0.01,
                iconPath: '/image/post3.png',
                },
               {
                  id: 3,
                  latitude: res.latitude,
                  longitude: res.longitude + 0.001,
                  iconPath: '/image/post3.png',
                },
                {
                  id: 4,
                  latitude: res.latitude,
                  longitude: res.longitude + 0.005,
                  iconPath: '/image/post3.png',
                }
              ],
            });
          }
        })
    } 
    if (index == 1) {
      var self = this;
      this.mapCtx = wx.createMapContext('myMap');
      wx.getLocation({
        type: 'gcj02',
        success(res) {
          self.setData({
            latitude: res.latitude,
            longitude: res.longitude,
            markers: [{
              id: 1,
              latitude: res.latitude,
              longitude: res.longitude,
              // iconPath: '/image/post4.png',
            },
            {
              id: 2,
              latitude: res.latitude,
              longitude: res.longitude + 0.001,
              iconPath: '/image/post4.png',
            },
            {
              id: 3,
              latitude: res.latitude,
              longitude: res.longitude + 0.005,
              iconPath: '/image/post4.png',
            }
            ],
          });
        }
      })
    }
    if (index == 2) {
      var self = this;
      this.mapCtx = wx.createMapContext('myMap');
      wx.getLocation({
        type: 'gcj02',
        success(res) {
          self.setData({
            latitude: res.latitude,
            longitude: res.longitude,
            markers: [{
              id: 1,
              latitude: res.latitude,
              longitude: res.longitude,
              // iconPath: '/image/post1.png',
            },
            {
              id: 2,
              latitude: res.latitude,
              longitude: res.longitude + 0.01,
              iconPath: '/image/post1.png',
            },
            {
              id: 3,
              latitude: res.latitude,
              longitude: res.longitude + 0.001,
              iconPath: '/image/post1.png',
            }
            ],
          });
        }
      })
    }
    if (index == 3) {
      var self = this;
      this.mapCtx = wx.createMapContext('myMap');
      wx.getLocation({
        type: 'gcj02',
        success(res) {
          self.setData({
            latitude: res.latitude,
            longitude: res.longitude,
            markers: [{
              id: 1,
              latitude: res.latitude,
              longitude: res.longitude,
              // iconPath: '/image/location.png',
            },
            {
              id: 2,
              latitude: res.latitude,
              longitude: res.longitude + 0.01,
              iconPath: '/image/location.png',
            },
            {
              id: 3,
              latitude: res.latitude,
              longitude: res.longitude + 0.001,
              iconPath: '/image/location.png',
            }
            ],
          });
        }
      })
    }
    if (index == 4) {
      var self = this;
      this.mapCtx = wx.createMapContext('myMap');
      wx.getLocation({
        type: 'gcj02',
        success(res) {
          self.setData({
            latitude: res.latitude,
            longitude: res.longitude,
            markers: [{
              id: 1,
              latitude: res.latitude,
              longitude: res.longitude,
              // iconPath: '/image/post3.png',
            },
            {
              id: 2,
              latitude: res.latitude,
              longitude: res.longitude + 0.003,
              iconPath: '/image/post2.png',
            },
            {
              id: 3,
              latitude: res.latitude,
              longitude: res.longitude + 0.001,
              iconPath: '/image/post2.png',
            },
            {
              id: 4,
              latitude: res.latitude,
              longitude: res.longitude + 0.005,
              iconPath: '/image/post2.png',
            }
            ],
          });
        }
      })
    }
  },

  
})

