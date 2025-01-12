/**
 * Type
 */

import { APP_URL } from "../../constants";

export interface Boundary {
  latStart: number;
  lngStart: number;
  latEnd: number;
  lngEnd: number;
}

export interface City {
  slug: string;
  country: string;
  city: string;
  boundary: Boundary | null;
  // center: { lat: number; lng: number };
  thumbnail?: string;
  region: string;
}

export interface CityMetaData {
  slug: string;
  spotCnt: number;
  avgSpeed: number;
}

export interface CityWithData extends City {
  spotCnt: number;
  avgSpeed: number;
}

/**
 * Regions
 */

export const REGION_EAST_ASIA = "East Asia";
export const REGION_SOUTH_EAST_ASIA = "South East Asia";
export const REGION_SOUTH_ASIA = "South Asia";
export const REGION_NORTH_AMERICA = "North America";
export const REGION_SOUTH_AMERICA = "South America";
export const REGION_CENTRAL_ASIA = "Central Asia";
export const REGION_EASTERN_EUROPE = "Eastern Europe";
export const REGION_WESTERN_EUROPE = "Western Europe";
export const REGION_OCEANIAN = "Oceanian";
export const REGION_AFRICA = "Africa";
export const REGION_MIDDLE_EAST = "Middle East";

export const REGIONS = [
  REGION_SOUTH_EAST_ASIA,
  REGION_WESTERN_EUROPE,
  REGION_EAST_ASIA,
  REGION_SOUTH_AMERICA,
  REGION_NORTH_AMERICA,
  REGION_SOUTH_ASIA,
  REGION_EASTERN_EUROPE,
  REGION_MIDDLE_EAST,
  REGION_OCEANIAN,
  REGION_AFRICA,
  REGION_CENTRAL_ASIA,
];

/**
 * Cities
 */

const IMAGE_PATH = "/img/cities";

export const THAILAND_BANGKOK: City = {
  slug: "thailand-bangkok",
  country: "Thailand",
  city: "Bangkok",
  region: REGION_SOUTH_EAST_ASIA,
  boundary: {
    latStart: 13.672981477425537,
    lngStart: 100.46799149310829,
    latEnd: 13.79455979333963,
    lngEnd: 100.62824274505061,
  },
  // center: { lat: 13.732659608344978, lng: 100.54471042062359 },
  thumbnail: `${IMAGE_PATH}/thailand-bangkok.jpg`,
};

export const THAILAND_CHIANGMAI: City = {
  slug: "thailand-chiangmai",
  country: "Thailand",
  city: "Chiang Mai",
  region: REGION_SOUTH_EAST_ASIA,
  boundary: {
    latStart: 18.758529348325865,
    lngStart: 98.94571798180516,
    latEnd: 18.817653026659116,
    lngEnd: 99.02568099469926,
  },
  // center: { lat: 18.76022003414657, lng: 98.98601517771374 },
  thumbnail: `${IMAGE_PATH}/thailand-chiangmai.jpg`,
};

export const INDONESIA_CANGGU: City = {
  slug: "indonesia-canggu",
  country: "Indonesia",
  city: "Canggu",
  region: REGION_SOUTH_EAST_ASIA,
  boundary: {
    latStart: -8.707071696141014,
    lngStart: 115.07572211994403,
    latEnd: -8.60429808302807,
    lngEnd: 115.2004462734472,
  },
  // center: { lat: -8.653273825526307, lng: 115.13478074413004 },
  thumbnail: `${IMAGE_PATH}/indonesia-canggu.jpg`,
};

export const PERU_LIMA: City = {
  slug: "peru-lima",
  country: "Peru",
  city: "Lima",
  region: REGION_SOUTH_AMERICA,
  boundary: {
    latStart: -12.309968109283844,
    lngStart: -77.34866767524159,
    latEnd: -11.848931715227906,
    lngEnd: -76.7449859403346,
  },
  // center: { lat: -12.046067197261035, lng: -77.04477146758003 },
  thumbnail: `${IMAGE_PATH}/peru-lima.jpg`,
};

