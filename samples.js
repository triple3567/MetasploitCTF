var mime_samples = [
  { 'mime': 'application/xhtml+xml', 'samples': [
    { 'url': 'http://172.17.17.5:10010/', 'dir': '_m0/0', 'linked': 2, 'len': 1068 },
    { 'url': 'http://172.17.17.5:10010/accounts', 'dir': '_m0/1', 'linked': 5, 'len': 1635 },
    { 'url': 'http://172.17.17.5:10010/login/', 'dir': '_m0/2', 'linked': 5, 'len': 1612 } ]
  },
  { 'mime': 'text/html', 'samples': [
    { 'url': 'http://172.17.17.5:10010/accounts/', 'dir': '_m1/0', 'linked': 5, 'len': 96 } ]
  },
  { 'mime': 'text/plain', 'samples': [
    { 'url': 'http://172.17.17.5:10010/assets/application-b8c697e38f5ecf278f5ea80d758553eae08a5635194a002f5b5dc51db0ef1145.css/', 'dir': '_m2/0', 'linked': 2, 'len': 165648 } ]
  }
];

var issue_samples = [
  { 'severity': 3, 'type': 40601, 'samples': [
    { 'url': 'http://172.17.17.5:10010/assets/application-b8c697e38f5ecf278f5ea80d758553eae08a5635194a002f5b5dc51db0ef1145.css/', 'extra': 'caching explicitly permitted on a \x27Set-Cookie\x27 response', 'sid': '0', 'dir': '_i0/0' } ]
  },
  { 'severity': 1, 'type': 20101, 'samples': [
    { 'url': 'http://172.17.17.5:10010/\x27\x22\x27\x22\x27\x22\x27\x22', 'extra': 'SQL injection', 'sid': '0', 'dir': '_i1/0' },
    { 'url': 'http://172.17.17.5:10010/accounts/?_test1=c:\x5cwindows\x5csystem32\x5ccmd.exe&_test2=/etc/passwd&_test3=|/bin/sh&_test4=(SELECT%20*%20FROM%20nonexistent)%20--&_test5=\x3e/no/such/file&_test6=\x3cscript\x3ealert(1)\x3c/script\x3e&_test7=javascript:alert(1)', 'extra': 'IPS check', 'sid': '0', 'dir': '_i1/1' },
    { 'url': 'http://172.17.17.5:10010/assets/?_test1=c:\x5cwindows\x5csystem32\x5ccmd.exe&_test2=/etc/passwd&_test3=|/bin/sh&_test4=(SELECT%20*%20FROM%20nonexistent)%20--&_test5=\x3e/no/such/file&_test6=\x3cscript\x3ealert(1)\x3c/script\x3e&_test7=javascript:alert(1)', 'extra': 'IPS check', 'sid': '0', 'dir': '_i1/2' },
    { 'url': 'http://172.17.17.5:10010/assets/application-b8c697e38f5ecf278f5ea80d758553eae08a5635194a002f5b5dc51db0ef1145.css/?_test1=c:\x5cwindows\x5csystem32\x5ccmd.exe&_test2=/etc/passwd&_test3=|/bin/sh&_test4=(SELECT%20*%20FROM%20nonexistent)%20--&_test5=\x3e/no/such/file&_test6=\x3cscript\x3ealert(1)\x3c/script\x3e&_test7=javascript:alert(1)', 'extra': 'IPS check', 'sid': '0', 'dir': '_i1/3' },
    { 'url': 'http://172.17.17.5:10010/login/?_test1=c:\x5cwindows\x5csystem32\x5ccmd.exe&_test2=/etc/passwd&_test3=|/bin/sh&_test4=(SELECT%20*%20FROM%20nonexistent)%20--&_test5=\x3e/no/such/file&_test6=\x3cscript\x3ealert(1)\x3c/script\x3e&_test7=javascript:alert(1)', 'extra': 'IPS check', 'sid': '0', 'dir': '_i1/4' },
    { 'url': 'http://172.17.17.5:10010/packs/?_test1=c:\x5cwindows\x5csystem32\x5ccmd.exe&_test2=/etc/passwd&_test3=|/bin/sh&_test4=(SELECT%20*%20FROM%20nonexistent)%20--&_test5=\x3e/no/such/file&_test6=\x3cscript\x3ealert(1)\x3c/script\x3e&_test7=javascript:alert(1)', 'extra': 'IPS check', 'sid': '0', 'dir': '_i1/5' },
    { 'url': 'http://172.17.17.5:10010/packs/js/?_test1=c:\x5cwindows\x5csystem32\x5ccmd.exe&_test2=/etc/passwd&_test3=|/bin/sh&_test4=(SELECT%20*%20FROM%20nonexistent)%20--&_test5=\x3e/no/such/file&_test6=\x3cscript\x3ealert(1)\x3c/script\x3e&_test7=javascript:alert(1)', 'extra': 'IPS check', 'sid': '0', 'dir': '_i1/6' },
    { 'url': 'http://172.17.17.5:10010/register/?_test1=c:\x5cwindows\x5csystem32\x5ccmd.exe&_test2=/etc/passwd&_test3=|/bin/sh&_test4=(SELECT%20*%20FROM%20nonexistent)%20--&_test5=\x3e/no/such/file&_test6=\x3cscript\x3ealert(1)\x3c/script\x3e&_test7=javascript:alert(1)', 'extra': 'IPS check', 'sid': '0', 'dir': '_i1/7' } ]
  },
  { 'severity': 0, 'type': 10901, 'samples': [
    { 'url': 'http://172.17.17.5:10010/assets/application-b8c697e38f5ecf278f5ea80d758553eae08a5635194a002f5b5dc51db0ef1145.css/', 'extra': '', 'sid': '0', 'dir': '_i2/0' } ]
  },
  { 'severity': 0, 'type': 10602, 'samples': [
    { 'url': 'http://172.17.17.5:10010/login', 'extra': '', 'sid': '0', 'dir': '_i3/0' },
    { 'url': 'http://172.17.17.5:10010/accounts', 'extra': '', 'sid': '0', 'dir': '_i3/1' } ]
  },
  { 'severity': 0, 'type': 10403, 'samples': [
    { 'url': 'http://172.17.17.5:10010/accounts', 'extra': '', 'sid': '0', 'dir': '_i4/0' },
    { 'url': 'http://172.17.17.5:10010/accounts', 'extra': '', 'sid': '0', 'dir': '_i4/1' },
    { 'url': 'http://172.17.17.5:10010/accounts', 'extra': '', 'sid': '0', 'dir': '_i4/2' },
    { 'url': 'http://172.17.17.5:10010/accounts', 'extra': '', 'sid': '0', 'dir': '_i4/3' } ]
  },
  { 'severity': 0, 'type': 10401, 'samples': [
    { 'url': 'http://172.17.17.5:10010/accounts', 'extra': '', 'sid': '0', 'dir': '_i5/0' } ]
  },
  { 'severity': 0, 'type': 10205, 'samples': [
    { 'url': 'http://172.17.17.5:10010/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i6/0' },
    { 'url': 'http://172.17.17.5:10010/assets/application-b8c697e38f5ecf278f5ea80d758553eae08a5635194a002f5b5dc51db0ef1145.css/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i6/1' } ]
  },
  { 'severity': 0, 'type': 10204, 'samples': [
    { 'url': 'http://172.17.17.5:10010/', 'extra': 'X-Frame-Options', 'sid': '0', 'dir': '_i7/0' },
    { 'url': 'http://172.17.17.5:10010/', 'extra': 'X-XSS-Protection', 'sid': '0', 'dir': '_i7/1' },
    { 'url': 'http://172.17.17.5:10010/', 'extra': 'X-Content-Type-Options', 'sid': '0', 'dir': '_i7/2' },
    { 'url': 'http://172.17.17.5:10010/', 'extra': 'X-Download-Options', 'sid': '0', 'dir': '_i7/3' },
    { 'url': 'http://172.17.17.5:10010/', 'extra': 'X-Permitted-Cross-Domain-Policies', 'sid': '0', 'dir': '_i7/4' },
    { 'url': 'http://172.17.17.5:10010/', 'extra': 'X-Request-Id', 'sid': '0', 'dir': '_i7/5' },
    { 'url': 'http://172.17.17.5:10010/', 'extra': 'X-Runtime', 'sid': '0', 'dir': '_i7/6' } ]
  },
  { 'severity': 0, 'type': 10201, 'samples': [
    { 'url': 'http://172.17.17.5:10010/', 'extra': 'e0bc846dfd6ddecb445d58f5017b1b332dfa80a8be2f02e6c57f2c3702a92541eeefcef7259240d2ae13246929e3b7adc543bf2960c0908f2dcc1f8c9ba078fa7b1639d97ee9091816ddee0b2f5c771e18c1a7c03abb7fe9a0ce36b486dcfa9bab5ecb555d82c70b9bce7b6a24f6e6aa5f977b63758e64d7dca568c16dec4987', 'sid': '0', 'dir': '_i8/0' },
    { 'url': 'http://172.17.17.5:10010/accounts', 'extra': 'e0bc846dfd6ddecb445d58f5017b1b332dfa80a8be2f02e6c57f2c3702a92541eeefcef7259240d2ae13246929e3b7adc543bf2960c0908f2dcc1f8c9ba078fa7b1639d97ee9091816ddee0b2f5c771e18c1a7c03abb7fe9a0ce36b486dcfa9bab5ecb555d82c70b9bce7b6a24f6e6aa5f977b63758e64d7dca568c16dec4987', 'sid': '0', 'dir': '_i8/1' },
    { 'url': 'http://172.17.17.5:10010/accounts', 'extra': 'e0bc846dfd6ddecb445d58f5017b1b332dfa80a8be2f02e6c57f2c3702a92541eeefcef7259240d2ae13246929e3b7adc543bf2960c0908f2dcc1f8c9ba078fa7b1639d97ee9091816ddee0b2f5c771e18c1a7c03abb7fe9a0ce36b486dcfa9bab5ecb555d82c70b9bce7b6a24f6e6aa5f977b63758e64d7dca568c16dec4987', 'sid': '0', 'dir': '_i8/2' },
    { 'url': 'http://172.17.17.5:10010/accounts', 'extra': 'e0bc846dfd6ddecb445d58f5017b1b332dfa80a8be2f02e6c57f2c3702a92541eeefcef7259240d2ae13246929e3b7adc543bf2960c0908f2dcc1f8c9ba078fa7b1639d97ee9091816ddee0b2f5c771e18c1a7c03abb7fe9a0ce36b486dcfa9bab5ecb555d82c70b9bce7b6a24f6e6aa5f977b63758e64d7dca568c16dec4987', 'sid': '0', 'dir': '_i8/3' },
    { 'url': 'http://172.17.17.5:10010/accounts', 'extra': 'e0bc846dfd6ddecb445d58f5017b1b332dfa80a8be2f02e6c57f2c3702a92541eeefcef7259240d2ae13246929e3b7adc543bf2960c0908f2dcc1f8c9ba078fa7b1639d97ee9091816ddee0b2f5c771e18c1a7c03abb7fe9a0ce36b486dcfa9bab5ecb555d82c70b9bce7b6a24f6e6aa5f977b63758e64d7dca568c16dec4987', 'sid': '0', 'dir': '_i8/4' },
    { 'url': 'http://172.17.17.5:10010/assets/application-b8c697e38f5ecf278f5ea80d758553eae08a5635194a002f5b5dc51db0ef1145.css', 'extra': 'e0bc846dfd6ddecb445d58f5017b1b332dfa80a8be2f02e6c57f2c3702a92541eeefcef7259240d2ae13246929e3b7adc543bf2960c0908f2dcc1f8c9ba078fa7b1639d97ee9091816ddee0b2f5c771e18c1a7c03abb7fe9a0ce36b486dcfa9bab5ecb555d82c70b9bce7b6a24f6e6aa5f977b63758e64d7dca568c16dec4987', 'sid': '0', 'dir': '_i8/5' },
    { 'url': 'http://172.17.17.5:10010/login/', 'extra': 'e0bc846dfd6ddecb445d58f5017b1b332dfa80a8be2f02e6c57f2c3702a92541eeefcef7259240d2ae13246929e3b7adc543bf2960c0908f2dcc1f8c9ba078fa7b1639d97ee9091816ddee0b2f5c771e18c1a7c03abb7fe9a0ce36b486dcfa9bab5ecb555d82c70b9bce7b6a24f6e6aa5f977b63758e64d7dca568c16dec4987', 'sid': '0', 'dir': '_i8/6' },
    { 'url': 'http://172.17.17.5:10010/login', 'extra': 'e0bc846dfd6ddecb445d58f5017b1b332dfa80a8be2f02e6c57f2c3702a92541eeefcef7259240d2ae13246929e3b7adc543bf2960c0908f2dcc1f8c9ba078fa7b1639d97ee9091816ddee0b2f5c771e18c1a7c03abb7fe9a0ce36b486dcfa9bab5ecb555d82c70b9bce7b6a24f6e6aa5f977b63758e64d7dca568c16dec4987', 'sid': '0', 'dir': '_i8/7' },
    { 'url': 'http://172.17.17.5:10010/login', 'extra': 'e0bc846dfd6ddecb445d58f5017b1b332dfa80a8be2f02e6c57f2c3702a92541eeefcef7259240d2ae13246929e3b7adc543bf2960c0908f2dcc1f8c9ba078fa7b1639d97ee9091816ddee0b2f5c771e18c1a7c03abb7fe9a0ce36b486dcfa9bab5ecb555d82c70b9bce7b6a24f6e6aa5f977b63758e64d7dca568c16dec4987', 'sid': '0', 'dir': '_i8/8' },
    { 'url': 'http://172.17.17.5:10010/login', 'extra': 'e0bc846dfd6ddecb445d58f5017b1b332dfa80a8be2f02e6c57f2c3702a92541eeefcef7259240d2ae13246929e3b7adc543bf2960c0908f2dcc1f8c9ba078fa7b1639d97ee9091816ddee0b2f5c771e18c1a7c03abb7fe9a0ce36b486dcfa9bab5ecb555d82c70b9bce7b6a24f6e6aa5f977b63758e64d7dca568c16dec4987', 'sid': '0', 'dir': '_i8/9' },
    { 'url': 'http://172.17.17.5:10010/login', 'extra': 'e0bc846dfd6ddecb445d58f5017b1b332dfa80a8be2f02e6c57f2c3702a92541eeefcef7259240d2ae13246929e3b7adc543bf2960c0908f2dcc1f8c9ba078fa7b1639d97ee9091816ddee0b2f5c771e18c1a7c03abb7fe9a0ce36b486dcfa9bab5ecb555d82c70b9bce7b6a24f6e6aa5f977b63758e64d7dca568c16dec4987', 'sid': '0', 'dir': '_i8/10' },
    { 'url': 'http://172.17.17.5:10010/register', 'extra': 'e0bc846dfd6ddecb445d58f5017b1b332dfa80a8be2f02e6c57f2c3702a92541eeefcef7259240d2ae13246929e3b7adc543bf2960c0908f2dcc1f8c9ba078fa7b1639d97ee9091816ddee0b2f5c771e18c1a7c03abb7fe9a0ce36b486dcfa9bab5ecb555d82c70b9bce7b6a24f6e6aa5f977b63758e64d7dca568c16dec4987', 'sid': '0', 'dir': '_i8/11' } ]
  }
];

