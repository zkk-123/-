// 森林覆盖率变化趋势



const forestCtx = document.getElementById('forestCoverageChart').getContext('2d');



new Chart(forestCtx, {



    type: 'line',



    data: {



        labels: ['2018', '2019', '2020', '2021', '2022', '2023'],



        datasets: [{



            label: '森林覆盖率(%)',



            data: [58.5, 59.2, 60.1, 61.0, 61.5, 62.12],



            borderColor: '#2c8850',



            tension: 0.3



        }]



    },



    options: {



        responsive: true,



        plugins: {



            title: {



                display: true,



                text: '年度森林覆盖率变化'



            }



        }



    }



});







// 水资源质量分布



const waterCtx = document.getElementById('waterQualityChart').getContext('2d');



new Chart(waterCtx, {



    type: 'doughnut',



    data: {



        labels: ['Ⅰ类', 'Ⅱ类', 'Ⅲ类', 'Ⅳ类', 'Ⅴ类'],



        datasets: [{



            data: [30, 35, 20, 10, 5],



            backgroundColor: [



                '#2c8850',



                '#4CAF50',



                '#8BC34A',



                '#CDDC39',



                '#FFEB3B'



            ]



        }]



    },



    options: {



        responsive: true



    }



});







// 污染物排放趋势



const pollutionCtx = document.getElementById('pollutionChart').getContext('2d');



new Chart(pollutionCtx, {



    type: 'bar',



    data: {



        labels: ['2019', '2020', '2021', '2022', '2023'],



        datasets: [{



            label: '二氧化硫排放量',



            data: [100, 85, 70, 55, 40],



            backgroundColor: '#2c8850'



        }, {



            label: '氮氧化物排放量',



            data: [90, 80, 65, 50, 35],



            backgroundColor: '#4CAF50'



        }]



    },



    options: {



        responsive: true,



        scales: {



            y: {



                beginAtZero: true



            }



        }



    }



});







// 贵州地图初始化



const mapChart = echarts.init(document.getElementById('guizhouMap'));







// 贵州省各地区森林覆盖率数据（示例数据）



const forestData = [



    { name: '贵阳市', value: 65.2 },



    { name: '遵义市', value: 62.8 },



    { name: '六盘水市', value: 58.5 },



    { name: '安顺市', value: 63.4 },



    { name: '毕节市', value: 61.7 },



    { name: '铜仁市', value: 64.3 },



    { name: '黔西南州', value: 66.8 },



    { name: '黔东南州', value: 67.5 },



    { name: '黔南州', value: 65.9 }



];







// 注册贵州地图



fetch('https://geo.datav.aliyun.com/areas_v3/bound/520000_full.json')



    .then(response => response.json())



    .then(geoJson => {



        echarts.registerMap('guizhou', geoJson);



        



        const option = {



            title: {



                text: '贵州省森林覆盖率分布',



                left: 'center',



                textStyle: {



                    color: '#333',



                    fontSize: 16



                }



            },



            tooltip: {



                trigger: 'item',



                formatter: '{b}<br/>森林覆盖率: {c}%'



            },



            visualMap: {



                min: 55,



                max: 70,



                left: 'left',



                top: 'bottom',



                text: ['高', '低'],



                inRange: {



                    color: ['#e0f3db', '#31a354']



                },



                calculable: true



            },



            series: [{



                name: '森林覆盖率',



                type: 'map',



                map: 'guizhou',



                roam: true,



                emphasis: {



                    label: {



                        show: true



                    }



                },



                data: forestData



            }]



        };







        mapChart.setOption(option);



    });







// 添加窗口大小改变时的自适应



window.addEventListener('resize', () => {



    mapChart.resize();



});







// 修改重点产业发展态势图表

const industryCtx = document.getElementById('industryChart').getContext('2d');

new Chart(industryCtx, {

    type: 'radar',

    data: {

        labels: [

            '生态农业',

            '清洁能源',

            '环保产业',

            '生态旅游',

            '循环经济',

            '低碳制造'

        ],

        datasets: [{

            label: '2023年发展指数',

            data: [92, 88, 85, 95, 83, 87],

            fill: true,

            backgroundColor: 'rgba(44, 136, 80, 0.2)',

            borderColor: 'rgba(44, 136, 80, 1)',

            pointBackgroundColor: 'rgba(44, 136, 80, 1)',

            pointBorderColor: '#fff',

            pointHoverBackgroundColor: '#fff',

            pointHoverBorderColor: 'rgba(44, 136, 80, 1)'

        }]

    },

    options: {

        responsive: true,

        scales: {

            r: {

                angleLines: {

                    display: true

                },

                suggestedMin: 50,

                suggestedMax: 100,

                ticks: {

                    stepSize: 10

                }

            }

        },

        plugins: {

            title: {

                display: true,

                text: '贵州省生态产业发展水平评估'

            },

            legend: {

                display: true,

                position: 'bottom'

            },

            tooltip: {

                callbacks: {

                    label: function(context) {

                        return `发展指数: ${context.raw}`;

                    }

                }

            }

        }

    }

});