export const CANADA_VANCUBER: City = {
  slug: "canada-vancouver",
  country: "Canada",
  city: "Vancouver",
  region: REGION_NORTH_AMERICA,
  boundary: {
    latStart: 49.06904929903996,
    lngStart: -123.35248601373657,
    latEnd: 49.39535206379091,
    lngEnd: -122.75296120963932,
  },
};

export const USA_NEW_YORK: City = {
  slug: "usa-new_york",
  country: "USA",
  city: "New York",
  region: REGION_NORTH_AMERICA,
  boundary: {
    latStart: 40.54667681393454,
    lngStart: -74.24563592537136,
    latEnd: 40.8745391712454,
    lngEnd: -73.72670426372198,
  },
};

export const SOUTH_KOREA_SEOUL: City = {
  slug: "south_korea-seoul",
  country: "South Korea",
  city: "Seoul",
  region: REGION_EAST_ASIA,
  boundary: {
    latStart: 37.411461495836576,
    lngStart: 126.78164407951601,
    latEnd: 37.6876155700223,
    lngEnd: 127.17061851195638,
  },
};

export const JAPAN_TOKYO: City = {
  slug: "japan-tokyo",
  country: "Japan",
  city: "Tokyo",
  region: REGION_EAST_ASIA,
  boundary: {
    latStart: 35.52216882517227,
    lngStart: 139.4753943886995,
    latEnd: 35.83167649546256,
    lngEnd: 139.91519623249354,
  },
};

export const MALAYSIA_KUALA_LUMPUR: City = {
  slug: "malaysia-kuala_lumpur",
  country: "Malaysia",
  city: "Kuala Lumpur",
  region: REGION_SOUTH_EAST_ASIA,
  boundary: {
    latStart: 3.029225521625051,
    lngStart: 101.57264492776164,
    latEnd: 3.2522847314116916,
    lngEnd: 101.81063093782183,
  },
};

export const NEPAL_KATHMANDU: City = {
  slug: "nepal-kathmandu",
  country: "Nepal",
  city: "Kathmandu",
  region: REGION_SOUTH_ASIA,
  boundary: {
    latStart: 27.647187383730724,
    lngStart: 85.24605637850743,
    latEnd: 27.76800341116551,
    lngEnd: 85.39143370802088,
  },
};

export const ITALY_ROME: City = {
  slug: "italy-rome",
  country: "Italy",
  city: "Rome",
  region: REGION_WESTERN_EUROPE,
  boundary: {
    latStart: 41.5938809690432,
    lngStart: 12.053516911437526,
    latEnd: 42.186241162210536,
    lngEnd: 12.9012258134006,
  },
};

export const AUSTRALIA_MELBOURNE: City = {
  slug: "australia-melbourne",
  country: "Australia",
  city: "Melbourne",
  region: REGION_OCEANIAN,
  boundary: {
    latStart: -37.88662402859139,
    lngStart: 144.8600930460484,
    latEnd: -37.759599725114406,
    lngEnd: 145.06871027684593,
  },
};

export const SOUTH_AFRICA_JOHANNESBURG: City = {
  slug: "south_africa-johannesburg",
  country: "South Africa",
  city: "Johannesburg",
  region: REGION_AFRICA,
  boundary: {
    latStart: -26.863921174388345,
    lngStart: 27.234980504189394,
    latEnd: -25.61866281534857,
    lngEnd: 28.79070328280011,
  },
};

export const TURKEY_ISTANBUL: City = {
  slug: "turkey-istanbul",
  country: "Turkey",
  city: "Istanbul",
  region: REGION_CENTRAL_ASIA,
  boundary: {
    latStart: 40.903394793472074,
    lngStart: 28.755207808988303,
    latEnd: 41.19181317353488,
    lngEnd: 29.185512741521393,
  },
};

export const JAPAN_KARUIZAWA: City = {
  slug: "japan-karuizawa",
  country: "Japan",
  city: "Karuizawa",
  region: REGION_EAST_ASIA,
  boundary: {
    latStart: 36.30852732237699,
    lngStart: 138.55645389526575,
    latEnd: 36.384550226825894,
    lngEnd: 138.65891795112032,
  },
};

