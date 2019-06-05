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
    "revision": "19fcc1818009d8703d320e1d6cf6d0af"
  },
  {
    "url": "academy/index.html",
    "revision": "b96b09222d003c8da77e75beaea3ed52"
  },
  {
    "url": "assets/css/0.styles.8ead931b.css",
    "revision": "b6a1efa975a01ac3fad945bd58f15f0c"
  },
  {
    "url": "assets/img/banner.649a3715.png",
    "revision": "649a37155eba922405ae9b3c0cd08b15"
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
    "url": "assets/img/jw-1.c7f197f8.jpg",
    "revision": "c7f197f88f514ac0b6d528a76baf638b"
  },
  {
    "url": "assets/img/jw-2.9ac9b806.jpg",
    "revision": "9ac9b8066eaa266b79257bba0551b47d"
  },
  {
    "url": "assets/img/jw-3.059bc4c5.jpg",
    "revision": "059bc4c5214d416b425c09b18fffef52"
  },
  {
    "url": "assets/img/people.47b3a5f1.jpg",
    "revision": "47b3a5f1421bd3eb674a558fdde81adc"
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
    "url": "assets/js/10.c022dd7e.js",
    "revision": "c439ed72d9315a2412730ffa4a91b130"
  },
  {
    "url": "assets/js/11.d8e6b892.js",
    "revision": "b012a8d4844a1224d09eb29a14ab6e20"
  },
  {
    "url": "assets/js/12.5c2a7282.js",
    "revision": "9f71774737671c5f17b5da298d259ad9"
  },
  {
    "url": "assets/js/13.b8438ddd.js",
    "revision": "133921564894d6d54c48ff78ba5d459d"
  },
  {
    "url": "assets/js/14.bde0fe78.js",
    "revision": "b73a69ac566914af313f7f15a2ecc33a"
  },
  {
    "url": "assets/js/15.8770646e.js",
    "revision": "62e3022963e94380718913d1cecd3715"
  },
  {
    "url": "assets/js/16.0fc733c2.js",
    "revision": "58009818a0c446b9dc202f1346783210"
  },
  {
    "url": "assets/js/17.46b46bc8.js",
    "revision": "9f6adea0343c5d4e8ad8c52afd5fe441"
  },
  {
    "url": "assets/js/18.88d2a7c0.js",
    "revision": "a4d6f6d1d0d820a4eae78f9179b9cf8f"
  },
  {
    "url": "assets/js/19.2c065ede.js",
    "revision": "dfa6a7707f9e538ce184b284c6d7aa0a"
  },
  {
    "url": "assets/js/2.aa64d46a.js",
    "revision": "c2a63ad872767dd335f6804ff830d9a8"
  },
  {
    "url": "assets/js/20.ca9369fd.js",
    "revision": "f01c32ca4e5930eb5937a540a62b45f5"
  },
  {
    "url": "assets/js/21.4e7584de.js",
    "revision": "bcd06e1d322d57551c8d0c16443c759b"
  },
  {
    "url": "assets/js/22.352ba737.js",
    "revision": "f0451c3ed0fa23e3cc54b7f5bdbdac88"
  },
  {
    "url": "assets/js/23.1efbbd68.js",
    "revision": "0c72741113b158c031620c43dedd4454"
  },
  {
    "url": "assets/js/24.45862fde.js",
    "revision": "473995edc289a2e026c49ce86f27f8d1"
  },
  {
    "url": "assets/js/25.2cfc65af.js",
    "revision": "b9840df3d2e2de4ba933dbd0baa950ed"
  },
  {
    "url": "assets/js/26.f38bc3a0.js",
    "revision": "8c0f7449208a841f0b35639deadf39fb"
  },
  {
    "url": "assets/js/27.c7f48cd7.js",
    "revision": "14882201667a6ef3ebf33a872219286b"
  },
  {
    "url": "assets/js/28.01189dff.js",
    "revision": "35cfd79573e9390f9e43ff78892bd4a0"
  },
  {
    "url": "assets/js/29.703b5aac.js",
    "revision": "378b47efec8ba7a56e02b9b00fec1251"
  },
  {
    "url": "assets/js/3.c64dd64c.js",
    "revision": "d32af3537e47988485d55d9e81eea136"
  },
  {
    "url": "assets/js/30.630e338b.js",
    "revision": "d4f16cb053334267eabd598492c323c8"
  },
  {
    "url": "assets/js/31.85b64ee8.js",
    "revision": "50123d9d3fd8af7d8cbf6c7a153ff68a"
  },
  {
    "url": "assets/js/32.556a66ae.js",
    "revision": "75ec149fb18206b438c0cbe3252c78f0"
  },
  {
    "url": "assets/js/33.33de0f4e.js",
    "revision": "5ad00ae4a7e05912f192db00b8f5e5b9"
  },
  {
    "url": "assets/js/34.ad600db0.js",
    "revision": "979f551c9e54c2ab5eb6c2d8098e413c"
  },
  {
    "url": "assets/js/4.25830235.js",
    "revision": "4b1f13685dfb4ce7e08953c9b9c07370"
  },
  {
    "url": "assets/js/5.b333c63e.js",
    "revision": "c585234e979182e95f51786fd56b2b66"
  },
  {
    "url": "assets/js/6.d6dcdbe4.js",
    "revision": "68d294d78b928164028f3f8ec2b68b09"
  },
  {
    "url": "assets/js/7.787bcc8b.js",
    "revision": "3b9ec0eebaf0f116c3d4b7512570eb7c"
  },
  {
    "url": "assets/js/8.5e196c38.js",
    "revision": "756543a7101a68506791e126baa3594d"
  },
  {
    "url": "assets/js/9.11eec53b.js",
    "revision": "b1c6f75538813f649a32b944cd1be96d"
  },
  {
    "url": "assets/js/app.8dbeeb93.js",
    "revision": "01b043fe59045b3f8e1836dbaadb2636"
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
    "url": "blog/ Open Class Confluent in Italy/open-class-confluent-in-italy.html",
    "revision": "c6156e826d573826c2308e8d9b2030bd"
  },
  {
    "url": "blog/academy-frontend/bitrock-front-end-academy.html",
    "revision": "388027d8e052b3d2e955545f4bfb942b"
  },
  {
    "url": "blog/academy-kafka-class/index.html",
    "revision": "a149121edd6477c8ae71cc1964e57e52"
  },
  {
    "url": "blog/academy-kafka-operations/index.html",
    "revision": "ccd83d75151958ce9d74572e1f70edfa"
  },
  {
    "url": "blog/academy-kafka-solutions/index.html",
    "revision": "d127c6ea9a6a44613319222eada08165"
  },
  {
    "url": "blog/academy-lightbend/index.html",
    "revision": "369fe22a88ddd94fbca15ac5743f4369"
  },
  {
    "url": "blog/codemotion-milan-2018/index.html",
    "revision": "918cd87d7fb39880dbfee8c39575a763"
  },
  {
    "url": "blog/confluent-certified-training/index.html",
    "revision": "7412e20e987cf27edc3a1702f04e7160"
  },
  {
    "url": "blog/corporate-event-2018/index.html",
    "revision": "b33e2ea8809f5cd9de1ea3e1492debdb"
  },
  {
    "url": "blog/cto-takeaways/index.html",
    "revision": "5aeadfa695f9d869a9e66e94731594da"
  },
  {
    "url": "blog/databiz-group/index.html",
    "revision": "f2f98d3f9858998e4f11dd6259fa627f"
  },
  {
    "url": "blog/devops-team/index.html",
    "revision": "28542a707a8528be38e0558527607689"
  },
  {
    "url": "blog/event-review-driven/index.html",
    "revision": "4ece4d6a1a786dae9c5c9483f181d4f0"
  },
  {
    "url": "blog/interview-marco-stefani/index.html",
    "revision": "e13c728f9634632a7d2b1182ca46eadc"
  },
  {
    "url": "blog/interview-salvatore-laisa/index.html",
    "revision": "8c1fe873d5cdec7fc445b9e999217c4d"
  },
  {
    "url": "blog/jenkins-world-2018/index.html",
    "revision": "9168bfde67f8e9baae869e4de6de4898"
  },
  {
    "url": "blog/kubernetes-fastlane/index.html",
    "revision": "d8bc73be61f41a66eb5c79a203169116"
  },
  {
    "url": "blog/lambda-world-2018/index.html",
    "revision": "a753f9bc765418339c4a2cb9a6197c35"
  },
  {
    "url": "blog/reactive-corporate-chat/index.html",
    "revision": "f14c3c876e94c88118fb0032bf933316"
  },
  {
    "url": "blog/reactive-supply-chain/index.html",
    "revision": "22995453ce8ced4b45a285aa79551192"
  },
  {
    "url": "blog/scala-italy-2018/index.html",
    "revision": "8cd5bb37a29ba4fcddf9bcf1f7afdcc9"
  },
  {
    "url": "blog/space-lions/index.html",
    "revision": "04486417bd82603d54e865902975e413"
  },
  {
    "url": "blog/technology-infrastructure-summit-2018/index.html",
    "revision": "7d833ee53a057fb4029fbc071bcfaf41"
  },
  {
    "url": "discover/index.html",
    "revision": "baf66808372efab678b531d2b68993c2"
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
    "url": "img/open_class_01.png",
    "revision": "d267a0555103b149b1137de8357c559a"
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
    "url": "img/posts/corporate-6.png",
    "revision": "0ad03633da6788e14a998331fe9d1725"
  },
  {
    "url": "img/posts/corporate-cadiz.png",
    "revision": "dc2f0ae97aae0424e79492f1c026d238"
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
    "url": "img/posts/open_class_01.png",
    "revision": "d267a0555103b149b1137de8357c559a"
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
    "revision": "d832b69445b764324fe8e7620cff75cc"
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
