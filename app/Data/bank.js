const bank =
    [
        [
            { question: "21 + 31", choices: [52, 54, 49, 57].sort(() => Math.random() - 0.5), answer: 52, type: 0 },
            { question: "34 + 51", choices: [85, 87, 82, 90].sort(() => Math.random() - 0.5), answer: 85, type: 0 },
            { question: "47 + 69", choices: [116, 118, 113, 121].sort(() => Math.random() - 0.5), answer: 116, type: 0 },
            { question: "61 + 88", choices: [149, 151, 146, 154].sort(() => Math.random() - 0.5), answer: 149, type: 0 },
            { question: "73 + 107", choices: [180, 182, 177, 185].sort(() => Math.random() - 0.5), answer: 180, type: 0 },
            { question: "86 + 126", choices: [212, 214, 209, 217].sort(() => Math.random() - 0.5), answer: 212, type: 0 },
            { question: "99 + 145", choices: [244, 246, 241, 249].sort(() => Math.random() - 0.5), answer: 244, type: 0 },
            { question: "112 + 164", choices: [276, 278, 273, 281].sort(() => Math.random() - 0.5), answer: 276, type: 0 },
            { question: "125 + 183", choices: [308, 310, 305, 313].sort(() => Math.random() - 0.5), answer: 308, type: 0 },
            { question: "138 + 202", choices: [340, 342, 337, 345].sort(() => Math.random() - 0.5), answer: 340, type: 0 },
            { question: "151 + 221", choices: [372, 374, 369, 377].sort(() => Math.random() - 0.5), answer: 372, type: 0 },
            { question: "164 + 241", choices: [405, 407, 402, 410].sort(() => Math.random() - 0.5), answer: 405, type: 0 },
            { question: "177 + 259", choices: [436, 438, 433, 441].sort(() => Math.random() - 0.5), answer: 436, type: 0 },
            { question: "191 + 278", choices: [469, 471, 466, 474].sort(() => Math.random() - 0.5), answer: 469, type: 0 },
            { question: "203 + 297", choices: [500, 502, 497, 505].sort(() => Math.random() - 0.5), answer: 500, type: 0 },
            { question: "216 + 316", choices: [532, 534, 529, 537].sort(() => Math.random() - 0.5), answer: 532, type: 0 },
            { question: "229 + 335", choices: [564, 566, 561, 569].sort(() => Math.random() - 0.5), answer: 564, type: 0 },
            { question: "242 + 354", choices: [596, 598, 593, 601].sort(() => Math.random() - 0.5), answer: 596, type: 0 },
            { question: "255 + 373", choices: [628, 630, 625, 633].sort(() => Math.random() - 0.5), answer: 628, type: 0 },
            { question: "268 + 392", choices: [660, 662, 657, 665].sort(() => Math.random() - 0.5), answer: 660, type: 0 },
            { question: "281 + 411", choices: [692, 694, 689, 697].sort(() => Math.random() - 0.5), answer: 692, type: 0 },
            { question: "294 + 431", choices: [725, 727, 722, 730].sort(() => Math.random() - 0.5), answer: 725, type: 0 },
            { question: "307 + 449", choices: [756, 758, 753, 761].sort(() => Math.random() - 0.5), answer: 756, type: 0 },
            { question: "321 + 468", choices: [789, 791, 786, 794].sort(() => Math.random() - 0.5), answer: 789, type: 0 },
            { question: "333 + 487", choices: [820, 822, 817, 825].sort(() => Math.random() - 0.5), answer: 820, type: 0 },
            { question: "346 + 506", choices: [852, 854, 849, 857].sort(() => Math.random() - 0.5), answer: 852, type: 0 },
            { question: "359 + 525", choices: [884, 886, 881, 889].sort(() => Math.random() - 0.5), answer: 884, type: 0 },
            { question: "372 + 544", choices: [916, 918, 913, 921].sort(() => Math.random() - 0.5), answer: 916, type: 0 },
            { question: "385 + 563", choices: [948, 950, 945, 953].sort(() => Math.random() - 0.5), answer: 948, type: 0 },
            { question: "398 + 582", choices: [980, 982, 977, 985].sort(() => Math.random() - 0.5), answer: 980, type: 0 },
            { question: "411 + 601", choices: [1012, 1014, 1009, 1017].sort(() => Math.random() - 0.5), answer: 1012, type: 0 },
            { question: "424 + 621", choices: [1045, 1047, 1042, 1050].sort(() => Math.random() - 0.5), answer: 1045, type: 0 },
            { question: "437 + 639", choices: [1076, 1078, 1073, 1081].sort(() => Math.random() - 0.5), answer: 1076, type: 0 },
            { question: "451 + 658", choices: [1109, 1111, 1106, 1114].sort(() => Math.random() - 0.5), answer: 1109, type: 0 },
            { question: "463 + 677", choices: [1140, 1142, 1137, 1145].sort(() => Math.random() - 0.5), answer: 1140, type: 0 },
            { question: "476 + 696", choices: [1172, 1174, 1169, 1177].sort(() => Math.random() - 0.5), answer: 1172, type: 0 },
            { question: "489 + 715", choices: [1204, 1206, 1201, 1209].sort(() => Math.random() - 0.5), answer: 1204, type: 0 },
            { question: "502 + 734", choices: [1236, 1238, 1233, 1241].sort(() => Math.random() - 0.5), answer: 1236, type: 0 },
            { question: "515 + 753", choices: [1268, 1270, 1265, 1273].sort(() => Math.random() - 0.5), answer: 1268, type: 0 },
            { question: "528 + 772", choices: [1300, 1302, 1297, 1305].sort(() => Math.random() - 0.5), answer: 1300, type: 0 },
            { question: "541 + 791", choices: [1332, 1334, 1329, 1337].sort(() => Math.random() - 0.5), answer: 1332, type: 0 },
            { question: "554 + 811", choices: [1365, 1367, 1362, 1370].sort(() => Math.random() - 0.5), answer: 1365, type: 0 },
            { question: "567 + 829", choices: [1396, 1398, 1393, 1401].sort(() => Math.random() - 0.5), answer: 1396, type: 0 },
            { question: "581 + 848", choices: [1429, 1431, 1426, 1434].sort(() => Math.random() - 0.5), answer: 1429, type: 0 },
            { question: "593 + 867", choices: [1460, 1462, 1457, 1465].sort(() => Math.random() - 0.5), answer: 1460, type: 0 },
            { question: "606 + 886", choices: [1492, 1494, 1489, 1497].sort(() => Math.random() - 0.5), answer: 1492, type: 0 },
            { question: "619 + 905", choices: [1524, 1526, 1521, 1529].sort(() => Math.random() - 0.5), answer: 1524, type: 0 },
            { question: "632 + 924", choices: [1556, 1558, 1553, 1561].sort(() => Math.random() - 0.5), answer: 1556, type: 0 },
            { question: "645 + 943", choices: [1588, 1590, 1585, 1593].sort(() => Math.random() - 0.5), answer: 1588, type: 0 },
            { question: "658 + 962", choices: [1620, 1622, 1617, 1625].sort(() => Math.random() - 0.5), answer: 1620, type: 0 },
            { question: "671 + 981", choices: [1652, 1654, 1649, 1657].sort(() => Math.random() - 0.5), answer: 1652, type: 0 },
            { question: "684 + 1001", choices: [1685, 1687, 1682, 1690].sort(() => Math.random() - 0.5), answer: 1685, type: 0 },
            { question: "697 + 1019", choices: [1716, 1718, 1713, 1721].sort(() => Math.random() - 0.5), answer: 1716, type: 0 },
            { question: "711 + 1038", choices: [1749, 1751, 1746, 1754].sort(() => Math.random() - 0.5), answer: 1749, type: 0 },
            { question: "723 + 1057", choices: [1780, 1782, 1777, 1785].sort(() => Math.random() - 0.5), answer: 1780, type: 0 },
            { question: "736 + 1076", choices: [1812, 1814, 1809, 1817].sort(() => Math.random() - 0.5), answer: 1812, type: 0 },
            { question: "749 + 1095", choices: [1844, 1846, 1841, 1849].sort(() => Math.random() - 0.5), answer: 1844, type: 0 },
            { question: "762 + 1114", choices: [1876, 1878, 1873, 1881].sort(() => Math.random() - 0.5), answer: 1876, type: 0 },
            { question: "775 + 1133", choices: [1908, 1910, 1905, 1913].sort(() => Math.random() - 0.5), answer: 1908, type: 0 },
            { question: "788 + 1152", choices: [1940, 1942, 1937, 1945].sort(() => Math.random() - 0.5), answer: 1940, type: 0 },
            { question: "801 + 1171", choices: [1972, 1974, 1969, 1977].sort(() => Math.random() - 0.5), answer: 1972, type: 0 },
            { question: "814 + 1191", choices: [2005, 2007, 2002, 2010].sort(() => Math.random() - 0.5), answer: 2005, type: 0 },
            { question: "827 + 1209", choices: [2036, 2038, 2033, 2041].sort(() => Math.random() - 0.5), answer: 2036, type: 0 },
            { question: "841 + 1228", choices: [2069, 2071, 2066, 2074].sort(() => Math.random() - 0.5), answer: 2069, type: 0 },
            { question: "853 + 1247", choices: [2100, 2102, 2097, 2105].sort(() => Math.random() - 0.5), answer: 2100, type: 0 },
            { question: "866 + 1266", choices: [2132, 2134, 2129, 2137].sort(() => Math.random() - 0.5), answer: 2132, type: 0 },
            { question: "879 + 1285", choices: [2164, 2166, 2161, 2169].sort(() => Math.random() - 0.5), answer: 2164, type: 0 },
            { question: "892 + 1304", choices: [2196, 2198, 2193, 2201].sort(() => Math.random() - 0.5), answer: 2196, type: 0 },
            { question: "905 + 1323", choices: [2228, 2230, 2225, 2233].sort(() => Math.random() - 0.5), answer: 2228, type: 0 },
            { question: "918 + 1342", choices: [2260, 2262, 2257, 2265].sort(() => Math.random() - 0.5), answer: 2260, type: 0 },
            { question: "931 + 1361", choices: [2292, 2294, 2289, 2297].sort(() => Math.random() - 0.5), answer: 2292, type: 0 },
            { question: "944 + 1381", choices: [2325, 2327, 2322, 2330].sort(() => Math.random() - 0.5), answer: 2325, type: 0 },
            { question: "957 + 1399", choices: [2356, 2358, 2353, 2361].sort(() => Math.random() - 0.5), answer: 2356, type: 0 },
            { question: "971 + 1418", choices: [2389, 2391, 2386, 2394].sort(() => Math.random() - 0.5), answer: 2389, type: 0 },
            { question: "983 + 1437", choices: [2420, 2422, 2417, 2425].sort(() => Math.random() - 0.5), answer: 2420, type: 0 },
            { question: "996 + 1456", choices: [2452, 2454, 2449, 2457].sort(() => Math.random() - 0.5), answer: 2452, type: 0 },
            { question: "1009 + 1475", choices: [2484, 2486, 2481, 2489].sort(() => Math.random() - 0.5), answer: 2484, type: 0 },
            { question: "1022 + 1494", choices: [2516, 2518, 2513, 2521].sort(() => Math.random() - 0.5), answer: 2516, type: 0 },
            { question: "1035 + 1513", choices: [2548, 2550, 2545, 2553].sort(() => Math.random() - 0.5), answer: 2548, type: 0 },
            { question: "1048 + 1532", choices: [2580, 2582, 2577, 2585].sort(() => Math.random() - 0.5), answer: 2580, type: 0 },
            { question: "1061 + 1551", choices: [2612, 2614, 2609, 2617].sort(() => Math.random() - 0.5), answer: 2612, type: 0 },
            { question: "1074 + 1571", choices: [2645, 2647, 2642, 2650].sort(() => Math.random() - 0.5), answer: 2645, type: 0 },
            { question: "1087 + 1589", choices: [2676, 2678, 2673, 2681].sort(() => Math.random() - 0.5), answer: 2676, type: 0 },
            { question: "1101 + 1608", choices: [2709, 2711, 2706, 2714].sort(() => Math.random() - 0.5), answer: 2709, type: 0 },
            { question: "1113 + 1627", choices: [2740, 2742, 2737, 2745].sort(() => Math.random() - 0.5), answer: 2740, type: 0 },
            { question: "1126 + 1646", choices: [2772, 2774, 2769, 2777].sort(() => Math.random() - 0.5), answer: 2772, type: 0 },
            { question: "1139 + 1665", choices: [2804, 2806, 2801, 2809].sort(() => Math.random() - 0.5), answer: 2804, type: 0 },
            { question: "1152 + 1684", choices: [2836, 2838, 2833, 2841].sort(() => Math.random() - 0.5), answer: 2836, type: 0 },
            { question: "1165 + 1703", choices: [2868, 2870, 2865, 2873].sort(() => Math.random() - 0.5), answer: 2868, type: 0 },
            { question: "1178 + 1722", choices: [2900, 2902, 2897, 2905].sort(() => Math.random() - 0.5), answer: 2900, type: 0 },
            { question: "1191 + 1741", choices: [2932, 2934, 2929, 2937].sort(() => Math.random() - 0.5), answer: 2932, type: 0 },
            { question: "1204 + 1761", choices: [2965, 2967, 2962, 2970].sort(() => Math.random() - 0.5), answer: 2965, type: 0 },
            { question: "1217 + 1779", choices: [2996, 2998, 2993, 3001].sort(() => Math.random() - 0.5), answer: 2996, type: 0 },
            { question: "1231 + 1798", choices: [3029, 3031, 3026, 3034].sort(() => Math.random() - 0.5), answer: 3029, type: 0 },
            { question: "1243 + 1817", choices: [3060, 3062, 3057, 3065].sort(() => Math.random() - 0.5), answer: 3060, type: 0 },
            { question: "1256 + 1836", choices: [3092, 3094, 3089, 3097].sort(() => Math.random() - 0.5), answer: 3092, type: 0 },
            { question: "1269 + 1855", choices: [3124, 3126, 3121, 3129].sort(() => Math.random() - 0.5), answer: 3124, type: 0 },
            { question: "1282 + 1874", choices: [3156, 3158, 3153, 3161].sort(() => Math.random() - 0.5), answer: 3156, type: 0 },
            { question: "1295 + 1893", choices: [3188, 3190, 3185, 3193].sort(() => Math.random() - 0.5), answer: 3188, type: 0 },
            { question: "1308 + 1912", choices: [3220, 3222, 3217, 3225].sort(() => Math.random() - 0.5), answer: 3220, type: 0 },
            { question: "1321 + 1931", choices: [3252, 3254, 3249, 3257].sort(() => Math.random() - 0.5), answer: 3252, type: 0 },
            { question: "1334 + 1951", choices: [3285, 3287, 3282, 3290].sort(() => Math.random() - 0.5), answer: 3285, type: 0 },
            { question: "1347 + 1969", choices: [3316, 3318, 3313, 3321].sort(() => Math.random() - 0.5), answer: 3316, type: 0 },
            { question: "1361 + 1988", choices: [3349, 3351, 3346, 3354].sort(() => Math.random() - 0.5), answer: 3349, type: 0 },
            { question: "1373 + 2007", choices: [3380, 3382, 3377, 3385].sort(() => Math.random() - 0.5), answer: 3380, type: 0 },
            { question: "1386 + 2026", choices: [3412, 3414, 3409, 3417].sort(() => Math.random() - 0.5), answer: 3412, type: 0 },
            { question: "1399 + 2045", choices: [3444, 3446, 3441, 3449].sort(() => Math.random() - 0.5), answer: 3444, type: 0 },
            { question: "1412 + 2064", choices: [3476, 3478, 3473, 3481].sort(() => Math.random() - 0.5), answer: 3476, type: 0 },
            { question: "1425 + 2083", choices: [3508, 3510, 3505, 3513].sort(() => Math.random() - 0.5), answer: 3508, type: 0 },
            { question: "1438 + 2102", choices: [3540, 3542, 3537, 3545].sort(() => Math.random() - 0.5), answer: 3540, type: 0 },
            { question: "1451 + 2121", choices: [3572, 3574, 3569, 3577].sort(() => Math.random() - 0.5), answer: 3572, type: 0 },
            { question: "1464 + 2141", choices: [3605, 3607, 3602, 3610].sort(() => Math.random() - 0.5), answer: 3605, type: 0 },
            { question: "1477 + 2159", choices: [3636, 3638, 3633, 3641].sort(() => Math.random() - 0.5), answer: 3636, type: 0 },
            { question: "1491 + 2178", choices: [3669, 3671, 3666, 3674].sort(() => Math.random() - 0.5), answer: 3669, type: 0 },
            { question: "1503 + 2197", choices: [3700, 3702, 3697, 3705].sort(() => Math.random() - 0.5), answer: 3700, type: 0 },
            { question: "1516 + 2216", choices: [3732, 3734, 3729, 3737].sort(() => Math.random() - 0.5), answer: 3732, type: 0 },
            { question: "1529 + 2235", choices: [3764, 3766, 3761, 3769].sort(() => Math.random() - 0.5), answer: 3764, type: 0 },
            { question: "1542 + 2254", choices: [3796, 3798, 3793, 3801].sort(() => Math.random() - 0.5), answer: 3796, type: 0 },
            { question: "1555 + 2273", choices: [3828, 3830, 3825, 3833].sort(() => Math.random() - 0.5), answer: 3828, type: 0 },
            { question: "1568 + 2292", choices: [3860, 3862, 3857, 3865].sort(() => Math.random() - 0.5), answer: 3860, type: 0 },
            { question: "1581 + 2311", choices: [3892, 3894, 3889, 3897].sort(() => Math.random() - 0.5), answer: 3892, type: 0 },
            { question: "1594 + 2331", choices: [3925, 3927, 3922, 3930].sort(() => Math.random() - 0.5), answer: 3925, type: 0 },
            { question: "1607 + 2349", choices: [3956, 3958, 3953, 3961].sort(() => Math.random() - 0.5), answer: 3956, type: 0 },
            { question: "1621 + 2368", choices: [3989, 3991, 3986, 3994].sort(() => Math.random() - 0.5), answer: 3989, type: 0 },
            { question: "1633 + 2387", choices: [4020, 4022, 4017, 4025].sort(() => Math.random() - 0.5), answer: 4020, type: 0 },
            { question: "1646 + 2406", choices: [4052, 4054, 4049, 4057].sort(() => Math.random() - 0.5), answer: 4052, type: 0 },
            { question: "1659 + 2425", choices: [4084, 4086, 4081, 4089].sort(() => Math.random() - 0.5), answer: 4084, type: 0 },
            { question: "1672 + 2444", choices: [4116, 4118, 4113, 4121].sort(() => Math.random() - 0.5), answer: 4116, type: 0 },
            { question: "1677 + 2463", choices: [4140, 4142, 4137, 4145].sort(() => Math.random() - 0.5), answer: 4140, type: 0 },
            { question: "1698 + 2482", choices: [4180, 4182, 4177, 4185].sort(() => Math.random() - 0.5), answer: 4180, type: 0 },
            { question: "1711 + 2501", choices: [4212, 4214, 4209, 4217].sort(() => Math.random() - 0.5), answer: 4212, type: 0 },
            { question: "1724 + 2521", choices: [4245, 4247, 4242, 4250].sort(() => Math.random() - 0.5), answer: 4245, type: 0 },
            { question: "1737 + 2539", choices: [4276, 4278, 4273, 4281].sort(() => Math.random() - 0.5), answer: 4276, type: 0 },
            { question: "1751 + 2558", choices: [4309, 4311, 4306, 4314].sort(() => Math.random() - 0.5), answer: 4309, type: 0 },
            { question: "1763 + 2577", choices: [4340, 4342, 4337, 4345].sort(() => Math.random() - 0.5), answer: 4340, type: 0 },
            { question: "1776 + 2596", choices: [4372, 4374, 4369, 4377].sort(() => Math.random() - 0.5), answer: 4372, type: 0 },
            { question: "1789 + 2615", choices: [4404, 4406, 4401, 4409].sort(() => Math.random() - 0.5), answer: 4404, type: 0 },
            { question: "1802 + 2634", choices: [4436, 4438, 4433, 4441].sort(() => Math.random() - 0.5), answer: 4436, type: 0 },
            { question: "1815 + 2653", choices: [4468, 4470, 4465, 4473].sort(() => Math.random() - 0.5), answer: 4468, type: 0 },
            { question: "1828 + 2672", choices: [4500, 4502, 4497, 4505].sort(() => Math.random() - 0.5), answer: 4500, type: 0 },
            { question: "1841 + 2691", choices: [4532, 4534, 4529, 4537].sort(() => Math.random() - 0.5), answer: 4532, type: 0 },
            { question: "1854 + 2711", choices: [4565, 4567, 4562, 4570].sort(() => Math.random() - 0.5), answer: 4565, type: 0 },
            { question: "1867 + 2729", choices: [4596, 4598, 4593, 4601].sort(() => Math.random() - 0.5), answer: 4596, type: 0 },
            { question: "1881 + 2748", choices: [4629, 4631, 4626, 4634].sort(() => Math.random() - 0.5), answer: 4629, type: 0 },
            { question: "1893 + 2767", choices: [4660, 4662, 4657, 4665].sort(() => Math.random() - 0.5), answer: 4660, type: 0 },
            { question: "1906 + 2786", choices: [4692, 4694, 4689, 4697].sort(() => Math.random() - 0.5), answer: 4692, type: 0 },
            { question: "1919 + 2805", choices: [4724, 4726, 4721, 4729].sort(() => Math.random() - 0.5), answer: 4724, type: 0 },
            { question: "1932 + 2824", choices: [4756, 4758, 4753, 4761].sort(() => Math.random() - 0.5), answer: 4756, type: 0 },
            { question: "1945 + 2843", choices: [4788, 4790, 4785, 4793].sort(() => Math.random() - 0.5), answer: 4788, type: 0 },
            { question: "1958 + 2862", choices: [4820, 4822, 4817, 4825].sort(() => Math.random() - 0.5), answer: 4820, type: 0 },
            { question: "1971 + 2881", choices: [4852, 4854, 4849, 4857].sort(() => Math.random() - 0.5), answer: 4852, type: 0 },
            { question: "1984 + 2901", choices: [4885, 4887, 4882, 4890].sort(() => Math.random() - 0.5), answer: 4885, type: 0 },
            { question: "1997 + 2919", choices: [4916, 4918, 4913, 4921].sort(() => Math.random() - 0.5), answer: 4916, type: 0 },
            { question: "2011 + 2938", choices: [4949, 4951, 4946, 4954].sort(() => Math.random() - 0.5), answer: 4949, type: 0 },
            { question: "2023 + 2957", choices: [4980, 4982, 4977, 4985].sort(() => Math.random() - 0.5), answer: 4980, type: 0 },
            { question: "2036 + 2976", choices: [5012, 5014, 5009, 5017].sort(() => Math.random() - 0.5), answer: 5012, type: 0 },
            { question: "2049 + 2995", choices: [5044, 5046, 5041, 5049].sort(() => Math.random() - 0.5), answer: 5044, type: 0 },
            { question: "2062 + 3014", choices: [5076, 5078, 5073, 5081].sort(() => Math.random() - 0.5), answer: 5076, type: 0 },
            { question: "2075 + 3033", choices: [5108, 5110, 5105, 5113].sort(() => Math.random() - 0.5), answer: 5108, type: 0 },
            { question: "2088 + 3052", choices: [5140, 5142, 5137, 5145].sort(() => Math.random() - 0.5), answer: 5140, type: 0 },
            { question: "2101 + 3071", choices: [5172, 5174, 5169, 5177].sort(() => Math.random() - 0.5), answer: 5172, type: 0 },
            { question: "2114 + 3091", choices: [5205, 5207, 5202, 5210].sort(() => Math.random() - 0.5), answer: 5205, type: 0 },
            { question: "2127 + 3109", choices: [5236, 5238, 5233, 5241].sort(() => Math.random() - 0.5), answer: 5236, type: 0 },
            { question: "2141 + 3128", choices: [5269, 5271, 5266, 5274].sort(() => Math.random() - 0.5), answer: 5269, type: 0 },
            { question: "2153 + 3147", choices: [5300, 5302, 5297, 5305].sort(() => Math.random() - 0.5), answer: 5300, type: 0 },
            { question: "2166 + 3166", choices: [5332, 5334, 5329, 5337].sort(() => Math.random() - 0.5), answer: 5332, type: 0 },
            { question: "2179 + 3185", choices: [5364, 5366, 5361, 5369].sort(() => Math.random() - 0.5), answer: 5364, type: 0 },
            { question: "2192 + 3204", choices: [5396, 5398, 5393, 5401].sort(() => Math.random() - 0.5), answer: 5396, type: 0 },
            { question: "2205 + 3223", choices: [5428, 5430, 5425, 5433].sort(() => Math.random() - 0.5), answer: 5428, type: 0 },
            { question: "2218 + 3242", choices: [5460, 5462, 5457, 5465].sort(() => Math.random() - 0.5), answer: 5460, type: 0 },
            { question: "2231 + 3261", choices: [5492, 5494, 5489, 5497].sort(() => Math.random() - 0.5), answer: 5492, type: 0 },
            { question: "2244 + 3281", choices: [5525, 5527, 5522, 5530].sort(() => Math.random() - 0.5), answer: 5525, type: 0 },
            { question: "2257 + 3299", choices: [5556, 5558, 5553, 5561].sort(() => Math.random() - 0.5), answer: 5556, type: 0 },
            { question: "2271 + 3318", choices: [5589, 5591, 5586, 5594].sort(() => Math.random() - 0.5), answer: 5589, type: 0 },
            { question: "2283 + 3337", choices: [5620, 5622, 5617, 5625].sort(() => Math.random() - 0.5), answer: 5620, type: 0 },
            { question: "2296 + 3356", choices: [5652, 5654, 5649, 5657].sort(() => Math.random() - 0.5), answer: 5652, type: 0 },
            { question: "2309 + 3375", choices: [5684, 5686, 5681, 5689].sort(() => Math.random() - 0.5), answer: 5684, type: 0 },
            { question: "2322 + 3394", choices: [5716, 5718, 5713, 5721].sort(() => Math.random() - 0.5), answer: 5716, type: 0 },
            { question: "2335 + 3413", choices: [5748, 5750, 5745, 5753].sort(() => Math.random() - 0.5), answer: 5748, type: 0 },
            { question: "2348 + 3432", choices: [5780, 5782, 5777, 5785].sort(() => Math.random() - 0.5), answer: 5780, type: 0 },
            { question: "2361 + 3451", choices: [5812, 5814, 5809, 5817].sort(() => Math.random() - 0.5), answer: 5812, type: 0 },
            { question: "2374 + 3471", choices: [5845, 5847, 5842, 5850].sort(() => Math.random() - 0.5), answer: 5845, type: 0 },
            { question: "2387 + 3489", choices: [5876, 5878, 5873, 5881].sort(() => Math.random() - 0.5), answer: 5876, type: 0 },
            { question: "2401 + 3508", choices: [5909, 5911, 5906, 5914].sort(() => Math.random() - 0.5), answer: 5909, type: 0 },
            { question: "2413 + 3527", choices: [5940, 5942, 5937, 5945].sort(() => Math.random() - 0.5), answer: 5940, type: 0 },
            { question: "2426 + 3546", choices: [5972, 5974, 5969, 5977].sort(() => Math.random() - 0.5), answer: 5972, type: 0 },
            { question: "2439 + 3565", choices: [6004, 6006, 6001, 6009].sort(() => Math.random() - 0.5), answer: 6004, type: 0 },
            { question: "2452 + 3584", choices: [6036, 6038, 6033, 6041].sort(() => Math.random() - 0.5), answer: 6036, type: 0 },
            { question: "2465 + 3603", choices: [6068, 6070, 6065, 6073].sort(() => Math.random() - 0.5), answer: 6068, type: 0 },
            { question: "2478 + 3622", choices: [6100, 6102, 6097, 6105].sort(() => Math.random() - 0.5), answer: 6100, type: 0 },
            { question: "2491 + 3641", choices: [6132, 6134, 6129, 6137].sort(() => Math.random() - 0.5), answer: 6132, type: 0 },
            { question: "2504 + 3661", choices: [6165, 6167, 6162, 6170].sort(() => Math.random() - 0.5), answer: 6165, type: 0 },
            { question: "2517 + 3679", choices: [6196, 6198, 6193, 6201].sort(() => Math.random() - 0.5), answer: 6196, type: 0 },
            { question: "2531 + 3698", choices: [6229, 6231, 6226, 6234].sort(() => Math.random() - 0.5), answer: 6229, type: 0 },
            { question: "2543 + 3717", choices: [6260, 6262, 6257, 6265].sort(() => Math.random() - 0.5), answer: 6260, type: 0 },
            { question: "2556 + 3736", choices: [6292, 6294, 6289, 6297].sort(() => Math.random() - 0.5), answer: 6292, type: 0 },
            { question: "2569 + 3755", choices: [6324, 6326, 6321, 6329].sort(() => Math.random() - 0.5), answer: 6324, type: 0 },
            { question: "2582 + 3774", choices: [6356, 6358, 6353, 6361].sort(() => Math.random() - 0.5), answer: 6356, type: 0 },
            { question: "2595 + 3793", choices: [6388, 6390, 6385, 6393].sort(() => Math.random() - 0.5), answer: 6388, type: 0 },
            { question: "2608 + 3812", choices: [6420, 6422, 6417, 6425].sort(() => Math.random() - 0.5), answer: 6420, type: 0 }
        ],
        [
            {
                question: "1037 - 19",
                choices: [1018, 1019, 1017, 1020].sort(() => Math.random() - 0.5),
                answer: 1018,
                type: 0
            },
            {
                question: "1074 - 38",
                choices: [1036, 1037, 1035, 1038].sort(() => Math.random() - 0.5),
                answer: 1036,
                type: 0
            },
            {
                question: "1111 - 57",
                choices: [1054, 1055, 1053, 1056].sort(() => Math.random() - 0.5),
                answer: 1054,
                type: 0
            },
            {
                question: "1148 - 76",
                choices: [1072, 1071, 1073, 1074].sort(() => Math.random() - 0.5),
                answer: 1072,
                type: 0
            },
            {
                question: "1185 - 95",
                choices: [1090, 1089, 1091, 1092].sort(() => Math.random() - 0.5),
                answer: 1090,
                type: 0
            },
            {
                question: "1222 - 114",
                choices: [1108, 1109, 1107, 1110].sort(() => Math.random() - 0.5),
                answer: 1108,
                type: 0
            },
            {
                question: "1259 - 133",
                choices: [1126, 1127, 1125, 1128].sort(() => Math.random() - 0.5),
                answer: 1126,
                type: 0
            },
            {
                question: "1296 - 152",
                choices: [1144, 1145, 1143, 1146].sort(() => Math.random() - 0.5),
                answer: 1144,
                type: 0
            },
            {
                question: "1333 - 171",
                choices: [1162, 1161, 1163, 1164].sort(() => Math.random() - 0.5),
                answer: 1162,
                type: 0
            },
            {
                question: "1371 - 191",
                choices: [1180, 1181, 1179, 1182].sort(() => Math.random() - 0.5),
                answer: 1180,
                type: 0
            },
            {
                question: "1408 - 209",
                choices: [1199, 1200, 1198, 1201].sort(() => Math.random() - 0.5),
                answer: 1199,
                type: 0
            },
            {
                question: "1445 - 228",
                choices: [1217, 1218, 1216, 1219].sort(() => Math.random() - 0.5),
                answer: 1217,
                type: 0
            },
            {
                question: "1482 - 247",
                choices: [1235, 1236, 1234, 1237].sort(() => Math.random() - 0.5),
                answer: 1235,
                type: 0
            },
            {
                question: "1519 - 266",
                choices: [1253, 1254, 1252, 1255].sort(() => Math.random() - 0.5),
                answer: 1253,
                type: 0
            },
            {
                question: "1556 - 285",
                choices: [1271, 1270, 1272, 1273].sort(() => Math.random() - 0.5),
                answer: 1271,
                type: 0
            },
            {
                question: "1593 - 304",
                choices: [1289, 1290, 1288, 1291].sort(() => Math.random() - 0.5),
                answer: 1289,
                type: 0
            },
            {
                question: "1630 - 323",
                choices: [1307, 1308, 1306, 1309].sort(() => Math.random() - 0.5),
                answer: 1307,
                type: 0
            },
            {
                question: "1667 - 342",
                choices: [1325, 1324, 1326, 1327].sort(() => Math.random() - 0.5),
                answer: 1325,
                type: 0
            },
            {
                question: "1704 - 361",
                choices: [1343, 1344, 1342, 1345].sort(() => Math.random() - 0.5),
                answer: 1343,
                type: 0
            },
            {
                question: "1741 - 380",
                choices: [1361, 1360, 1362, 1363].sort(() => Math.random() - 0.5),
                answer: 1361,
                type: 0
            },
            {
                question: "1778 - 399",
                choices: [1379, 1380, 1378, 1381].sort(() => Math.random() - 0.5),
                answer: 1379,
                type: 0
            },
            {
                question: "1815 - 418",
                choices: [1397, 1398, 1396, 1399].sort(() => Math.random() - 0.5),
                answer: 1397,
                type: 0
            },
            {
                question: "1852 - 437",
                choices: [1415, 1414, 1416, 1417].sort(() => Math.random() - 0.5),
                answer: 1415,
                type: 0
            },
            {
                question: "1889 - 456",
                choices: [1433, 1432, 1434, 1435].sort(() => Math.random() - 0.5),
                answer: 1433,
                type: 0
            },
            {
                question: "1926 - 475",
                choices: [1451, 1452, 1450, 1453].sort(() => Math.random() - 0.5),
                answer: 1451,
                type: 0
            },
            {
                question: "1963 - 494",
                choices: [1469, 1468, 1470, 1471].sort(() => Math.random() - 0.5),
                answer: 1469,
                type: 0
            },
            {
                question: "2000 - 513",
                choices: [1487, 1488, 1486, 1489].sort(() => Math.random() - 0.5),
                answer: 1487,
                type: 0
            },
            {
                question: "2037 - 532",
                choices: [1505, 1506, 1504, 1507].sort(() => Math.random() - 0.5),
                answer: 1505,
                type: 0
            },
            {
                question: "2074 - 551",
                choices: [1523, 1522, 1524, 1525].sort(() => Math.random() - 0.5),
                answer: 1523,
                type: 0
            },
            {
                question: "2111 - 570",
                choices: [1541, 1542, 1540, 1543].sort(() => Math.random() - 0.5),
                answer: 1541,
                type: 0
            },
            {
                question: "2148 - 589",
                choices: [1559, 1558, 1560, 1561].sort(() => Math.random() - 0.5),
                answer: 1559,
                type: 0
            },
            {
                question: "2185 - 608",
                choices: [1577, 1578, 1576, 1579].sort(() => Math.random() - 0.5),
                answer: 1577,
                type: 0
            },
            {
                question: "2222 - 627",
                choices: [1595, 1596, 1594, 1597].sort(() => Math.random() - 0.5),
                answer: 1595,
                type: 0
            },
            {
                question: "2259 - 646",
                choices: [1613, 1614, 1612, 1615].sort(() => Math.random() - 0.5),
                answer: 1613,
                type: 0
            },
            {
                question: "2296 - 665",
                choices: [1631, 1632, 1630, 1633].sort(() => Math.random() - 0.5),
                answer: 1631,
                type: 0
            },
            {
                question: "2333 - 684",
                choices: [1649, 1650, 1648, 1651].sort(() => Math.random() - 0.5),
                answer: 1649,
                type: 0
            },
            {
                question: "2370 - 703",
                choices: [1667, 1668, 1666, 1669].sort(() => Math.random() - 0.5),
                answer: 1667,
                type: 0
            },
            {
                question: "2407 - 722",
                choices: [1685, 1686, 1684, 1687].sort(() => Math.random() - 0.5),
                answer: 1685,
                type: 0
            },
            {
                question: "2444 - 741",
                choices: [1703, 1704, 1702, 1705].sort(() => Math.random() - 0.5),
                answer: 1703,
                type: 0
            },
            {
                question: "2481 - 760",
                choices: [1721, 1722, 1720, 1723].sort(() => Math.random() - 0.5),
                answer: 1721,
                type: 0
            },
            {
                question: "2518 - 779",
                choices: [1739, 1740, 1738, 1741].sort(() => Math.random() - 0.5),
                answer: 1739,
                type: 0
            },
            {
                question: "2555 - 798",
                choices: [1757, 1758, 1756, 1759].sort(() => Math.random() - 0.5),
                answer: 1757,
                type: 0
            },
            {
                question: "2592 - 817",
                choices: [1775, 1776, 1774, 1777].sort(() => Math.random() - 0.5),
                answer: 1775,
                type: 0
            },
            {
                question: "2629 - 836",
                choices: [1793, 1794, 1792, 1795].sort(() => Math.random() - 0.5),
                answer: 1793,
                type: 0
            },
            {
                question: "2666 - 855",
                choices: [1811, 1812, 1810, 1813].sort(() => Math.random() - 0.5),
                answer: 1811,
                type: 0
            },
            {
                question: "2703 - 874",
                choices: [1829, 1830, 1828, 1831].sort(() => Math.random() - 0.5),
                answer: 1829,
                type: 0
            },
            {
                question: "2740 - 893",
                choices: [1847, 1848, 1846, 1849].sort(() => Math.random() - 0.5),
                answer: 1847,
                type: 0
            },
            {
                question: "2777 - 912",
                choices: [1865, 1866, 1864, 1867].sort(() => Math.random() - 0.5),
                answer: 1865,
                type: 0
            },
            {
                question: "2814 - 931",
                choices: [1883, 1884, 1882, 1885].sort(() => Math.random() - 0.5),
                answer: 1883,
                type: 0
            },
            {
                question: "2851 - 950",
                choices: [1901, 1902, 1900, 1903].sort(() => Math.random() - 0.5),
                answer: 1901,
                type: 0
            },
            {
                question: "2888 - 969",
                choices: [1919, 1920, 1918, 1921].sort(() => Math.random() - 0.5),
                answer: 1919,
                type: 0
            },
            {
                question: "2925 - 988",
                choices: [1937, 1938, 1936, 1939].sort(() => Math.random() - 0.5),
                answer: 1937,
                type: 0
            },
            {
                question: "2962 - 1007",
                choices: [1955, 1956, 1954, 1957].sort(() => Math.random() - 0.5),
                answer: 1955,
                type: 0
            },
            {
                question: "2999 - 1026",
                choices: [1973, 1974, 1972, 1975].sort(() => Math.random() - 0.5),
                answer: 1973,
                type: 0
            },
            {
                question: "3036 - 1045",
                choices: [1991, 1992, 1990, 1993].sort(() => Math.random() - 0.5),
                answer: 1991,
                type: 0
            },
            {
                question: "3073 - 1064",
                choices: [2009, 2010, 2008, 2011].sort(() => Math.random() - 0.5),
                answer: 2009,
                type: 0
            },
            {
                question: "3110 - 1083",
                choices: [2027, 2028, 2026, 2029].sort(() => Math.random() - 0.5),
                answer: 2027,
                type: 0
            },
            {
                question: "3147 - 1102",
                choices: [2045, 2046, 2044, 2047].sort(() => Math.random() - 0.5),
                answer: 2045,
                type: 0
            },
            {
                question: "3184 - 1121",
                choices: [2063, 2064, 2062, 2065].sort(() => Math.random() - 0.5),
                answer: 2063,
                type: 0
            },
            {
                question: "3221 - 1140",
                choices: [2081, 2082, 2080, 2083].sort(() => Math.random() - 0.5),
                answer: 2081,
                type: 0
            },
            {
                question: "3258 - 1159",
                choices: [2099, 2100, 2098, 2101].sort(() => Math.random() - 0.5),
                answer: 2099,
                type: 0
            },
            {
                question: "3295 - 1178",
                choices: [2117, 2118, 2116, 2119].sort(() => Math.random() - 0.5),
                answer: 2117,
                type: 0
            },
            {
                question: "3332 - 1197",
                choices: [2135, 2136, 2134, 2137].sort(() => Math.random() - 0.5),
                answer: 2135,
                type: 0
            },
            {
                question: "3369 - 1216",
                choices: [2153, 2154, 2152, 2155].sort(() => Math.random() - 0.5),
                answer: 2153,
                type: 0
            },
            {
                question: "3406 - 1235",
                choices: [2171, 2172, 2170, 2173].sort(() => Math.random() - 0.5),
                answer: 2171,
                type: 0
            },
            {
                question: "3443 - 1254",
                choices: [2189, 2190, 2188, 2191].sort(() => Math.random() - 0.5),
                answer: 2189,
                type: 0
            },
            {
                question: "3480 - 1273",
                choices: [2207, 2208, 2206, 2209].sort(() => Math.random() - 0.5),
                answer: 2207,
                type: 0
            },
            {
                question: "3517 - 1292",
                choices: [2225, 2226, 2224, 2227].sort(() => Math.random() - 0.5),
                answer: 2225,
                type: 0
            },
            {
                question: "3554 - 1311",
                choices: [2243, 2244, 2242, 2245].sort(() => Math.random() - 0.5),
                answer: 2243,
                type: 0
            },
            {
                question: "3591 - 1330",
                choices: [2261, 2262, 2260, 2263].sort(() => Math.random() - 0.5),
                answer: 2261,
                type: 0
            },
            {
                question: "3628 - 1349",
                choices: [2279, 2280, 2278, 2281].sort(() => Math.random() - 0.5),
                answer: 2279,
                type: 0
            },
            {
                question: "3665 - 1368",
                choices: [2297, 2298, 2296, 2299].sort(() => Math.random() - 0.5),
                answer: 2297,
                type: 0
            },
            {
                question: "3702 - 1387",
                choices: [2315, 2316, 2314, 2317].sort(() => Math.random() - 0.5),
                answer: 2315,
                type: 0
            },
            {
                question: "3739 - 1406",
                choices: [2333, 2334, 2332, 2335].sort(() => Math.random() - 0.5),
                answer: 2333,
                type: 0
            },
            {
                question: "3776 - 1425",
                choices: [2351, 2352, 2350, 2353].sort(() => Math.random() - 0.5),
                answer: 2351,
                type: 0
            },
            {
                question: "3813 - 1444",
                choices: [2369, 2370, 2368, 2371].sort(() => Math.random() - 0.5),
                answer: 2369,
                type: 0
            },
            {
                question: "3850 - 1463",
                choices: [2387, 2388, 2386, 2389].sort(() => Math.random() - 0.5),
                answer: 2387,
                type: 0
            },
            {
                question: "3887 - 1482",
                choices: [2405, 2406, 2404, 2407].sort(() => Math.random() - 0.5),
                answer: 2405,
                type: 0
            },
            {
                question: "3924 - 1501",
                choices: [2423, 2424, 2422, 2425].sort(() => Math.random() - 0.5),
                answer: 2423,
                type: 0
            },
            {
                question: "3961 - 1520",
                choices: [2441, 2442, 2440, 2443].sort(() => Math.random() - 0.5),
                answer: 2441,
                type: 0
            },
            {
                question: "3998 - 1539",
                choices: [2460, 2461, 2459, 2462].sort(() => Math.random() - 0.5),
                answer: 2460,
                type: 0
            },
            {
                question: "4035 - 1558",
                choices: [2477, 2478, 2476, 2479].sort(() => Math.random() - 0.5),
                answer: 2477,
                type: 0
            },
            {
                question: "4072 - 1577",
                choices: [2495, 2496, 2494, 2497].sort(() => Math.random() - 0.5),
                answer: 2495,
                type: 0
            },
            {
                question: "4109 - 1596",
                choices: [2513, 2514, 2512, 2515].sort(() => Math.random() - 0.5),
                answer: 2513,
                type: 0
            },
            {
                question: "4146 - 1615",
                choices: [2531, 2532, 2530, 2533].sort(() => Math.random() - 0.5),
                answer: 2531,
                type: 0
            },
            {
                question: "4183 - 1634",
                choices: [2549, 2550, 2548, 2551].sort(() => Math.random() - 0.5),
                answer: 2549,
                type: 0
            },
            {
                question: "4220 - 1653",
                choices: [2567, 2568, 2566, 2569].sort(() => Math.random() - 0.5),
                answer: 2567,
                type: 0
            },
            {
                question: "4257 - 1672",
                choices: [2585, 2586, 2584, 2587].sort(() => Math.random() - 0.5),
                answer: 2585,
                type: 0
            },
            {
                question: "4294 - 1691",
                choices: [2603, 2604, 2602, 2605].sort(() => Math.random() - 0.5),
                answer: 2603,
                type: 0
            },
            {
                question: "4331 - 1710",
                choices: [2621, 2622, 2620, 2623].sort(() => Math.random() - 0.5),
                answer: 2621,
                type: 0
            },
            {
                question: "4368 - 1729",
                choices: [2639, 2640, 2638, 2641].sort(() => Math.random() - 0.5),
                answer: 2639,
                type: 0
            },
            {
                question: "4405 - 1748",
                choices: [2657, 2658, 2656, 2659].sort(() => Math.random() - 0.5),
                answer: 2657,
                type: 0
            },
            {
                question: "4442 - 1767",
                choices: [2675, 2676, 2674, 2677].sort(() => Math.random() - 0.5),
                answer: 2675,
                type: 0
            },
            {
                question: "4479 - 1786",
                choices: [2693, 2694, 2692, 2695].sort(() => Math.random() - 0.5),
                answer: 2693,
                type: 0
            },
            {
                question: "4516 - 1805",
                choices: [2711, 2712, 2710, 2713].sort(() => Math.random() - 0.5),
                answer: 2711,
                type: 0
            },
            {
                question: "4553 - 1824",
                choices: [2729, 2730, 2728, 2731].sort(() => Math.random() - 0.5),
                answer: 2729,
                type: 0
            },
            {
                question: "4590 - 1843",
                choices: [2747, 2748, 2746, 2749].sort(() => Math.random() - 0.5),
                answer: 2747,
                type: 0
            },
            {
                question: "4627 - 1862",
                choices: [2765, 2766, 2764, 2767].sort(() => Math.random() - 0.5),
                answer: 2765,
                type: 0
            },
            {
                question: "4664 - 1881",
                choices: [2783, 2784, 2782, 2785].sort(() => Math.random() - 0.5),
                answer: 2783,
                type: 0
            },
            {
                question: "4701 - 1900",
                choices: [2801, 2802, 2800, 2803].sort(() => Math.random() - 0.5),
                answer: 2801,
                type: 0
            },
            {
                question: "4738 - 1919",
                choices: [2819, 2820, 2818, 2821].sort(() => Math.random() - 0.5),
                answer: 2819,
                type: 0
            },
            {
                question: "4775 - 1938",
                choices: [2837, 2838, 2836, 2839].sort(() => Math.random() - 0.5),
                answer: 2837,
                type: 0
            },
            {
                question: "4812 - 1957",
                choices: [2855, 2856, 2854, 2857].sort(() => Math.random() - 0.5),
                answer: 2855,
                type: 0
            },
            {
                question: "4849 - 1976",
                choices: [2873, 2874, 2872, 2875].sort(() => Math.random() - 0.5),
                answer: 2873,
                type: 0
            },
            {
                question: "4886 - 1995",
                choices: [2891, 2892, 2890, 2893].sort(() => Math.random() - 0.5),
                answer: 2891,
                type: 0
            },
            {
                question: "4923 - 2014",
                choices: [2909, 2910, 2908, 2911].sort(() => Math.random() - 0.5),
                answer: 2909,
                type: 0
            },
            {
                question: "4960 - 2033",
                choices: [2927, 2928, 2926, 2929].sort(() => Math.random() - 0.5),
                answer: 2927,
                type: 0
            },
            {
                question: "4997 - 2052",
                choices: [2945, 2946, 2944, 2947].sort(() => Math.random() - 0.5),
                answer: 2945,
                type: 0
            },
            {
                question: "5033 - 2071",
                choices: [2962, 2963, 2961, 2964].sort(() => Math.random() - 0.5),
                answer: 2962,
                type: 0
            },
            {
                question: "5071 - 2091",
                choices: [2980, 2981, 2979, 2982].sort(() => Math.random() - 0.5),
                answer: 2980,
                type: 0
            },
            {
                question: "5107 - 2109",
                choices: [2998, 2999, 2997, 3000].sort(() => Math.random() - 0.5),
                answer: 2998,
                type: 0
            },
            {
                question: "5144 - 2128",
                choices: [3016, 3017, 3015, 3018].sort(() => Math.random() - 0.5),
                answer: 3016,
                type: 0
            },
            {
                question: "5181 - 2147",
                choices: [3034, 3035, 3033, 3036].sort(() => Math.random() - 0.5),
                answer: 3034,
                type: 0
            },
            {
                question: "5218 - 2166",
                choices: [3052, 3053, 3051, 3054].sort(() => Math.random() - 0.5),
                answer: 3052,
                type: 0
            },
            {
                question: "5255 - 2185",
                choices: [3070, 3071, 3069, 3072].sort(() => Math.random() - 0.5),
                answer: 3070,
                type: 0
            },
            {
                question: "5292 - 2204",
                choices: [3088, 3089, 3087, 3090].sort(() => Math.random() - 0.5),
                answer: 3088,
                type: 0
            },
            {
                question: "5329 - 2223",
                choices: [3106, 3107, 3105, 3108].sort(() => Math.random() - 0.5),
                answer: 3106,
                type: 0
            },
            {
                question: "5366 - 2242",
                choices: [3124, 3125, 3123, 3126].sort(() => Math.random() - 0.5),
                answer: 3124,
                type: 0
            },
            {
                question: "5403 - 2261",
                choices: [3142, 3143, 3141, 3144].sort(() => Math.random() - 0.5),
                answer: 3142,
                type: 0
            },
            {
                question: "5441 - 2281",
                choices: [3160, 3161, 3159, 3162].sort(() => Math.random() - 0.5),
                answer: 3160,
                type: 0
            },
            {
                question: "5477 - 2299",
                choices: [3178, 3179, 3177, 3180].sort(() => Math.random() - 0.5),
                answer: 3178,
                type: 0
            },
            {
                question: "5514 - 2318",
                choices: [3196, 3197, 3195, 3198].sort(() => Math.random() - 0.5),
                answer: 3196,
                type: 0
            },
            {
                question: "5551 - 2337",
                choices: [3214, 3215, 3213, 3216].sort(() => Math.random() - 0.5),
                answer: 3214,
                type: 0
            },
            {
                question: "5588 - 2356",
                choices: [3232, 3233, 3231, 3234].sort(() => Math.random() - 0.5),
                answer: 3232,
                type: 0
            },
            {
                question: "5625 - 2375",
                choices: [3250, 3251, 3249, 3252].sort(() => Math.random() - 0.5),
                answer: 3250,
                type: 0
            },
            {
                question: "5662 - 2394",
                choices: [3268, 3269, 3267, 3270].sort(() => Math.random() - 0.5),
                answer: 3268,
                type: 0
            },
            {
                question: "5699 - 2413",
                choices: [3286, 3287, 3285, 3288].sort(() => Math.random() - 0.5),
                answer: 3286,
                type: 0
            },
            {
                question: "5736 - 2432",
                choices: [3304, 3305, 3303, 3306].sort(() => Math.random() - 0.5),
                answer: 3304,
                type: 0
            },
            {
                question: "5773 - 2451",
                choices: [3322, 3323, 3321, 3324].sort(() => Math.random() - 0.5),
                answer: 3322,
                type: 0
            },
            {
                question: "5811 - 2471",
                choices: [3340, 3341, 3339, 3342].sort(() => Math.random() - 0.5),
                answer: 3340,
                type: 0
            },
            {
                question: "5847 - 2489",
                choices: [3358, 3359, 3357, 3360].sort(() => Math.random() - 0.5),
                answer: 3358,
                type: 0
            },
            {
                question: "5884 - 2508",
                choices: [3376, 3377, 3375, 3378].sort(() => Math.random() - 0.5),
                answer: 3376,
                type: 0
            },
            {
                question: "5921 - 2527",
                choices: [3394, 3395, 3393, 3396].sort(() => Math.random() - 0.5),
                answer: 3394,
                type: 0
            },
            {
                question: "5958 - 2546",
                choices: [3412, 3413, 3411, 3414].sort(() => Math.random() - 0.5),
                answer: 3412,
                type: 0
            },
            {
                question: "5995 - 2565",
                choices: [3430, 3431, 3429, 3432].sort(() => Math.random() - 0.5),
                answer: 3430,
                type: 0
            },
            {
                question: "6032 - 2584",
                choices: [3448, 3449, 3447, 3450].sort(() => Math.random() - 0.5),
                answer: 3448,
                type: 0
            },
            {
                question: "6069 - 2603",
                choices: [3466, 3467, 3465, 3468].sort(() => Math.random() - 0.5),
                answer: 3466,
                type: 0
            },
            {
                question: "6106 - 2622",
                choices: [3484, 3485, 3483, 3486].sort(() => Math.random() - 0.5),
                answer: 3484,
                type: 0
            },
            {
                question: "6143 - 2641",
                choices: [3502, 3503, 3501, 3504].sort(() => Math.random() - 0.5),
                answer: 3502,
                type: 0
            },
            {
                question: "6181 - 2661",
                choices: [3520, 3521, 3519, 3522].sort(() => Math.random() - 0.5),
                answer: 3520,
                type: 0
            },
            {
                question: "6217 - 2679",
                choices: [3538, 3539, 3537, 3540].sort(() => Math.random() - 0.5),
                answer: 3538,
                type: 0
            },
            {
                question: "6254 - 2698",
                choices: [3556, 3557, 3555, 3558].sort(() => Math.random() - 0.5),
                answer: 3556,
                type: 0
            },
            {
                question: "6291 - 2717",
                choices: [3574, 3575, 3573, 3576].sort(() => Math.random() - 0.5),
                answer: 3574,
                type: 0
            },
            {
                question: "6328 - 2736",
                choices: [3592, 3593, 3591, 3594].sort(() => Math.random() - 0.5),
                answer: 3592,
                type: 0
            },
            {
                question: "6365 - 2755",
                choices: [3610, 3611, 3609, 3612].sort(() => Math.random() - 0.5),
                answer: 3610,
                type: 0
            },
            {
                question: "6402 - 2774",
                choices: [3628, 3629, 3627, 3630].sort(() => Math.random() - 0.5),
                answer: 3628,
                type: 0
            },
            {
                question: "6439 - 2793",
                choices: [3646, 3647, 3645, 3648].sort(() => Math.random() - 0.5),
                answer: 3646,
                type: 0
            },
            {
                question: "6476 - 2812",
                choices: [3664, 3665, 3663, 3666].sort(() => Math.random() - 0.5),
                answer: 3664,
                type: 0
            },
            {
                question: "6513 - 2831",
                choices: [3682, 3683, 3681, 3684].sort(() => Math.random() - 0.5),
                answer: 3682,
                type: 0
            },
            {
                question: "6551 - 2851",
                choices: [3700, 3701, 3699, 3702].sort(() => Math.random() - 0.5),
                answer: 3700,
                type: 0
            },
            {
                question: "6587 - 2869",
                choices: [3718, 3719, 3717, 3720].sort(() => Math.random() - 0.5),
                answer: 3718,
                type: 0
            },
            {
                question: "6624 - 2888",
                choices: [3736, 3737, 3735, 3738].sort(() => Math.random() - 0.5),
                answer: 3736,
                type: 0
            },
            {
                question: "6661 - 2907",
                choices: [3754, 3755, 3753, 3756].sort(() => Math.random() - 0.5),
                answer: 3754,
                type: 0
            },
            {
                question: "6698 - 2926",
                choices: [3772, 3773, 3771, 3774].sort(() => Math.random() - 0.5),
                answer: 3772,
                type: 0
            },
            {
                question: "6735 - 2945",
                choices: [3790, 3791, 3789, 3792].sort(() => Math.random() - 0.5),
                answer: 3790,
                type: 0
            },
            {
                question: "6772 - 2964",
                choices: [3808, 3809, 3807, 3810].sort(() => Math.random() - 0.5),
                answer: 3808,
                type: 0
            },
            {
                question: "6809 - 2983",
                choices: [3826, 3827, 3825, 3828].sort(() => Math.random() - 0.5),
                answer: 3826,
                type: 0
            },
            {
                question: "6846 - 3002",
                choices: [3844, 3845, 3843, 3846].sort(() => Math.random() - 0.5),
                answer: 3844,
                type: 0
            },
            {
                question: "6883 - 3021",
                choices: [3862, 3863, 3861, 3864].sort(() => Math.random() - 0.5),
                answer: 3862,
                type: 0
            },
            {
                question: "6921 - 3041",
                choices: [3880, 3881, 3879, 3882].sort(() => Math.random() - 0.5),
                answer: 3880,
                type: 0
            },
            {
                question: "6957 - 3059",
                choices: [3898, 3899, 3897, 3900].sort(() => Math.random() - 0.5),
                answer: 3898,
                type: 0
            },
            {
                question: "6994 - 3078",
                choices: [3916, 3917, 3915, 3918].sort(() => Math.random() - 0.5),
                answer: 3916,
                type: 0
            },
            {
                question: "7031 - 3097",
                choices: [3934, 3935, 3933, 3936].sort(() => Math.random() - 0.5),
                answer: 3934,
                type: 0
            },
            {
                question: "7068 - 3116",
                choices: [3952, 3953, 3951, 3954].sort(() => Math.random() - 0.5),
                answer: 3952,
                type: 0
            },
            {
                question: "7105 - 3135",
                choices: [3970, 3971, 3969, 3972].sort(() => Math.random() - 0.5),
                answer: 3970,
                type: 0
            },
            {
                question: "7142 - 3154",
                choices: [3988, 3989, 3987, 3990].sort(() => Math.random() - 0.5),
                answer: 3988,
                type: 0
            },
            {
                question: "7179 - 3173",
                choices: [4006, 4007, 4005, 4008].sort(() => Math.random() - 0.5),
                answer: 4006,
                type: 0
            },
            {
                question: "7216 - 3192",
                choices: [4024, 4025, 4023, 4026].sort(() => Math.random() - 0.5),
                answer: 4024,
                type: 0
            },
            {
                question: "7253 - 3211",
                choices: [4042, 4043, 4041, 4044].sort(() => Math.random() - 0.5),
                answer: 4042,
                type: 0
            },
            {
                question: "7291 - 3231",
                choices: [4060, 4061, 4059, 4062].sort(() => Math.random() - 0.5),
                answer: 4060,
                type: 0
            },
            {
                question: "7327 - 3249",
                choices: [4078, 4079, 4077, 4080].sort(() => Math.random() - 0.5),
                answer: 4078,
                type: 0
            },
            {
                question: "7364 - 3268",
                choices: [4096, 4097, 4095, 4098].sort(() => Math.random() - 0.5),
                answer: 4096,
                type: 0
            },
            {
                question: "7401 - 3287",
                choices: [4114, 4115, 4113, 4116].sort(() => Math.random() - 0.5),
                answer: 4114,
                type: 0
            },
            {
                question: "7438 - 3306",
                choices: [4132, 4133, 4131, 4134].sort(() => Math.random() - 0.5),
                answer: 4132,
                type: 0
            },
            {
                question: "7475 - 3325",
                choices: [4150, 4151, 4149, 4152].sort(() => Math.random() - 0.5),
                answer: 4150,
                type: 0
            },
            {
                question: "7512 - 3344",
                choices: [4168, 4169, 4167, 4170].sort(() => Math.random() - 0.5),
                answer: 4168,
                type: 0
            },
            {
                question: "7549 - 3363",
                choices: [4186, 4187, 4185, 4188].sort(() => Math.random() - 0.5),
                answer: 4186,
                type: 0
            },
            {
                question: "7586 - 3382",
                choices: [4204, 4205, 4203, 4206].sort(() => Math.random() - 0.5),
                answer: 4204,
                type: 0
            },
            {
                question: "7623 - 3401",
                choices: [4222, 4223, 4221, 4224].sort(() => Math.random() - 0.5),
                answer: 4222,
                type: 0
            },
            {
                question: "7661 - 3421",
                choices: [4240, 4241, 4239, 4242].sort(() => Math.random() - 0.5),
                answer: 4240,
                type: 0
            },
            {
                question: "7697 - 3439",
                choices: [4258, 4259, 4257, 4260].sort(() => Math.random() - 0.5),
                answer: 4258,
                type: 0
            },
            {
                question: "7734 - 3458",
                choices: [4276, 4277, 4275, 4278].sort(() => Math.random() - 0.5),
                answer: 4276,
                type: 0
            },
            {
                question: "7771 - 3477",
                choices: [4294, 4295, 4293, 4296].sort(() => Math.random() - 0.5),
                answer: 4294,
                type: 0
            },
            {
                question: "7808 - 3496",
                choices: [4312, 4313, 4311, 4314].sort(() => Math.random() - 0.5),
                answer: 4312,
                type: 0
            },
            {
                question: "7845 - 3515",
                choices: [4330, 4331, 4329, 4332].sort(() => Math.random() - 0.5),
                answer: 4330,
                type: 0
            },
            {
                question: "7882 - 3534",
                choices: [4348, 4349, 4347, 4350].sort(() => Math.random() - 0.5),
                answer: 4348,
                type: 0
            },
            {
                question: "7919 - 3553",
                choices: [4366, 4367, 4365, 4368].sort(() => Math.random() - 0.5),
                answer: 4366,
                type: 0
            },
            {
                question: "7956 - 3572",
                choices: [4384, 4385, 4383, 4386].sort(() => Math.random() - 0.5),
                answer: 4384,
                type: 0
            },
            {
                question: "7993 - 3591",
                choices: [4402, 4403, 4401, 4404].sort(() => Math.random() - 0.5),
                answer: 4402,
                type: 0
            },
            {
                question: "8031 - 3611",
                choices: [4420, 4421, 4419, 4422].sort(() => Math.random() - 0.5),
                answer: 4420,
                type: 0
            }


        ],
        [
            { "question": "7 x 63", "choices": ["441", "426", "457", "413"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "441", "type": 2 },
            { "question": "5 x 82", "choices": ["410", "405", "420", "415"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "410", "type": 2 },
            { "question": "9 x 47", "choices": ["423", "417", "435", "441"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "423", "type": 2 },
            { "question": "6 x 59", "choices": ["354", "364", "374", "344"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "354", "type": 2 },
            { "question": "8 x 76", "choices": ["608", "624", "592", "616"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "608", "type": 2 },
            { "question": "4 x 95", "choices": ["380", "370", "390", "360"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "380", "type": 2 },
            { "question": "3 x 87", "choices": ["261", "273", "249", "285"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "261", "type": 2 },
            { "question": "2 x 69", "choices": ["138", "126", "142", "134"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "138", "type": 2 },
            { "question": "7 x 54", "choices": ["378", "362", "390", "346"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "378", "type": 2 },
            { "question": "5 x 91", "choices": ["455", "445", "465", "435"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "455", "type": 2 },
            { "question": "9 x 38", "choices": ["342", "354", "326", "368"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "342", "type": 2 },
            { "question": "6 x 72", "choices": ["432", "442", "422", "412"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "432", "type": 2 },
            { "question": "8 x 45", "choices": ["360", "372", "384", "348"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "360", "type": 2 },
            { "question": "4 x 83", "choices": ["332", "344", "316", "328"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "332", "type": 2 },
            { "question": "3 x 96", "choices": ["288", "276", "304", "292"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "288", "type": 2 },
            { "question": "2 x 57", "choices": ["114", "108", "122", "116"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "114", "type": 2 },
            { "question": "9 x 64", "choices": ["576", "584", "562", "592"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "576", "type": 2 },
            { "question": "7 x 89", "choices": ["623", "637", "611", "645"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "623", "type": 2 },
            { "question": "5 x 67", "choices": ["335", "345", "325", "355"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "335", "type": 2 },
            { "question": "6 x 43", "choices": ["258", "246", "270", "234"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "258", "type": 2 },
            { "question": "8 x 52", "choices": ["416", "404", "428", "392"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "416", "type": 2 },
            { "question": "4 x 79", "choices": ["316", "328", "304", "342"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "316", "type": 2 },
            { "question": "3 x 94", "choices": ["282", "266", "298", "274"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "282", "type": 2 },
            { "question": "2 x 86", "choices": ["172", "164", "180", "156"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "172", "type": 2 },
            { "question": "9 x 57", "choices": ["513", "527", "499", "541"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "513", "type": 2 },
            { "question": "7 x 46", "choices": ["322", "338", "306", "314"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "322", "type": 2 },
            { "question": "5 x 93", "choices": ["465", "475", "455", "485"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "465", "type": 2 },
            { "question": "6 x 81", "choices": ["486", "498", "474", "462"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "486", "type": 2 },
            { "question": "8 x 39", "choices": ["312", "324", "300", "336"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "312", "type": 2 },
            { "question": "4 x 67", "choices": ["268", "256", "280", "242"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "268", "type": 2 },
            { "question": "3 x 92", "choices": ["276", "264", "288", "252"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "276", "type": 2 },
            { "question": "2 x 75", "choices": ["150", "142", "158", "134"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "150", "type": 2 },
            { "question": "9 x 53", "choices": ["477", "465", "489", "453"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "477", "type": 2 },
            { "question": "7 x 68", "choices": ["476", "462", "490", "448"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "476", "type": 2 },
            { "question": "5 x 86", "choices": ["430", "420", "440", "410"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "430", "type": 2 },
            { "question": "6 x 49", "choices": ["294", "282", "306", "270"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "294", "type": 2 },
            { "question": "8 x 37", "choices": ["296", "308", "284", "320"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "296", "type": 2 },
            { "question": "4 x 95", "choices": ["380", "370", "390", "360"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "380", "type": 2 },
            { "question": "3 x 88", "choices": ["264", "276", "252", "288"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "264", "type": 2 },
            { "question": "2 x 63", "choices": ["126", "118", "134", "142"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "126", "type": 2 },
            { "question": "9 x 46", "choices": ["414", "402", "426", "390"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "414", "type": 2 },
            { "question": "7 x 59", "choices": ["413", "427", "399", "441"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "413", "type": 2 },
            { "question": "5 x 77", "choices": ["385", "375", "395", "365"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "385", "type": 2 },
            { "question": "6 x 54", "choices": ["324", "336", "312", "348"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "324", "type": 2 },
            { "question": "8 x 42", "choices": ["336", "324", "348", "312"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "336", "type": 2 },
            { "question": "4 x 73", "choices": ["292", "304", "280", "316"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "292", "type": 2 },
            { "question": "3 x 97", "choices": ["291", "279", "303", "267"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "291", "type": 2 },
            { "question": "2 x 84", "choices": ["168", "160", "176", "152"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "168", "type": 2 },
            { "question": "9 x 55", "choices": ["495", "481", "509", "467"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "495", "type": 2 },
            { "question": "7 x 47", "choices": ["329", "343", "315", "357"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "329", "type": 2 },
            { "question": "5 x 92", "choices": ["460", "470", "450", "480"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "460", "type": 2 },
            { "question": "6 x 78", "choices": ["468", "456", "480", "444"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "468", "type": 2 },
            { "question": "8 x 41", "choices": ["328", "340", "316", "352"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "328", "type": 2 },
            { "question": "4 x 69", "choices": ["276", "264", "288", "252"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "276", "type": 2 },
            { "question": "3 x 95", "choices": ["285", "273", "297", "261"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "285", "type": 2 },
            { "question": "2 x 71", "choices": ["142", "134", "150", "126"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "142", "type": 2 },
            { "question": "9 x 51", "choices": ["459", "447", "471", "435"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "459", "type": 2 },
            { "question": "7 x 66", "choices": ["462", "448", "474", "436"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "462", "type": 2 },
            { "question": "5 x 84", "choices": ["420", "410", "430", "400"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "420", "type": 2 },
            { "question": "6 x 47", "choices": ["282", "270", "294", "258"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "282", "type": 2 },
            { "question": "8 x 35", "choices": ["280", "292", "268", "304"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "280", "type": 2 },
            { "question": "4 x 97", "choices": ["388", "376", "400", "364"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "388", "type": 2 },
            { "question": "3 x 86", "choices": ["258", "270", "246", "282"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "258", "type": 2 },
            { "question": "2 x 61", "choices": ["122", "114", "130", "106"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "122", "type": 2 },
            { "question": "9 x 44", "choices": ["396", "384", "408", "372"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "396", "type": 2 },
            { "question": "7 x 57", "choices": ["399", "413", "385", "427"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "399", "type": 2 },
            { "question": "5 x 75", "choices": ["375", "365", "385", "355"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "375", "type": 2 },
            { "question": "6 x 52", "choices": ["312", "324", "300", "336"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "312", "type": 2 },
            { "question": "8 x 43", "choices": ["344", "332", "356", "320"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "344", "type": 2 },
            { "question": "4 x 71", "choices": ["284", "296", "272", "308"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "284", "type": 2 },
            { "question": "3 x 93", "choices": ["279", "267", "291", "255"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "279", "type": 2 },
            { "question": "2 x 82", "choices": ["164", "156", "172", "148"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "164", "type": 2 },
            { "question": "9 x 53", "choices": ["477", "465", "489", "453"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "477", "type": 2 },
            { "question": "7 x 45", "choices": ["315", "329", "301", "343"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "315", "type": 2 },
            { "question": "5 x 90", "choices": ["450", "440", "460", "430"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "450", "type": 2 },
            { "question": "6 x 76", "choices": ["456", "444", "468", "432"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "456", "type": 2 },
            { "question": "8 x 39", "choices": ["312", "324", "300", "336"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "312", "type": 2 },
            { "question": "4 x 67", "choices": ["268", "256", "280", "242"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "268", "type": 2 },
            { "question": "3 x 98", "choices": ["294", "282", "306", "270"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "294", "type": 2 },
            { "question": "2 x 73", "choices": ["146", "138", "154", "130"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "146", "type": 2 },
            { "question": "9 x 49", "choices": ["441", "429", "453", "417"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "441", "type": 2 },
            { "question": "7 x 64", "choices": ["448", "434", "462", "420"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "448", "type": 2 },
            { "question": "5 x 82", "choices": ["410", "400", "420", "390"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "410", "type": 2 },
            { "question": "6 x 50", "choices": ["300", "312", "288", "324"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "300", "type": 2 },
            { "question": "8 x 36", "choices": ["288", "300", "276", "312"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "288", "type": 2 },
            { "question": "4 x 99", "choices": ["396", "384", "408", "372"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "396", "type": 2 },
            { "question": "3 x 84", "choices": ["252", "264", "240", "276"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "252", "type": 2 },
            { "question": "2 x 59", "choices": ["118", "110", "126", "102"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "118", "type": 2 },
            { "question": "9 x 42", "choices": ["378", "366", "390", "354"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "378", "type": 2 },
            { "question": "7 x 55", "choices": ["385", "399", "371", "413"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "385", "type": 2 },
            { "question": "5 x 78", "choices": ["390", "380", "400", "370"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "390", "type": 2 },
            { "question": "6 x 51", "choices": ["306", "318", "294", "330"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "306", "type": 2 },
            { "question": "8 x 44", "choices": ["352", "340", "364", "328"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "352", "type": 2 },
            { "question": "4 x 75", "choices": ["300", "312", "288", "324"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "300", "type": 2 },
            { "question": "3 x 91", "choices": ["273", "261", "285", "249"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "273", "type": 2 },
            { "question": "2 x 80", "choices": ["160", "152", "168", "144"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "160", "type": 2 },
            { "question": "9 x 51", "choices": ["459", "447", "471", "435"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "459", "type": 2 },
            { "question": "7 x 48", "choices": ["336", "350", "322", "364"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "336", "type": 2 },
            { "question": "5 x 88", "choices": ["440", "430", "450", "420"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "440", "type": 2 },
            { "question": "6 x 74", "choices": ["444", "432", "456", "420"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "444", "type": 2 },
            { "question": "8 x 38", "choices": ["304", "316", "292", "328"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "304", "type": 2 },
            { "question": "4 x 65", "choices": ["260", "248", "272", "236"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "260", "type": 2 },
            { "question": "3 x 96", "choices": ["288", "276", "300", "264"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5), "answer": "288", "type": 2 },
        ],
        [
            {
                "question": "23 x 47",
                "choices": ["1081", "1061", "1073", "1100"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5),
                "answer": "1081",
                "type": 3
            },
            {
                "question": "34 x 56",
                "choices": ["1904", "1914", "1924", "1934"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5),
                "answer": "1904",
                "type": 3
            },
            {
                "question": "45 x 67",
                "choices": ["3015", "3025", "3035", "3045"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5),
                "answer": "3015",
                "type": 3
            },
            {
                "question": "56 x 78",
                "choices": ["4368", "4378", "4388", "4398"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5),
                "answer": "4368",
                "type": 3
            },
            {
                "question": "67 x 89",
                "choices": ["5963", "5973", "5983", "5993"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5),
                "answer": "5963",
                "type": 3
            },
            {
                "question": "78 x 90",
                "choices": ["7020", "7030", "7040", "7050"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5),
                "answer": "7020",
                "type": 3
            },
            {
                "question": "89 x 12",
                "choices": ["1068", "1078", "1088", "1098"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5),
                "answer": "1068",
                "type": 3
            },
            {
                "question": "90 x 23",
                "choices": ["2070", "2080", "2090", "2100"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5),
                "answer": "2070",
                "type": 3
            },
            {
                "question": "12 x 34",
                "choices": ["408", "418", "428", "438"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5),
                "answer": "408",
                "type": 3
            },
            {
                "question": "23 x 45",
                "choices": ["1035", "1045", "1055", "1065"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5),
                "answer": "1035",
                "type": 3
            },
            {
                "question": "34 x 56",
                "choices": ["1904", "1914", "1924", "1934"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5),
                "answer": "1904",
                "type": 3
            },
            {
                "question": "45 x 67",
                "choices": ["3015", "3025", "3035", "3045"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5),
                "answer": "3015",
                "type": 3
            },
            {
                "question": "56 x 78",
                "choices": ["4368", "4378", "4388", "4398"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5),
                "answer": "4368",
                "type": 3
            },
            {
                "question": "67 x 89",
                "choices": ["5963", "5973", "5983", "5993"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5),
                "answer": "5963",
                "type": 3
            },
            {
                "question": "78 x 90",
                "choices": ["7020", "7030", "7040", "7050"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5),
                "answer": "7020",
                "type": 3
            },
            {
                "question": "89 x 12",
                "choices": ["1068", "1078", "1088", "1098"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5),
                "answer": "1068",
                "type": 3
            },
            {
                "question": "90 x 23",
                "choices": ["2070", "2080", "2090", "2100"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5),
                "answer": "2070",
                "type": 3
            },
            {
                "question": "12 x 34",
                "choices": ["408", "418", "428", "438"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5),
                "answer": "408",
                "type": 3
            },
            {
                "question": "23 x 45",
                "choices": ["1035", "1045", "1055", "1065"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5),
                "answer": "1035",
                "type": 3
            },
            {
                "question": "34 x 56",
                "choices": ["1904", "1914", "1924", "1934"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5),
                "answer": "1904",
                "type": 3
            },
            {
                "question": "45 x 67",
                "choices": ["3015", "3025", "3035", "3045"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5),
                "answer": "3015",
                "type": 3
            },
            {
                "question": "56 x 78",
                "choices": ["4368", "4378", "4388", "4398"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5),
                "answer": "4368",
                "type": 3
            },
            {
                "question": "67 x 89",
                "choices": ["5963", "5973", "5983", "5993"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5),
                "answer": "5963",
                "type": 3
            },
            {
                "question": "78 x 90",
                "choices": ["7020", "7030", "7040", "7050"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5),
                "answer": "7020",
                "type": 3
            },
            {
                "question": "89 x 12",
                "choices": ["1068", "1078", "1088", "1098"].sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5),
                "answer": "1068",
                "type": 3
            },
            {
                "question": "90 x 23",
                "choices": ["2070", "2080", "2090", "2100"].sort(() => Math.random() - 0.5),
                "answer": "2070",
                "type": 3
            },
            {
                "question": "12 x 34",
                "choices": ["408", "418", "428", "438"].sort(() => Math.random() - 0.5),
                "answer": "408",
                "type": 3
            },
            {
                "question": "23 x 45",
                "choices": ["1035", "1045", "1055", "1065"].sort(() => Math.random() - 0.5),
                "answer": "1035",
                "type": 3
            },
            {
                "question": "34 x 56",
                "choices": ["1904", "1914", "1924", "1934"].sort(() => Math.random() - 0.5),
                "answer": "1904",
                "type": 3
            },
            {
                "question": "45 x 67",
                "choices": ["3015", "3025", "3035", "3045"].sort(() => Math.random() - 0.5),
                "answer": "3015",
                "type": 3
            },
            {
                "question": "56 x 78",
                "choices": ["4368", "4378", "4388", "4398"].sort(() => Math.random() - 0.5),
                "answer": "4368",
                "type": 3
            },
            {
                "question": "67 x 89",
                "choices": ["5963", "5973", "5983", "5993"].sort(() => Math.random() - 0.5),
                "answer": "5963",
                "type": 3
            },
            {
                "question": "78 x 90",
                "choices": ["7020", "7030", "7040", "7050"].sort(() => Math.random() - 0.5),
                "answer": "7020",
                "type": 3
            },
            {
                "question": "89 x 12",
                "choices": ["1068", "1078", "1088", "1098"].sort(() => Math.random() - 0.5),
                "answer": "1068",
                "type": 3
            },
            {
                "question": "90 x 23",
                "choices": ["2070", "2080", "2090", "2100"].sort(() => Math.random() - 0.5),
                "answer": "2070",
                "type": 3
            },
            {
                "question": "12 x 34",
                "choices": ["408", "418", "428", "438"].sort(() => Math.random() - 0.5),
                "answer": "408",
                "type": 3
            },
            {
                "question": "23 x 45",
                "choices": ["1035", "1045", "1055", "1065"].sort(() => Math.random() - 0.5),
                "answer": "1035",
                "type": 3
            },
            {
                "question": "34 x 56",
                "choices": ["1904", "1914", "1924", "1934"].sort(() => Math.random() - 0.5),
                "answer": "1904",
                "type": 3
            },
            {
                "question": "45 x 67",
                "choices": ["3015", "3025", "3035", "3045"].sort(() => Math.random() - 0.5),
                "answer": "3015",
                "type": 3
            },
            {
                "question": "56 x 78",
                "choices": ["4368", "4378", "4388", "4398"].sort(() => Math.random() - 0.5),
                "answer": "4368",
                "type": 3
            },
            {
                "question": "67 x 89",
                "choices": ["5963", "5973", "5983", "5993"].sort(() => Math.random() - 0.5),
                "answer": "5963",
                "type": 3
            },
            {
                "question": "78 x 90",
                "choices": ["7020", "7030", "7040", "7050"].sort(() => Math.random() - 0.5),
                "answer": "7020",
                "type": 3
            },
            {
                "question": "89 x 12",
                "choices": ["1068", "1078", "1088", "1098"].sort(() => Math.random() - 0.5),
                "answer": "1068",
                "type": 3
            },
            {
                "question": "90 x 23",
                "choices": ["2070", "2080", "2090", "2100"].sort(() => Math.random() - 0.5),
                "answer": "2070",
                "type": 3
            },
            {
                "question": "12 x 34",
                "choices": ["408", "418", "428", "438"].sort(() => Math.random() - 0.5),
                "answer": "408",
                "type": 3
            },
            {
                "question": "23 x 45",
                "choices": ["1035", "1045", "1055", "1065"].sort(() => Math.random() - 0.5),
                "answer": "1035",
                "type": 3
            },
            {
                "question": "34 x 56",
                "choices": ["1904", "1914", "1924", "1934"].sort(() => Math.random() - 0.5),
                "answer": "1904",
                "type": 3
            },
            {
                "question": "45 x 67",
                "choices": ["3015", "3025", "3035", "3045"].sort(() => Math.random() - 0.5),
                "answer": "3015",
                "type": 3
            },
            {
                "question": "56 x 78",
                "choices": ["4368", "4378", "4388", "4398"].sort(() => Math.random() - 0.5),
                "answer": "4368",
                "type": 3
            },
            {
                "question": "67 x 89",
                "choices": ["5963", "5973", "5983", "5993"].sort(() => Math.random() - 0.5),
                "answer": "5963",
                "type": 3
            },
            {
                "question": "78 x 90",
                "choices": ["7020", "7030", "7040", "7050"].sort(() => Math.random() - 0.5),
                "answer": "7020",
                "type": 3
            },
            {
                "question": "89 x 12",
                "choices": ["1068", "1078", "1088", "1098"].sort(() => Math.random() - 0.5),
                "answer": "1068",
                "type": 3
            },
            {
                "question": "90 x 23",
                "choices": ["2070", "2080", "2090", "2100"].sort(() => Math.random() - 0.5),
                "answer": "2070",
                "type": 3
            },
            {
                "question": "12 x 34",
                "choices": ["408", "418", "428", "438"].sort(() => Math.random() - 0.5),
                "answer": "408",
                "type": 3
            },
            {
                "question": "23 x 45",
                "choices": ["1035", "1045", "1055", "1065"].sort(() => Math.random() - 0.5),
                "answer": "1035",
                "type": 3
            },
            {
                "question": "34 x 56",
                "choices": ["1904", "1914", "1924", "1934"].sort(() => Math.random() - 0.5),
                "answer": "1904",
                "type": 3
            },
            {
                "question": "45 x 67",
                "choices": ["3015", "3025", "3035", "3045"].sort(() => Math.random() - 0.5),
                "answer": "3015",
                "type": 3
            },
            {
                "question": "56 x 78",
                "choices": ["4368", "4378", "4388", "4398"].sort(() => Math.random() - 0.5),
                "answer": "4368",
                "type": 3
            },
            {
                "question": "67 x 89",
                "choices": ["5963", "5973", "5983", "5993"].sort(() => Math.random() - 0.5),
                "answer": "5963",
                "type": 3
            },
            {
                "question": "78 x 90",
                "choices": ["7020", "7030", "7040", "7050"].sort(() => Math.random() - 0.5),
                "answer": "7020",
                "type": 3
            },
            {
                "question": "89 x 12",
                "choices": ["1068", "1078", "1088", "1098"].sort(() => Math.random() - 0.5),
                "answer": "1068",
                "type": 3
            },
            {
                "question": "90 x 23",
                "choices": ["2070", "2080", "2090", "2100"].sort(() => Math.random() - 0.5),
                "answer": "2070",
                "type": 3
            },
            {
                "question": "12 x 34",
                "choices": ["408", "418", "428", "438"].sort(() => Math.random() - 0.5),
                "answer": "408",
                "type": 3
            },
            {
                "question": "23 x 45",
                "choices": ["1035", "1045", "1055", "1065"].sort(() => Math.random() - 0.5),
                "answer": "1035",
                "type": 3
            },
            {
                "question": "34 x 56",
                "choices": ["1904", "1914", "1924", "1934"].sort(() => Math.random() - 0.5),
                "answer": "1904",
                "type": 3
            },
            {
                "question": "45 x 67",
                "choices": ["3015", "3025", "3035", "3045"].sort(() => Math.random() - 0.5),
                "answer": "3015",
                "type": 3
            },
            {
                "question": "56 x 78",
                "choices": ["4368", "4378", "4388", "4398"].sort(() => Math.random() - 0.5),
                "answer": "4368",
                "type": 3
            },
            {
                "question": "67 x 89",
                "choices": ["5963", "5973", "5983", "5993"].sort(() => Math.random() - 0.5),
                "answer": "5963",
                "type": 3
            },
            {
                "question": "78 x 90",
                "choices": ["7020", "7030", "7040", "7050"].sort(() => Math.random() - 0.5),
                "answer": "7020",
                "type": 3
            },
            {
                "question": "89 x 12",
                "choices": ["1068", "1078", "1088", "1098"].sort(() => Math.random() - 0.5),
                "answer": "1068",
                "type": 3
            },
            {
                "question": "90 x 23",
                "choices": ["2070", "2080", "2090", "2100"].sort(() => Math.random() - 0.5),
                "answer": "2070",
                "type": 3
            },
            {
                "question": "12 x 34",
                "choices": ["408", "418", "428", "438"].sort(() => Math.random() - 0.5),
                "answer": "408",
                "type": 3
            },
            {
                "question": "23 x 45",
                "choices": ["1035", "1045", "1055", "1065"].sort(() => Math.random() - 0.5),
                "answer": "1035",
                "type": 3
            },
            {
                "question": "34 x 56",
                "choices": ["1904", "1914", "1924", "1934"].sort(() => Math.random() - 0.5),
                "answer": "1904",
                "type": 3
            },
            {
                "question": "45 x 67",
                "choices": ["3015", "3025", "3035", "3045"].sort(() => Math.random() - 0.5),
                "answer": "3015",
                "type": 3
            },
            {
                "question": "56 x 78",
                "choices": ["4368", "4378", "4388", "4398"].sort(() => Math.random() - 0.5),
                "answer": "4368",
                "type": 3
            },
            {
                "question": "67 x 89",
                "choices": ["5963", "5973", "5983", "5993"].sort(() => Math.random() - 0.5),
                "answer": "5963",
                "type": 3
            },
            {
                "question": "78 x 90",
                "choices": ["7020", "7030", "7040", "7050"].sort(() => Math.random() - 0.5),
                "answer": "7020",
                "type": 3
            },
            {
                "question": "89 x 12",
                "choices": ["1068", "1078", "1088", "1098"].sort(() => Math.random() - 0.5),
                "answer": "1068",
                "type": 3
            },
            {
                "question": "90 x 23",
                "choices": ["2070", "2080", "2090", "2100"].sort(() => Math.random() - 0.5),
                "answer": "2070",
                "type": 3
            }
        ],
        [
            {
                "question": "23 x 123",
                "choices": ["2829", "2819", "2839", "2849"].sort(() => Math.random() - 0.5),
                "answer": "2829",
                "type": 4
            },
            {
                "question": "34 x 234",
                "choices": ["7956", "7966", "7976", "7986"].sort(() => Math.random() - 0.5),
                "answer": "7956",
                "type": 4
            },
            {
                "question": "45 x 345",
                "choices": ["15525", "15535", "15545", "15555"].sort(() => Math.random() - 0.5),
                "answer": "15525",
                "type": 4
            },
            {
                "question": "56 x 456",
                "choices": ["25536", "25546", "25556", "25566"].sort(() => Math.random() - 0.5),
                "answer": "25536",
                "type": 4
            },
            {
                "question": "67 x 567",
                "choices": ["37989", "37999", "38009", "38019"].sort(() => Math.random() - 0.5),
                "answer": "37989",
                "type": 4
            },
            {
                "question": "78 x 678",
                "choices": ["52884", "52894", "52904", "52914"].sort(() => Math.random() - 0.5),
                "answer": "52884",
                "type": 4
            },
            {
                "question": "89 x 789",
                "choices": ["70221", "70231", "70241", "70251"].sort(() => Math.random() - 0.5),
                "answer": "70221",
                "type": 4
            },
            {
                "question": "90 x 890",
                "choices": ["80100", "80110", "80120", "80130"].sort(() => Math.random() - 0.5),
                "answer": "80100",
                "type": 4
            },
            {
                "question": "12 x 123",
                "choices": ["1476", "1486", "1496", "1506"].sort(() => Math.random() - 0.5),
                "answer": "1476",
                "type": 4
            },
            {
                "question": "23 x 234",
                "choices": ["5382", "5392", "5402", "5412"].sort(() => Math.random() - 0.5),
                "answer": "5382",
                "type": 4
            },
            {
                "question": "34 x 345",
                "choices": ["11730", "11740", "11750", "11760"].sort(() => Math.random() - 0.5),
                "answer": "11730",
                "type": 4
            },
            {
                "question": "45 x 456",
                "choices": ["20520", "20530", "20540", "20550"].sort(() => Math.random() - 0.5),
                "answer": "20520",
                "type": 4
            },
            {
                "question": "56 x 567",
                "choices": ["31752", "31762", "31772", "31782"].sort(() => Math.random() - 0.5),
                "answer": "31752",
                "type": 4
            },
            {
                "question": "67 x 678",
                "choices": ["45426", "45436", "45446", "45456"].sort(() => Math.random() - 0.5),
                "answer": "45426",
                "type": 4
            },
            {
                "question": "78 x 789",
                "choices": ["61542", "61552", "61562", "61572"].sort(() => Math.random() - 0.5),
                "answer": "61542",
                "type": 4
            },
            {
                "question": "89 x 890",
                "choices": ["79210", "79220", "79230", "79240"].sort(() => Math.random() - 0.5),
                "answer": "79210",
                "type": 4
            },
            {
                "question": "90 x 901",
                "choices": ["81090", "81100", "81110", "81120"].sort(() => Math.random() - 0.5),
                "answer": "81090",
                "type": 4
            },
            {
                "question": "12 x 234",
                "choices": ["2808", "2818", "2828", "2838"].sort(() => Math.random() - 0.5),
                "answer": "2808",
                "type": 4
            },
            {
                "question": "23 x 345",
                "choices": ["7935", "7945", "7955", "7965"].sort(() => Math.random() - 0.5),
                "answer": "7935",
                "type": 4
            },
            {
                "question": "34 x 456",
                "choices": ["15504", "15514", "15524", "15534"].sort(() => Math.random() - 0.5),
                "answer": "15504",
                "type": 4
            },
            {
                "question": "45 x 567",
                "choices": ["25515", "25525", "25535", "25545"].sort(() => Math.random() - 0.5),
                "answer": "25515",
                "type": 4
            },
            {
                "question": "56 x 678",
                "choices": ["37968", "37978", "37988", "37998"].sort(() => Math.random() - 0.5),
                "answer": "37968",
                "type": 4
            },
            {
                "question": "67 x 789",
                "choices": ["52863", "52873", "52883", "52893"].sort(() => Math.random() - 0.5),
                "answer": "52863",
                "type": 4
            },
            {
                "question": "78 x 890",
                "choices": ["69420", "69430", "69440", "69450"].sort(() => Math.random() - 0.5),
                "answer": "69420",
                "type": 4
            },
            {
                "question": "89 x 901",
                "choices": ["80189", "80199", "80209", "80219"].sort(() => Math.random() - 0.5),
                "answer": "80189",
                "type": 4
            },
            {
                "question": "90 x 123",
                "choices": ["11070", "11080", "11090", "11100"].sort(() => Math.random() - 0.5),
                "answer": "11070",
                "type": 4
            },
            {
                "question": "12 x 345",
                "choices": ["4140", "4150", "4160", "4170"].sort(() => Math.random() - 0.5),
                "answer": "4140",
                "type": 4
            },
            {
                "question": "23 x 456",
                "choices": ["10488", "10498", "10508", "10518"].sort(() => Math.random() - 0.5),
                "answer": "10488",
                "type": 4
            },
            {
                "question": "34 x 567",
                "choices": ["19278", "19288", "19298", "19308"].sort(() => Math.random() - 0.5),
                "answer": "19278",
                "type": 4
            },
            {
                "question": "45 x 678",
                "choices": ["30510", "30520", "30530", "30540"].sort(() => Math.random() - 0.5),
                "answer": "30510",
                "type": 4
            },
            {
                "question": "56 x 789",
                "choices": ["44184", "44194", "44204", "44214"].sort(() => Math.random() - 0.5),
                "answer": "44184",
                "type": 4
            },
            {
                "question": "67 x 890",
                "choices": ["59630", "59640", "59650", "59660"].sort(() => Math.random() - 0.5),
                "answer": "59630",
                "type": 4
            },
            {
                "question": "78 x 901",
                "choices": ["70278", "70288", "70298", "70308"].sort(() => Math.random() - 0.5),
                "answer": "70278",
                "type": 4
            },
            {
                "question": "89 x 123",
                "choices": ["10947", "10957", "10967", "10977"].sort(() => Math.random() - 0.5),
                "answer": "10947",
                "type": 4
            },
            {
                "question": "90 x 234",
                "choices": ["21060", "21070", "21080", "21090"].sort(() => Math.random() - 0.5),
                "answer": "21060",
                "type": 4
            },
            {
                "question": "12 x 456",
                "choices": ["5472", "5482", "5492", "5502"].sort(() => Math.random() - 0.5),
                "answer": "5472",
                "type": 4
            },
            {
                "question": "23 x 567",
                "choices": ["13041", "13051", "13061", "13071"].sort(() => Math.random() - 0.5),
                "answer": "13041",
                "type": 4
            },
            {
                "question": "34 x 678",
                "choices": ["23052", "23062", "23072", "23082"].sort(() => Math.random() - 0.5),
                "answer": "23052",
                "type": 4
            },
            {
                "question": "45 x 789",
                "choices": ["35505", "35515", "35525", "35535"].sort(() => Math.random() - 0.5),
                "answer": "35505",
                "type": 4
            },
            {
                "question": "56 x 890",
                "choices": ["49840", "49850", "49860", "49870"].sort(() => Math.random() - 0.5),
                "answer": "49840",
                "type": 4
            },
            {
                "question": "67 x 901",
                "choices": ["60367", "60377", "60387", "60397"].sort(() => Math.random() - 0.5),
                "answer": "60367",
                "type": 4
            },
            {
                "question": "78 x 123",
                "choices": ["9594", "9604", "9614", "9624"].sort(() => Math.random() - 0.5),
                "answer": "9594",
                "type": 4
            },
            {
                "question": "89 x 234",
                "choices": ["20826", "20836", "20846", "20856"].sort(() => Math.random() - 0.5),
                "answer": "20826",
                "type": 4
            },
            {
                "question": "90 x 345",
                "choices": ["31050", "31060", "31070", "31080"].sort(() => Math.random() - 0.5),
                "answer": "31050",
                "type": 4
            },
            {
                "question": "12 x 567",
                "choices": ["6804", "6814", "6824", "6834"].sort(() => Math.random() - 0.5),
                "answer": "6804",
                "type": 4
            },
            {
                "question": "23 x 678",
                "choices": ["15594", "15604", "15614", "15624"].sort(() => Math.random() - 0.5),
                "answer": "15594",
                "type": 4
            },
            {
                "question": "34 x 789",
                "choices": ["26826", "26836", "26846", "26856"].sort(() => Math.random() - 0.5),
                "answer": "26826",
                "type": 4
            },
            {
                "question": "45 x 890",
                "choices": ["40050", "40060", "40070", "40080"].sort(() => Math.random() - 0.5),
                "answer": "40050",
                "type": 4
            },
            {
                "question": "56 x 901",
                "choices": ["50456", "50466", "50476", "50486"].sort(() => Math.random() - 0.5),
                "answer": "50456",
                "type": 4
            },
            {
                "question": "67 x 123",
                "choices": ["8241", "8251", "8261", "8271"].sort(() => Math.random() - 0.5),
                "answer": "8241",
                "type": 4
            },
            {
                "question": "78 x 234",
                "choices": ["18252", "18262", "18272", "18282"].sort(() => Math.random() - 0.5),
                "answer": "18252",
                "type": 4
            },
            {
                "question": "89 x 345",
                "choices": ["30705", "30715", "30725", "30735"].sort(() => Math.random() - 0.5),
                "answer": "30705",
                "type": 4
            },
            {
                "question": "90 x 456",
                "choices": ["41040", "41050", "41060", "41070"].sort(() => Math.random() - 0.5),
                "answer": "41040",
                "type": 4
            },
            {
                "question": "12 x 678",
                "choices": ["8136", "8146", "8156", "8166"].sort(() => Math.random() - 0.5),
                "answer": "8136",
                "type": 4
            },
            {
                "question": "23 x 789",
                "choices": ["18147", "18157", "18167", "18177"].sort(() => Math.random() - 0.5),
                "answer": "18147",
                "type": 4
            },
            {
                "question": "34 x 890",
                "choices": ["30260", "30270", "30280", "30290"].sort(() => Math.random() - 0.5),
                "answer": "30260",
                "type": 4
            },
            {
                "question": "45 x 901",
                "choices": ["40545", "40555", "40565", "40575"].sort(() => Math.random() - 0.5),
                "answer": "40545",
                "type": 4
            },
            {
                "question": "56 x 123",
                "choices": ["6888", "6898", "6908", "6918"].sort(() => Math.random() - 0.5),
                "answer": "6888",
                "type": 4
            },
            {
                "question": "67 x 234",
                "choices": ["15678", "15688", "15698", "15708"].sort(() => Math.random() - 0.5),
                "answer": "15678",
                "type": 4
            },
            {
                "question": "78 x 345",
                "choices": ["26910", "26920", "26930", "26940"].sort(() => Math.random() - 0.5),
                "answer": "26910",
                "type": 4
            },
            {
                "question": "89 x 456",
                "choices": ["40584", "40594", "40604", "40614"].sort(() => Math.random() - 0.5),
                "answer": "40584",
                "type": 4
            },
            {
                "question": "90 x 567",
                "choices": ["51030", "51040", "51050", "51060"].sort(() => Math.random() - 0.5),
                "answer": "51030",
                "type": 4
            },
            {
                "question": "12 x 789",
                "choices": ["9468", "9478", "9488", "9498"].sort(() => Math.random() - 0.5),
                "answer": "9468",
                "type": 4
            },
            {
                "question": "23 x 890",
                "choices": ["20470", "20480", "20490", "20500"].sort(() => Math.random() - 0.5),
                "answer": "20470",
                "type": 4
            },
            {
                "question": "34 x 901",
                "choices": ["30634", "30644", "30654", "30664"].sort(() => Math.random() - 0.5),
                "answer": "30634",
                "type": 4
            },
            {
                "question": "45 x 123",
                "choices": ["5535", "5545", "5555", "5565"].sort(() => Math.random() - 0.5),
                "answer": "5535",
                "type": 4
            },
            {
                "question": "56 x 234",
                "choices": ["13104", "13114", "13124", "13134"].sort(() => Math.random() - 0.5),
                "answer": "13104",
                "type": 4
            },
            {
                "question": "67 x 345",
                "choices": ["23115", "23125", "23135", "23145"].sort(() => Math.random() - 0.5),
                "answer": "23115",
                "type": 4
            },
            {
                "question": "78 x 456",
                "choices": ["35568", "35578", "35588", "35598"].sort(() => Math.random() - 0.5),
                "answer": "35568",
                "type": 4
            },
            {
                "question": "89 x 567",
                "choices": ["50463", "50473", "50483", "50493"].sort(() => Math.random() - 0.5),
                "answer": "50463",
                "type": 4
            },
            {
                "question": "90 x 678",
                "choices": ["61020", "61030", "61040", "61050"].sort(() => Math.random() - 0.5),
                "answer": "61020",
                "type": 4
            },
            {
                "question": "12 x 890",
                "choices": ["10680", "10690", "10700", "10710"].sort(() => Math.random() - 0.5),
                "answer": "10680",
                "type": 4
            },
            {
                "question": "23 x 901",
                "choices": ["20723", "20733", "20743", "20753"].sort(() => Math.random() - 0.5),
                "answer": "20723",
                "type": 4
            },
            {
                "question": "34 x 123",
                "choices": ["4182", "4192", "4202", "4212"].sort(() => Math.random() - 0.5),
                "answer": "4182",
                "type": 4
            },
            {
                "question": "45 x 234",
                "choices": ["10530", "10540", "10550", "10560"].sort(() => Math.random() - 0.5),
                "answer": "10530",
                "type": 4
            },
            {
                "question": "56 x 345",
                "choices": ["19320", "19330", "19340", "19350"].sort(() => Math.random() - 0.5),
                "answer": "19320",
                "type": 4
            },
            {
                "question": "67 x 456",
                "choices": ["30552", "30562", "30572", "30582"].sort(() => Math.random() - 0.5),
                "answer": "30552",
                "type": 4
            },
            {
                "question": "78 x 567",
                "choices": ["44226", "44236", "44246", "44256"].sort(() => Math.random() - 0.5),
                "answer": "44226",
                "type": 4
            },
            {
                "question": "89 x 678",
                "choices": ["60342", "60352", "60362", "60372"].sort(() => Math.random() - 0.5),
                "answer": "60342",
                "type": 4
            },
            {
                "question": "90 x 789",
                "choices": ["71010", "71020", "71030", "71040"].sort(() => Math.random() - 0.5),
                "answer": "71010",
                "type": 4
            },
            {
                "question": "12 x 901",
                "choices": ["10812", "10822", "10832", "10842"].sort(() => Math.random() - 0.5),
                "answer": "10812",
                "type": 4
            },
            {
                "question": "23 x 123",
                "choices": ["2829", "2839", "2849", "2859"].sort(() => Math.random() - 0.5),
                "answer": "2829",
                "type": 4
            },
            {
                "question": "34 x 234",
                "choices": ["7956", "7966", "7976", "7986"].sort(() => Math.random() - 0.5),
                "answer": "7956",
                "type": 4
            },
            {
                "question": "45 x 345",
                "choices": ["15525", "15535", "15545", "15555"].sort(() => Math.random() - 0.5),
                "answer": "15525",
                "type": 4
            },
            {
                "question": "56 x 456",
                "choices": ["25536", "25546", "25556", "25566"].sort(() => Math.random() - 0.5),
                "answer": "25536",
                "type": 4
            },
            {
                "question": "67 x 567",
                "choices": ["37989", "37999", "38009", "38019"].sort(() => Math.random() - 0.5),
                "answer": "37989",
                "type": 4
            },
            {
                "question": "78 x 678",
                "choices": ["52884", "52894", "52904", "52914"].sort(() => Math.random() - 0.5),
                "answer": "52884",
                "type": 4
            },
            {
                "question": "89 x 789",
                "choices": ["70221", "70231", "70241", "70251"].sort(() => Math.random() - 0.5),
                "answer": "70221",
                "type": 4
            },
            {
                "question": "90 x 890",
                "choices": ["80100", "80110", "80120", "80130"].sort(() => Math.random() - 0.5),
                "answer": "80100",
                "type": 4
            },
            {
                "question": "12 x 123",
                "choices": ["1476", "1486", "1496", "1506"].sort(() => Math.random() - 0.5),
                "answer": "1476",
                "type": 4
            },
            {
                "question": "23 x 234",
                "choices": ["5382", "5392", "5402", "5412"].sort(() => Math.random() - 0.5),
                "answer": "5382",
                "type": 4
            },
            {
                "question": "34 x 345",
                "choices": ["11730", "11740", "11750", "11760"].sort(() => Math.random() - 0.5),
                "answer": "11730",
                "type": 4
            },
            {
                "question": "45 x 456",
                "choices": ["20520", "20530", "20540", "20550"].sort(() => Math.random() - 0.5),
                "answer": "20520",
                "type": 4
            },
            {
                "question": "56 x 567",
                "choices": ["31752", "31762", "31772", "31782"].sort(() => Math.random() - 0.5),
                "answer": "31752",
                "type": 4
            },
            {
                "question": "67 x 678",
                "choices": ["45426", "45436", "45446", "45456"].sort(() => Math.random() - 0.5),
                "answer": "45426",
                "type": 4
            },
            {
                "question": "78 x 789",
                "choices": ["61542", "61552", "61562", "61572"].sort(() => Math.random() - 0.5),
                "answer": "61542",
                "type": 4
            },
            {
                "question": "89 x 890",
                "choices": ["79210", "79220", "79230", "79240"].sort(() => Math.random() - 0.5),
                "answer": "79210",
                "type": 4
            },
            {
                "question": "90 x 901",
                "choices": ["81090", "81100", "81110", "81120"].sort(() => Math.random() - 0.5),
                "answer": "81090",
                "type": 4
            },
            {
                "question": "12 x 234",
                "choices": ["2808", "2818", "2828", "2838"].sort(() => Math.random() - 0.5),
                "answer": "2808",
                "type": 4
            },
            {
                "question": "23 x 345",
                "choices": ["7935", "7945", "7955", "7965"].sort(() => Math.random() - 0.5),
                "answer": "7935",
                "type": 4
            },
            {
                "question": "34 x 456",
                "choices": ["15504", "15514", "15524", "15534"].sort(() => Math.random() - 0.5),
                "answer": "15504",
                "type": 4
            },
            {
                "question": "45 x 567",
                "choices": ["25515", "25525", "25535", "25545"].sort(() => Math.random() - 0.5),
                "answer": "25515",
                "type": 4
            },
            {
                "question": "56 x 678",
                "choices": ["37968", "37978", "37988", "37998"].sort(() => Math.random() - 0.5),
                "answer": "37968",
                "type": 4
            },
            {
                "question": "67 x 789",
                "choices": ["52863", "52873", "52883", "52893"].sort(() => Math.random() - 0.5),
                "answer": "52863",
                "type": 4
            },
            {
                "question": "78 x 890",
                "choices": ["69420", "69430", "69440", "69450"].sort(() => Math.random() - 0.5),
                "answer": "69420",
                "type": 4
            },
            {
                "question": "89 x 901",
                "choices": ["80189", "80199", "80209", "80219"].sort(() => Math.random() - 0.5),
                "answer": "80189",
                "type": 4
            },
            {
                "question": "90 x 123",
                "choices": ["11070", "11080", "11090", "11100"].sort(() => Math.random() - 0.5),
                "answer": "11070",
                "type": 4
            },
            {
                "question": "12 x 345",
                "choices": ["4140", "4150", "4160", "4170"].sort(() => Math.random() - 0.5),
                "answer": "4140",
                "type": 4
            },
            {
                "question": "23 x 456",
                "choices": ["10488", "10498", "10508", "10518"].sort(() => Math.random() - 0.5),
                "answer": "10488",
                "type": 4
            },
            {
                "question": "34 x 567",
                "choices": ["19278", "19288", "19298", "19308"].sort(() => Math.random() - 0.5),
                "answer": "19278",
                "type": 4
            },
            {
                "question": "45 x 678",
                "choices": ["30510", "30520", "30530", "30540"].sort(() => Math.random() - 0.5),
                "answer": "30510",
                "type": 4
            },
            {
                "question": "56 x 789",
                "choices": ["44184", "44194", "44204", "44214"].sort(() => Math.random() - 0.5),
                "answer": "44184",
                "type": 4
            },
            {
                "question": "67 x 890",
                "choices": ["59630", "59640", "59650", "59660"].sort(() => Math.random() - 0.5),
                "answer": "59630",
                "type": 4
            },
            {
                "question": "78 x 901",
                "choices": ["70278", "70288", "70298", "70308"].sort(() => Math.random() - 0.5),
                "answer": "70278",
                "type": 4
            },
            {
                "question": "89 x 123",
                "choices": ["10947", "10957", "10967", "10977"].sort(() => Math.random() - 0.5),
                "answer": "10947",
                "type": 4
            },
            {
                "question": "90 x 234",
                "choices": ["21060", "21070", "21080", "21090"].sort(() => Math.random() - 0.5),
                "answer": "21060",
                "type": 4
            },
            {
                "question": "12 x 456",
                "choices": ["5472", "5482", "5492", "5502"].sort(() => Math.random() - 0.5),
                "answer": "5472",
                "type": 4
            },
            {
                "question": "23 x 567",
                "choices": ["13041", "13051", "13061", "13071"].sort(() => Math.random() - 0.5),
                "answer": "13041",
                "type": 4
            },
            {
                "question": "34 x 678",
                "choices": ["23052", "23062", "23072", "23082"].sort(() => Math.random() - 0.5),
                "answer": "23052",
                "type": 4
            },
            {
                "question": "45 x 789",
                "choices": ["35505", "35515", "35525", "35535"].sort(() => Math.random() - 0.5),
                "answer": "35505",
                "type": 4
            },
            {
                "question": "56 x 890",
                "choices": ["49840", "49850", "49860", "49870"].sort(() => Math.random() - 0.5),
                "answer": "49840",
                "type": 4
            },
            {
                "question": "67 x 901",
                "choices": ["60367", "60377", "60387", "60397"].sort(() => Math.random() - 0.5),
                "answer": "60367",
                "type": 4
            },
            {
                "question": "78 x 123",
                "choices": ["9594", "9604", "9614", "9624"].sort(() => Math.random() - 0.5),
                "answer": "9594",
                "type": 4
            },
            {
                "question": "89 x 234",
                "choices": ["20826", "20836", "20846", "20856"].sort(() => Math.random() - 0.5),
                "answer": "20826",
                "type": 4
            },
            {
                "question": "90 x 345",
                "choices": ["31050", "31060", "31070", "31080"].sort(() => Math.random() - 0.5),
                "answer": "31050",
                "type": 4
            },
            {
                "question": "12 x 567",
                "choices": ["6804", "6814", "6824", "6834"].sort(() => Math.random() - 0.5),
                "answer": "6804",
                "type": 4
            },
            {
                "question": "23 x 678",
                "choices": ["15594", "15604", "15614", "15624"].sort(() => Math.random() - 0.5),
                "answer": "15594",
                "type": 4
            },
            {
                "question": "34 x 789",
                "choices": ["26826", "26836", "26846", "26856"].sort(() => Math.random() - 0.5),
                "answer": "26826",
                "type": 4
            },
            {
                "question": "45 x 890",
                "choices": ["40050", "40060", "40070", "40080"].sort(() => Math.random() - 0.5),
                "answer": "40050",
                "type": 4
            },
            {
                "question": "56 x 901",
                "choices": ["50456", "50466", "50476", "50486"].sort(() => Math.random() - 0.5),
                "answer": "50456",
                "type": 4
            },
            {
                "question": "67 x 123",
                "choices": ["8241", "8251", "8261", "8271"].sort(() => Math.random() - 0.5),
                "answer": "8241",
                "type": 4
            },
            {
                "question": "78 x 234",
                "choices": ["18252", "18262", "18272", "18282"].sort(() => Math.random() - 0.5),
                "answer": "18252",
                "type": 4
            },
            {
                "question": "89 x 345",
                "choices": ["30705", "30715", "30725", "30735"].sort(() => Math.random() - 0.5),
                "answer": "30705",
                "type": 4
            },
            {
                "question": "90 x 456",
                "choices": ["41040", "41050", "41060", "41070"].sort(() => Math.random() - 0.5),
                "answer": "41040",
                "type": 4
            },
            {
                "question": "12 x 678",
                "choices": ["8136", "8146", "8156", "8166"].sort(() => Math.random() - 0.5),
                "answer": "8136",
                "type": 4
            },
            {
                "question": "23 x 789",
                "choices": ["18147", "18157", "18167", "18177"].sort(() => Math.random() - 0.5),
                "answer": "18147",
                "type": 4
            },
            {
                "question": "34 x 890",
                "choices": ["30260", "30270", "30280", "30290"].sort(() => Math.random() - 0.5),
                "answer": "30260",
                "type": 4
            },
            {
                "question": "45 x 901",
                "choices": ["40545", "40555", "40565", "40575"].sort(() => Math.random() - 0.5),
                "answer": "40545",
                "type": 4
            },
            {
                "question": "56 x 123",
                "choices": ["6888", "6898", "6908", "6918"].sort(() => Math.random() - 0.5),
                "answer": "6888",
                "type": 4
            },
            {
                "question": "67 x 234",
                "choices": ["15678", "15688", "15698", "15708"].sort(() => Math.random() - 0.5),
                "answer": "15678",
                "type": 4
            },
            {
                "question": "78 x 345",
                "choices": ["26910", "26920", "26930", "26940"].sort(() => Math.random() - 0.5),
                "answer": "26910",
                "type": 4
            },
            {
                "question": "89 x 456",
                "choices": ["40584", "40594", "40604", "40614"].sort(() => Math.random() - 0.5),
                "answer": "40584",
                "type": 4
            },
            {
                "question": "90 x 567",
                "choices": ["51030", "51040", "51050", "51060"].sort(() => Math.random() - 0.5),
                "answer": "51030",
                "type": 4
            },
            {
                "question": "12 x 789",
                "choices": ["9468", "9478", "9488", "9498"].sort(() => Math.random() - 0.5),
                "answer": "9468",
                "type": 4
            },
            {
                "question": "23 x 890",
                "choices": ["20470", "20480", "20490", "20500"].sort(() => Math.random() - 0.5),
                "answer": "20470",
                "type": 4
            },
            {
                "question": "34 x 901",
                "choices": ["30634", "30644", "30654", "30664"].sort(() => Math.random() - 0.5),
                "answer": "30634",
                "type": 4
            },
            {
                "question": "45 x 123",
                "choices": ["5535", "5545", "5555", "5565"].sort(() => Math.random() - 0.5),
                "answer": "5535",
                "type": 4
            },
            {
                "question": "56 x 234",
                "choices": ["13104", "13114", "13124", "13134"].sort(() => Math.random() - 0.5),
                "answer": "13104",
                "type": 4
            },
            {
                "question": "67 x 345",
                "choices": ["23115", "23125", "23135", "23145"].sort(() => Math.random() - 0.5),
                "answer": "23115",
                "type": 4
            },
            {
                "question": "78 x 456",
                "choices": ["35568", "35578", "35588", "35598"].sort(() => Math.random() - 0.5),
                "answer": "35568",
                "type": 4
            },
            {
                "question": "89 x 567",
                "choices": ["50463", "50473", "50483", "50493"].sort(() => Math.random() - 0.5),
                "answer": "50463",
                "type": 4
            },
            {
                "question": "90 x 678",
                "choices": ["61020", "61030", "61040", "61050"].sort(() => Math.random() - 0.5),
                "answer": "61020",
                "type": 4
            },
            {
                "question": "12 x 890",
                "choices": ["10680", "10690", "10700", "10710"].sort(() => Math.random() - 0.5),
                "answer": "10680",
                "type": 4
            },
            {
                "question": "23 x 901",
                "choices": ["20723", "20733", "20743", "20753"].sort(() => Math.random() - 0.5),
                "answer": "20723",
                "type": 4
            },
            {
                "question": "34 x 123",
                "choices": ["4182", "4192", "4202", "4212"].sort(() => Math.random() - 0.5),
                "answer": "4182",
                "type": 4
            },
            {
                "question": "45 x 234",
                "choices": ["10530", "10540", "10550", "10560"].sort(() => Math.random() - 0.5),
                "answer": "10530",
                "type": 4
            },
            {
                "question": "56 x 345",
                "choices": ["19320", "19330", "19340", "19350"].sort(() => Math.random() - 0.5),
                "answer": "19320",
                "type": 4
            },
            {
                "question": "67 x 456",
                "choices": ["30552", "30562", "30572", "30582"].sort(() => Math.random() - 0.5),
                "answer": "30552",
                "type": 4
            },
            {
                "question": "78 x 567",
                "choices": ["44226", "44236", "44246", "44256"].sort(() => Math.random() - 0.5),
                "answer": "44226",
                "type": 4
            },
            {
                "question": "89 x 678",
                "choices": ["60342", "60352", "60362", "60372"].sort(() => Math.random() - 0.5),
                "answer": "60342",
                "type": 4
            },
            {
                "question": "90 x 789",
                "choices": ["71010", "71020", "71030", "71040"].sort(() => Math.random() - 0.5),
                "answer": "71010",
                "type": 4
            },
            {
                "question": "12 x 901",
                "choices": ["10812", "10822", "10832", "10842"].sort(() => Math.random() - 0.5),
                "answer": "10812",
                "type": 4
            }
        ],
        [
            {
                "question": "123 x 456",
                "choices": ["56088", "56188", "56288", "56388"].sort(() => Math.random() - 0.5),
                "answer": "56088",
                "type": 5
            },
            {
                "question": "234 x 567",
                "choices": ["132678", "132778", "132878", "132978"].sort(() => Math.random() - 0.5),
                "answer": "132678",
                "type": 5
            },
            {
                "question": "345 x 678",
                "choices": ["233910", "234010", "234110", "234210"].sort(() => Math.random() - 0.5),
                "answer": "233910",
                "type": 5
            },
            {
                "question": "456 x 789",
                "choices": ["359784", "359884", "359984", "360084"].sort(() => Math.random() - 0.5),
                "answer": "359784",
                "type": 5
            },
            {
                "question": "567 x 890",
                "choices": ["504630", "504730", "504830", "504930"].sort(() => Math.random() - 0.5),
                "answer": "504630",
                "type": 5
            },
            {
                "question": "678 x 901",
                "choices": ["610878", "610978", "611078", "611178"].sort(() => Math.random() - 0.5),
                "answer": "610878",
                "type": 5
            },
            {
                "question": "789 x 123",
                "choices": ["97047", "97147", "97247", "97347"].sort(() => Math.random() - 0.5),
                "answer": "97047",
                "type": 5
            },
            {
                "question": "890 x 234",
                "choices": ["208260", "208360", "208460", "208560"].sort(() => Math.random() - 0.5),
                "answer": "208260",
                "type": 5
            },
            {
                "question": "901 x 345",
                "choices": ["310845", "310945", "311045", "311145"].sort(() => Math.random() - 0.5),
                "answer": "310845",
                "type": 5
            },
            {
                "question": "123 x 567",
                "choices": ["69741", "69841", "69941", "70041"].sort(() => Math.random() - 0.5),
                "answer": "69741",
                "type": 5
            },
            {
                "question": "234 x 678",
                "choices": ["158652", "158752", "158852", "158952"].sort(() => Math.random() - 0.5),
                "answer": "158652",
                "type": 5
            },
            {
                "question": "345 x 789",
                "choices": ["272205", "272305", "272405", "272505"].sort(() => Math.random() - 0.5),
                "answer": "272205",
                "type": 5
            },
            {
                "question": "456 x 890",
                "choices": ["405840", "405940", "406040", "406140"].sort(() => Math.random() - 0.5),
                "answer": "405840",
                "type": 5
            },
            {
                "question": "567 x 901",
                "choices": ["510867", "510967", "511067", "511167"].sort(() => Math.random() - 0.5),
                "answer": "510867",
                "type": 5
            },
            {
                "question": "678 x 123",
                "choices": ["83394", "83494", "83594", "83694"].sort(() => Math.random() - 0.5),
                "answer": "83394",
                "type": 5
            },
            {
                "question": "789 x 234",
                "choices": ["184626", "184726", "184826", "184926"].sort(() => Math.random() - 0.5),
                "answer": "184626",
                "type": 5
            },
            {
                "question": "890 x 345",
                "choices": ["307050", "307150", "307250", "307350"].sort(() => Math.random() - 0.5),
                "answer": "307050",
                "type": 5
            },
            {
                "question": "901 x 456",
                "choices": ["410856", "410956", "411056", "411156"].sort(() => Math.random() - 0.5),
                "answer": "410856",
                "type": 5
            },
            {
                "question": "123 x 678",
                "choices": ["83394", "83494", "83594", "83694"].sort(() => Math.random() - 0.5),
                "answer": "83394",
                "type": 5
            },
            {
                "question": "234 x 789",
                "choices": ["184626", "184726", "184826", "184926"].sort(() => Math.random() - 0.5),
                "answer": "184626",
                "type": 5
            },
            {
                "question": "345 x 890",
                "choices": ["307050", "307150", "307250", "307350"].sort(() => Math.random() - 0.5),
                "answer": "307050",
                "type": 5
            },
            {
                "question": "456 x 901",
                "choices": ["410856", "410956", "411056", "411156"].sort(() => Math.random() - 0.5),
                "answer": "410856",
                "type": 5
            },
            {
                "question": "567 x 123",
                "choices": ["69741", "69841", "69941", "70041"].sort(() => Math.random() - 0.5),
                "answer": "69741",
                "type": 5
            },
            {
                "question": "678 x 234",
                "choices": ["158652", "158752", "158852", "158952"].sort(() => Math.random() - 0.5),
                "answer": "158652",
                "type": 5
            },
            {
                "question": "789 x 345",
                "choices": ["272205", "272305", "272405", "272505"].sort(() => Math.random() - 0.5),
                "answer": "272205",
                "type": 5
            },
            {
                "question": "890 x 456",
                "choices": ["405840", "405940", "406040", "406140"].sort(() => Math.random() - 0.5),
                "answer": "405840",
                "type": 5
            },
            {
                "question": "901 x 567",
                "choices": ["510867", "510967", "511067", "511167"].sort(() => Math.random() - 0.5),
                "answer": "510867",
                "type": 5
            },
            {
                "question": "123 x 789",
                "choices": ["97047", "97147", "97247", "97347"].sort(() => Math.random() - 0.5),
                "answer": "97047",
                "type": 5
            },
            {
                "question": "234 x 890",
                "choices": ["208260", "208360", "208460", "208560"].sort(() => Math.random() - 0.5),
                "answer": "208260",
                "type": 5
            },
            {
                "question": "345 x 901",
                "choices": ["310845", "310945", "311045", "311145"].sort(() => Math.random() - 0.5),
                "answer": "310845",
                "type": 5
            },
            {
                "question": "456 x 123",
                "choices": ["56088", "56188", "56288", "56388"].sort(() => Math.random() - 0.5),
                "answer": "56088",
                "type": 5
            },
            {
                "question": "567 x 234",
                "choices": ["132678", "132778", "132878", "132978"].sort(() => Math.random() - 0.5),
                "answer": "132678",
                "type": 5
            },
            {
                "question": "678 x 345",
                "choices": ["233910", "234010", "234110", "234210"].sort(() => Math.random() - 0.5),
                "answer": "233910",
                "type": 5
            },
            {
                "question": "789 x 456",
                "choices": ["359784", "359884", "359984", "360084"].sort(() => Math.random() - 0.5),
                "answer": "359784",
                "type": 5
            },
            {
                "question": "890 x 567",
                "choices": ["504630", "504730", "504830", "504930"].sort(() => Math.random() - 0.5),
                "answer": "504630",
                "type": 5
            },
            {
                "question": "901 x 678",
                "choices": ["610878", "610978", "611078", "611178"].sort(() => Math.random() - 0.5),
                "answer": "610878",
                "type": 5
            },
            {
                "question": "123 x 890",
                "choices": ["109470", "109570", "109670", "109770"].sort(() => Math.random() - 0.5),
                "answer": "109470",
                "type": 5
            },
            {
                "question": "234 x 901",
                "choices": ["210834", "210934", "211034", "211134"].sort(() => Math.random() - 0.5),
                "answer": "210834",
                "type": 5
            },
            {
                "question": "345 x 123",
                "choices": ["42435", "42535", "42635", "42735"].sort(() => Math.random() - 0.5),
                "answer": "42435",
                "type": 5
            },
            {
                "question": "456 x 234",
                "choices": ["106704", "106804", "106904", "107004"].sort(() => Math.random() - 0.5),
                "answer": "106704",
                "type": 5
            },
            {
                "question": "567 x 345",
                "choices": ["195615", "195715", "195815", "195915"].sort(() => Math.random() - 0.5),
                "answer": "195615",
                "type": 5
            },
            {
                "question": "678 x 456",
                "choices": ["309168", "309268", "309368", "309468"].sort(() => Math.random() - 0.5),
                "answer": "309168",
                "type": 5
            },
            {
                "question": "789 x 567",
                "choices": ["447363", "447463", "447563", "447663"].sort(() => Math.random() - 0.5),
                "answer": "447363",
                "type": 5
            },
            {
                "question": "890 x 678",
                "choices": ["603420", "603520", "603620", "603720"].sort(() => Math.random() - 0.5),
                "answer": "603420",
                "type": 5
            },
            {
                "question": "901 x 789",
                "choices": ["710889", "710989", "711089", "711189"].sort(() => Math.random() - 0.5),
                "answer": "710889",
                "type": 5
            },
            {
                "question": "123 x 901",
                "choices": ["110823", "110923", "111023", "111123"].sort(() => Math.random() - 0.5),
                "answer": "110823",
                "type": 5
            },
            {
                "question": "234 x 123",
                "choices": ["28782", "28882", "28982", "29082"].sort(() => Math.random() - 0.5),
                "answer": "28782",
                "type": 5
            },
            {
                "question": "345 x 234",
                "choices": ["80730", "80830", "80930", "81030"].sort(() => Math.random() - 0.5),
                "answer": "80730",
                "type": 5
            },
            {
                "question": "456 x 345",
                "choices": ["157320", "157420", "157520", "157620"].sort(() => Math.random() - 0.5),
                "answer": "157320",
                "type": 5
            },
            {
                "question": "567 x 456",
                "choices": ["258552", "258652", "258752", "258852"].sort(() => Math.random() - 0.5),
                "answer": "258552",
                "type": 5
            },
            {
                "question": "678 x 567",
                "choices": ["384426", "384526", "384626", "384726"].sort(() => Math.random() - 0.5),
                "answer": "384426",
                "type": 5
            },
            {
                "question": "789 x 678",
                "choices": ["534942", "535042", "535142", "535242"].sort(() => Math.random() - 0.5),
                "answer": "534942",
                "type": 5
            },
            {
                "question": "890 x 789",
                "choices": ["702210", "702310", "702410", "702510"].sort(() => Math.random() - 0.5),
                "answer": "702210",
                "type": 5
            },
            {
                "question": "901 x 890",
                "choices": ["801890", "801990", "802090", "802190"].sort(() => Math.random() - 0.5),
                "answer": "801890",
                "type": 5
            },
            {
                "question": "123 x 678",
                "choices": ["83394", "83494", "83594", "83694"].sort(() => Math.random() - 0.5),
                "answer": "83394",
                "type": 5
            },
            {
                "question": "234 x 789",
                "choices": ["184626", "184726", "184826", "184926"].sort(() => Math.random() - 0.5),
                "answer": "184626",
                "type": 5
            },
            {
                "question": "345 x 890",
                "choices": ["307050", "307150", "307250", "307350"].sort(() => Math.random() - 0.5),
                "answer": "307050",
                "type": 5
            },
            {
                "question": "456 x 901",
                "choices": ["410856", "410956", "411056", "411156"].sort(() => Math.random() - 0.5),
                "answer": "410856",
                "type": 5
            },
            {
                "question": "567 x 123",
                "choices": ["69741", "69841", "69941", "70041"].sort(() => Math.random() - 0.5),
                "answer": "69741",
                "type": 5
            },
            {
                "question": "678 x 234",
                "choices": ["158652", "158752", "158852", "158952"].sort(() => Math.random() - 0.5),
                "answer": "158652",
                "type": 5
            },
            {
                "question": "789 x 345",
                "choices": ["272205", "272305", "272405", "272505"].sort(() => Math.random() - 0.5),
                "answer": "272205",
                "type": 5
            },
            {
                "question": "890 x 456",
                "choices": ["405840", "405940", "406040", "406140"].sort(() => Math.random() - 0.5),
                "answer": "405840",
                "type": 5
            },
            {
                "question": "901 x 567",
                "choices": ["510867", "510967", "511067", "511167"].sort(() => Math.random() - 0.5),
                "answer": "510867",
                "type": 5
            },
            {
                "question": "123 x 789",
                "choices": ["97047", "97147", "97247", "97347"].sort(() => Math.random() - 0.5),
                "answer": "97047",
                "type": 5
            },
            {
                "question": "234 x 890",
                "choices": ["208260", "208360", "208460", "208560"].sort(() => Math.random() - 0.5),
                "answer": "208260",
                "type": 5
            },
            {
                "question": "345 x 901",
                "choices": ["310845", "310945", "311045", "311145"].sort(() => Math.random() - 0.5),
                "answer": "310845",
                "type": 5
            },
            {
                "question": "456 x 123",
                "choices": ["56088", "56188", "56288", "56388"].sort(() => Math.random() - 0.5),
                "answer": "56088",
                "type": 5
            },
            {
                "question": "567 x 234",
                "choices": ["132678", "132778", "132878", "132978"].sort(() => Math.random() - 0.5),
                "answer": "132678",
                "type": 5
            },
            {
                "question": "678 x 345",
                "choices": ["233910", "234010", "234110", "234210"].sort(() => Math.random() - 0.5),
                "answer": "233910",
                "type": 5
            },
            {
                "question": "789 x 456",
                "choices": ["359784", "359884", "359984", "360084"].sort(() => Math.random() - 0.5),
                "answer": "359784",
                "type": 5
            },
            {
                "question": "890 x 567",
                "choices": ["504630", "504730", "504830", "504930"].sort(() => Math.random() - 0.5),
                "answer": "504630",
                "type": 5
            },
            {
                "question": "901 x 678",
                "choices": ["610878", "610978", "611078", "611178"].sort(() => Math.random() - 0.5),
                "answer": "610878",
                "type": 5
            },
            {
                "question": "123 x 890",
                "choices": ["109470", "109570", "109670", "109770"].sort(() => Math.random() - 0.5),
                "answer": "109470",
                "type": 5
            },
            {
                "question": "234 x 901",
                "choices": ["210834", "210934", "211034", "211134"].sort(() => Math.random() - 0.5),
                "answer": "210834",
                "type": 5
            },
            {
                "question": "345 x 123",
                "choices": ["42435", "42535", "42635", "42735"].sort(() => Math.random() - 0.5),
                "answer": "42435",
                "type": 5
            },
            {
                "question": "456 x 234",
                "choices": ["106704", "106804", "106904", "107004"].sort(() => Math.random() - 0.5),
                "answer": "106704",
                "type": 5
            },
            {
                "question": "567 x 345",
                "choices": ["195615", "195715", "195815", "195915"].sort(() => Math.random() - 0.5),
                "answer": "195615",
                "type": 5
            },
            {
                "question": "678 x 456",
                "choices": ["309168", "309268", "309368", "309468"].sort(() => Math.random() - 0.5),
                "answer": "309168",
                "type": 5
            },
            {
                "question": "789 x 567",
                "choices": ["447363", "447463", "447563", "447663"].sort(() => Math.random() - 0.5),
                "answer": "447363",
                "type": 5
            },
            {
                "question": "890 x 678",
                "choices": ["603420", "603520", "603620", "603720"].sort(() => Math.random() - 0.5),
                "answer": "603420",
                "type": 5
            },
            {
                "question": "901 x 789",
                "choices": ["710889", "710989", "711089", "711189"].sort(() => Math.random() - 0.5),
                "answer": "710889",
                "type": 5
            },
            {
                "question": "123 x 901",
                "choices": ["110823", "110923", "111023", "111123"].sort(() => Math.random() - 0.5),
                "answer": "110823",
                "type": 5
            },
            {
                "question": "234 x 123",
                "choices": ["28782", "28882", "28982", "29082"].sort(() => Math.random() - 0.5),
                "answer": "28782",
                "type": 5
            },
            {
                "question": "345 x 234",
                "choices": ["80730", "80830", "80930", "81030"].sort(() => Math.random() - 0.5),
                "answer": "80730",
                "type": 5
            },
            {
                "question": "456 x 345",
                "choices": ["157320", "157420", "157520", "157620"].sort(() => Math.random() - 0.5),
                "answer": "157320",
                "type": 5
            },
            {
                "question": "567 x 456",
                "choices": ["258552", "258652", "258752", "258852"].sort(() => Math.random() - 0.5),
                "answer": "258552",
                "type": 5
            },
            {
                "question": "678 x 567",
                "choices": ["384426", "384526", "384626", "384726"].sort(() => Math.random() - 0.5),
                "answer": "384426",
                "type": 5
            },
            {
                "question": "789 x 678",
                "choices": ["534942", "535042", "535142", "535242"].sort(() => Math.random() - 0.5),
                "answer": "534942",
                "type": 5
            },
            {
                "question": "890 x 789",
                "choices": ["702210", "702310", "702410", "702510"].sort(() => Math.random() - 0.5),
                "answer": "702210",
                "type": 5
            },
            {
                "question": "901 x 890",
                "choices": ["801890", "801990", "802090", "802190"].sort(() => Math.random() - 0.5),
                "answer": "801890",
                "type": 5
            }
        ],
        [
            {
                "question": "12²",
                "choices": ["144", "154", "164", "174"].sort(() => Math.random() - 0.5),
                "answer": "144",
                "type": 6
            },
            {
                "question": "23²",
                "choices": ["529", "539", "549", "559"].sort(() => Math.random() - 0.5),
                "answer": "529",
                "type": 6
            },
            {
                "question": "34²",
                "choices": ["1156", "1166", "1176", "1186"].sort(() => Math.random() - 0.5),
                "answer": "1156",
                "type": 6
            },
            {
                "question": "45²",
                "choices": ["2025", "2035", "2045", "2055"].sort(() => Math.random() - 0.5),
                "answer": "2025",
                "type": 6
            },
            {
                "question": "56²",
                "choices": ["3136", "3146", "3156", "3166"].sort(() => Math.random() - 0.5),
                "answer": "3136",
                "type": 6
            },
            {
                "question": "67²",
                "choices": ["4489", "4499", "4509", "4519"].sort(() => Math.random() - 0.5),
                "answer": "4489",
                "type": 6
            },
            {
                "question": "78²",
                "choices": ["6084", "6094", "6104", "6114"].sort(() => Math.random() - 0.5),
                "answer": "6084",
                "type": 6
            },
            {
                "question": "89²",
                "choices": ["7921", "7931", "7941", "7951"].sort(() => Math.random() - 0.5),
                "answer": "7921",
                "type": 6
            },
            {
                "question": "90²",
                "choices": ["8100", "8110", "8120", "8130"].sort(() => Math.random() - 0.5),
                "answer": "8100",
                "type": 6
            },
            {
                "question": "11²",
                "choices": ["121", "131", "141", "151"].sort(() => Math.random() - 0.5),
                "answer": "121",
                "type": 6
            },
            {
                "question": "22²",
                "choices": ["484", "494", "504", "514"].sort(() => Math.random() - 0.5),
                "answer": "484",
                "type": 6
            },
            {
                "question": "33²",
                "choices": ["1089", "1099", "1109", "1119"].sort(() => Math.random() - 0.5),
                "answer": "1089",
                "type": 6
            },
            {
                "question": "44²",
                "choices": ["1936", "1946", "1956", "1966"].sort(() => Math.random() - 0.5),
                "answer": "1936",
                "type": 6
            },
            {
                "question": "55²",
                "choices": ["3025", "3035", "3045", "3055"].sort(() => Math.random() - 0.5),
                "answer": "3025",
                "type": 6
            },
            {
                "question": "66²",
                "choices": ["4356", "4366", "4376", "4386"].sort(() => Math.random() - 0.5),
                "answer": "4356",
                "type": 6
            },
            {
                "question": "77²",
                "choices": ["5929", "5939", "5949", "5959"].sort(() => Math.random() - 0.5),
                "answer": "5929",
                "type": 6
            },
            {
                "question": "88²",
                "choices": ["7744", "7754", "7764", "7774"].sort(() => Math.random() - 0.5),
                "answer": "7744",
                "type": 6
            },
            {
                "question": "99²",
                "choices": ["9801", "9811", "9821", "9831"].sort(() => Math.random() - 0.5),
                "answer": "9801",
                "type": 6
            },
            {
                "question": "13²",
                "choices": ["169", "179", "189", "199"].sort(() => Math.random() - 0.5),
                "answer": "169",
                "type": 6
            },
            {
                "question": "24²",
                "choices": ["576", "586", "596", "606"].sort(() => Math.random() - 0.5),
                "answer": "576",
                "type": 6
            },
            {
                "question": "35²",
                "choices": ["1225", "1235", "1245", "1255"].sort(() => Math.random() - 0.5),
                "answer": "1225",
                "type": 6
            },
            {
                "question": "46²",
                "choices": ["2116", "2126", "2136", "2146"].sort(() => Math.random() - 0.5),
                "answer": "2116",
                "type": 6
            },
            {
                "question": "57²",
                "choices": ["3249", "3259", "3269", "3279"].sort(() => Math.random() - 0.5),
                "answer": "3249",
                "type": 6
            },
            {
                "question": "68²",
                "choices": ["4624", "4634", "4644", "4654"].sort(() => Math.random() - 0.5),
                "answer": "4624",
                "type": 6
            },
            {
                "question": "79²",
                "choices": ["6241", "6251", "6261", "6271"].sort(() => Math.random() - 0.5),
                "answer": "6241",
                "type": 6
            },
            {
                "question": "80²",
                "choices": ["6400", "6410", "6420", "6430"].sort(() => Math.random() - 0.5),
                "answer": "6400",
                "type": 6
            },
            {
                "question": "14²",
                "choices": ["196", "206", "216", "226"].sort(() => Math.random() - 0.5),
                "answer": "196",
                "type": 6
            },
            {
                "question": "25²",
                "choices": ["625", "635", "645", "655"].sort(() => Math.random() - 0.5),
                "answer": "625",
                "type": 6
            },
            {
                "question": "36²",
                "choices": ["1296", "1306", "1316", "1326"].sort(() => Math.random() - 0.5),
                "answer": "1296",
                "type": 6
            },
            {
                "question": "47²",
                "choices": ["2209", "2219", "2229", "2239"].sort(() => Math.random() - 0.5),
                "answer": "2209",
                "type": 6
            },
            {
                "question": "58²",
                "choices": ["3364", "3374", "3384", "3394"].sort(() => Math.random() - 0.5),
                "answer": "3364",
                "type": 6
            },
            {
                "question": "69²",
                "choices": ["4761", "4771", "4781", "4791"].sort(() => Math.random() - 0.5),
                "answer": "4761",
                "type": 6
            },
            {
                "question": "70²",
                "choices": ["4900", "4910", "4920", "4930"].sort(() => Math.random() - 0.5),
                "answer": "4900",
                "type": 6
            },
            {
                "question": "15²",
                "choices": ["225", "235", "245", "255"].sort(() => Math.random() - 0.5),
                "answer": "225",
                "type": 6
            },
            {
                "question": "26²",
                "choices": ["676", "686", "696", "706"].sort(() => Math.random() - 0.5),
                "answer": "676",
                "type": 6
            },
            {
                "question": "37²",
                "choices": ["1369", "1379", "1389", "1399"].sort(() => Math.random() - 0.5),
                "answer": "1369",
                "type": 6
            },
            {
                "question": "48²",
                "choices": ["2304", "2314", "2324", "2334"].sort(() => Math.random() - 0.5),
                "answer": "2304",
                "type": 6
            },
            {
                "question": "59²",
                "choices": ["3481", "3491", "3501", "3511"].sort(() => Math.random() - 0.5),
                "answer": "3481",
                "type": 6
            },
            {
                "question": "60²",
                "choices": ["3600", "3610", "3620", "3630"].sort(() => Math.random() - 0.5),
                "answer": "3600",
                "type": 6
            },
            {
                "question": "16²",
                "choices": ["256", "266", "276", "286"].sort(() => Math.random() - 0.5),
                "answer": "256",
                "type": 6
            },
            {
                "question": "27²",
                "choices": ["729", "739", "749", "759"].sort(() => Math.random() - 0.5),
                "answer": "729",
                "type": 6
            },
            {
                "question": "38²",
                "choices": ["1444", "1454", "1464", "1474"].sort(() => Math.random() - 0.5),
                "answer": "1444",
                "type": 6
            },
            {
                "question": "49²",
                "choices": ["2401", "2411", "2421", "2431"].sort(() => Math.random() - 0.5),
                "answer": "2401",
                "type": 6
            },
            {
                "question": "50²",
                "choices": ["2500", "2510", "2520", "2530"].sort(() => Math.random() - 0.5),
                "answer": "2500",
                "type": 6
            },
            {
                "question": "17²",
                "choices": ["289", "299", "309", "319"].sort(() => Math.random() - 0.5),
                "answer": "289",
                "type": 6
            },
            {
                "question": "28²",
                "choices": ["784", "794", "804", "814"].sort(() => Math.random() - 0.5),
                "answer": "784",
                "type": 6
            },
            {
                "question": "39²",
                "choices": ["1521", "1531", "1541", "1551"].sort(() => Math.random() - 0.5),
                "answer": "1521",
                "type": 6
            },
            {
                "question": "40²",
                "choices": ["1600", "1610", "1620", "1630"].sort(() => Math.random() - 0.5),
                "answer": "1600",
                "type": 6
            },
            {
                "question": "18²",
                "choices": ["324", "334", "344", "354"].sort(() => Math.random() - 0.5),
                "answer": "324",
                "type": 6
            },
            {
                "question": "29²",
                "choices": ["841", "851", "861", "871"].sort(() => Math.random() - 0.5),
                "answer": "841",
                "type": 6
            },
            {
                "question": "30²",
                "choices": ["900", "910", "920", "930"].sort(() => Math.random() - 0.5),
                "answer": "900",
                "type": 6
            },
            {
                "question": "19²",
                "choices": ["361", "371", "381", "391"].sort(() => Math.random() - 0.5),
                "answer": "361",
                "type": 6
            },
            {
                "question": "20²",
                "choices": ["400", "410", "420", "430"].sort(() => Math.random() - 0.5),
                "answer": "400",
                "type": 6
            },
            {
                "question": "21²",
                "choices": ["441", "451", "461", "471"].sort(() => Math.random() - 0.5),
                "answer": "441",
                "type": 6
            },
            {
                "question": "22²",
                "choices": ["484", "494", "504", "514"].sort(() => Math.random() - 0.5),
                "answer": "484",
                "type": 6
            },
            {
                "question": "23²",
                "choices": ["529", "539", "549", "559"].sort(() => Math.random() - 0.5),
                "answer": "529",
                "type": 6
            },
            {
                "question": "24²",
                "choices": ["576", "586", "596", "606"].sort(() => Math.random() - 0.5),
                "answer": "576",
                "type": 6
            },
            {
                "question": "25²",
                "choices": ["625", "635", "645", "655"].sort(() => Math.random() - 0.5),
                "answer": "625",
                "type": 6
            },
            {
                "question": "26²",
                "choices": ["676", "686", "696", "706"].sort(() => Math.random() - 0.5),
                "answer": "676",
                "type": 6
            },
            {
                "question": "27²",
                "choices": ["729", "739", "749", "759"].sort(() => Math.random() - 0.5),
                "answer": "729",
                "type": 6
            },
            {
                "question": "28²",
                "choices": ["784", "794", "804", "814"].sort(() => Math.random() - 0.5),
                "answer": "784",
                "type": 6
            },
            {
                "question": "29²",
                "choices": ["841", "851", "861", "871"].sort(() => Math.random() - 0.5),
                "answer": "841",
                "type": 6
            },
            {
                "question": "30²",
                "choices": ["900", "910", "920", "930"].sort(() => Math.random() - 0.5),
                "answer": "900",
                "type": 6
            },
            {
                "question": "31²",
                "choices": ["961", "971", "981", "991"].sort(() => Math.random() - 0.5),
                "answer": "961",
                "type": 6
            },
            {
                "question": "32²",
                "choices": ["1024", "1034", "1044", "1054"].sort(() => Math.random() - 0.5),
                "answer": "1024",
                "type": 6
            },
            {
                "question": "33²",
                "choices": ["1089", "1099", "1109", "1119"].sort(() => Math.random() - 0.5),
                "answer": "1089",
                "type": 6
            },
            {
                "question": "34²",
                "choices": ["1156", "1166", "1176", "1186"].sort(() => Math.random() - 0.5),
                "answer": "1156",
                "type": 6
            },
            {
                "question": "35²",
                "choices": ["1225", "1235", "1245", "1255"].sort(() => Math.random() - 0.5),
                "answer": "1225",
                "type": 6
            },
            {
                "question": "36²",
                "choices": ["1296", "1306", "1316", "1326"].sort(() => Math.random() - 0.5),
                "answer": "1296",
                "type": 6
            },
            {
                "question": "37²",
                "choices": ["1369", "1379", "1389", "1399"].sort(() => Math.random() - 0.5),
                "answer": "1369",
                "type": 6
            },
            {
                "question": "38²",
                "choices": ["1444", "1454", "1464", "1474"].sort(() => Math.random() - 0.5),
                "answer": "1444",
                "type": 6
            },
            {
                "question": "39²",
                "choices": ["1521", "1531", "1541", "1551"].sort(() => Math.random() - 0.5),
                "answer": "1521",
                "type": 6
            },
            {
                "question": "40²",
                "choices": ["1600", "1610", "1620", "1630"].sort(() => Math.random() - 0.5),
                "answer": "1600",
                "type": 6
            },
            {
                "question": "41²",
                "choices": ["1681", "1691", "1701", "1711"].sort(() => Math.random() - 0.5),
                "answer": "1681",
                "type": 6
            },
            {
                "question": "42²",
                "choices": ["1764", "1774", "1784", "1794"].sort(() => Math.random() - 0.5),
                "answer": "1764",
                "type": 6
            },
            {
                "question": "43²",
                "choices": ["1849", "1859", "1869", "1879"].sort(() => Math.random() - 0.5),
                "answer": "1849",
                "type": 6
            },
            {
                "question": "44²",
                "choices": ["1936", "1946", "1956", "1966"].sort(() => Math.random() - 0.5),
                "answer": "1936",
                "type": 6
            },
            {
                "question": "45²",
                "choices": ["2025", "2035", "2045", "2055"].sort(() => Math.random() - 0.5),
                "answer": "2025",
                "type": 6
            },
            {
                "question": "46²",
                "choices": ["2116", "2126", "2136", "2146"].sort(() => Math.random() - 0.5),
                "answer": "2116",
                "type": 6
            },
            {
                "question": "47²",
                "choices": ["2209", "2219", "2229", "2239"].sort(() => Math.random() - 0.5),
                "answer": "2209",
                "type": 6
            },
            {
                "question": "48²",
                "choices": ["2304", "2314", "2324", "2334"].sort(() => Math.random() - 0.5),
                "answer": "2304",
                "type": 6
            },
            {
                "question": "49²",
                "choices": ["2401", "2411", "2421", "2431"].sort(() => Math.random() - 0.5),
                "answer": "2401",
                "type": 6
            },
            {
                "question": "50²",
                "choices": ["2500", "2510", "2520", "2530"].sort(() => Math.random() - 0.5),
                "answer": "2500",
                "type": 6
            },
            {
                "question": "51²",
                "choices": ["2601", "2611", "2621", "2631"].sort(() => Math.random() - 0.5),
                "answer": "2601",
                "type": 6
            },
            {
                "question": "52²",
                "choices": ["2704", "2714", "2724", "2734"].sort(() => Math.random() - 0.5),
                "answer": "2704",
                "type": 6
            },
            {
                "question": "53²",
                "choices": ["2809", "2819", "2829", "2839"].sort(() => Math.random() - 0.5),
                "answer": "2809",
                "type": 6
            },
            {
                "question": "54²",
                "choices": ["2916", "2926", "2936", "2946"].sort(() => Math.random() - 0.5),
                "answer": "2916",
                "type": 6
            },
            {
                "question": "55²",
                "choices": ["3025", "3035", "3045", "3055"].sort(() => Math.random() - 0.5),
                "answer": "3025",
                "type": 6
            },
            {
                "question": "56²",
                "choices": ["3136", "3146", "3156", "3166"].sort(() => Math.random() - 0.5),
                "answer": "3136",
                "type": 6
            },
            {
                "question": "57²",
                "choices": ["3249", "3259", "3269", "3279"].sort(() => Math.random() - 0.5),
                "answer": "3249",
                "type": 6
            },
            {
                "question": "58²",
                "choices": ["3364", "3374", "3384", "3394"].sort(() => Math.random() - 0.5),
                "answer": "3364",
                "type": 6
            },
            {
                "question": "59²",
                "choices": ["3481", "3491", "3501", "3511"].sort(() => Math.random() - 0.5),
                "answer": "3481",
                "type": 6
            },
            {
                "question": "60²",
                "choices": ["3600", "3610", "3620", "3630"].sort(() => Math.random() - 0.5),
                "answer": "3600",
                "type": 6
            },
            {
                "question": "61²",
                "choices": ["3721", "3731", "3741", "3751"].sort(() => Math.random() - 0.5),
                "answer": "3721",
                "type": 6
            },
            {
                "question": "62²",
                "choices": ["3844", "3854", "3864", "3874"].sort(() => Math.random() - 0.5),
                "answer": "3844",
                "type": 6
            },
            {
                "question": "63²",
                "choices": ["3969", "3979", "3989", "3999"].sort(() => Math.random() - 0.5),
                "answer": "3969",
                "type": 6
            },
            {
                "question": "64²",
                "choices": ["4096", "4106", "4116", "4126"].sort(() => Math.random() - 0.5),
                "answer": "4096",
                "type": 6
            },
            {
                "question": "65²",
                "choices": ["4225", "4235", "4245", "4255"].sort(() => Math.random() - 0.5),
                "answer": "4225",
                "type": 6
            },
            {
                "question": "66²",
                "choices": ["4356", "4366", "4376", "4386"].sort(() => Math.random() - 0.5),
                "answer": "4356",
                "type": 6
            },
            {
                "question": "67²",
                "choices": ["4489", "4499", "4509", "4519"].sort(() => Math.random() - 0.5),
                "answer": "4489",
                "type": 6
            },
            {
                "question": "68²",
                "choices": ["4624", "4634", "4644", "4654"].sort(() => Math.random() - 0.5),
                "answer": "4624",
                "type": 6
            },
            {
                "question": "69²",
                "choices": ["4761", "4771", "4781", "4791"].sort(() => Math.random() - 0.5),
                "answer": "4761",
                "type": 6
            },
            {
                "question": "70²",
                "choices": ["4900", "4910", "4920", "4930"].sort(() => Math.random() - 0.5),
                "answer": "4900",
                "type": 6
            },
            {
                "question": "71²",
                "choices": ["5041", "5051", "5061", "5071"].sort(() => Math.random() - 0.5),
                "answer": "5041",
                "type": 6
            },
            {
                "question": "72²",
                "choices": ["5184", "5194", "5204", "5214"].sort(() => Math.random() - 0.5),
                "answer": "5184",
                "type": 6
            },
            {
                "question": "73²",
                "choices": ["5329", "5339", "5349", "5359"].sort(() => Math.random() - 0.5),
                "answer": "5329",
                "type": 6
            },
            {
                "question": "74²",
                "choices": ["5476", "5486", "5496", "5506"].sort(() => Math.random() - 0.5),
                "answer": "5476",
                "type": 6
            },
            {
                "question": "75²",
                "choices": ["5625", "5635", "5645", "5655"].sort(() => Math.random() - 0.5),
                "answer": "5625",
                "type": 6
            },
            {
                "question": "76²",
                "choices": ["5776", "5786", "5796", "5806"].sort(() => Math.random() - 0.5),
                "answer": "5776",
                "type": 6
            },
            {
                "question": "77²",
                "choices": ["5929", "5939", "5949", "5959"].sort(() => Math.random() - 0.5),
                "answer": "5929",
                "type": 6
            },
            {
                "question": "78²",
                "choices": ["6084", "6094", "6104", "6114"].sort(() => Math.random() - 0.5),
                "answer": "6084",
                "type": 6
            },
            {
                "question": "79²",
                "choices": ["6241", "6251", "6261", "6271"].sort(() => Math.random() - 0.5),
                "answer": "6241",
                "type": 6
            },
            {
                "question": "80²",
                "choices": ["6400", "6410", "6420", "6430"].sort(() => Math.random() - 0.5),
                "answer": "6400",
                "type": 6
            },
            {
                "question": "81²",
                "choices": ["6561", "6571", "6581", "6591"].sort(() => Math.random() - 0.5),
                "answer": "6561",
                "type": 6
            },
            {
                "question": "82²",
                "choices": ["6724", "6734", "6744", "6754"].sort(() => Math.random() - 0.5),
                "answer": "6724",
                "type": 6
            },
            {
                "question": "83²",
                "choices": ["6889", "6899", "6909", "6919"].sort(() => Math.random() - 0.5),
                "answer": "6889",
                "type": 6
            },
            {
                "question": "84²",
                "choices": ["7056", "7066", "7076", "7086"].sort(() => Math.random() - 0.5),
                "answer": "7056",
                "type": 6
            },
            {
                "question": "85²",
                "choices": ["7225", "7235", "7245", "7255"].sort(() => Math.random() - 0.5),
                "answer": "7225",
                "type": 6
            },
            {
                "question": "86²",
                "choices": ["7396", "7406", "7416", "7426"].sort(() => Math.random() - 0.5),
                "answer": "7396",
                "type": 6
            },
            {
                "question": "87²",
                "choices": ["7569", "7579", "7589", "7599"].sort(() => Math.random() - 0.5),
                "answer": "7569",
                "type": 6
            },
            {
                "question": "88²",
                "choices": ["7744", "7754", "7764", "7774"].sort(() => Math.random() - 0.5),
                "answer": "7744",
                "type": 6
            },
            {
                "question": "89²",
                "choices": ["7921", "7931", "7941", "7951"].sort(() => Math.random() - 0.5),
                "answer": "7921",
                "type": 6
            },
            {
                "question": "90²",
                "choices": ["8100", "8110", "8120", "8130"].sort(() => Math.random() - 0.5),
                "answer": "8100",
                "type": 6
            },
            {
                "question": "91²",
                "choices": ["8281", "8291", "8301", "8311"].sort(() => Math.random() - 0.5),
                "answer": "8281",
                "type": 6
            },
            {
                "question": "92²",
                "choices": ["8464", "8474", "8484", "8494"].sort(() => Math.random() - 0.5),
                "answer": "8464",
                "type": 6
            },
            {
                "question": "93²",
                "choices": ["8649", "8659", "8669", "8679"].sort(() => Math.random() - 0.5),
                "answer": "8649",
                "type": 6
            },
            {
                "question": "94²",
                "choices": ["8836", "8846", "8856", "8866"].sort(() => Math.random() - 0.5),
                "answer": "8836",
                "type": 6
            },
            {
                "question": "95²",
                "choices": ["9025", "9035", "9045", "9055"].sort(() => Math.random() - 0.5),
                "answer": "9025",
                "type": 6
            },
            {
                "question": "96²",
                "choices": ["9216", "9226", "9236", "9246"].sort(() => Math.random() - 0.5),
                "answer": "9216",
                "type": 6
            },
            {
                "question": "97²",
                "choices": ["9409", "9419", "9429", "9439"].sort(() => Math.random() - 0.5),
                "answer": "9409",
                "type": 6
            },
            {
                "question": "98²",
                "choices": ["9604", "9614", "9624", "9634"].sort(() => Math.random() - 0.5),
                "answer": "9604",
                "type": 6
            },
            {
                "question": "99²",
                "choices": ["9801", "9811", "9821", "9831"].sort(() => Math.random() - 0.5),
                "answer": "9801",
                "type": 6
            }
        ],
        [
            {
                "question": "201²",
                "choices": ["40401", "40501", "40301", "40601"].sort(() => Math.random() - 0.5),
                "answer": "40401",
                "type": 7
            },
            {
                "question": "302²",
                "choices": ["91204", "91304", "91104", "91404"].sort(() => Math.random() - 0.5),
                "answer": "91204",
                "type": 7
            },
            {
                "question": "215²",
                "choices": ["46225", "46325", "46125", "46425"].sort(() => Math.random() - 0.5),
                "answer": "46225",
                "type": 7
            },
            {
                "question": "333²",
                "choices": ["110889", "110989", "110789", "110689"].sort(() => Math.random() - 0.5),
                "answer": "110889",
                "type": 7
            },
            {
                "question": "247²",
                "choices": ["61009", "61109", "60909", "61209"].sort(() => Math.random() - 0.5),
                "answer": "61009",
                "type": 7
            },
            {
                "question": "284²",
                "choices": ["80656", "80756", "80556", "80856"].sort(() => Math.random() - 0.5),
                "answer": "80656",
                "type": 7
            },
            {
                "question": "377²",
                "choices": ["142129", "142229", "142029", "142329"].sort(() => Math.random() - 0.5),
                "answer": "142129",
                "type": 7
            },
            {
                "question": "409²",
                "choices": ["167281", "167381", "167181", "167481"].sort(() => Math.random() - 0.5),
                "answer": "167281",
                "type": 7
            },
            {
                "question": "512²",
                "choices": ["262144", "262244", "262044", "262344"].sort(() => Math.random() - 0.5),
                "answer": "262144",
                "type": 7
            },
            {
                "question": "298²",
                "choices": ["88804", "88904", "88704", "89004"].sort(() => Math.random() - 0.5),
                "answer": "88804",
                "type": 7
            },
            {
                "question": "227²",
                "choices": ["51529", "51629", "51429", "51729"].sort(() => Math.random() - 0.5),
                "answer": "51529",
                "type": 7
            },
            {
                "question": "355²",
                "choices": ["126025", "126125", "125925", "126225"].sort(() => Math.random() - 0.5),
                "answer": "126025",
                "type": 7
            },
            {
                "question": "413²",
                "choices": ["170569", "170669", "170469", "170769"].sort(() => Math.random() - 0.5),
                "answer": "170569",
                "type": 7
            },
            {
                "question": "466²",
                "choices": ["217156", "217256", "217056", "217356"].sort(() => Math.random() - 0.5),
                "answer": "217156",
                "type": 7
            },
            {
                "question": "529²",
                "choices": ["279841", "279941", "279741", "280041"].sort(() => Math.random() - 0.5),
                "answer": "279841",
                "type": 7
            },
            {
                "question": "221²",
                "choices": ["48841", "48941", "48741", "49041"].sort(() => Math.random() - 0.5),
                "answer": "48841",
                "type": 7
            },
            {
                "question": "307²",
                "choices": ["94249", "94349", "94149", "94449"].sort(() => Math.random() - 0.5),
                "answer": "94249",
                "type": 7
            },
            {
                "question": "388²",
                "choices": ["150544", "150644", "150444", "150744"].sort(() => Math.random() - 0.5),
                "answer": "150544",
                "type": 7
            },
            {
                "question": "499²",
                "choices": ["249001", "249101", "248901", "249201"].sort(() => Math.random() - 0.5),
                "answer": "249001",
                "type": 7
            },
            {
                "question": "273²",
                "choices": ["74529", "74629", "74429", "74729"].sort(() => Math.random() - 0.5),
                "answer": "74529",
                "type": 7
            },
            {
                "question": "314²",
                "choices": ["98596", "98696", "98496", "98796"].sort(() => Math.random() - 0.5),
                "answer": "98596",
                "type": 7
            },
            {
                "question": "426²",
                "choices": ["181476", "181576", "181376", "181676"].sort(() => Math.random() - 0.5),
                "answer": "181476",
                "type": 7
            },
            {
                "question": "551²",
                "choices": ["303601", "303701", "303501", "303801"].sort(() => Math.random() - 0.5),
                "answer": "303601",
                "type": 7
            },
            {
                "question": "238²",
                "choices": ["56644", "56744", "56544", "56844"].sort(() => Math.random() - 0.5),
                "answer": "56644",
                "type": 7
            },
            {
                "question": "367²",
                "choices": ["134689", "134789", "134589", "134889"].sort(() => Math.random() - 0.5),
                "answer": "134689",
                "type": 7
            },
            {
                "question": "481²",
                "choices": ["231361", "231461", "231261", "231561"].sort(() => Math.random() - 0.5),
                "answer": "231361",
                "type": 7
            },
            {
                "question": "592²",
                "choices": ["350464", "350564", "350364", "350664"].sort(() => Math.random() - 0.5),
                "answer": "350464",
                "type": 7
            },
            {
                "question": "204²",
                "choices": ["41616", "41716", "41516", "41816"].sort(() => Math.random() - 0.5),
                "answer": "41616",
                "type": 7
            },
            {
                "question": "319²",
                "choices": ["101761", "101861", "101661", "101961"].sort(() => Math.random() - 0.5),
                "answer": "101761",
                "type": 7
            },
            {
                "question": "435²",
                "choices": ["189225", "189325", "189125", "189425"].sort(() => Math.random() - 0.5),
                "answer": "189225",
                "type": 7
            },
            {
                "question": "573²",
                "choices": ["328329", "328429", "328229", "328529"].sort(() => Math.random() - 0.5),
                "answer": "328329",
                "type": 7
            },
            {
                "question": "248²",
                "choices": ["61504", "61604", "61404", "61704"].sort(() => Math.random() - 0.5),
                "answer": "61504",
                "type": 7
            },
            {
                "question": "393²",
                "choices": ["154449", "154549", "154349", "154649"].sort(() => Math.random() - 0.5),
                "answer": "154449",
                "type": 7
            },
            {
                "question": "504²",
                "choices": ["254016", "254116", "253916", "254216"].sort(() => Math.random() - 0.5),
                "answer": "254016",
                "type": 7
            },
            {
                "question": "617²",
                "choices": ["380689", "380789", "380589", "380889"].sort(() => Math.random() - 0.5),
                "answer": "380689",
                "type": 7
            },
            {
                "question": "229²",
                "choices": ["52441", "52541", "52341", "52641"].sort(() => Math.random() - 0.5),
                "answer": "52441",
                "type": 7
            },
            {
                "question": "341²",
                "choices": ["116281", "116381", "116181", "116481"].sort(() => Math.random() - 0.5),
                "answer": "116281",
                "type": 7
            },
            {
                "question": "458²",
                "choices": ["209764", "209864", "209664", "209964"].sort(() => Math.random() - 0.5),
                "answer": "209764",
                "type": 7
            },
            {
                "question": "579²",
                "choices": ["335241", "335341", "335141", "335441"].sort(() => Math.random() - 0.5),
                "answer": "335241",
                "type": 7
            },
            {
                "question": "206²",
                "choices": ["42436", "42536", "42336", "42636"].sort(() => Math.random() - 0.5),
                "answer": "42436",
                "type": 7
            },
            {
                "question": "327²",
                "choices": ["106929", "107029", "106829", "107129"].sort(() => Math.random() - 0.5),
                "answer": "106929",
                "type": 7
            },
            {
                "question": "442²",
                "choices": ["195364", "195464", "195264", "195564"].sort(() => Math.random() - 0.5),
                "answer": "195364",
                "type": 7
            },
            {
                "question": "565²",
                "choices": ["319225", "319325", "319125", "319425"].sort(() => Math.random() - 0.5),
                "answer": "319225",
                "type": 7
            },
            {
                "question": "688²",
                "choices": ["473344", "473444", "473244", "473544"].sort(() => Math.random() - 0.5),
                "answer": "473344",
                "type": 7
            },
            {
                "question": "213²",
                "choices": ["45369", "45469", "45269", "45569"].sort(() => Math.random() - 0.5),
                "answer": "45369",
                "type": 7
            },
            {
                "question": "336²",
                "choices": ["112896", "112996", "112796", "113096"].sort(() => Math.random() - 0.5),
                "answer": "112896",
                "type": 7
            },
            {
                "question": "479²",
                "choices": ["229441", "229541", "229341", "229641"].sort(() => Math.random() - 0.5),
                "answer": "229441",
                "type": 7
            },
            {
                "question": "624²",
                "choices": ["389376", "389476", "389276", "389576"].sort(() => Math.random() - 0.5),
                "answer": "389376",
                "type": 7
            },
            {
                "question": "753²",
                "choices": ["567009", "567109", "566909", "567209"].sort(() => Math.random() - 0.5),
                "answer": "567009",
                "type": 7
            },
            {
                "question": "232²",
                "choices": ["53824", "53924", "53724", "54024"].sort(() => Math.random() - 0.5),
                "answer": "53824",
                "type": 7
            },
            {
                "question": "369²",
                "choices": ["136161", "136261", "136061", "136361"].sort(() => Math.random() - 0.5),
                "answer": "136161",
                "type": 7
            },
            {
                "question": "487²",
                "choices": ["237169", "237269", "237069", "237369"].sort(() => Math.random() - 0.5),
                "answer": "237169",
                "type": 7
            },
            {
                "question": "598²",
                "choices": ["357604", "357704", "357504", "357804"].sort(() => Math.random() - 0.5),
                "answer": "357604",
                "type": 7
            },
            {
                "question": "729²",
                "choices": ["531441", "531541", "531341", "531641"].sort(() => Math.random() - 0.5),
                "answer": "531441",
                "type": 7
            },
            {
                "question": "241²",
                "choices": ["58081", "58181", "57981", "58281"].sort(() => Math.random() - 0.5),
                "answer": "58081",
                "type": 7
            },
            {
                "question": "353²",
                "choices": ["124609", "124709", "124509", "124809"].sort(() => Math.random() - 0.5),
                "answer": "124609",
                "type": 7
            },
            {
                "question": "464²",
                "choices": ["215296", "215396", "215196", "215496"].sort(() => Math.random() - 0.5),
                "answer": "215296",
                "type": 7
            },
            {
                "question": "595²",
                "choices": ["354025", "354125", "353925", "354225"].sort(() => Math.random() - 0.5),
                "answer": "354025",
                "type": 7
            },
            {
                "question": "736²",
                "choices": ["541696", "541796", "541596", "541896"].sort(() => Math.random() - 0.5),
                "answer": "541696",
                "type": 7
            },
            {
                "question": "879²",
                "choices": ["772641", "772741", "772541", "772841"].sort(() => Math.random() - 0.5),
                "answer": "772641",
                "type": 7
            },
            {
                "question": "254²",
                "choices": ["64516", "64616", "64416", "64716"].sort(() => Math.random() - 0.5),
                "answer": "64516",
                "type": 7
            },
            {
                "question": "378²",
                "choices": ["142884", "142984", "142784", "143084"].sort(() => Math.random() - 0.5),
                "answer": "142884",
                "type": 7
            },
            {
                "question": "493²",
                "choices": ["243049", "243149", "242949", "243249"].sort(() => Math.random() - 0.5),
                "answer": "243049",
                "type": 7
            },
            {
                "question": "614²",
                "choices": ["376996", "377096", "376896", "377196"].sort(() => Math.random() - 0.5),
                "answer": "376996",
                "type": 7
            },
            {
                "question": "757²",
                "choices": ["573049", "573149", "572949", "573249"].sort(() => Math.random() - 0.5),
                "answer": "573049",
                "type": 7
            },
            {
                "question": "896²",
                "choices": ["802816", "802916", "802716", "803016"].sort(() => Math.random() - 0.5),
                "answer": "802816",
                "type": 7
            },
            {
                "question": "263²",
                "choices": ["69169", "69269", "69069", "69369"].sort(() => Math.random() - 0.5),
                "answer": "69169",
                "type": 7
            },
            {
                "question": "384²",
                "choices": ["147456", "147556", "147356", "147656"].sort(() => Math.random() - 0.5),
                "answer": "147456",
                "type": 7
            },
            {
                "question": "515²",
                "choices": ["265225", "265325", "265125", "265425"].sort(() => Math.random() - 0.5),
                "answer": "265225",
                "type": 7
            },
            {
                "question": "636²",
                "choices": ["404496", "404596", "404396", "404696"].sort(() => Math.random() - 0.5),
                "answer": "404496",
                "type": 7
            },
            {
                "question": "777²",
                "choices": ["603729", "603829", "603629", "603929"].sort(() => Math.random() - 0.5),
                "answer": "603729",
                "type": 7
            },
            {
                "question": "918²",
                "choices": ["842724", "842824", "842624", "842924"].sort(() => Math.random() - 0.5),
                "answer": "842724",
                "type": 7
            },
            {
                "question": "275²",
                "choices": ["75625", "75725", "75525", "75825"].sort(() => Math.random() - 0.5),
                "answer": "75625",
                "type": 7
            },
            {
                "question": "396²",
                "choices": ["156816", "156916", "156716", "157016"].sort(() => Math.random() - 0.5),
                "answer": "156816",
                "type": 7
            },
            {
                "question": "527²",
                "choices": ["277729", "277829", "277629", "277929"].sort(() => Math.random() - 0.5),
                "answer": "277729",
                "type": 7
            },
            {
                "question": "658²",
                "choices": ["432964", "433064", "432864", "433164"].sort(() => Math.random() - 0.5),
                "answer": "432964",
                "type": 7
            },
            {
                "question": "799²",
                "choices": ["638401", "638501", "638301", "638601"].sort(() => Math.random() - 0.5),
                "answer": "638401",
                "type": 7
            },
            {
                "question": "932²",
                "choices": ["868624", "868724", "868524", "868824"].sort(() => Math.random() - 0.5),
                "answer": "868624",
                "type": 7
            },
            {
                "question": "287²",
                "choices": ["82369", "82469", "82269", "82569"].sort(() => Math.random() - 0.5),
                "answer": "82369",
                "type": 7
            },
            {
                "question": "418²",
                "choices": ["174724", "174824", "174624", "174924"].sort(() => Math.random() - 0.5),
                "answer": "174724",
                "type": 7
            },
            {
                "question": "549²",
                "choices": ["301401", "301501", "301301", "301601"].sort(() => Math.random() - 0.5),
                "answer": "301401",
                "type": 7
            },
            {
                "question": "680²",
                "choices": ["462400", "462500", "462300", "462600"].sort(() => Math.random() - 0.5),
                "answer": "462400",
                "type": 7
            },
            {
                "question": "811²",
                "choices": ["657721", "657821", "657621", "657921"].sort(() => Math.random() - 0.5),
                "answer": "657721",
                "type": 7
            },
            {
                "question": "952²",
                "choices": ["906304", "906404", "906204", "906504"].sort(() => Math.random() - 0.5),
                "answer": "906304",
                "type": 7
            },
            {
                "question": "299²",
                "choices": ["89401", "89501", "89301", "89601"].sort(() => Math.random() - 0.5),
                "answer": "89401",
                "type": 7
            },
            {
                "question": "430²",
                "choices": ["184900", "185000", "184800", "185100"].sort(() => Math.random() - 0.5),
                "answer": "184900",
                "type": 7
            },
            {
                "question": "561²",
                "choices": ["314721", "314821", "314621", "314921"].sort(() => Math.random() - 0.5),
                "answer": "314721",
                "type": 7
            },
            {
                "question": "692²",
                "choices": ["478864", "478964", "478764", "479064"].sort(() => Math.random() - 0.5),
                "answer": "478864",
                "type": 7
            },
            {
                "question": "823²",
                "choices": ["677329", "677429", "677229", "677529"].sort(() => Math.random() - 0.5),
                "answer": "677329",
                "type": 7
            },
            {
                "question": "964²",
                "choices": ["929296", "929396", "929196", "929496"].sort(() => Math.random() - 0.5),
                "answer": "929296",
                "type": 7
            },
            {
                "question": "311²",
                "choices": ["96721", "96821", "96621", "96921"].sort(() => Math.random() - 0.5),
                "answer": "96721",
                "type": 7
            },
            {
                "question": "442²",
                "choices": ["195364", "195464", "195264", "195564"].sort(() => Math.random() - 0.5),
                "answer": "195364",
                "type": 7
            },
            {
                "question": "573²",
                "choices": ["328329", "328429", "328229", "328529"].sort(() => Math.random() - 0.5),
                "answer": "328329",
                "type": 7
            },
            {
                "question": "704²",
                "choices": ["495616", "495716", "495516", "495816"].sort(() => Math.random() - 0.5),
                "answer": "495616",
                "type": 7
            },
            {
                "question": "835²",
                "choices": ["697225", "697325", "697125", "697425"].sort(() => Math.random() - 0.5),
                "answer": "697225",
                "type": 7
            },
            {
                "question": "976²",
                "choices": ["952576", "952676", "952476", "952776"].sort(() => Math.random() - 0.5),
                "answer": "952576",
                "type": 7
            },
            {
                "question": "322²",
                "choices": ["103684", "103784", "103584", "103884"].sort(() => Math.random() - 0.5),
                "answer": "103684",
                "type": 7
            },
            {
                "question": "453²",
                "choices": ["205209", "205309", "205109", "205409"].sort(() => Math.random() - 0.5),
                "answer": "205209",
                "type": 7
            },
            {
                "question": "584²",
                "choices": ["341056", "341156", "340956", "341256"].sort(() => Math.random() - 0.5),
                "answer": "341056",
                "type": 7
            },
            {
                "question": "715²",
                "choices": ["511225", "511325", "511125", "511425"].sort(() => Math.random() - 0.5),
                "answer": "511225",
                "type": 7
            },
            {
                "question": "846²",
                "choices": ["715716", "715816", "715616", "715916"].sort(() => Math.random() - 0.5),
                "answer": "715716",
                "type": 7
            },
            {
                "question": "987²",
                "choices": ["974169", "974269", "974069", "974369"].sort(() => Math.random() - 0.5),
                "answer": "974169",
                "type": 7
            },
            {
                "question": "335²",
                "choices": ["112225", "112325", "112125", "112425"].sort(() => Math.random() - 0.5),
                "answer": "112225",
                "type": 7
            },
            {
                "question": "466²",
                "choices": ["217156", "217256", "217056", "217356"].sort(() => Math.random() - 0.5),
                "answer": "217156",
                "type": 7
            },
            {
                "question": "597²",
                "choices": ["356409", "356509", "356309", "356609"].sort(() => Math.random() - 0.5),
                "answer": "356409",
                "type": 7
            },
            {
                "question": "728²",
                "choices": ["529984", "530084", "529884", "530184"].sort(() => Math.random() - 0.5),
                "answer": "529984",
                "type": 7
            },
            {
                "question": "859²",
                "choices": ["737881", "737981", "737781", "738081"].sort(() => Math.random() - 0.5),
                "answer": "737881",
                "type": 7
            },
            {
                "question": "990²",
                "choices": ["980100", "980200", "980000", "980300"].sort(() => Math.random() - 0.5),
                "answer": "980100",
                "type": 7
            },
            {
                "question": "346²",
                "choices": ["119716", "119816", "119616", "119916"].sort(() => Math.random() - 0.5),
                "answer": "119716",
                "type": 7
            },
            {
                "question": "477²",
                "choices": ["227529", "227629", "227429", "227729"].sort(() => Math.random() - 0.5),
                "answer": "227529",
                "type": 7
            },
            {
                "question": "608²",
                "choices": ["369664", "369764", "369564", "369864"].sort(() => Math.random() - 0.5),
                "answer": "369664",
                "type": 7
            },
            {
                "question": "739²",
                "choices": ["546121", "546221", "546021", "546321"].sort(() => Math.random() - 0.5),
                "answer": "546121",
                "type": 7
            },
            {
                "question": "870²",
                "choices": ["756900", "757000", "756800", "757100"].sort(() => Math.random() - 0.5),
                "answer": "756900",
                "type": 7
            },
            {
                "question": "901²",
                "choices": ["811801", "811901", "811701", "812001"].sort(() => Math.random() - 0.5),
                "answer": "811801",
                "type": 7
            },
            {
                "question": "358²",
                "choices": ["128164", "128264", "128064", "128364"].sort(() => Math.random() - 0.5),
                "answer": "128164",
                "type": 7
            },
            {
                "question": "489²",
                "choices": ["239121", "239221", "239021", "239321"].sort(() => Math.random() - 0.5),
                "answer": "239121",
                "type": 7
            },
            {
                "question": "620²",
                "choices": ["384400", "384500", "384300", "384600"].sort(() => Math.random() - 0.5),
                "answer": "384400",
                "type": 7
            },
            {
                "question": "751²",
                "choices": ["564001", "564101", "563901", "564201"].sort(() => Math.random() - 0.5),
                "answer": "564001",
                "type": 7
            },
            {
                "question": "882²",
                "choices": ["777924", "778024", "777824", "778124"].sort(() => Math.random() - 0.5),
                "answer": "777924",
                "type": 7
            },
            {
                "question": "913²",
                "choices": ["833569", "833669", "833469", "833769"].sort(() => Math.random() - 0.5),
                "answer": "833569",
                "type": 7
            },
            {
                "question": "369²",
                "choices": ["136161", "136261", "136061", "136361"].sort(() => Math.random() - 0.5),
                "answer": "136161",
                "type": 7
            },
            {
                "question": "500²",
                "choices": ["250000", "250100", "249900", "250200"].sort(() => Math.random() - 0.5),
                "answer": "250000",
                "type": 7
            },
            {
                "question": "631²",
                "choices": ["398161", "398261", "398061", "398361"].sort(() => Math.random() - 0.5),
                "answer": "398161",
                "type": 7
            },
            {
                "question": "762²",
                "choices": ["580644", "580744", "580544", "580844"].sort(() => Math.random() - 0.5),
                "answer": "580644",
                "type": 7
            },
            {
                "question": "893²",
                "choices": ["797449", "797549", "797349", "797649"].sort(() => Math.random() - 0.5),
                "answer": "797449",
                "type": 7
            },
            {
                "question": "924²",
                "choices": ["853776", "853876", "853676", "853976"].sort(() => Math.random() - 0.5),
                "answer": "853776",
                "type": 7
            },
            {
                "question": "375²",
                "choices": ["140625", "140725", "140525", "140825"].sort(() => Math.random() - 0.5),
                "answer": "140625",
                "type": 7
            },
            {
                "question": "506²",
                "choices": ["256036", "256136", "255936", "256236"].sort(() => Math.random() - 0.5),
                "answer": "256036",
                "type": 7
            },
            {
                "question": "637²",
                "choices": ["405769", "405869", "405669", "405969"].sort(() => Math.random() - 0.5),
                "answer": "405769",
                "type": 7
            },
            {
                "question": "768²",
                "choices": ["589824", "589924", "589724", "590024"].sort(() => Math.random() - 0.5),
                "answer": "589824",
                "type": 7
            },
            {
                "question": "899²",
                "choices": ["808201", "808301", "808101", "808401"].sort(() => Math.random() - 0.5),
                "answer": "808201",
                "type": 7
            },
            {
                "question": "930²",
                "choices": ["864900", "865000", "864800", "865100"].sort(() => Math.random() - 0.5),
                "answer": "864900",
                "type": 7
            },
            {
                "question": "381²",
                "choices": ["145161", "145261", "145061", "145361"].sort(() => Math.random() - 0.5),
                "answer": "145161",
                "type": 7
            },
            {
                "question": "512²",
                "choices": ["262144", "262244", "262044", "262344"].sort(() => Math.random() - 0.5),
                "answer": "262144",
                "type": 7
            },
            {
                "question": "643²",
                "choices": ["413449", "413549", "413349", "413649"].sort(() => Math.random() - 0.5),
                "answer": "413449",
                "type": 7
            },
            {
                "question": "774²",
                "choices": ["599076", "599176", "598976", "599276"].sort(() => Math.random() - 0.5),
                "answer": "599076",
                "type": 7
            },
            {
                "question": "905²",
                "choices": ["819025", "819125", "818925", "819225"].sort(() => Math.random() - 0.5),
                "answer": "819025",
                "type": 7
            },
            {
                "question": "936²",
                "choices": ["876096", "876196", "875996", "876296"].sort(() => Math.random() - 0.5),
                "answer": "876096",
                "type": 7
            },
            {
                "question": "397²",
                "choices": ["157609", "157709", "157509", "157809"].sort(() => Math.random() - 0.5),
                "answer": "157609",
                "type": 7
            },
            {
                "question": "528²",
                "choices": ["278784", "278884", "278684", "278984"].sort(() => Math.random() - 0.5),
                "answer": "278784",
                "type": 7
            },
            {
                "question": "659²",
                "choices": ["434281", "434381", "434181", "434481"].sort(() => Math.random() - 0.5),
                "answer": "434281",
                "type": 7
            },
            {
                "question": "790²",
                "choices": ["624100", "624200", "624000", "624300"].sort(() => Math.random() - 0.5),
                "answer": "624100",
                "type": 7
            },
            {
                "question": "921²",
                "choices": ["848241", "848341", "848141", "848441"].sort(() => Math.random() - 0.5),
                "answer": "848241",
                "type": 7
            },
            {
                "question": "952²",
                "choices": ["906304", "906404", "906204", "906504"].sort(() => Math.random() - 0.5),
                "answer": "906304",
                "type": 7
            },
            {
                "question": "403²",
                "choices": ["162409", "162509", "162309", "162609"].sort(() => Math.random() - 0.5),
                "answer": "162409",
                "type": 7
            },
            {
                "question": "534²",
                "choices": ["285156", "285256", "285056", "285356"].sort(() => Math.random() - 0.5),
                "answer": "285156",
                "type": 7
            },
            {
                "question": "665²",
                "choices": ["442225", "442325", "442125", "442425"].sort(() => Math.random() - 0.5),
                "answer": "442225",
                "type": 7
            },
            {
                "question": "796²",
                "choices": ["633616", "633716", "633516", "633816"].sort(() => Math.random() - 0.5),
                "answer": "633616",
                "type": 7
            },
            {
                "question": "927²",
                "choices": ["859329", "859429", "859229", "859529"].sort(() => Math.random() - 0.5),
                "answer": "859329",
                "type": 7
            },
            {
                "question": "958²",
                "choices": ["917764", "917864", "917664", "917964"].sort(() => Math.random() - 0.5),
                "answer": "917764",
                "type": 7
            },
            {
                "question": "409²",
                "choices": ["167281", "167381", "167181", "167481"].sort(() => Math.random() - 0.5),
                "answer": "167281",
                "type": 7
            },
            {
                "question": "540²",
                "choices": ["291600", "291700", "291500", "291800"].sort(() => Math.random() - 0.5),
                "answer": "291600",
                "type": 7
            },
            {
                "question": "671²",
                "choices": ["450241", "450341", "450141", "450441"].sort(() => Math.random() - 0.5),
                "answer": "450241",
                "type": 7
            },
            {
                "question": "802²",
                "choices": ["643204", "643304", "643104", "643404"].sort(() => Math.random() - 0.5),
                "answer": "643204",
                "type": 7
            },
            {
                "question": "933²",
                "choices": ["870489", "870589", "870389", "870689"].sort(() => Math.random() - 0.5),
                "answer": "870489",
                "type": 7
            },
            {
                "question": "964²",
                "choices": ["929296", "929396", "929196", "929496"].sort(() => Math.random() - 0.5),
                "answer": "929296",
                "type": 7
            },
            {
                "question": "415²",
                "choices": ["172225", "172325", "172125", "172425"].sort(() => Math.random() - 0.5),
                "answer": "172225",
                "type": 7
            },
            {
                "question": "546²",
                "choices": ["298116", "298216", "298016", "298316"].sort(() => Math.random() - 0.5),
                "answer": "298116",
                "type": 7
            },
            {
                "question": "677²",
                "choices": ["458329", "458429", "458229", "458529"].sort(() => Math.random() - 0.5),
                "answer": "458329",
                "type": 7
            },
            {
                "question": "808²",
                "choices": ["652864", "652964", "652764", "653064"].sort(() => Math.random() - 0.5),
                "answer": "652864",
                "type": 7
            },
            {
                "question": "939²",
                "choices": ["881721", "881821", "881621", "881921"].sort(() => Math.random() - 0.5),
                "answer": "881721",
                "type": 7
            },
            {
                "question": "970²",
                "choices": ["940900", "941000", "940800", "941100"].sort(() => Math.random() - 0.5),
                "answer": "940900",
                "type": 7
            },
            {
                "question": "421²",
                "choices": ["177241", "177341", "177141", "177441"].sort(() => Math.random() - 0.5),
                "answer": "177241",
                "type": 7
            },
            {
                "question": "552²",
                "choices": ["304704", "304804", "304604", "304904"].sort(() => Math.random() - 0.5),
                "answer": "304704",
                "type": 7
            },
            {
                "question": "683²",
                "choices": ["466489", "466589", "466389", "466689"].sort(() => Math.random() - 0.5),
                "answer": "466489",
                "type": 7
            },
            {
                "question": "814²",
                "choices": ["662596", "662696", "662496", "662796"].sort(() => Math.random() - 0.5),
                "answer": "662596",
                "type": 7
            },
            {
                "question": "945²",
                "choices": ["893025", "893125", "892925", "893225"].sort(() => Math.random() - 0.5),
                "answer": "893025",
                "type": 7
            },
            {
                "question": "976²",
                "choices": ["952576", "952676", "952476", "952776"].sort(() => Math.random() - 0.5),
                "answer": "952576",
                "type": 7
            },
            {
                "question": "100²",
                "choices": ["10000", "10100", "10200", "10300"].sort(() => Math.random() - 0.5),
                "answer": "10000",
                "type": 7
            },
            {
                "question": "101²",
                "choices": ["10201", "10301", "10401", "10501"].sort(() => Math.random() - 0.5),
                "answer": "10201",
                "type": 7
            },
            {
                "question": "102²",
                "choices": ["10404", "10504", "10604", "10704"].sort(() => Math.random() - 0.5),
                "answer": "10404",
                "type": 7
            },
            {
                "question": "103²",
                "choices": ["10609", "10709", "10809", "10909"].sort(() => Math.random() - 0.5),
                "answer": "10609",
                "type": 7
            },
            {
                "question": "104²",
                "choices": ["10816", "10916", "11016", "11116"].sort(() => Math.random() - 0.5),
                "answer": "10816",
                "type": 7
            },
            {
                "question": "105²",
                "choices": ["11025", "11125", "11225", "11325"].sort(() => Math.random() - 0.5),
                "answer": "11025",
                "type": 7
            },
            {
                "question": "106²",
                "choices": ["11236", "11336", "11436", "11536"].sort(() => Math.random() - 0.5),
                "answer": "11236",
                "type": 7
            },
            {
                "question": "107²",
                "choices": ["11449", "11549", "11649", "11749"].sort(() => Math.random() - 0.5),
                "answer": "11449",
                "type": 7
            },
            {
                "question": "108²",
                "choices": ["11664", "11764", "11864", "11964"].sort(() => Math.random() - 0.5),
                "answer": "11664",
                "type": 7
            },
            {
                "question": "109²",
                "choices": ["11881", "11981", "12081", "12181"].sort(() => Math.random() - 0.5),
                "answer": "11881",
                "type": 7
            },
            {
                "question": "110²",
                "choices": ["12100", "12200", "12300", "12400"].sort(() => Math.random() - 0.5),
                "answer": "12100",
                "type": 7
            },
            {
                "question": "111²",
                "choices": ["12321", "12421", "12521", "12621"].sort(() => Math.random() - 0.5),
                "answer": "12321",
                "type": 7
            },
            {
                "question": "112²",
                "choices": ["12544", "12644", "12744", "12844"].sort(() => Math.random() - 0.5),
                "answer": "12544",
                "type": 7
            },
            {
                "question": "113²",
                "choices": ["12769", "12869", "12969", "13069"].sort(() => Math.random() - 0.5),
                "answer": "12769",
                "type": 7
            },
            {
                "question": "114²",
                "choices": ["12996", "13096", "13196", "13296"].sort(() => Math.random() - 0.5),
                "answer": "12996",
                "type": 7
            },
            {
                "question": "115²",
                "choices": ["13225", "13325", "13425", "13525"].sort(() => Math.random() - 0.5),
                "answer": "13225",
                "type": 7
            },
            {
                "question": "116²",
                "choices": ["13456", "13556", "13656", "13756"].sort(() => Math.random() - 0.5),
                "answer": "13456",
                "type": 7
            },
            {
                "question": "117²",
                "choices": ["13689", "13789", "13889", "13989"].sort(() => Math.random() - 0.5),
                "answer": "13689",
                "type": 7
            },
            {
                "question": "118²",
                "choices": ["13924", "14024", "14124", "14224"].sort(() => Math.random() - 0.5),
                "answer": "13924",
                "type": 7
            },
            {
                "question": "119²",
                "choices": ["14161", "14261", "14361", "14461"].sort(() => Math.random() - 0.5),
                "answer": "14161",
                "type": 7
            },
            {
                "question": "120²",
                "choices": ["14400", "14500", "14600", "14700"].sort(() => Math.random() - 0.5),
                "answer": "14400",
                "type": 7
            },
            {
                "question": "121²",
                "choices": ["14641", "14741", "14841", "14941"].sort(() => Math.random() - 0.5),
                "answer": "14641",
                "type": 7
            },
            {
                "question": "122²",
                "choices": ["14884", "14984", "15084", "15184"].sort(() => Math.random() - 0.5),
                "answer": "14884",
                "type": 7
            },
            {
                "question": "123²",
                "choices": ["15129", "15229", "15329", "15429"].sort(() => Math.random() - 0.5),
                "answer": "15129",
                "type": 7
            },
            {
                "question": "124²",
                "choices": ["15376", "15476", "15576", "15676"].sort(() => Math.random() - 0.5),
                "answer": "15376",
                "type": 7
            },
            {
                "question": "125²",
                "choices": ["15625", "15725", "15825", "15925"].sort(() => Math.random() - 0.5),
                "answer": "15625",
                "type": 7
            },
            {
                "question": "126²",
                "choices": ["15876", "15976", "16076", "16176"].sort(() => Math.random() - 0.5),
                "answer": "15876",
                "type": 7
            },
            {
                "question": "127²",
                "choices": ["16129", "16229", "16329", "16429"].sort(() => Math.random() - 0.5),
                "answer": "16129",
                "type": 7
            },
            {
                "question": "128²",
                "choices": ["16384", "16484", "16584", "16684"].sort(() => Math.random() - 0.5),
                "answer": "16384",
                "type": 7
            },
            {
                "question": "129²",
                "choices": ["16641", "16741", "16841", "16941"].sort(() => Math.random() - 0.5),
                "answer": "16641",
                "type": 7
            },
            {
                "question": "130²",
                "choices": ["16900", "17000", "17100", "17200"].sort(() => Math.random() - 0.5),
                "answer": "16900",
                "type": 7
            },
            {
                "question": "131²",
                "choices": ["17161", "17261", "17361", "17461"].sort(() => Math.random() - 0.5),
                "answer": "17161",
                "type": 7
            },
            {
                "question": "132²",
                "choices": ["17424", "17524", "17624", "17724"].sort(() => Math.random() - 0.5),
                "answer": "17424",
                "type": 7
            },
            {
                "question": "133²",
                "choices": ["17689", "17789", "17889", "17989"].sort(() => Math.random() - 0.5),
                "answer": "17689",
                "type": 7
            },
            {
                "question": "134²",
                "choices": ["17956", "18056", "18156", "18256"].sort(() => Math.random() - 0.5),
                "answer": "17956",
                "type": 7
            },
            {
                "question": "135²",
                "choices": ["18225", "18325", "18425", "18525"].sort(() => Math.random() - 0.5),
                "answer": "18225",
                "type": 7
            },
            {
                "question": "136²",
                "choices": ["18496", "18596", "18696", "18796"].sort(() => Math.random() - 0.5),
                "answer": "18496",
                "type": 7
            },
            {
                "question": "137²",
                "choices": ["18769", "18869", "18969", "19069"].sort(() => Math.random() - 0.5),
                "answer": "18769",
                "type": 7
            },
            {
                "question": "138²",
                "choices": ["19044", "19144", "19244", "19344"].sort(() => Math.random() - 0.5),
                "answer": "19044",
                "type": 7
            },
            {
                "question": "139²",
                "choices": ["19321", "19421", "19521", "19621"].sort(() => Math.random() - 0.5),
                "answer": "19321",
                "type": 7
            },
            {
                "question": "140²",
                "choices": ["19600", "19700", "19800", "19900"].sort(() => Math.random() - 0.5),
                "answer": "19600",
                "type": 7
            },
            {
                "question": "141²",
                "choices": ["19881", "19981", "20081", "20181"].sort(() => Math.random() - 0.5),
                "answer": "19881",
                "type": 7
            },
            {
                "question": "142²",
                "choices": ["20164", "20264", "20364", "20464"].sort(() => Math.random() - 0.5),
                "answer": "20164",
                "type": 7
            },
            {
                "question": "143²",
                "choices": ["20449", "20549", "20649", "20749"].sort(() => Math.random() - 0.5),
                "answer": "20449",
                "type": 7
            },
            {
                "question": "144²",
                "choices": ["20736", "20836", "20936", "21036"].sort(() => Math.random() - 0.5),
                "answer": "20736",
                "type": 7
            },
            {
                "question": "145²",
                "choices": ["21025", "21125", "21225", "21325"].sort(() => Math.random() - 0.5),
                "answer": "21025",
                "type": 7
            },
            {
                "question": "146²",
                "choices": ["21316", "21416", "21516", "21616"].sort(() => Math.random() - 0.5),
                "answer": "21316",
                "type": 7
            },
            {
                "question": "147²",
                "choices": ["21609", "21709", "21809", "21909"].sort(() => Math.random() - 0.5),
                "answer": "21609",
                "type": 7
            },
            {
                "question": "148²",
                "choices": ["21904", "22004", "22104", "22204"].sort(() => Math.random() - 0.5),
                "answer": "21904",
                "type": 7
            },
            {
                "question": "149²",
                "choices": ["22201", "22301", "22401", "22501"].sort(() => Math.random() - 0.5),
                "answer": "22201",
                "type": 7
            },
            {
                "question": "150²",
                "choices": ["22500", "22600", "22700", "22800"].sort(() => Math.random() - 0.5),
                "answer": "22500",
                "type": 7
            },
            {
                "question": "151²",
                "choices": ["22801", "22901", "23001", "23101"].sort(() => Math.random() - 0.5),
                "answer": "22801",
                "type": 7
            },
            {
                "question": "152²",
                "choices": ["23104", "23204", "23304", "23404"].sort(() => Math.random() - 0.5),
                "answer": "23104",
                "type": 7
            },
            {
                "question": "153²",
                "choices": ["23409", "23509", "23609", "23709"].sort(() => Math.random() - 0.5),
                "answer": "23409",
                "type": 7
            },
            {
                "question": "154²",
                "choices": ["23716", "23816", "23916", "24016"].sort(() => Math.random() - 0.5),
                "answer": "23716",
                "type": 7
            },
            {
                "question": "155²",
                "choices": ["24025", "24125", "24225", "24325"].sort(() => Math.random() - 0.5),
                "answer": "24025",
                "type": 7
            },
            {
                "question": "156²",
                "choices": ["24336", "24436", "24536", "24636"].sort(() => Math.random() - 0.5),
                "answer": "24336",
                "type": 7
            },
            {
                "question": "157²",
                "choices": ["24649", "24749", "24849", "24949"].sort(() => Math.random() - 0.5),
                "answer": "24649",
                "type": 7
            },
            {
                "question": "158²",
                "choices": ["24964", "25064", "25164", "25264"].sort(() => Math.random() - 0.5),
                "answer": "24964",
                "type": 7
            },
            {
                "question": "159²",
                "choices": ["25281", "25381", "25481", "25581"].sort(() => Math.random() - 0.5),
                "answer": "25281",
                "type": 7
            },
            {
                "question": "160²",
                "choices": ["25600", "25700", "25800", "25900"].sort(() => Math.random() - 0.5),
                "answer": "25600",
                "type": 7
            },
            {
                "question": "161²",
                "choices": ["25921", "26021", "26121", "26221"].sort(() => Math.random() - 0.5),
                "answer": "25921",
                "type": 7
            },
            {
                "question": "162²",
                "choices": ["26244", "26344", "26444", "26544"].sort(() => Math.random() - 0.5),
                "answer": "26244",
                "type": 7
            },
            {
                "question": "163²",
                "choices": ["26569", "26669", "26769", "26869"].sort(() => Math.random() - 0.5),
                "answer": "26569",
                "type": 7
            },
            {
                "question": "164²",
                "choices": ["26896", "26996", "27096", "27196"].sort(() => Math.random() - 0.5),
                "answer": "26896",
                "type": 7
            },
            {
                "question": "165²",
                "choices": ["27225", "27325", "27425", "27525"].sort(() => Math.random() - 0.5),
                "answer": "27225",
                "type": 7
            },
            {
                "question": "166²",
                "choices": ["27556", "27656", "27756", "27856"].sort(() => Math.random() - 0.5),
                "answer": "27556",
                "type": 7
            },
            {
                "question": "167²",
                "choices": ["27889", "27989", "28089", "28189"].sort(() => Math.random() - 0.5),
                "answer": "27889",
                "type": 7
            },
            {
                "question": "168²",
                "choices": ["28224", "28324", "28424", "28524"].sort(() => Math.random() - 0.5),
                "answer": "28224",
                "type": 7
            },
            {
                "question": "169²",
                "choices": ["28561", "28661", "28761", "28861"].sort(() => Math.random() - 0.5),
                "answer": "28561",
                "type": 7
            },
            {
                "question": "170²",
                "choices": ["28900", "29000", "29100", "29200"].sort(() => Math.random() - 0.5),
                "answer": "28900",
                "type": 7
            },
            {
                "question": "171²",
                "choices": ["29241", "29341", "29441", "29541"].sort(() => Math.random() - 0.5),
                "answer": "29241",
                "type": 7
            },
            {
                "question": "172²",
                "choices": ["29584", "29684", "29784", "29884"].sort(() => Math.random() - 0.5),
                "answer": "29584",
                "type": 7
            },
            {
                "question": "173²",
                "choices": ["29929", "30029", "30129", "30229"].sort(() => Math.random() - 0.5),
                "answer": "29929",
                "type": 7
            },
            {
                "question": "174²",
                "choices": ["30276", "30376", "30476", "30576"].sort(() => Math.random() - 0.5),
                "answer": "30276",
                "type": 7
            },
            {
                "question": "175²",
                "choices": ["30625", "30725", "30825", "30925"].sort(() => Math.random() - 0.5),
                "answer": "30625",
                "type": 7
            },
            {
                "question": "176²",
                "choices": ["30976", "31076", "31176", "31276"].sort(() => Math.random() - 0.5),
                "answer": "30976",
                "type": 7
            },
            {
                "question": "177²",
                "choices": ["31329", "31429", "31529", "31629"].sort(() => Math.random() - 0.5),
                "answer": "31329",
                "type": 7
            },
            {
                "question": "178²",
                "choices": ["31684", "31784", "31884", "31984"].sort(() => Math.random() - 0.5),
                "answer": "31684",
                "type": 7
            },
            {
                "question": "179²",
                "choices": ["32041", "32141", "32241", "32341"].sort(() => Math.random() - 0.5),
                "answer": "32041",
                "type": 7
            },
            {
                "question": "180²",
                "choices": ["32400", "32500", "32600", "32700"].sort(() => Math.random() - 0.5),
                "answer": "32400",
                "type": 7
            },
            {
                "question": "181²",
                "choices": ["32761", "32861", "32961", "33061"].sort(() => Math.random() - 0.5),
                "answer": "32761",
                "type": 7
            },
            {
                "question": "182²",
                "choices": ["33124", "33224", "33324", "33424"].sort(() => Math.random() - 0.5),
                "answer": "33124",
                "type": 7
            },
            {
                "question": "183²",
                "choices": ["33489", "33589", "33689", "33789"].sort(() => Math.random() - 0.5),
                "answer": "33489",
                "type": 7
            },
            {
                "question": "184²",
                "choices": ["33856", "33956", "34056", "34156"].sort(() => Math.random() - 0.5),
                "answer": "33856",
                "type": 7
            },
            {
                "question": "185²",
                "choices": ["34225", "34325", "34425", "34525"].sort(() => Math.random() - 0.5),
                "answer": "34225",
                "type": 7
            },
            {
                "question": "186²",
                "choices": ["34596", "34696", "34796", "34896"].sort(() => Math.random() - 0.5),
                "answer": "34596",
                "type": 7
            },
            {
                "question": "187²",
                "choices": ["34969", "35069", "35169", "35269"].sort(() => Math.random() - 0.5),
                "answer": "34969",
                "type": 7
            },
            {
                "question": "188²",
                "choices": ["35344", "35444", "35544", "35644"].sort(() => Math.random() - 0.5),
                "answer": "35344",
                "type": 7
            },
            {
                "question": "189²",
                "choices": ["35721", "35821", "35921", "36021"].sort(() => Math.random() - 0.5),
                "answer": "35721",
                "type": 7
            },
            {
                "question": "190²",
                "choices": ["36100", "36200", "36300", "36400"].sort(() => Math.random() - 0.5),
                "answer": "36100",
                "type": 7
            },
            {
                "question": "191²",
                "choices": ["36481", "36581", "36681", "36781"].sort(() => Math.random() - 0.5),
                "answer": "36481",
                "type": 7
            },
            {
                "question": "192²",
                "choices": ["36864", "36964", "37064", "37164"].sort(() => Math.random() - 0.5),
                "answer": "36864",
                "type": 7
            },
            {
                "question": "193²",
                "choices": ["37249", "37349", "37449", "37549"].sort(() => Math.random() - 0.5),
                "answer": "37249",
                "type": 7
            },
            {
                "question": "194²",
                "choices": ["37636", "37736", "37836", "37936"].sort(() => Math.random() - 0.5),
                "answer": "37636",
                "type": 7
            },
            {
                "question": "195²",
                "choices": ["38025", "38125", "38225", "38325"].sort(() => Math.random() - 0.5),
                "answer": "38025",
                "type": 7
            },
            {
                "question": "196²",
                "choices": ["38416", "38516", "38616", "38716"].sort(() => Math.random() - 0.5),
                "answer": "38416",
                "type": 7
            },
            {
                "question": "197²",
                "choices": ["38809", "38909", "39009", "39109"].sort(() => Math.random() - 0.5),
                "answer": "38809",
                "type": 7
            },
            {
                "question": "198²",
                "choices": ["39204", "39304", "39404", "39504"].sort(() => Math.random() - 0.5),
                "answer": "39204",
                "type": 7
            },
            {
                "question": "199²",
                "choices": ["39601", "39701", "39801", "39901"].sort(() => Math.random() - 0.5),
                "answer": "39601",
                "type": 7
            },
            {
                "question": "200²",
                "choices": ["40000", "40100", "40200", "40300"].sort(() => Math.random() - 0.5),
                "answer": "40000",
                "type": 7
            }
        ],
        [
            {
                "question": "√121",
                "choices": ["11", "12", "10", "13"].sort(() => Math.random() - 0.5),
                "answer": "11",
                "type": 8
            },
            {
                "question": "√144",
                "choices": ["12", "11", "13", "14"].sort(() => Math.random() - 0.5),
                "answer": "12",
                "type": 8
            },
            {
                "question": "√169",
                "choices": ["13", "12", "14", "15"].sort(() => Math.random() - 0.5),
                "answer": "13",
                "type": 8
            },
            {
                "question": "√196",
                "choices": ["14", "13", "15", "16"].sort(() => Math.random() - 0.5),
                "answer": "14",
                "type": 8
            },
            {
                "question": "√225",
                "choices": ["15", "14", "16", "17"].sort(() => Math.random() - 0.5),
                "answer": "15",
                "type": 8
            },
            {
                "question": "√256",
                "choices": ["16", "15", "17", "18"].sort(() => Math.random() - 0.5),
                "answer": "16",
                "type": 8
            },
            {
                "question": "√289",
                "choices": ["17", "16", "18", "19"].sort(() => Math.random() - 0.5),
                "answer": "17",
                "type": 8
            },
            {
                "question": "√324",
                "choices": ["18", "17", "19", "20"].sort(() => Math.random() - 0.5),
                "answer": "18",
                "type": 8
            },
            {
                "question": "√361",
                "choices": ["19", "18", "20", "21"].sort(() => Math.random() - 0.5),
                "answer": "19",
                "type": 8
            },
            {
                "question": "√400",
                "choices": ["20", "19", "21", "22"].sort(() => Math.random() - 0.5),
                "answer": "20",
                "type": 8
            },
            {
                "question": "√441",
                "choices": ["21", "20", "22", "23"].sort(() => Math.random() - 0.5),
                "answer": "21",
                "type": 8
            },
            {
                "question": "√484",
                "choices": ["22", "21", "23", "24"].sort(() => Math.random() - 0.5),
                "answer": "22",
                "type": 8
            },
            {
                "question": "√529",
                "choices": ["23", "22", "24", "25"].sort(() => Math.random() - 0.5),
                "answer": "23",
                "type": 8
            },
            {
                "question": "√576",
                "choices": ["24", "23", "25", "26"].sort(() => Math.random() - 0.5),
                "answer": "24",
                "type": 8
            },
            {
                "question": "√625",
                "choices": ["25", "24", "26", "27"].sort(() => Math.random() - 0.5),
                "answer": "25",
                "type": 8
            },
            {
                "question": "√676",
                "choices": ["26", "25", "27", "28"].sort(() => Math.random() - 0.5),
                "answer": "26",
                "type": 8
            },
            {
                "question": "√729",
                "choices": ["27", "26", "28", "29"].sort(() => Math.random() - 0.5),
                "answer": "27",
                "type": 8
            },
            {
                "question": "√784",
                "choices": ["28", "27", "29", "30"].sort(() => Math.random() - 0.5),
                "answer": "28",
                "type": 8
            },
            {
                "question": "√841",
                "choices": ["29", "28", "30", "31"].sort(() => Math.random() - 0.5),
                "answer": "29",
                "type": 8
            },
            {
                "question": "√900",
                "choices": ["30", "29", "31", "32"].sort(() => Math.random() - 0.5),
                "answer": "30",
                "type": 8
            },
            {
                "question": "√961",
                "choices": ["31", "30", "32", "33"].sort(() => Math.random() - 0.5),
                "answer": "31",
                "type": 8
            },
            {
                "question": "√1024",
                "choices": ["32", "31", "33", "34"].sort(() => Math.random() - 0.5),
                "answer": "32",
                "type": 8
            },
            {
                "question": "√1089",
                "choices": ["33", "32", "34", "35"].sort(() => Math.random() - 0.5),
                "answer": "33",
                "type": 8
            },
            {
                "question": "√1156",
                "choices": ["34", "33", "35", "36"].sort(() => Math.random() - 0.5),
                "answer": "34",
                "type": 8
            },
            {
                "question": "√1225",
                "choices": ["35", "34", "36", "37"].sort(() => Math.random() - 0.5),
                "answer": "35",
                "type": 8
            },
            {
                "question": "√1296",
                "choices": ["36", "35", "37", "38"].sort(() => Math.random() - 0.5),
                "answer": "36",
                "type": 8
            },
            {
                "question": "√1369",
                "choices": ["37", "36", "38", "39"].sort(() => Math.random() - 0.5),
                "answer": "37",
                "type": 8
            },
            {
                "question": "√1444",
                "choices": ["38", "37", "39", "40"].sort(() => Math.random() - 0.5),
                "answer": "38",
                "type": 8
            },
            {
                "question": "√1521",
                "choices": ["39", "38", "40", "41"].sort(() => Math.random() - 0.5),
                "answer": "39",
                "type": 8
            },
            {
                "question": "√1600",
                "choices": ["40", "39", "41", "42"].sort(() => Math.random() - 0.5),
                "answer": "40",
                "type": 8
            },
            {
                "question": "√1681",
                "choices": ["41", "40", "42", "43"].sort(() => Math.random() - 0.5),
                "answer": "41",
                "type": 8
            },
            {
                "question": "√1764",
                "choices": ["42", "41", "43", "44"].sort(() => Math.random() - 0.5),
                "answer": "42",
                "type": 8
            },
            {
                "question": "√1849",
                "choices": ["43", "42", "44", "45"].sort(() => Math.random() - 0.5),
                "answer": "43",
                "type": 8
            },
            {
                "question": "√1936",
                "choices": ["44", "43", "45", "46"].sort(() => Math.random() - 0.5),
                "answer": "44",
                "type": 8
            },
            {
                "question": "√2025",
                "choices": ["45", "44", "46", "47"].sort(() => Math.random() - 0.5),
                "answer": "45",
                "type": 8
            },
            {
                "question": "√2116",
                "choices": ["46", "45", "47", "48"].sort(() => Math.random() - 0.5),
                "answer": "46",
                "type": 8
            },
            {
                "question": "√2209",
                "choices": ["47", "46", "48", "49"].sort(() => Math.random() - 0.5),
                "answer": "47",
                "type": 8
            },
            {
                "question": "√2304",
                "choices": ["48", "47", "49", "50"].sort(() => Math.random() - 0.5),
                "answer": "48",
                "type": 8
            },
            {
                "question": "√2401",
                "choices": ["49", "48", "50", "51"].sort(() => Math.random() - 0.5),
                "answer": "49",
                "type": 8
            },
            {
                "question": "√2500",
                "choices": ["50", "49", "51", "52"].sort(() => Math.random() - 0.5),
                "answer": "50",
                "type": 8
            },
            {
                "question": "√2601",
                "choices": ["51", "50", "52", "53"].sort(() => Math.random() - 0.5),
                "answer": "51",
                "type": 8
            },
            {
                "question": "√2704",
                "choices": ["52", "51", "53", "54"].sort(() => Math.random() - 0.5),
                "answer": "52",
                "type": 8
            },
            {
                "question": "√2809",
                "choices": ["53", "52", "54", "55"].sort(() => Math.random() - 0.5),
                "answer": "53",
                "type": 8
            },
            {
                "question": "√2916",
                "choices": ["54", "53", "55", "56"].sort(() => Math.random() - 0.5),
                "answer": "54",
                "type": 8
            },
            {
                "question": "√3025",
                "choices": ["55", "54", "56", "57"].sort(() => Math.random() - 0.5),
                "answer": "55",
                "type": 8
            },
            {
                "question": "√3136",
                "choices": ["56", "55", "57", "58"].sort(() => Math.random() - 0.5),
                "answer": "56",
                "type": 8
            },
            {
                "question": "√3249",
                "choices": ["57", "56", "58", "59"].sort(() => Math.random() - 0.5),
                "answer": "57",
                "type": 8
            },
            {
                "question": "√3364",
                "choices": ["58", "57", "59", "60"].sort(() => Math.random() - 0.5),
                "answer": "58",
                "type": 8
            },
            {
                "question": "√3481",
                "choices": ["59", "58", "60", "61"].sort(() => Math.random() - 0.5),
                "answer": "59",
                "type": 8
            },
            {
                "question": "√3600",
                "choices": ["60", "59", "61", "62"].sort(() => Math.random() - 0.5),
                "answer": "60",
                "type": 8
            },
            {
                "question": "√3721",
                "choices": ["61", "60", "62", "63"].sort(() => Math.random() - 0.5),
                "answer": "61",
                "type": 8
            },
            {
                "question": "√3844",
                "choices": ["62", "61", "63", "64"].sort(() => Math.random() - 0.5),
                "answer": "62",
                "type": 8
            },
            {
                "question": "√3969",
                "choices": ["63", "62", "64", "65"].sort(() => Math.random() - 0.5),
                "answer": "63",
                "type": 8
            },
            {
                "question": "√4096",
                "choices": ["64", "63", "65", "66"].sort(() => Math.random() - 0.5),
                "answer": "64",
                "type": 8
            },
            {
                "question": "√4225",
                "choices": ["65", "64", "66", "67"].sort(() => Math.random() - 0.5),
                "answer": "65",
                "type": 8
            },
            {
                "question": "√4356",
                "choices": ["66", "65", "67", "68"].sort(() => Math.random() - 0.5),
                "answer": "66",
                "type": 8
            },
            {
                "question": "√4489",
                "choices": ["67", "66", "68", "69"].sort(() => Math.random() - 0.5),
                "answer": "67",
                "type": 8
            },
            {
                "question": "√4624",
                "choices": ["68", "67", "69", "70"].sort(() => Math.random() - 0.5),
                "answer": "68",
                "type": 8
            },
            {
                "question": "√4761",
                "choices": ["69", "68", "70", "71"].sort(() => Math.random() - 0.5),
                "answer": "69",
                "type": 8
            },
            {
                "question": "√4900",
                "choices": ["70", "69", "71", "72"].sort(() => Math.random() - 0.5),
                "answer": "70",
                "type": 8
            },
            {
                "question": "√5041",
                "choices": ["71", "70", "72", "73"].sort(() => Math.random() - 0.5),
                "answer": "71",
                "type": 8
            },
            {
                "question": "√5184",
                "choices": ["72", "71", "73", "74"].sort(() => Math.random() - 0.5),
                "answer": "72",
                "type": 8
            },
            {
                "question": "√5329",
                "choices": ["73", "72", "74", "75"].sort(() => Math.random() - 0.5),
                "answer": "73",
                "type": 8
            },
            {
                "question": "√5476",
                "choices": ["74", "73", "75", "76"].sort(() => Math.random() - 0.5),
                "answer": "74",
                "type": 8
            },
            {
                "question": "√5625",
                "choices": ["75", "74", "76", "77"].sort(() => Math.random() - 0.5),
                "answer": "75",
                "type": 8
            },
            {
                "question": "√5776",
                "choices": ["76", "75", "77", "78"].sort(() => Math.random() - 0.5),
                "answer": "76",
                "type": 8
            },
            {
                "question": "√5929",
                "choices": ["77", "76", "78", "79"].sort(() => Math.random() - 0.5),
                "answer": "77",
                "type": 8
            },
            {
                "question": "√6084",
                "choices": ["78", "77", "79", "80"].sort(() => Math.random() - 0.5),
                "answer": "78",
                "type": 8
            },
            {
                "question": "√6241",
                "choices": ["79", "78", "80", "81"].sort(() => Math.random() - 0.5),
                "answer": "79",
                "type": 8
            },
            {
                "question": "√6400",
                "choices": ["80", "79", "81", "82"].sort(() => Math.random() - 0.5),
                "answer": "80",
                "type": 8
            },
            {
                "question": "√6561",
                "choices": ["81", "80", "82", "83"].sort(() => Math.random() - 0.5),
                "answer": "81",
                "type": 8
            },
            {
                "question": "√6724",
                "choices": ["82", "81", "83", "84"].sort(() => Math.random() - 0.5),
                "answer": "82",
                "type": 8
            },
            {
                "question": "√6889",
                "choices": ["83", "82", "84", "85"].sort(() => Math.random() - 0.5),
                "answer": "83",
                "type": 8
            },
            {
                "question": "√7056",
                "choices": ["84", "83", "85", "86"].sort(() => Math.random() - 0.5),
                "answer": "84",
                "type": 8
            },
            {
                "question": "√7225",
                "choices": ["85", "84", "86", "87"].sort(() => Math.random() - 0.5),
                "answer": "85",
                "type": 8
            },
            {
                "question": "√7396",
                "choices": ["86", "85", "87", "88"].sort(() => Math.random() - 0.5),
                "answer": "86",
                "type": 8
            },
            {
                "question": "√7569",
                "choices": ["87", "86", "88", "89"].sort(() => Math.random() - 0.5),
                "answer": "87",
                "type": 8
            },
            {
                "question": "√7744",
                "choices": ["88", "87", "89", "90"].sort(() => Math.random() - 0.5),
                "answer": "88",
                "type": 8
            },
            {
                "question": "√7921",
                "choices": ["89", "88", "90", "91"].sort(() => Math.random() - 0.5),
                "answer": "89",
                "type": 8
            },
            {
                "question": "√8100",
                "choices": ["90", "89", "91", "92"].sort(() => Math.random() - 0.5),
                "answer": "90",
                "type": 8
            },
            {
                "question": "√8281",
                "choices": ["91", "90", "92", "93"].sort(() => Math.random() - 0.5),
                "answer": "91",
                "type": 8
            },
            {
                "question": "√8464",
                "choices": ["92", "91", "93", "94"].sort(() => Math.random() - 0.5),
                "answer": "92",
                "type": 8
            },
            {
                "question": "√8649",
                "choices": ["93", "92", "94", "95"].sort(() => Math.random() - 0.5),
                "answer": "93",
                "type": 8
            },
            {
                "question": "√8836",
                "choices": ["94", "93", "95", "96"].sort(() => Math.random() - 0.5),
                "answer": "94",
                "type": 8
            },
            {
                "question": "√9025",
                "choices": ["95", "94", "96", "97"].sort(() => Math.random() - 0.5),
                "answer": "95",
                "type": 8
            },
            {
                "question": "√9216",
                "choices": ["96", "95", "97", "98"].sort(() => Math.random() - 0.5),
                "answer": "96",
                "type": 8
            },
            {
                "question": "√9409",
                "choices": ["97", "96", "98", "99"].sort(() => Math.random() - 0.5),
                "answer": "97",
                "type": 8
            },
            {
                "question": "√9604",
                "choices": ["98", "97", "99", "100"].sort(() => Math.random() - 0.5),
                "answer": "98",
                "type": 8
            },
            {
                "question": "√9801",
                "choices": ["99", "98", "100", "101"].sort(() => Math.random() - 0.5),
                "answer": "99",
                "type": 8
            },
            {
                "question": "√10000",
                "choices": ["100", "99", "101", "102"].sort(() => Math.random() - 0.5),
                "answer": "100",
                "type": 8
            },
            {
                "question": "√10201",
                "choices": ["101", "100", "102", "103"].sort(() => Math.random() - 0.5),
                "answer": "101",
                "type": 8
            },
            {
                "question": "√10404",
                "choices": ["102", "101", "103", "104"].sort(() => Math.random() - 0.5),
                "answer": "102",
                "type": 8
            },
            {
                "question": "√10609",
                "choices": ["103", "102", "104", "105"].sort(() => Math.random() - 0.5),
                "answer": "103",
                "type": 8
            },
            {
                "question": "√10816",
                "choices": ["104", "103", "105", "106"].sort(() => Math.random() - 0.5),
                "answer": "104",
                "type": 8
            },
            {
                "question": "√11025",
                "choices": ["105", "104", "106", "107"].sort(() => Math.random() - 0.5),
                "answer": "105",
                "type": 8
            },
            {
                "question": "√11236",
                "choices": ["106", "105", "107", "108"].sort(() => Math.random() - 0.5),
                "answer": "106",
                "type": 8
            },
            {
                "question": "√11449",
                "choices": ["107", "106", "108", "109"].sort(() => Math.random() - 0.5),
                "answer": "107",
                "type": 8
            },
            {
                "question": "√11664",
                "choices": ["108", "107", "109", "110"].sort(() => Math.random() - 0.5),
                "answer": "108",
                "type": 8
            },
            {
                "question": "√11881",
                "choices": ["109", "108", "110", "111"].sort(() => Math.random() - 0.5),
                "answer": "109",
                "type": 8
            },
            {
                "question": "√12100",
                "choices": ["110", "109", "111", "112"].sort(() => Math.random() - 0.5),
                "answer": "110",
                "type": 8
            },
            {
                "question": "√12321",
                "choices": ["111", "110", "112", "113"].sort(() => Math.random() - 0.5),
                "answer": "111",
                "type": 8
            },
            {
                "question": "√12544",
                "choices": ["112", "111", "113", "114"].sort(() => Math.random() - 0.5),
                "answer": "112",
                "type": 8
            },
            {
                "question": "√12769",
                "choices": ["113", "112", "114", "115"].sort(() => Math.random() - 0.5),
                "answer": "113",
                "type": 8
            },
            {
                "question": "√12996",
                "choices": ["114", "113", "115", "116"].sort(() => Math.random() - 0.5),
                "answer": "114",
                "type": 8
            },
            {
                "question": "√13225",
                "choices": ["115", "114", "116", "117"].sort(() => Math.random() - 0.5),
                "answer": "115",
                "type": 8
            },
            {
                "question": "√13456",
                "choices": ["116", "115", "117", "118"].sort(() => Math.random() - 0.5),
                "answer": "116",
                "type": 8
            },
            {
                "question": "√13689",
                "choices": ["117", "116", "118", "119"].sort(() => Math.random() - 0.5),
                "answer": "117",
                "type": 8
            },
            {
                "question": "√13924",
                "choices": ["118", "117", "119", "120"].sort(() => Math.random() - 0.5),
                "answer": "118",
                "type": 8
            },
            {
                "question": "√14161",
                "choices": ["119", "118", "120", "121"].sort(() => Math.random() - 0.5),
                "answer": "119",
                "type": 8
            },
            {
                "question": "√14400",
                "choices": ["120", "119", "121", "122"].sort(() => Math.random() - 0.5),
                "answer": "120",
                "type": 8
            },
            {
                "question": "√14641",
                "choices": ["121", "120", "122", "123"].sort(() => Math.random() - 0.5),
                "answer": "121",
                "type": 8
            },
            {
                "question": "√14884",
                "choices": ["122", "121", "123", "124"].sort(() => Math.random() - 0.5),
                "answer": "122",
                "type": 8
            },
            {
                "question": "√15129",
                "choices": ["123", "122", "124", "125"].sort(() => Math.random() - 0.5),
                "answer": "123",
                "type": 8
            },
            {
                "question": "√15376",
                "choices": ["124", "123", "125", "126"].sort(() => Math.random() - 0.5),
                "answer": "124",
                "type": 8
            },
            {
                "question": "√15625",
                "choices": ["125", "124", "126", "127"].sort(() => Math.random() - 0.5),
                "answer": "125",
                "type": 8
            },
            {
                "question": "√15876",
                "choices": ["126", "125", "127", "128"].sort(() => Math.random() - 0.5),
                "answer": "126",
                "type": 8
            },
            {
                "question": "√16129",
                "choices": ["127", "126", "128", "129"].sort(() => Math.random() - 0.5),
                "answer": "127",
                "type": 8
            },
            {
                "question": "√16384",
                "choices": ["128", "127", "129", "130"].sort(() => Math.random() - 0.5),
                "answer": "128",
                "type": 8
            },
            {
                "question": "√16641",
                "choices": ["129", "128", "130", "131"].sort(() => Math.random() - 0.5),
                "answer": "129",
                "type": 8
            },
            {
                "question": "√16900",
                "choices": ["130", "129", "131", "132"].sort(() => Math.random() - 0.5),
                "answer": "130",
                "type": 8
            },
            {
                "question": "√17161",
                "choices": ["131", "130", "132", "133"].sort(() => Math.random() - 0.5),
                "answer": "131",
                "type": 8
            },
            {
                "question": "√17424",
                "choices": ["132", "131", "133", "134"].sort(() => Math.random() - 0.5),
                "answer": "132",
                "type": 8
            },
            {
                "question": "√17689",
                "choices": ["133", "132", "134", "135"].sort(() => Math.random() - 0.5),
                "answer": "133",
                "type": 8
            },
            {
                "question": "√17956",
                "choices": ["134", "133", "135", "136"].sort(() => Math.random() - 0.5),
                "answer": "134",
                "type": 8
            },
            {
                "question": "√18225",
                "choices": ["135", "134", "136", "137"].sort(() => Math.random() - 0.5),
                "answer": "135",
                "type": 8
            },
            {
                "question": "√18496",
                "choices": ["136", "135", "137", "138"].sort(() => Math.random() - 0.5),
                "answer": "136",
                "type": 8
            },
            {
                "question": "√18769",
                "choices": ["137", "136", "138", "139"].sort(() => Math.random() - 0.5),
                "answer": "137",
                "type": 8
            },
            {
                "question": "√19044",
                "choices": ["138", "137", "139", "140"].sort(() => Math.random() - 0.5),
                "answer": "138",
                "type": 8
            },
            {
                "question": "√19321",
                "choices": ["139", "138", "140", "141"].sort(() => Math.random() - 0.5),
                "answer": "139",
                "type": 8
            },
            {
                "question": "√19600",
                "choices": ["140", "139", "141", "142"].sort(() => Math.random() - 0.5),
                "answer": "140",
                "type": 8
            },
            {
                "question": "√19881",
                "choices": ["141", "140", "142", "143"].sort(() => Math.random() - 0.5),
                "answer": "141",
                "type": 8
            },
            {
                "question": "√20164",
                "choices": ["142", "141", "143", "144"].sort(() => Math.random() - 0.5),
                "answer": "142",
                "type": 8
            },
            {
                "question": "√20449",
                "choices": ["143", "142", "144", "145"].sort(() => Math.random() - 0.5),
                "answer": "143",
                "type": 8
            },
            {
                "question": "√20736",
                "choices": ["144", "143", "145", "146"].sort(() => Math.random() - 0.5),
                "answer": "144",
                "type": 8
            },
            {
                "question": "√21025",
                "choices": ["145", "144", "146", "147"].sort(() => Math.random() - 0.5),
                "answer": "145",
                "type": 8
            },
            {
                "question": "√21316",
                "choices": ["146", "145", "147", "148"].sort(() => Math.random() - 0.5),
                "answer": "146",
                "type": 8
            },
            {
                "question": "√21609",
                "choices": ["147", "146", "148", "149"].sort(() => Math.random() - 0.5),
                "answer": "147",
                "type": 8
            },
            {
                "question": "√21904",
                "choices": ["148", "147", "149", "150"].sort(() => Math.random() - 0.5),
                "answer": "148",
                "type": 8
            },
            {
                "question": "√22201",
                "choices": ["149", "148", "150", "151"].sort(() => Math.random() - 0.5),
                "answer": "149",
                "type": 8
            },
            {
                "question": "√22500",
                "choices": ["150", "149", "151", "152"].sort(() => Math.random() - 0.5),
                "answer": "150",
                "type": 8
            }
        ],
        [
            {
                "question": "√150",
                "choices": ["12", "13", "11", "14"].sort(() => Math.random() - 0.5),
                "answer": "12",
                "type": 9
            },
            {
                "question": "√250",
                "choices": ["16", "15", "17", "14"].sort(() => Math.random() - 0.5),
                "answer": "16",
                "type": 9
            },
            {
                "question": "√800",
                "choices": ["28", "29", "27", "30"].sort(() => Math.random() - 0.5),
                "answer": "28",
                "type": 9
            },
            {
                "question": "√1200",
                "choices": ["35", "34", "36", "33"].sort(() => Math.random() - 0.5),
                "answer": "35",
                "type": 9
            },
            {
                "question": "√1800",
                "choices": ["42", "43", "41", "44"].sort(() => Math.random() - 0.5),
                "answer": "42",
                "type": 9
            },
            {
                "question": "√2200",
                "choices": ["47", "46", "48", "45"].sort(() => Math.random() - 0.5),
                "answer": "47",
                "type": 9
            },
            {
                "question": "√2700",
                "choices": ["52", "51", "53", "50"].sort(() => Math.random() - 0.5),
                "answer": "52",
                "type": 9
            },
            {
                "question": "√3200",
                "choices": ["57", "56", "58", "55"].sort(() => Math.random() - 0.5),
                "answer": "57",
                "type": 9
            },
            {
                "question": "√3700",
                "choices": ["61", "60", "62", "59"].sort(() => Math.random() - 0.5),
                "answer": "61",
                "type": 9
            },
            {
                "question": "√4200",
                "choices": ["65", "64", "66", "63"].sort(() => Math.random() - 0.5),
                "answer": "65",
                "type": 9
            },
            {
                "question": "√4800",
                "choices": ["69", "70", "68", "71"].sort(() => Math.random() - 0.5),
                "answer": "69",
                "type": 9
            },
            {
                "question": "√5300",
                "choices": ["73", "72", "74", "71"].sort(() => Math.random() - 0.5),
                "answer": "73",
                "type": 9
            },
            {
                "question": "√5900",
                "choices": ["77", "76", "78", "75"].sort(() => Math.random() - 0.5),
                "answer": "77",
                "type": 9
            },
            {
                "question": "√6400",
                "choices": ["80", "81", "79", "82"].sort(() => Math.random() - 0.5),
                "answer": "80",
                "type": 9
            },
            {
                "question": "√6900",
                "choices": ["83", "84", "82", "85"].sort(() => Math.random() - 0.5),
                "answer": "83",
                "type": 9
            },
            {
                "question": "√7400",
                "choices": ["86", "87", "85", "88"].sort(() => Math.random() - 0.5),
                "answer": "86",
                "type": 9
            },
            {
                "question": "√7900",
                "choices": ["89", "90", "88", "91"].sort(() => Math.random() - 0.5),
                "answer": "89",
                "type": 9
            },
            {
                "question": "√8400",
                "choices": ["92", "91", "93", "90"].sort(() => Math.random() - 0.5),
                "answer": "92",
                "type": 9
            },
            {
                "question": "√8900",
                "choices": ["94", "95", "93", "96"].sort(() => Math.random() - 0.5),
                "answer": "94",
                "type": 9
            },
            {
                "question": "√9400",
                "choices": ["97", "96", "98", "95"].sort(() => Math.random() - 0.5),
                "answer": "97",
                "type": 9
            },
            {
                "question": "√9900",
                "choices": ["99", "100", "98", "101"].sort(() => Math.random() - 0.5),
                "answer": "99",
                "type": 9
            },
            {
                "question": "√10500",
                "choices": ["102", "103", "101", "104"].sort(() => Math.random() - 0.5),
                "answer": "102",
                "type": 9
            },
            {
                "question": "√11200",
                "choices": ["106", "105", "107", "104"].sort(() => Math.random() - 0.5),
                "answer": "106",
                "type": 9
            },
            {
                "question": "√11900",
                "choices": ["109", "110", "108", "111"].sort(() => Math.random() - 0.5),
                "answer": "109",
                "type": 9
            },
            {
                "question": "√12600",
                "choices": ["112", "113", "111", "114"].sort(() => Math.random() - 0.5),
                "answer": "112",
                "type": 9
            },
            {
                "question": "√13300",
                "choices": ["115", "116", "114", "117"].sort(() => Math.random() - 0.5),
                "answer": "115",
                "type": 9
            },
            {
                "question": "√14000",
                "choices": ["118", "117", "119", "116"].sort(() => Math.random() - 0.5),
                "answer": "118",
                "type": 9
            },
            {
                "question": "√14700",
                "choices": ["121", "120", "122", "119"].sort(() => Math.random() - 0.5),
                "answer": "121",
                "type": 9
            },
            {
                "question": "√15400",
                "choices": ["124", "123", "125", "122"].sort(() => Math.random() - 0.5),
                "answer": "124",
                "type": 9
            },
            {
                "question": "√16100",
                "choices": ["127", "126", "128", "125"].sort(() => Math.random() - 0.5),
                "answer": "127",
                "type": 9
            },
            {
                "question": "√16800",
                "choices": ["130", "129", "131", "128"].sort(() => Math.random() - 0.5),
                "answer": "130",
                "type": 9
            },
            {
                "question": "√17500",
                "choices": ["132", "133", "131", "134"].sort(() => Math.random() - 0.5),
                "answer": "132",
                "type": 9
            },
            {
                "question": "√18200",
                "choices": ["135", "134", "136", "133"].sort(() => Math.random() - 0.5),
                "answer": "135",
                "type": 9
            },
            {
                "question": "√18900",
                "choices": ["138", "137", "139", "136"].sort(() => Math.random() - 0.5),
                "answer": "138",
                "type": 9
            },
            {
                "question": "√19600",
                "choices": ["140", "139", "141", "138"].sort(() => Math.random() - 0.5),
                "answer": "140",
                "type": 9
            },
            {
                "question": "√300",
                "choices": ["17", "18", "16", "19"].sort(() => Math.random() - 0.5),
                "answer": "17",
                "type": 9
            },
            {
                "question": "√600",
                "choices": ["24", "25", "23", "26"].sort(() => Math.random() - 0.5),
                "answer": "24",
                "type": 9
            },
            {
                "question": "√900",
                "choices": ["30", "31", "29", "32"].sort(() => Math.random() - 0.5),
                "answer": "30",
                "type": 9
            },
            {
                "question": "√1300",
                "choices": ["36", "37", "35", "38"].sort(() => Math.random() - 0.5),
                "answer": "36",
                "type": 9
            },
            {
                "question": "√1700",
                "choices": ["41", "42", "40", "43"].sort(() => Math.random() - 0.5),
                "answer": "41",
                "type": 9
            },
            {
                "question": "√2100",
                "choices": ["46", "45", "47", "44"].sort(() => Math.random() - 0.5),
                "answer": "46",
                "type": 9
            },
            {
                "question": "√2500",
                "choices": ["50", "49", "51", "48"].sort(() => Math.random() - 0.5),
                "answer": "50",
                "type": 9
            },
            {
                "question": "√2900",
                "choices": ["54", "53", "55", "52"].sort(() => Math.random() - 0.5),
                "answer": "54",
                "type": 9
            },
            {
                "question": "√3300",
                "choices": ["57", "58", "56", "59"].sort(() => Math.random() - 0.5),
                "answer": "57",
                "type": 9
            },
            {
                "question": "√3700",
                "choices": ["61", "60", "62", "59"].sort(() => Math.random() - 0.5),
                "answer": "61",
                "type": 9
            },
            {
                "question": "√4100",
                "choices": ["64", "65", "63", "66"].sort(() => Math.random() - 0.5),
                "answer": "64",
                "type": 9
            },
            {
                "question": "√4500",
                "choices": ["67", "66", "68", "65"].sort(() => Math.random() - 0.5),
                "answer": "67",
                "type": 9
            },
            {
                "question": "√4900",
                "choices": ["70", "69", "71", "68"].sort(() => Math.random() - 0.5),
                "answer": "70",
                "type": 9
            },
            {
                "question": "√5300",
                "choices": ["73", "72", "74", "71"].sort(() => Math.random() - 0.5),
                "answer": "73",
                "type": 9
            },
            {
                "question": "√5700",
                "choices": ["75", "76", "74", "77"].sort(() => Math.random() - 0.5),
                "answer": "75",
                "type": 9
            },
            {
                "question": "√6100",
                "choices": ["78", "79", "77", "80"].sort(() => Math.random() - 0.5),
                "answer": "78",
                "type": 9
            },
            {
                "question": "√6500",
                "choices": ["81", "80", "82", "79"].sort(() => Math.random() - 0.5),
                "answer": "81",
                "type": 9
            },
            {
                "question": "√6900",
                "choices": ["83", "84", "82", "85"].sort(() => Math.random() - 0.5),
                "answer": "83",
                "type": 9
            },
            {
                "question": "√7300",
                "choices": ["85", "86", "84", "87"].sort(() => Math.random() - 0.5),
                "answer": "85",
                "type": 9
            },
            {
                "question": "√7700",
                "choices": ["88", "87", "89", "86"].sort(() => Math.random() - 0.5),
                "answer": "88",
                "type": 9
            },
            {
                "question": "√8100",
                "choices": ["90", "89", "91", "88"].sort(() => Math.random() - 0.5),
                "answer": "90",
                "type": 9
            },
            {
                "question": "√8500",
                "choices": ["92", "93", "91", "94"].sort(() => Math.random() - 0.5),
                "answer": "92",
                "type": 9
            },
            {
                "question": "√8900",
                "choices": ["94", "95", "93", "96"].sort(() => Math.random() - 0.5),
                "answer": "94",
                "type": 9
            },
            {
                "question": "√9300",
                "choices": ["96", "97", "95", "98"].sort(() => Math.random() - 0.5),
                "answer": "96",
                "type": 9
            },
            {
                "question": "√9700",
                "choices": ["98", "99", "97", "100"].sort(() => Math.random() - 0.5),
                "answer": "98",
                "type": 9
            },
            {
                "question": "√10100",
                "choices": ["100", "101", "99", "102"].sort(() => Math.random() - 0.5),
                "answer": "100",
                "type": 9
            },
            {
                "question": "√10500",
                "choices": ["102", "103", "101", "104"].sort(() => Math.random() - 0.5),
                "answer": "102",
                "type": 9
            },
            {
                "question": "√10900",
                "choices": ["104", "105", "103", "106"].sort(() => Math.random() - 0.5),
                "answer": "104",
                "type": 9
            },
            {
                "question": "√11300",
                "choices": ["106", "107", "105", "108"].sort(() => Math.random() - 0.5),
                "answer": "106",
                "type": 9
            },
            {
                "question": "√11700",
                "choices": ["108", "109", "107", "110"].sort(() => Math.random() - 0.5),
                "answer": "108",
                "type": 9
            },
            {
                "question": "√12100",
                "choices": ["110", "109", "111", "108"].sort(() => Math.random() - 0.5),
                "answer": "110",
                "type": 9
            },
            {
                "question": "√12500",
                "choices": ["112", "111", "113", "110"].sort(() => Math.random() - 0.5),
                "answer": "112",
                "type": 9
            },
            {
                "question": "√12900",
                "choices": ["114", "113", "115", "112"].sort(() => Math.random() - 0.5),
                "answer": "114",
                "type": 9
            },
            {
                "question": "√13300",
                "choices": ["115", "116", "114", "117"].sort(() => Math.random() - 0.5),
                "answer": "115",
                "type": 9
            },
            {
                "question": "√13700",
                "choices": ["117", "118", "116", "119"].sort(() => Math.random() - 0.5),
                "answer": "117",
                "type": 9
            },
            {
                "question": "√14100",
                "choices": ["119", "118", "120", "117"].sort(() => Math.random() - 0.5),
                "answer": "119",
                "type": 9
            },
            {
                "question": "√14500",
                "choices": ["120", "119", "121", "118"].sort(() => Math.random() - 0.5),
                "answer": "120",
                "type": 9
            },
            {
                "question": "√14900",
                "choices": ["122", "121", "123", "120"].sort(() => Math.random() - 0.5),
                "answer": "122",
                "type": 9
            },
            {
                "question": "√15300",
                "choices": ["124", "123", "125", "122"].sort(() => Math.random() - 0.5),
                "answer": "124",
                "type": 9
            },
            {
                "question": "√15700",
                "choices": ["125", "126", "124", "127"].sort(() => Math.random() - 0.5),
                "answer": "125",
                "type": 9
            },
            {
                "question": "√16100",
                "choices": ["127", "126", "128", "125"].sort(() => Math.random() - 0.5),
                "answer": "127",
                "type": 9
            },
            {
                "question": "√16500",
                "choices": ["128", "129", "127", "130"].sort(() => Math.random() - 0.5),
                "answer": "128",
                "type": 9
            },
            {
                "question": "√16900",
                "choices": ["130", "129", "131", "128"].sort(() => Math.random() - 0.5),
                "answer": "130",
                "type": 9
            },
            {
                "question": "√17300",
                "choices": ["131", "132", "130", "133"].sort(() => Math.random() - 0.5),
                "answer": "131",
                "type": 9
            },
            {
                "question": "√17700",
                "choices": ["133", "132", "134", "131"].sort(() => Math.random() - 0.5),
                "answer": "133",
                "type": 9
            },
            {
                "question": "√18100",
                "choices": ["135", "134", "136", "133"].sort(() => Math.random() - 0.5),
                "answer": "135",
                "type": 9
            },
            {
                "question": "√18500",
                "choices": ["136", "137", "135", "138"].sort(() => Math.random() - 0.5),
                "answer": "136",
                "type": 9
            },
            {
                "question": "√18900",
                "choices": ["138", "137", "139", "136"].sort(() => Math.random() - 0.5),
                "answer": "138",
                "type": 9
            },
            {
                "question": "√19300",
                "choices": ["139", "140", "138", "141"].sort(() => Math.random() - 0.5),
                "answer": "139",
                "type": 9
            },
            {
                "question": "√19700",
                "choices": ["140", "141", "139", "142"].sort(() => Math.random() - 0.5),
                "answer": "140",
                "type": 9
            }
        ]
    ];

console.log(bank[3].length)
// console.log(JSON.stringify(bank));