export const BELGIUM_BRUSSELS: City = {
  slug: "belgium-brussels",
  country: "Belgium",
  city: "Brussels",
  region: REGION_WESTERN_EUROPE,
  boundary: {
    latStart: 50.759490945527716,
    lngStart: 4.219263416483102,
    latEnd: 50.91968049513471,
    lngEnd: 4.5002442643828715,
  },
};

export const AUSTRALIA_SYDNEY: City = {
  slug: "australia-sydney",
  country: "Australia",
  city: "Sydney",
  region: REGION_OCEANIAN,
  boundary: {
    latStart: -33.982142239207725,
    lngStart: 151.05374860268017,
    latEnd: -33.76793128621469,
    lngEnd: 151.34270355731297,
  },
};

export const UZBEKISTAN_TASHKENT: City = {
  slug: "uzbekistan-tashkent",
  country: "Uzbekistan",
  city: "Tashkent",
  region: REGION_CENTRAL_ASIA,
  boundary: {
    latStart: 41.15451243262166,
    lngStart: 69.05687969272182,
    latEnd: 41.44154507131711,
    lngEnd: 69.50476252984421,
  },
};

export const SINGAPORE_SINGAPORE: City = {
  slug: "singapore-singapore",
  country: "Singapore",
  city: "Singapore",
  region: REGION_SOUTH_EAST_ASIA,
  boundary: {
    latStart: 1.1715180023327036,
    lngStart: 103.660650401407,
    latEnd: 1.4705661093483968,
    lngEnd: 103.98100026899175,
  },
};

export const UAE_DUBAI: City = {
  slug: "united-arab-emirates-dubai",
  country: "United Arab Emirates",
  city: "Dubai",
  region: REGION_MIDDLE_EAST,
  boundary: {
    latStart: 24.713733057703138,
    lngStart: 54.750727640180145,
    latEnd: 25.474976269895706,
    lngEnd: 55.67418357569278,
  },
};

export const INDONESIA_JAKARTA: City = {
  slug: "indonesia-jakarta",
  country: "Indonesia",
  city: "Jakarta",
  region: REGION_SOUTH_EAST_ASIA,
  boundary: {
    latStart: -6.39949082602466,
    lngStart: 106.60117286073415,
    latEnd: -5.998266160366967,
    lngEnd: 107.0449982672169,
  },
};

export const SPAIN_BARCELONA: City = {
  slug: "spain-barcelona",
  country: "Spain",
  city: "Barcelona",
  region: REGION_WESTERN_EUROPE,
  boundary: {
    latStart: 41.26111581428441,
    lngStart: 1.9848526109420845,
    latEnd: 41.50240708083459,
    lngEnd: 2.3455995419546127,
  },
};

export const UK_LONDON: City = {
  slug: "united-kingdom-london",
  country: "United Kingdom",
  city: "London",
  region: REGION_WESTERN_EUROPE,
  boundary: {
    latStart: 51.33170321721539,
    lngStart: -0.43164476256447415,
    latEnd: 51.689904379458056,
    lngEnd: 0.21001612629251554,
  },
};

export const SWITZERLAND_ZURICH: City = {
  slug: "switzerland-zurich",
  country: "Switzerland",
  city: "Zurich",
  region: REGION_WESTERN_EUROPE,
  boundary: {
    latStart: 47.3039155001768,
    lngStart: 8.415848876070925,
    latEnd: 47.442958867343805,
    lngEnd: 8.647291739323549,
  },
};

export const AUSTRIA_VIENNA: City = {
  slug: "austria-vienna",
  country: "Austria",
  city: "Vienna",
  region: REGION_EASTERN_EUROPE,
  boundary: {
    latStart: 48.078330653069855,
    lngStart: 16.161994240699045,
    latEnd: 48.319951148652876,
    lngEnd: 16.562865412550735,
  },
};

