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
    "revision": "90ba25562522aa82d6de8f0ddd0aab8b"
  },
  {
    "url": "academy/index.html",
    "revision": "4812f09516e5d9fb3818880e3f9a8274"
  },
  {
    "url": "assets/css/0.styles.36ee78bd.css",
    "revision": "1249613358a203e3a73d3e99db0bc6fa"
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
    "url": "assets/js/10.1ebf5bbc.js",
    "revision": "014f20facf6076e77c403d92f953408d"
  },
  {
    "url": "assets/js/11.d8e6b892.js",
    "revision": "b012a8d4844a1224d09eb29a14ab6e20"
  },
  {
    "url": "assets/js/12.29b794e1.js",
    "revision": "6eee3dd58938336be839140dacaffed8"
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
    "url": "assets/js/15.e38d002b.js",
    "revision": "83f2781560cdecb4e063042feec9a217"
  },
  {
    "url": "assets/js/16.171a306a.js",
    "revision": "d114334f5d6ae169714daa9badf5b6c3"
  },
  {
    "url": "assets/js/17.64b76c6b.js",
    "revision": "6861e1b4143e2072c89bfbdf7d74f337"
  },
  {
    "url": "assets/js/18.059221b0.js",
    "revision": "690ac010f7fdaf6e59db5ec936a78924"
  },
  {
    "url": "assets/js/19.8065a475.js",
    "revision": "b32a1345514729a588f1eb679edc254a"
  },
  {
    "url": "assets/js/2.aa64d46a.js",
    "revision": "c2a63ad872767dd335f6804ff830d9a8"
  },
  {
    "url": "assets/js/20.9bdedc39.js",
    "revision": "e5480e9c03a9a5f4545af4f0ef5fc33f"
  },
  {
    "url": "assets/js/21.1facc376.js",
    "revision": "cf1610aa781b2e003f1f645558c2e8c9"
  },
  {
    "url": "assets/js/22.0d1189a8.js",
    "revision": "b2e380bb8d553a4d451b1bdb13fd4059"
  },
  {
    "url": "assets/js/23.5453421d.js",
    "revision": "0054e348e94f767a94ec391fc7bdfba5"
  },
  {
    "url": "assets/js/24.2bfb039c.js",
    "revision": "5c23b7164fcb5f7af4e7447cb90e83bb"
  },
  {
    "url": "assets/js/25.1cffd2aa.js",
    "revision": "54b627b56470890695b063f6f55c8b65"
  },
  {
    "url": "assets/js/26.239bdb87.js",
    "revision": "86aeda3ab6421b96a6ddd434b184b2b5"
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
    "url": "assets/js/3.26922839.js",
    "revision": "fbb0e44a929012634a55a60f5a4fcd76"
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
    "url": "assets/js/32.66252d7f.js",
    "revision": "84ff11bce3aedbe4f2c2ccbba64193dc"
  },
  {
    "url": "assets/js/33.0242345d.js",
    "revision": "b2d67326d2270548f5db45fc00fe79e5"
  },
  {
    "url": "assets/js/34.4c253a16.js",
    "revision": "02d2c35c6edde6112f20ca8497c77294"
  },
  {
    "url": "assets/js/35.b2ac0b3d.js",
    "revision": "1706fda2df2e898bcba6595d297b7654"
  },
  {
    "url": "assets/js/4.25830235.js",
    "revision": "4b1f13685dfb4ce7e08953c9b9c07370"
  },
  {
    "url": "assets/js/5.c0ada70a.js",
    "revision": "3463f3eca14399318d270defac1346e0"
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
    "url": "assets/js/9.a89e73ff.js",
    "revision": "114a041d918e74e2238e4fdb810c2e4b"
  },
  {
    "url": "assets/js/app.2dbfdc87.js",
    "revision": "bc75293a7b00fdf00b33382a7ef03069"
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
    "url": "blog/Academy-20192H/confluent-certified-training-2019-full-calendar.html",
    "revision": "8991e05983d3344d58cc0990822015c4"
  },
  {
    "url": "blog/academy-class/index.html",
    "revision": "5a325c76593645d141b335b5d7881ce3"
  },
  {
    "url": "blog/academy-confluent/index.html",
    "revision": "37d0ddc6f6b62dcdcb1d6f44c0c48db7"
  },
  {
    "url": "blog/academy-frontend/bitrock-front-end-academy.html",
    "revision": "f42082fa79acce013cb6d314f3835dd0"
  },
  {
    "url": "blog/academy-kafka-operations/index.html",
    "revision": "54fe3d724b842558ccf29dd95e4c81ca"
  },
  {
    "url": "blog/academy-kafka-solutions/index.html",
    "revision": "9b4456fccef6415bdd2c28f5fbda2155"
  },
  {
    "url": "blog/academy-lightbend/index.html",
    "revision": "aa2664a499ae8f001cac78f73aa3070f"
  },
  {
    "url": "blog/codemotion-milan-2018/index.html",
    "revision": "fcb55e5db948a338a949c044b594d7fb"
  },
  {
    "url": "blog/confluent-certified-training/index.html",
    "revision": "1f1573e8d7a6fbebf2f19ba56dec5589"
  },
  {
    "url": "blog/corporate-event-2018/index.html",
    "revision": "d50ac31789d95e9d565277e602166704"
  },
  {
    "url": "blog/cto-takeaways/index.html",
    "revision": "df812be92c38b22a0928011e94b6fa90"
  },
  {
    "url": "blog/databiz-group/index.html",
    "revision": "2876da8410747a65ebc0921fdb4fdc40"
  },
  {
    "url": "blog/devops-team/index.html",
    "revision": "f3e789d6475068571ee74fa39ec0fb6c"
  },
  {
    "url": "blog/interview-marco-stefani/index.html",
    "revision": "a1573eb197d784718bd6b2954ee2dc00"
  },
  {
    "url": "blog/interview-salvatore-laisa/index.html",
    "revision": "bc258cca6d57104c8572acacce094aec"
  },
  {
    "url": "blog/jenkins-world-2018/index.html",
    "revision": "73e305118fdd24f62ad48d93dcad6192"
  },
  {
    "url": "blog/kubernetes-fastlane/index.html",
    "revision": "a8bb6f3afa8c5f73a87e873f1af3222a"
  },
  {
    "url": "blog/lambda-world-2018/index.html",
    "revision": "e08259fd98ffb73e0ecdd21ed076c24e"
  },
  {
    "url": "blog/reactive-corporate-chat/index.html",
    "revision": "bdffc0e853851d24437c66c2a3150c8a"
  },
  {
    "url": "blog/reactive-supply-chain/index.html",
    "revision": "a4b2e6e9fce0c61e971fc02b9c3fa8cc"
  },
  {
    "url": "blog/scala-italy-2018/index.html",
    "revision": "fa1c465a995a2bacba7203d286ec7f83"
  },
  {
    "url": "blog/second-open-class-confluent-for-developers.html",
    "revision": "7a5264ac65d4d8edd26211c5b03d6754"
  },
  {
    "url": "blog/space-lions/index.html",
    "revision": "c92dc97d951aec089829fa85a07cfd04"
  },
  {
    "url": "blog/technology-infrastructure-summit-2018/index.html",
    "revision": "87f4ce74aa6e14bef3f5594d94a23c7b"
  },
  {
    "url": "discover/index.html",
    "revision": "7420e519bbf72cd587884fead3cb5ba1"
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
    "url": "img/1-1.png",
    "revision": "9797afae1374276a3247b81927fec69e"
  },
  {
    "url": "img/1.png",
    "revision": "139cb1ca1078fc5548600490f0b8f170"
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
    "url": "img/Copia di Copia di Happy Easter.png",
    "revision": "7b15819a6e57f8645f137ef16e6e64ad"
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
    "revision": "f3a9abed7bd09604bd260956c495e2b2"
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
