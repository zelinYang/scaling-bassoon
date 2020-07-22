let data = {
    pieData1: {

        legend: {
            type: 'plain',
            orient:
                'horizontal',
            bottom:
                0,
            left:
                0,
            itemGap:
                7,
            data:
                ['河岸有垃圾', '水面异常   ', '非法采砂','非法电毒鱼', '公示牌损坏', '侵占河道', '排污口异常', '水电站生态', '其他']
        }
        ,
        series: {
            type: 'pie',
            radius:
                '40%',

            center:
                ['50%', '50%'],
            data:
                [
                    {name: '其他', value: 0},
                    {name: '水电站生态', value: 0},
                    {name: '排污口异常', value: 0},
                    {name: '非法电毒鱼', value: 0},
                    {name: '公示牌损坏', value: 0},
                    {name: '侵占河道  ', value: 0},
                    {name: '非法采砂', value: 1},
                    {name: '水面异常   ', value: 49},
                    {name: '河岸有垃圾', value: 50}
                ]
        }
    },
    cateData: {
        grid: {
           width: '80%',
            x: '50'
        },
        title: {
            text: '柳州市全面清障整体完工情况',

        }
        ,
        tooltip: {
            trigger: 'item',
            formatter:
                '{c}%'
        }
        ,
        x: 0,
        y: 0,
        xAxis:
            {
                type: 'category',
                data:
                    ['处数进度', '面积进度']
            }
        ,
        yAxis: {
            type: 'value',
            axisLine:
                {
                    onZero: false
                }
            ,
            axisLabel: {
                formatter: '{value} %'
            }
            ,
        }
        ,
        series: [{
            data: [123.56, 106.60],
            type: 'bar',
            itemStyle: {
                normal: {
                    color: function (params) {
                        // build a color map as your need.
                        var colorList = [
                            '#94d0de', '#3dc7e6', '#FCCE10', '#E87C25', '#27727B',
                            '#FE8463', '#9BCA63', '#FAD860', '#F3A43B', '#60C0DD',
                            '#D7504B', '#C6E579', '#F4E001', '#F0805A', '#26C0C0'
                        ];
                        return colorList[params.dataIndex]
                    },
                    label: {
                        show: true,
                        position: 'top',
                        formatter: '{c}%'　　　　//这是关键，在需要的地方加上就行了
                    }
                }
            },
        }],

    },


    cateData2: {
        title: {
            text: '柳州市各类型清障统计',

        },
        grid: {
            width: '80%',
            x: '50'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{c}%'
        },
        legend: {
            type: 'plain',
            orient: 'horizontal',
            bottom: 0,
            right: 0,
            data: ['违章建筑', '餐饮、娱乐等场所', '弃土废渣等', '洗沙治沙等']
        },
        x: 0,
        y: 0,
        xAxis: {
            type: 'category',
            // data: ['违章建筑', '餐饮、娱乐等场所','弃土废渣等','洗沙治沙等']
        },
        yAxis: {
            type: 'value',
            axisLine: {onZero: false},
            axisLabel: {
                formatter: '{value} %'
            },
        },
        series: [{
            name: '违章建筑',
            data: [123.56],
            type: 'bar',
            itemStyle: {
                normal: {
                    color: function (params) {
                        // build a color map as your need.
                        var colorList = [
                            '#3dc7e6', '#3dc7e6', '#FCCE10', '#E87C25', '#27727B',
                            '#FE8463', '#9BCA63', '#FAD860', '#F3A43B', '#60C0DD',
                            '#D7504B', '#C6E579', '#F4E001', '#F0805A', '#26C0C0'
                        ];
                        return colorList[params.dataIndex]
                    },
                    label: {
                        show: true,
                        position: 'top',
                        formatter: '{c}%'　　　　//这是关键，在需要的地方加上就行了
                    }
                }
            },
        }, {
            name: '餐饮、娱乐等场所',
            data: [106.60],
            type: 'bar',
            itemStyle: {
                normal: {
                    color: function (params) {
                        // build a color map as your need.
                        var colorList = [
                            '#FCCE10', '#3dc7e6', '#FCCE10', '#E87C25', '#27727B',
                            '#FE8463', '#9BCA63', '#FAD860', '#F3A43B', '#60C0DD',
                            '#D7504B', '#C6E579', '#F4E001', '#F0805A', '#26C0C0'
                        ];
                        return colorList[params.dataIndex]
                    },
                    label: {
                        show: true,
                        position: 'top',
                        formatter: '{c}%'　　　　//这是关键，在需要的地方加上就行了
                    }
                }
            },
        }, {
            name: '弃土废渣等',
            data: [213.54],
            type: 'bar',
            itemStyle: {
                normal: {
                    color: function (params) {
                        // build a color map as your need.
                        var colorList = [
                            '#E87C25', '#3dc7e6', '#FCCE10', '#E87C25', '#27727B',
                            '#FE8463', '#9BCA63', '#FAD860', '#F3A43B', '#60C0DD',
                            '#D7504B', '#C6E579', '#F4E001', '#F0805A', '#26C0C0'
                        ];
                        return colorList[params.dataIndex]
                    },
                    label: {
                        show: true,
                        position: 'top',
                        formatter: '{c}%'　　　　//这是关键，在需要的地方加上就行了
                    }
                }
            },
        },
            {
                name: '洗沙治沙等',
                data: [248.13],
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: function (params) {
                            // build a color map as your need.
                            var colorList = [
                                '#27727B', '#3dc7e6', '#FCCE10', '#E87C25', '#27727B',
                                '#FE8463', '#9BCA63', '#FAD860', '#F3A43B', '#60C0DD',
                                '#D7504B', '#C6E579', '#F4E001', '#F0805A', '#26C0C0'
                            ];
                            return colorList[params.dataIndex]
                        },
                        label: {
                            show: true,
                            position: 'top',
                            formatter: '{c}%'　　　　//这是关键，在需要的地方加上就行了
                        }
                    }
                },
            },
        ],

    },

    pieData2: {
        title: {
            text: '黑臭水体整治总体情况',
            left: 'left'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'horizontal',
            x: 'left',
            bottom: 10,
            data: ['前期整治：0条', '实施整治：2条', '完工整治：4条']
        },
        series: [
            {
                name: '柳州市河流',
                type: 'pie',
                radius: ['40%', '60%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        formatter: '柳州市河流\n6条',
                        show: true,
                        position: 'center'
                    },
                    emphasis: {
                        show: false,
                        textStyle: {
                            fontSize: '15',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    {value: 4, name: '完工整治：4条'},
                    {value: 2, name: '实施整治：2条'},
                    {value: 0, name: '前期整治：0条'},
                ]
            }
        ]
    },

    pieData3: {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'horizontal',
            x: 'left',
            bottom: 10,
            data: [ '水面异常','非法电毒鱼',  '侵占河道', '公示牌损坏', '非法采砂', '排污口异常', '水电站生态流量不足']
        },
        series: [
            {
                name: '柳州市河流',
                type: 'pie',
                radius: ['40%', '60%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        formatter: '柳州市河流\n6条',
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: false,
                        textStyle: {
                            fontSize: '15',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    {name: '水电站生态流量不足', value: 12.5},
                    {name: '排污口异常', value: 12.5},
                    {name: '非法电毒鱼', value: 12.5},
                    {name: '公示牌损坏', value: 12.5},
                    {name: '侵占河道', value: 12.5},
                    {name: '非法采砂', value: 12.5},
                    {name: '水面异常', value: 12.5},
                    {name: '河岸有垃圾', value: 12.5}
                ]
            }
        ]
    },

    lineData: {
        title: {
            text: '柳州市黑臭水体整治情况',
            show: true
        },
        tooltip: {
            trigger: 'item',
            formatter:'柳州市'
        },
        axisTick: {
            show: false
        },
        xAxis: {
            show: false
        },
        yAxis: {
        },
        series: [{
            symbolSize: 20,
            data: [
                [8,0],
            ],
            type: 'scatter',
            itemStyle: {
                formatter: '柳州市',
                position: 'top',
                show: true,
            }
        }],
    }
};


export default data