export const GREECE_ATHENS: City = {
  slug: "greece-athens",
  country: "Greece",
  city: "Athens",
  region: REGION_WESTERN_EUROPE,
  boundary: {
    latStart: 37.83812168821592,
    lngStart: 23.52552238413466,
    latEnd: 38.11123581227761,
    lngEnd: 23.896570810617362,
  },
};

export const SWITZERLAND_GENEVA: City = {
  slug: "switzerland-geneva",
  country: "Switzerland",
  city: "Geneva",
  region: REGION_WESTERN_EUROPE,
  boundary: {
    latStart: 46.11950308350393,
    lngStart: 6.018235698546164,
    latEnd: 46.27849296664036,
    lngEnd: 6.2787206133144196,
  },
};

export const JAPAN_KYOTO: City = {
  slug: "japan-kyoto",
  country: "Japan",
  city: "Kyoto",
  region: REGION_EAST_ASIA,
  boundary: {
    latStart: 34.9466681508908,
    lngStart: 135.68344341472852,
    latEnd: 35.06173596820997,
    lngEnd: 135.8354709400984,
  },
};

export const JAPAN_FUKUOKA: City = {
  slug: "japan-fukuoka",
  country: "Japan",
  city: "Fukuoka",
  region: REGION_EAST_ASIA,
  boundary: {
    latStart: 33.48064471164125,
    lngStart: 130.2353768746321,
    latEnd: 33.70729465157126,
    lngEnd: 130.53933975048704,
  },
};

export const JAPAN_OSAKA: City = {
  slug: "japan-osaka",
  country: "Japan",
  city: "Osaka",
  region: REGION_EAST_ASIA,
  boundary: {
    latStart: 34.522523112575755,
    lngStart: 135.3000130355984,
    latEnd: 34.830969312215544,
    lngEnd: 135.69282121620847,
  },
};

export const INDONESIA_KUTA: City = {
  slug: "indonesia-kuta",
  country: "Indonesia",
  city: "Kuta",
  region: REGION_SOUTH_EAST_ASIA,
  boundary: {
    latStart: -8.800554047785752,
    lngStart: 115.08131783787445,
    latEnd: -8.624222017451032,
    lngEnd: 115.27437334758162,
  },
};

export const JAPAN_NAGOYA: City = {
  slug: "japan-nagoya",
  country: "Japan",
  city: "Nagoya",
  region: REGION_EAST_ASIA,
  boundary: {
    latStart: 35.036135119077954,
    lngStart: 136.70484691614553,
    latEnd: 35.3110311203299,
    lngEnd: 137.09076063286517,
  },
};

export const VIETNAM_DANANG: City = {
  slug: "vietnam-danang",
  country: "Vietnam",
  city: "Danang",
  region: REGION_SOUTH_EAST_ASIA,
  boundary: {
    latStart: 15.928025992264182,
    lngStart: 108.05684205715772,
    latEnd: 16.192817479635806,
    lngEnd: 108.3702380056315,
  },
};

export const GERMANY_BERLIN: City = {
  slug: "germany-berlin",
  country: "Germany",
  city: "Berlin",
  region: REGION_WESTERN_EUROPE,
  boundary: {
    latStart: 52.37964429963128,
    lngStart: 13.14021022965892,
    latEnd: 52.639476618607745,
    lngEnd: 13.61830765298265,
  },
};
export const JAPAN_SAPPORO: City = {
  slug: "japan-sapporo",
  country: "Japan",
  city: "Sapporo",
  region: REGION_EAST_ASIA,
  boundary: {
    latStart: 42.9565480813377,
    lngStart: 141.20156305116666,
    latEnd: 43.14931669676534,
    lngEnd: 141.51465094902812,
  },
};

export const NETHERLANDS_AMSTERDAM: City = {
  slug: "netherlands-amsterdam",
  country: "Netherlands",
  city: "Amsterdam",
  region: REGION_WESTERN_EUROPE,
  boundary: {
    latStart: 52.26942034481499,
    lngStart: 4.7026764000611365,
    latEnd: 52.46661719747118,
    lngEnd: 5.084198952185972,
  },
};

