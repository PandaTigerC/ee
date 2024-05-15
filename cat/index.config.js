var index_config = {
    // proxy: {
    //     host: '192.168.2.2',
    //     port: 7893,
    //     // auth: {
    //     //     username: null,
    //     //     password: null,
    //     // },
    //     protocol: 'http',
    // }, //TG搜和PikPak需要代理，设备自带代理无需打开，否则需要这个配置
    telegram: [
        {
            key: 'PikPakShareChannel',
            name: 'PikPak云盘资源分享',
        },
        {
            key: 'Aliyun_4K_Movies',
            name: '阿里4k分享-纯搜索',
        },
        {
            key: 'aliyun4kdy',
            name: '阿里4k高清-纯搜索',
        },
    ], //key就是频道，可以添加多个，会批量搜索，name可以自定义
    urls: {
        wogg: '',
    },
    cookie: {
        iqiyi: '', //暂未实现
        youku: '',
        youku_ckey: '',
        qq: '',
        ali_token: [''], //支持 '' 或 ['','']
        quark: [''], //支持 ''
        xunlei: [
            {
                username: '+86 13800138000',
                password: 'abcd1234',
            },
        ], //如果账号是手机号 前面需要[+86 ]
        pikpak: [
            {
                username: 'abc@email.com',
                password: 'abcd1234',
            },
        ],
    },
    parse: [], //第三方解析，同安卓壳type=1类型
    alist: [
        {
            name: '🐉神族九帝',
            server: 'https://alist.shenzjd.com',
            username: '', //(用户名、密码)和token二选一，如果alist不需要鉴权，则都可以不填
            password: '',
            token: '',
        },
        {
            name: '💢repl',
            server: 'https://ali.liucn.repl.co',
        },
    ],
    rules: [
        {
            name: 'xm',
            hosts: ['kuaikan'],
            regex: [],
        },
    ],
};

module.exports = index_config;
