/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "2f81cfc879ef5d336c411ad66b34f360"
  },
  {
    "url": "academy/index.html",
    "revision": "d4a4525f50ab23747002c1974989a7a9"
  },
  {
    "url": "assets/css/0.styles.8ead931b.css",
    "revision": "b6a1efa975a01ac3fad945bd58f15f0c"
  },
  {
    "url": "assets/img/codemotion.35b040aa.png",
    "revision": "35b040aaaa58bdb8efd648aac0c0f0d9"
  },
  {
    "url": "assets/img/event-1.20295b7b.jpg",
    "revision": "20295b7b539fea086e79d09af1aaf38c"
  },
  {
    "url": "assets/img/event-2.cbc378c3.jpg",
    "revision": "cbc378c36f6d4fd5ba04a52e472937e7"
  },
  {
    "url": "assets/img/event-3.9527fcd4.jpg",
    "revision": "9527fcd4abc4946d4e177240477fd358"
  },
  {
    "url": "assets/img/event-4.6dfe7f9a.jpg",
    "revision": "6dfe7f9a03a642677bc8709b5249efff"
  },
  {
    "url": "assets/img/scala-italy.b00f6f75.jpg",
    "revision": "b00f6f75778976aa32f983d874602abb"
  },
  {
    "url": "assets/img/space-lions-1.ccb5be0c.jpeg",
    "revision": "ccb5be0c3f1d9a6aaf3ee9b7b283caff"
  },
  {
    "url": "assets/img/space-lions-2.0fe717d0.jpeg",
    "revision": "0fe717d07eeebde0572054b24cbb4720"
  },
  {
    "url": "assets/img/tig.14f06de1.png",
    "revision": "14f06de1b58872e4559a14b645f7cf72"
  },
  {
    "url": "assets/js/10.90db88a4.js",
    "revision": "bc7172a9388f776b32eecc78c66681fa"
  },
  {
    "url": "assets/js/11.386b9575.js",
    "revision": "d7c6a58d8cbfb11f75ff147584c915a5"
  },
  {
    "url": "assets/js/12.5871562e.js",
    "revision": "16b6d81176d402a0e0d535533876ff32"
  },
  {
    "url": "assets/js/13.db8bab7f.js",
    "revision": "0de9645db3b13ea5309c8548803c1979"
  },
  {
    "url": "assets/js/14.884543f9.js",
    "revision": "7867b7d0f38ed95d33566b0d370f4c02"
  },
  {
    "url": "assets/js/15.459da4e3.js",
    "revision": "fc712a648567d554c56e9e86e5901cbc"
  },
  {
    "url": "assets/js/16.d2e8bcc4.js",
    "revision": "1e0fedc61a9837d8eff09e90fbda1bfc"
  },
  {
    "url": "assets/js/17.7859c594.js",
    "revision": "490b00474fa6280294c1d82ffe34bed6"
  },
  {
    "url": "assets/js/18.e2920a70.js",
    "revision": "1c357364664f250a5d92644b106ee83c"
  },
  {
    "url": "assets/js/19.1f893ec4.js",
    "revision": "10824ef5b72c6045393bf6a8b699758c"
  },
  {
    "url": "assets/js/2.dd1c9fcf.js",
    "revision": "ea10cda56a191e28b07ff5363c2ee23d"
  },
  {
    "url": "assets/js/20.01c506e5.js",
    "revision": "7a5c23a2e0e75acce7591f93b4c407a7"
  },
  {
    "url": "assets/js/21.166aa159.js",
    "revision": "2ccdf406f0a4053dc07bba24732d55f2"
  },
  {
    "url": "assets/js/22.5fbaeac5.js",
    "revision": "53bc112c93614f4ab3102c5db8630946"
  },
  {
    "url": "assets/js/23.41a7e514.js",
    "revision": "b0032797bf64cd4362ed03dc4df4e178"
  },
  {
    "url": "assets/js/24.a2e15d24.js",
    "revision": "73dd0c972a5c3f4697082cdcd345a79e"
  },
  {
    "url": "assets/js/25.15bc42be.js",
    "revision": "6f3c44491647107e44a0a9276392afd2"
  },
  {
    "url": "assets/js/26.d2f6c27d.js",
    "revision": "6eb81e0fd2f510f5c3265cb2a3c4e634"
  },
  {
    "url": "assets/js/27.5548e624.js",
    "revision": "b156d4ebcd054103f2885b4be7d97e61"
  },
  {
    "url": "assets/js/28.a8880900.js",
    "revision": "43dace3115e2d9dd96a52208670a3b07"
  },
  {
    "url": "assets/js/29.f89b577c.js",
    "revision": "bdf7d1d16bed77937f0f8629c0f1f3d1"
  },
  {
    "url": "assets/js/3.129e558a.js",
    "revision": "0e071a1973ca86e4364fe0ff80a06839"
  },
  {
    "url": "assets/js/30.0f35eb13.js",
    "revision": "f39a0d9908b277fae70653d018330ff2"
  },
  {
    "url": "assets/js/4.7b8c0e32.js",
    "revision": "9a0e6e370a8459b333100f92ccd73885"
  },
  {
    "url": "assets/js/5.7756bdc4.js",
    "revision": "cfb4fafcde93f3846edb10d945d92e0c"
  },
  {
    "url": "assets/js/6.988538d6.js",
    "revision": "5c6d68e8b9939d45512578512d9891f6"
  },
  {
    "url": "assets/js/7.fe837b26.js",
    "revision": "835410088405ec01cd65cf97f19e9843"
  },
  {
    "url": "assets/js/8.8161d303.js",
    "revision": "0d96799c21a705960511c900cbb59a7d"
  },
  {
    "url": "assets/js/9.1ab3a731.js",
    "revision": "b77743a16e169c78f67b7df35aabe234"
  },
  {
    "url": "assets/js/app.aea7a1dc.js",
    "revision": "818ff46bf7545a29bf516645019775a5"
  },
  {
    "url": "BitrockLogo.svg",
    "revision": "fee4520569431f74cefa9b455dd96b12"
  },
  {
    "url": "BitrockLogo.white.svg",
    "revision": "e2a991bcd773ba75d24af083f8872075"
  },
  {
    "url": "blog/academy-frontend/index.html",
    "revision": "1bbe82d50d184768d15d6da98edc0c45"
  },
  {
    "url": "blog/academy-kafka-operations/index.html",
    "revision": "c571b40a6e8239ec653195f4537e3871"
  },
  {
    "url": "blog/academy-kafka-solutions/index.html",
    "revision": "4fd7fb2aae16459651189304a0240fcb"
  },
  {
    "url": "blog/academy-lightbend/index.html",
    "revision": "7d64fba385402fd37bc071d72ac6344c"
  },
  {
    "url": "blog/codemotion-milan-2018/index.html",
    "revision": "64a52839d2535f2e1a3affc21262a6cd"
  },
  {
    "url": "blog/confluent-certified-training/index.html",
    "revision": "274cb7e029d8eeafc901cefa68a8992e"
  },
  {
    "url": "blog/corporate-event-2018/index.html",
    "revision": "e8f532013d1b5041d1015fcd284465e7"
  },
  {
    "url": "blog/cto-takeaways/index.html",
    "revision": "b4ffc5b5b1a2a2fe89391bc111939769"
  },
  {
    "url": "blog/databiz-group/index.html",
    "revision": "c780155e781d12a4ce423b56ac247a6d"
  },
  {
    "url": "blog/devops-team/index.html",
    "revision": "178db04da3b7ab2f6354bdbf064c3e47"
  },
  {
    "url": "blog/event-driven-review/index.html",
    "revision": "b91b9177e44155c0012af2a2ffee34ef"
  },
  {
    "url": "blog/interview-marco-stefani/index.html",
    "revision": "e6891cbcba3dcd9710c49cca7f281342"
  },
  {
    "url": "blog/interview-salvatore-laisa/index.html",
    "revision": "c456a954786af94df4063f722955ca59"
  },
  {
    "url": "blog/kubernetes-fastlane/index.html",
    "revision": "3e82077999e77bce0c26d7332d6d1af0"
  },
  {
    "url": "blog/reactive-corporate-chat/index.html",
    "revision": "298882be9c1ce2cdfdb8b639819d4b7e"
  },
  {
    "url": "blog/reactive-supply-chain/index.html",
    "revision": "6e197f3a585fe3553bd399081eb48392"
  },
  {
    "url": "blog/scala-italy-2018/index.html",
    "revision": "710d81c5c91dc9b141f1c1d3673700e9"
  },
  {
    "url": "blog/space-lions/index.html",
    "revision": "84d2e4c68dc5af91e48572d722a02338"
  },
  {
    "url": "blog/technology-infrastructure-summit-2018/index.html",
    "revision": "367378d595b7d0d97e017ceb9c787ab0"
  },
  {
    "url": "discover/index.html",
    "revision": "3681eade11ee09374c1f6f13f7a9d350"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "425346bd304a39e5a6f80c87c9dedbd3"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "b8ff2b28f0a9ad40facbecacae0f9c7e"
  },
  {
    "url": "icons/icon-152x152.png",
    "revision": "318d30dbe169755f5991b74509ee1dc2"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "318d30dbe169755f5991b74509ee1dc2"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "318d30dbe169755f5991b74509ee1dc2"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "318d30dbe169755f5991b74509ee1dc2"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "00cc276d1ae4b1371ae374aaba4f0044"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "6854c6e7f443f530211fd2cef4ac05c0"
  },
  {
    "url": "img/akka-logo.png",
    "revision": "aa351543990cb47ebf5e71b3ff3f9ec9"
  },
  {
    "url": "img/bg_01.jpg",
    "revision": "b76f5a49a87becad18e5683ff4d252f6"
  },
  {
    "url": "img/bitrock-devops.png",
    "revision": "a38dfb3984c343873955b76f55cf1f5e"
  },
  {
    "url": "img/bitrock-frontend.png",
    "revision": "6b02498357d026da27bb8933aa90b77f"
  },
  {
    "url": "img/confluent_logo.png",
    "revision": "4c9369a114b22c83d92075e609c42065"
  },
  {
    "url": "img/devops-tfl.png",
    "revision": "859905c6953587903a8248e4bbc49200"
  },
  {
    "url": "img/js-logo.png",
    "revision": "24ce1737c4b8cf6120a81e5f1880f7fd"
  },
  {
    "url": "img/kafka-logo-title.png",
    "revision": "ca7ec2d9654a4f8f1535994368c5c62d"
  },
  {
    "url": "img/kubernetes-logo.png",
    "revision": "e8d54c126a34a837108e95dc5c8f1db6"
  },
  {
    "url": "img/lightbend-logo.png",
    "revision": "0aa5a8732ced17d002114140f491d546"
  },
  {
    "url": "img/main_bg.jpg",
    "revision": "649437e10c225f97051bf42c1fa2a45b"
  },
  {
    "url": "img/partners.png",
    "revision": "11fade883e73a5c960a46c9f3023c753"
  },
  {
    "url": "img/posts/academy-2.png",
    "revision": "a724123d3bc0b6e7ae859e13b407b5a6"
  },
  {
    "url": "img/posts/academy-3.png",
    "revision": "e159b3735a33cd47434ee5770eef7ebd"
  },
  {
    "url": "img/posts/academy-4.png",
    "revision": "6e0b002e97e2b7efee6f75908f4bc9bd"
  },
  {
    "url": "img/posts/academy-kafka-2.png",
    "revision": "bd4ae29c655dd0ca4855f7ce5c5d815f"
  },
  {
    "url": "img/posts/academy-kafka.png",
    "revision": "93a074e860588cfd2fec060d8b2d7a3a"
  },
  {
    "url": "img/posts/academy.png",
    "revision": "bf44f6b787370d8b3a538db48617cc6a"
  },
  {
    "url": "img/posts/book.jpg",
    "revision": "fc8eea93066089613ec3c84536d4899c"
  },
  {
    "url": "img/posts/certified-training.png",
    "revision": "3e6f18735434b797d532958c7153962d"
  },
  {
    "url": "img/posts/chat-app.png",
    "revision": "dff56257f065e29179309f2b61a462f8"
  },
  {
    "url": "img/posts/corporate-2.png",
    "revision": "a54363b0f72bd00b420f5f14bb027e64"
  },
  {
    "url": "img/posts/corporate-3.png",
    "revision": "a3049aa69cbcd6fc8dd69e9943bb5786"
  },
  {
    "url": "img/posts/corporate-4.png",
    "revision": "2a44108ec7c9f37074690bcdca9d5f1c"
  },
  {
    "url": "img/posts/corporate-5.png",
    "revision": "1ca0f1a8792e926607e50faf422cc7ff"
  },
  {
    "url": "img/posts/corporate-space-lions.png",
    "revision": "827f2ac56820ad29eba15a74fa650ff0"
  },
  {
    "url": "img/posts/corporate.png",
    "revision": "85ae0ed4c39d905b6344b8cfa66d46cc"
  },
  {
    "url": "img/posts/dbz-timeline.png",
    "revision": "6311f80994b9b96abba2b2c75050fdf2"
  },
  {
    "url": "img/posts/pillars.png",
    "revision": "5d5e09743cebc3d873cd7d78bb804b52"
  },
  {
    "url": "img/posts/reactive-supply-chain.png",
    "revision": "8a59a4be3d76efeaa96b80979e157bb7"
  },
  {
    "url": "img/posts/technology-2.png",
    "revision": "8a93c1bf4ecbcf7733fa78666d190d91"
  },
  {
    "url": "img/posts/technology-3.png",
    "revision": "04b884ff94a0edff8b2a2fb11a10bdce"
  },
  {
    "url": "img/posts/technology-gt.png",
    "revision": "a44148e4633d4a022eaff2731488ccd3"
  },
  {
    "url": "img/posts/technology-sl.png",
    "revision": "2e8835d94729ac989edeeec005e89cfa"
  },
  {
    "url": "img/posts/technology.png",
    "revision": "9955f56fae9b12a6d7b6db64c8135b27"
  },
  {
    "url": "img/react-logo.png",
    "revision": "1aa282c2ed220c3d21dd7467f0e07d2b"
  },
  {
    "url": "img/scala-logo.gif",
    "revision": "025e09621c43632cbf252ec87c1a4627"
  },
  {
    "url": "img/spark-logo.png",
    "revision": "916d2eb13537b5286898c3fa29ef8312"
  },
  {
    "url": "img/vue-logo.jpg",
    "revision": "d3fce5d5845c3f2d3298ea6027475028"
  },
  {
    "url": "img/wc-logo.png",
    "revision": "e6ae077d9658b5d4c5d18aa1a81a5641"
  },
  {
    "url": "index.html",
    "revision": "5d845229fd2ba3a8dc5ad4c5d3973657"
  },
  {
    "url": "logo.png",
    "revision": "911eed839900ee425cdad30efcbeaade"
  },
  {
    "url": "logotype.png",
    "revision": "8da4436f59749ecbbd4ea4d511e5c597"
  },
  {
    "url": "social.png",
    "revision": "0a454f64c8c7f0077f68a146f5d1374b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