export const JAPAN_NAGASAKI: City = {
  slug: "japan-nagasaki",
  country: "Japan",
  city: "Nagasaki",
  region: REGION_EAST_ASIA,
  boundary: {
    latStart: 32.70695598058404,
    lngStart: 129.80996317021874,
    latEnd: 32.78898319734627,
    lngEnd: 129.92356643205017,
  },
};

export const JAPAN_HIROSHIMA: City = {
  slug: "japan-hiroshima",
  country: "Japan",
  city: "Hiroshima",
  region: REGION_EAST_ASIA,
  boundary: {
    latStart: 34.35383961782037,
    lngStart: 132.40276190502385,
    latEnd: 34.43439669115807,
    lngEnd: 132.5127634803851,
  },
};

export const COLOMBIA_MEDELLIN: City = {
  slug: "colombia-medellin",
  country: "Colombia",
  city: "Medellin",
  region: REGION_SOUTH_AMERICA,
  boundary: {
    latStart: 6.184369934265973,
    lngStart: -75.64689287478086,
    latEnd: 6.296550019047743,
    lngEnd: -75.5071604343739,
  },
};

export const CROATIA_SPLIT: City = {
  slug: "croatia-split",
  country: "Croatia",
  city: "Split",
  region: REGION_EASTERN_EUROPE,
  boundary: {
    latStart: 43.47265482032762,
    lngStart: 16.368765459344672,
    latEnd: 43.57358996230832,
    lngEnd: 16.541129655047342,
  },
};

export const JAPAN_YOKOHAMA: City = {
  slug: "japan-yokohama",
  country: "Japan",
  city: "Yokohama",
  region: REGION_EAST_ASIA,
  boundary: {
    latStart: 35.42053781719126,
    lngStart: 139.5830263132429,
    latEnd: 35.4881943694768,
    lngEnd: 139.68414444529128,
  },
};

export const BRASIL_SAOPAULO: City = {
  slug: "brasil-saopaulo",
  country: "Brasil",
  city: "Sao Paulo",
  region: REGION_SOUTH_AMERICA,
  boundary: {
    latStart: -23.702401788629274,
    lngStart: -46.83229676389368,
    latEnd: -23.41842759589248,
    lngEnd: -46.455130550465725,
  },
};

export const COLOMBIA_BOGOTA: City = {
  slug: "colombia-bogota",
  country: "Colombia",
  city: "Bogota",
  region: REGION_SOUTH_AMERICA,
  boundary: {
    latStart: 4.491579473509589,
    lngStart: -74.28737971934595,
    latEnd: 4.815660616114812,
    lngEnd: -73.89152111340377,
  },
};

export const MYANMAR_YANGON: City = {
  slug: "myanmar-yangon",
  country: "Myanmar",
  city: "Yangon",
  region: REGION_SOUTH_EAST_ASIA,
  boundary: {
    latStart: 16.650567700824183,
    lngStart: 95.94351583790626,
    latEnd: 16.969720297866886,
    lngEnd: 96.34941395994781,
  },
};

export const INDIA_CHENNAI: City = {
  slug: "india-chennai",
  country: "India",
  city: "Chennai",
  region: REGION_SOUTH_ASIA,
  boundary: {
    latStart: 12.909693961269137,
    lngStart: 80.17832444852024,
    latEnd: 13.216871035515144,
    lngEnd: 80.31338415349125,
  },
};

export const USA_BOSTON: City = {
  slug: "usa-boston",
  country: "USA",
  city: "Boston",
  region: REGION_NORTH_AMERICA,
  boundary: {
    latStart: 42.22655775514848,
    lngStart: -71.2187267837304,
    latEnd: 42.44648751169609,
    lngEnd: -70.99791571365607,
  },
};

export const SRI_LANKA_WELIGAMA: City = {
  slug: "sri_lanka-weligama",
  country: "Sri Lanka",
  city: "Weligama",
  region: REGION_SOUTH_ASIA,
  boundary: {
    latStart: 5.9322927725611265,
    lngStart: 80.3968281802675,
    latEnd: 6.004366228082148,
    lngEnd: 80.48655787329744,
  },
};

