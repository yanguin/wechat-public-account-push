/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx4409405f13a419b9',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'fca5bfd393490bcabd625459821ec072',

  PROVINCE: '湖南',
  CITY: '衡阳',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ognbQ6o9y3B6DUuDvXCBqxfiXJdU',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'fJjEyKwGBy35e7JqhFGVG_EUTe3oo0HXh8sm0djseaA',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '06-27',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '2003', date: '05-28',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '花', year: '1996', date: '06-27',
        },
        {
          type: '节日', name: '在一起纪念日', year: '2021', date: '05-20',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2021-05-20' },
        // 结婚纪念日
       
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'ZnzJ4ZKw6urfWGoE8xu49IuhYTcwcbJ5X58t6PVuN-4',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ognbQ6o9y3B6DUuDvXCBqxfiXJdU',
    }
  ],

}

module.exports = USER_CONFIG

