import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';
import axios from 'axios';

const MapEChart = () => {
  const [option, setOption] = useState(null);

  useEffect(() => {
    const fetchGeoJson = async () => {
      const response = await axios.get('https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json');
      const geoJson = response.data;
      echarts.registerMap('China', geoJson);

      setOption({
        title: {
          text: 'Average population density in China (2022)',
          subtext: 'Data from Wikipedia',
          sublink: 'https://www.statista.com/statistics/1183370/china-population-density-by-region-province/'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b}<br/>{c} (p / km2)'
        },
        toolbox: {
          show: true,
          orient: 'vertical',
          left: 'right',
          top: 'center',
          feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {}
          }
        },
        visualMap: {
          min: 0,
          max: 4000,
          text: ['High', 'Low'],
          realtime: false,
          calculable: true,
          inRange: {
            color: ['lightskyblue', 'yellow', 'orangered']
          }
        },
        series: [
          {
            name: 'Average population density in China (2022)',
            type: 'map',
            map: 'China',
            label: {
              show: true
            },
            data: [
              { name: 'Shanghai', value: 3903.5 },
              { name: 'Beijing', value: 1330.8 },
              { name: 'Tianjin', value: 1143.7 },
              { name: 'Jiangsu', value: 794.6 },
              { name: 'Guangdong', value: 704.3 },
              { name: 'Shandong', value: 646.9 },
              { name: 'Zhejiang', value: 623.4 },
              { name: 'Henan', value: 591.1 },
              { name: 'Anhui', value: 438.9 },
              { name: 'Hebei', value: 393 },
              { name: 'Chongqing', value: 389.9 },
              { name: 'Fujian', value: 338 },
              { name: 'Hubei', value: 314.4 },
              { name: 'Hunan', value: 311.8 },
              { name: 'Hainan', value: 290.5 },
              { name: 'Liaoning', value: 282.8 },
              { name: 'Jiangxi', value: 271.3 },
              { name: 'Shanxi', value: 222.1 },
              { name: 'Guizhou', value: 218.8 },
              { name: 'Guangxi', value: 212.4 },
              { name: 'Shaanxi', value: 192.2 },
              { name: 'Sichuan', value: 172.3 },
              { name: 'Jilin', value: 125.3 },
              { name: 'Yunnan', value: 119.1 },
              { name: 'Ningxia', value: 109.6 },
              { name: 'Heilongjiang', value: 65.6 },
              { name: 'Gansu', value: 58.5 },
              { name: 'Inner Mongolia', value: 20.3 },
              { name: 'Xinjiang', value: 15.5 },
              { name: 'Qinghai', value: 8.2 },
              { name: 'Tibet', value: 3 },
            ],
            // Custom name mapping
            nameMap: {
              '上海市': 'Shanghai',
              '北京市': 'Beijing',
              '天津市': 'Tianjin',
              '江苏省': 'Jiangsu',
              '广东省': 'Guangdong',
              '山东省': 'Shandong',
              '浙江省': 'Zhejiang',
              '河南省': 'Henan',
              '安徽省': 'Anhui',
              '河北省': 'Hebei',
              '重庆市': 'Chongqing',
              '福建省': 'Fujian',
              '湖北省': 'Hubei',
              '湖南省': 'Hunan',
              '海南省': 'Hainan',
              '辽宁省': 'Liaoning',
              '江西省': 'Jiangxi',
              '山西省': 'Shanxi',
              '贵州省': 'Guizhou',
              '广西壮族自治区': 'Guangxi',
              '陕西省': 'Shaanxi',
              '四川省': 'Sichuan',
              '吉林省': 'Jilin',
              '云南省': 'Yunnan',
              '宁夏回族自治区': 'Ningxia',
              '黑龙江省': 'Heilongjiang',
              '甘肃省': 'Gansu',
              '内蒙古自治区': 'Inner Mongolia',
              '新疆维吾尔自治区': 'Xinjiang',
              '青海省': 'Qinghai',
              '西藏自治区': 'Tibet',
              '澳门特别行政区': 'Macau',
              '香港特别行政区': 'Hong Kong',
              '台湾省': 'Taiwan',
            }
          }
        ]
      });
    };

    fetchGeoJson();
  }, []);

  return option ? <ReactECharts option={option} style={{ height: '800px', width: '100%' }} /> : <div>Loading...</div>;
};

export default MapEChart;