export const SPAIN_MALAGA: City = {
  slug: "spain-malaga",
  country: "Spain",
  city: "Malaga",
  region: REGION_WESTERN_EUROPE,
  boundary: {
    latStart: 36.67582828023231,
    lngStart: -4.485941603092755,
    latEnd: 36.76039587465412,
    lngEnd: -4.354580544427847,
  },
};

export const SPAIN_SEVILLA: City = {
  slug: "spain-sevilla",
  country: "Spain",
  city: "Sevilla",
  region: REGION_WESTERN_EUROPE,
  boundary: {
    latStart: 37.27310178069075,
    lngStart: -6.175524464055371,
    latEnd: 37.491185160648996,
    lngEnd: -5.839526310661881,
  },
};

export const CHINA_HONGKONG: City = {
  slug: "china-hongkong",
  country: "China",
  city: "Hong Kong",
  region: REGION_EAST_ASIA,
  boundary: {
    latStart: 22.129657442442834,
    lngStart: 113.90436817345102,
    latEnd: 22.490171024739723,
    lngEnd: 114.36109527284088,
  },
};

export const SPAIN_MADRID: City = {
  slug: "spain-madrid",
  country: "Spain",
  city: "Madrid",
  region: REGION_WESTERN_EUROPE,
  boundary: {
    latStart: 40.36611733108495,
    lngStart: -3.7842015346595588,
    latEnd: 40.462676292058006,
    lngEnd: -3.6289419988972895,
  },
};

export const BRASIL_VITORIA: City = {
  slug: "brasil-vitoria",
  country: "Brasil",
  city: "Vitória",
  region: REGION_SOUTH_AMERICA,
  boundary: {
    latStart: -20.370018872601236,
    lngStart: -40.40579489300512,
    latEnd: -20.2609806038531,
    lngEnd: -40.2634520855776,
  },
};

export const SRI_LANKA_COLOMBO: City = {
  slug: "sri_lanka-colombo",
  country: "Sri Lanka",
  city: "Colombo",
  region: REGION_SOUTH_ASIA,
  boundary: {
    latStart: 6.825528716480349,
    lngStart: 79.72284744728415,
    latEnd: 7.033069448987348,
    lngEnd: 79.98528400304434,
  },
};

export const PHILIPPINES_CEBU: City = {
  slug: "philippines-cebu",
  country: "Philippines",
  city: "Cebu",
  region: REGION_SOUTH_EAST_ASIA,
  boundary: {
    latStart: 10.21879756157469,
    lngStart: 123.77787326115833,
    latEnd: 10.404111185983055,
    lngEnd: 124.01431051023746,
  },
};

export const VIETNAM_HOCHIMINH_CITY: City = {
  slug: "vietnam-hochiminh_city",
  country: "Vietnam",
  city: "Ho Chi Minh City",
  region: REGION_SOUTH_EAST_ASIA,
  boundary: {
    latStart: 10.735228816669903,
    lngStart: 106.65182713009756,
    latEnd: 10.809715985375504,
    lngEnd: 106.73981423435873,
  },
};

export const VIETNAM_HANOI: City = {
  slug: "vietnam-hanoi",
  country: "Vietnam",
  city: "Hanoi",
  region: REGION_SOUTH_EAST_ASIA,
  boundary: {
    latStart: 20.972975775265084,
    lngStart: 105.78128756044754,
    latEnd: 21.081693494947075,
    lngEnd: 105.92053786169839,
  },
};

export const CAMBODIA_SIEM_REAP: City = {
  slug: "cambodia-siem_reap",
  country: "Cambodia",
  city: "Siem Reap",
  region: REGION_SOUTH_EAST_ASIA,
  boundary: {
    latStart: 13.23429830621906,
    lngStart: 103.72567077344576,
    latEnd: 13.458191478852683,
    lngEnd: 103.99426942969012,
  },
};

export const CAMBODIA_PHNOM_PENH: City = {
  slug: "cambodia-phnom_penh",
  country: "Cambodia",
  city: "Phnom Penh",
  region: REGION_SOUTH_EAST_ASIA,
  boundary: {
    latStart: 11.457092572386372,
    lngStart: 104.79013371523155,
    latEnd: 11.671741165813529,
    lngEnd: 105.04719998292978,
  },
};

export const TAIWAN_TAIPEI: City = {
  slug: "taiwan-taipei",
  country: "Taiwan",
  city: "Taipei",
  region: REGION_EAST_ASIA,
  boundary: {
    latStart: 24.959802516433513,
    lngStart: 121.42217315360102,
    latEnd: 25.12558164813386,
    lngEnd: 121.64543538406173,
  },
};

export const CANADA_MONTREAL: City = {
  slug: "canada-montreal",
  country: "Canada",
  city: "Montreal",
  region: REGION_NORTH_AMERICA,
  boundary: {
    latStart: 45.418520923247826,
    lngStart: -73.70690704769046,
    latEnd: 45.58081441932012,
    lngEnd: -73.4409274439477,
  },
};

export const CITIES: City[] = [
  /**
   * Eeast Asia
   */
  SOUTH_KOREA_SEOUL,
  JAPAN_TOKYO,
  JAPAN_KARUIZAWA,
  JAPAN_KYOTO,
  JAPAN_OSAKA,
  JAPAN_FUKUOKA,
  JAPAN_NAGOYA,
  JAPAN_SAPPORO,
  JAPAN_NAGASAKI,
  JAPAN_HIROSHIMA,
  JAPAN_YOKOHAMA,
  CHINA_HONGKONG,
  TAIWAN_TAIPEI,
  /**
   * South East Asia
   */
  THAILAND_BANGKOK,
  THAILAND_CHIANGMAI,
  INDONESIA_CANGGU,
  INDONESIA_JAKARTA,
  INDONESIA_KUTA,
  MALAYSIA_KUALA_LUMPUR,
  SINGAPORE_SINGAPORE,
  VIETNAM_DANANG,
  VIETNAM_HOCHIMINH_CITY,
  VIETNAM_HANOI,
  MYANMAR_YANGON,
  PHILIPPINES_CEBU,
  CAMBODIA_SIEM_REAP,
  CAMBODIA_PHNOM_PENH,
  /**
   * South Asia
   */
  NEPAL_KATHMANDU,
  INDIA_CHENNAI,
  SRI_LANKA_WELIGAMA,
  SRI_LANKA_COLOMBO,
  /**
   * North America
   */
  CANADA_VANCUBER,
  USA_NEW_YORK,
  USA_BOSTON,
  CANADA_MONTREAL,
  /**
   * South America
   */
  PERU_LIMA,
  COLOMBIA_MEDELLIN,
  BRASIL_SAOPAULO,
  BRASIL_VITORIA,
  COLOMBIA_BOGOTA,
  /**
   * Central Asia
   */
  UZBEKISTAN_TASHKENT,
  /**
   * East Europe
   */
  TURKEY_ISTANBUL,
  AUSTRIA_VIENNA,
  /**
   * West Europe
   */
  BELGIUM_BRUSSELS,
  UK_LONDON,
  SPAIN_MADRID,
  SPAIN_BARCELONA,
  SPAIN_MALAGA,
  SPAIN_SEVILLA,
  ITALY_ROME,
  SWITZERLAND_ZURICH,
  SWITZERLAND_GENEVA,
  GREECE_ATHENS,
  GERMANY_BERLIN,
  NETHERLANDS_AMSTERDAM,
  /**
   * Oceanian
   */
  AUSTRALIA_SYDNEY,
  AUSTRALIA_MELBOURNE,
  /**
   * Africa
   */
  SOUTH_AFRICA_JOHANNESBURG,
  /**
   * Middle East
   */
  UAE_DUBAI,
];

export const CITY_LINKS = CITIES.map((city) => {
  return {
    url: `${APP_URL}/${city.slug}`,
    text: `${city.city}, ${city.country}`,
  };
});
